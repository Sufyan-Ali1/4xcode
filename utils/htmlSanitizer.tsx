

/** Converts "rgb(0,0,0)" or "rgba(0,0,0,1)" → { r, g, b, a } */
function parseRgb(value: string): { r: number; g: number; b: number; a: number } | null {
  const m = value.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);
  if (!m) return null;
  return { r: +m[1], g: +m[2], b: +m[3], a: m[4] !== undefined ? +m[4] : 1 };
}

/** Converts "#rgb", "#rrggbb", "#rrggbbaa" → { r, g, b, a } */
function parseHex(value: string): { r: number; g: number; b: number; a: number } | null {
  const hex = value.replace("#", "").trim();
  if (hex.length === 3) {
    return {
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
      a: 1,
    };
  }
  if (hex.length === 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
      a: 1,
    };
  }
  if (hex.length === 8) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
      a: parseInt(hex.slice(6, 8), 16) / 255,
    };
  }
  return null;
}

/** Returns perceived luminance (0 = black, 1 = white) */
function luminance(r: number, g: number, b: number): number {
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/** Parses any CSS color string into RGBA. Returns null if unrecognised. */
function parseCssColor(raw: string): { r: number; g: number; b: number; a: number } | null {
  const v = raw.trim().toLowerCase();
  if (v === "black" || v === "#000" || v === "#000000") return { r: 0, g: 0, b: 0, a: 1 };
  if (v === "white" || v === "#fff" || v === "#ffffff") return { r: 255, g: 255, b: 255, a: 1 };
  if (v === "transparent") return { r: 0, g: 0, b: 0, a: 0 };
  if (v.startsWith("rgb")) return parseRgb(v);
  if (v.startsWith("#")) return parseHex(v);
  return null;
}

// ---------------------------------------------------------------------------
// 2. Style property processors
// ---------------------------------------------------------------------------

/**
 * Returns true if this CSS color value would make text invisible
 * on a dark (#000 / very dark) background.
 * "Invisible" = very dark color (luminance < 0.06) or fully transparent.
 */
function isProblematicTextColor(value: string): boolean {
  const parsed = parseCssColor(value);
  if (!parsed) return false; // unknown format — leave alone
  if (parsed.a < 0.15) return true; // nearly transparent
  return luminance(parsed.r, parsed.g, parsed.b) < 0.06; // very dark
}

/**
 * Returns true if this background color would obscure text on a dark theme.
 * Removes: white/light backgrounds and near-opaque dark backgrounds that
 * create a "black box" effect hiding content.
 */
function isProblematicBackground(value: string): boolean {
  const parsed = parseCssColor(value);
  if (!parsed) return false;
  if (parsed.a < 0.08) return false; // nearly transparent bg is fine
  const lum = luminance(parsed.r, parsed.g, parsed.b);
  // Remove light backgrounds (would show dark text on our dark page)
  // and very dark near-black backgrounds (redundant / sometimes mis-set)
  return lum > 0.5 || (lum < 0.04 && parsed.a > 0.9);
}

// ---------------------------------------------------------------------------
// 3. Core inline-style cleaner
// ---------------------------------------------------------------------------

/**
 * Dangerous properties injected by WYSIWYG editors that can hide content.
 * Any property listed here is stripped unconditionally.
 */
const ALWAYS_STRIP: ReadonlySet<string> = new Set([
  "background",
  "background-color",
  "background-image", // gradient overlays can hide text
  "opacity",          // opacity:0 hides content but keeps it in DOM
  "visibility",       // visibility:hidden same issue
  "display",          // display:none — editors sometimes do this
  "mix-blend-mode",   // can cause content to disappear on certain backgrounds
  "-webkit-text-fill-color", // overrides `color` in WebKit
  "text-shadow",      // not hiding but clutters dark themes
  "font-family",      // editors inject proprietary fonts that may not load
]);

/**
 * Properties that are conditionally stripped only when the value is
 * problematic for dark themes.
 */
const CONDITIONAL_STRIP: ReadonlyMap<string, (v: string) => boolean> = new Map([
  ["color", isProblematicTextColor],
  ["border-color", isProblematicTextColor],
  ["outline-color", isProblematicTextColor],
]);

/**
 * Parses a CSS inline style string into property→value pairs.
 * Handles edge cases: quoted values, semicolons in values, !important.
 */
function parseStyleProps(style: string): Array<{ prop: string; value: string; important: boolean }> {
  const result: Array<{ prop: string; value: string; important: boolean }> = [];
  // Split on semicolons that aren't inside parentheses (for rgb/rgba values)
  const declarations = style.split(/;(?![^(]*\))/);
  for (const decl of declarations) {
    const trimmed = decl.trim();
    if (!trimmed) continue;
    const colonIdx = trimmed.indexOf(":");
    if (colonIdx === -1) continue;
    const prop = trimmed.slice(0, colonIdx).trim().toLowerCase();
    let value = trimmed.slice(colonIdx + 1).trim();
    let important = false;
    if (value.toLowerCase().endsWith("!important")) {
      important = true;
      value = value.slice(0, -"!important".length).trim();
    }
    result.push({ prop, value, important });
  }
  return result;
}

/**
 * Rebuilds a safe inline style string from parsed declarations,
 * stripping dangerous properties.
 */
function buildSafeStyle(declarations: Array<{ prop: string; value: string; important: boolean }>): string {
  return declarations
    .filter(({ prop, value }) => {
      if (ALWAYS_STRIP.has(prop)) return false;
      const condCheck = CONDITIONAL_STRIP.get(prop);
      if (condCheck && condCheck(value)) return false;
      return true;
    })
    .map(({ prop, value, important }) =>
      important ? `${prop}: ${value} !important` : `${prop}: ${value}`
    )
    .join("; ");
}

/**
 * Processes a single style="..." attribute value.
 * Returns the cleaned value, or empty string if nothing remains.
 */
export function cleanInlineStyle(styleValue: string): string {
  const declarations = parseStyleProps(styleValue);
  return buildSafeStyle(declarations);
}

// ---------------------------------------------------------------------------
// 4. Full HTML cleaner — regex-based, no DOM required
// ---------------------------------------------------------------------------

/**
 * Matches any HTML tag that has a style attribute.
 * Captures: [1] everything before style attr, [2] style value, [3] rest of tag.
 *
 * We use a non-greedy match on the style value and handle both ' and " quotes.
 */
const STYLE_ATTR_RE = /(<[a-z][a-z0-9]*\b[^>]*?)\s+style\s*=\s*(?:"([^"]*)"|'([^']*)')([^>]*>)/gi;

/**
 * Strips / cleans dangerous inline styles from raw HTML.
 * Preserves all structure, content, and safe styles.
 */
export function stripDangerousInlineStyles(html: string): string {
  return html.replace(STYLE_ATTR_RE, (_, before, dq, sq, after) => {
    const rawStyle = dq ?? sq ?? "";
    const cleaned = cleanInlineStyle(rawStyle);
    // If nothing safe remains, omit the attribute entirely
    return cleaned ? `${before} style="${cleaned}"${after}` : `${before}${after}`;
  });
}

// ---------------------------------------------------------------------------
// 5. Editor-specific class cleaners
// ---------------------------------------------------------------------------

/**
 * CKEditor 5 sometimes wraps content in .ck-content with its own color vars.
 * These class names can inherit conflicting colors. Strip known editor classes.
 */
const EDITOR_CLASS_RE = /\b(ck-content|ck-editor|ProseMirror|tox-tinymce|mce-content-body|fr-view)\b/g;

export function removeEditorClasses(html: string): string {
  return html.replace(/(<[a-z][a-z0-9]*\b[^>]*?)\s+class\s*=\s*"([^"]*)"/gi, (match, tagStart, classList) => {
    const cleaned = classList.replace(EDITOR_CLASS_RE, "").replace(/\s+/g, " ").trim();
    return cleaned ? `${tagStart} class="${cleaned}"` : tagStart;
  });
}

// ---------------------------------------------------------------------------
// 6. Image alt injection (moved here for single pipeline)
// ---------------------------------------------------------------------------

export function addMissingImageAlt(html: string): string {
  return html.replace(/<img\b(?![^>]*\balt=)([^>]*)>/gi, '<img alt=""$1>');
}

// ---------------------------------------------------------------------------
// 7. Alignment wrapper (fixed version)
// ---------------------------------------------------------------------------

/**
 * Fixed version of injectAlignmentStyles.
 * Original bug: [\s\S]*? could match across paragraph boundaries,
 * producing broken markup. This version only matches content that
 * does NOT contain another block-level opening tag.
 */
export function injectAlignmentStyles(html: string): string {
  // Only match paragraphs where the ENTIRE content after the image is inline
  // (no nested block elements). [^<]* ensures we don't cross tag boundaries.
  return html.replace(
    /<p>\s*(<img[^>]*?class="[^"]*?image-style-align-(left|right|side)[^"]*?"[^>]*?>)((?:(?!<(?:p|div|h[1-6]|ul|ol|table|blockquote))[^])*?)<\/p>/gi,
    (_match, imgTag, _direction, text) => {
      const trimmedText = text.trim();
      if (!trimmedText) return `<p>${imgTag}</p>`;
      return `<div class="flex flex-col md:flex-row gap-6 my-8 items-start">${imgTag}<div class="flex-1 min-w-0 leading-7">${trimmedText}</div></div>`;
    }
  );
}

// ---------------------------------------------------------------------------
// 8. Master pipeline — call this instead of individual functions
// ---------------------------------------------------------------------------

/**
 * Full content cleaning pipeline.
 *
 * Order matters:
 * 1. Strip dangerous inline styles first (before structural transforms)
 * 2. Remove editor wrapper classes
 * 3. Inject alignment wrappers (structural)
 * 4. Add missing alt attributes (accessibility)
 */
export function cleanBlogContent(rawHtml: string): string {
  let html = rawHtml;
  html = stripDangerousInlineStyles(html);
  html = removeEditorClasses(html);
  html = injectAlignmentStyles(html);
  html = addMissingImageAlt(html);
  return html;
}
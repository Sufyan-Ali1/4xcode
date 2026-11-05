# Content, metadata and schema audit

Checked locally on 5 November 2026. This is a workspace audit, not a verification of the deployed website.

## Verified updates

The homepage, Work page, services listing, Garage Management product page and all 12 service-detail pages render successfully. Their page titles, descriptions, canonical URLs and page-level schema titles/descriptions match their configured data. Each emits one JSON-LD document. FAQ schema questions and answers match the corresponding content files.

The five recently supplied page copies were checked against rendered content. Latest changes are present: the services-listing AI Automation description/features/tags; separate SEO and Digital Marketing services; API-driven project cards; GBP pricing; and removal of the image below Smarter Vehicle Inspections.

Validation: 23 rendered routes, including one API case-study detail and one API blog detail; 96 metadata/schema assertions and 461 body-copy checks. Production build, TypeScript and targeted lint checks passed.

| Page or group | Content | Metadata | Schema |
| --- | --- | --- | --- |
| Homepage `/` | Updated; intentional restored extras remain | Exact supplied metadata | Connected; FAQ matches |
| Work `/work` | Updated; cards remain API-driven | Exact supplied metadata | Connected; project list now uses the same API results as the cards |
| Services `/service` | Updated; 12 separate services | Exact supplied metadata | Connected; catalogue matches visible card names, descriptions and order |
| Garage `/product/garage-management-system` | Updated; exceptions preserved; inspection image removed | Exact supplied metadata | Connected; FAQ and GBP offers synchronised |
| AI Automation `/service/ai-automation` | All 14 supplied sections | Exact supplied metadata | Connected; FAQ matches |
| Other 11 service-detail pages | Existing configured copy renders | Dedicated metadata and canonical URLs | Connected; FAQ matches |
| About `/about` | Existing copy; no new replacement copy supplied | Browser-only update; initial HTML inherits homepage metadata/canonical | No schema integrated |
| Contact `/contact` | Existing copy; no new replacement copy supplied | Browser-only update; initial HTML inherits homepage metadata/canonical | No schema integrated |
| Blog `/blog` | API-driven | Dedicated metadata/canonical | No schema integrated |
| Blog details `/blog/[slug]` | API-driven; one sample checked | Uses API metadata, with fallbacks | No schema integration; sampled page emits none |
| Case-study details `/work/[slug]` | API-driven; one sample checked | Same generic title/description for all case studies; per-page canonical | No schema integration; sampled page emits none |
| Auto Recovery `/product/auto-recovery-system` | Existing copy; no replacement copy supplied | Inherits homepage metadata/canonical | No schema integrated |
| Thank You `/thank-you` | Existing copy | Inherits homepage metadata/canonical | No schema integrated |

## Corrections made during this audit

- Updated the garage pricing FAQ schema to mirror the currently requested visible wording exactly.
- Replaced outdated Starter/Professional schema offers with Essential (£99/month), Advanced (£175/month) and Enterprise (£250/month).
- Synchronised the main services schema catalogue with its 12 visible cards, including the latest AI Automation copy.
- Aligned the duplicate custom-software metadata data fields with its actual page metadata.
- Made the Work ItemList schema use the same API project titles, descriptions, URLs and count as the project cards.
- Added missing homepage and Garage Management product URLs to the sitemap and its generation configuration.

## Items still needing final content or a separate update

1. Homepage testimonial still contains `[X]` and `[domain]`, retained from the supplied copy.
2. AI Automation has eight unverified statistics containing `[XX+]` or `[XX%]`. No figures were invented.
3. Garage pricing FAQ still says Enterprise has custom pricing, whereas its card shows £250/month. The FAQ wording was retained because the latest instruction explicitly requested changing plan names only.
4. About and Contact need server-rendered metadata instead of browser-only DOM updates. Auto Recovery and Thank You need their own metadata/canonical handling.
5. About, Contact, Blog, Auto Recovery and API detail templates have no integrated schema. Thank You also has none; indexing metadata for that utility page has not been configured separately.
6. Individual case studies use generic metadata rather than their own API metadata.

No new replacement copy or schema was invented for pages outside the supplied content updates. Homepage extras previously restored at the user's request remain. Garage Problem, Why Us, Workflow and Videos components remain unchanged; pricing retains the subsequently supplied pricing-card update.

import aiAutomation from "./ai_automation.json";

import uiUxDesign from "./ui_ux.json";
import webDevelopment from "./web_development.json";
import aiDevelopment from "./ai_development.json";
import seo from "./seo.json";
import saas from "./saas.json";
import appDevelopment from "./app_development.json";
import customSoftware from "./custom_software.json";
import ecommerce from "./ecommerce.json";
import digitalMarketing from "./digital_marketing.json";
import cloud from "./cloud.json";
import apiIntegration from "./api_integration.json";

export const serviceSchemas: Record<string, unknown> = {
  "ai-automation": aiAutomation,
  "ui-ux-design": uiUxDesign,
  "web-development": webDevelopment,
  "ai-development": aiDevelopment,
  "search-engine-optimization-seo": seo,
  "saas-engineering": saas,
  "mobile-apps": appDevelopment,
  "custom-software": customSoftware,
  "ecommerce-solutions": ecommerce,
  "digital-marketing-services": digitalMarketing,
  "cloud-systems": cloud,
  "api-integration": apiIntegration,
};

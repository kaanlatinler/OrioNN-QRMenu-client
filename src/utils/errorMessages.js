// Utility for localized, user-friendly error messages
export function getFriendlyErrorMessage(error, t) {
  if (error?.message?.includes("Network")) return t("error.network");
  if (error?.message?.includes("404")) return t("error.notFound");
  if (error?.message?.includes("500")) return t("error.server");
  return t("error.unknown");
}

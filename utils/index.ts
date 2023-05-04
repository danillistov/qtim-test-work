export function formatDate(
  dateValue: string | Date,
  options: Intl.DateTimeFormatOptions = {},
  locale = "en-US"
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const date: Date =
    typeof dateValue === "string" ? new Date(dateValue) : dateValue;

  const formattedDate: string = date?.toLocaleDateString(locale, {
    ...defaultOptions,
    ...options,
  });

  return formattedDate;
}

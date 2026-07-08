// src/utils/formatDate.js

export const formatDate = (
  date,
  locale = "en-IN"
) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString(
    locale,
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
};

export const formatDateTime = (
  date,
  locale = "en-IN"
) => {
  if (!date) return "";

  return new Date(date).toLocaleString(
    locale,
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );
};
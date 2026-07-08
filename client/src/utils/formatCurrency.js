// src/utils/formatCurrency.js

export const formatCurrency = (
  amount,
  currency = "INR"
) => {
  if (!amount) return "₹0";

  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }
  ).format(amount);
};
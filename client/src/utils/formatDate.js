import dayjs from "dayjs";

export const formatDate = (date) => {
  if (!date) return "-";
  return dayjs(date).format("DD MMM YYYY");
};

export const formatDateTime = (date) => {
  if (!date) return "-";
  return dayjs(date).format("DD MMM YYYY, hh:mm A");
};
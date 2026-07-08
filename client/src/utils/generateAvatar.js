// src/utils/generateAvatar.js

export const generateAvatar = (
  name = "User"
) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=0D8ABC&color=fff`;
};
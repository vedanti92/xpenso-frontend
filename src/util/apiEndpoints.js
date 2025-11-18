export const BASE_URL = "https://xpenso-178l.onrender.com/api/v1.0";

const CLOUDINARY_CLOUD_NAME = "dui1ebto3";

export const API_ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
};

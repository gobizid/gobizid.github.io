import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js";
import { jwtDecode } from "https://cdn.jsdelivr.net/npm/jwt-decode@4.0.0/build/cjs/index.min.js";

export default function cookieToDecode(cookieName) {
  const token = Cookies.get(cookieName);

  if (!token) {
    console.error(`Cookie dengan nama ${cookieName} tidak ditemukan.`);
    return null;
  }

  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Gagal mendecode token:", error);
    return null;
  }
}

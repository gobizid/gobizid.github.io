import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

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

import price from "./price.js";
import controll from "./controll.js";
import closeFilterPart from "./closefilterpart.js";
import address from "./address.js";

export default function filter() {
  controll();
  closeFilterPart();
  address();
  price();
}

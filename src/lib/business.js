const BUSINESS = {
  name: "Softcare Solutions",
  tagline: "Professional Phone Repair & Genuine Parts in Nairobi CBD",
  phone: "+254 717 484 035",
  phoneRaw: "+254717484035",
  whatsappRaw: "254717484035",
  email: "francisngugi033@gmail.com",
  address: "Nairobi CBD, next to Comfort 5 Hotel_Gaborone Rd",
  mapsQuery: "Comfort+5+Hotel+Nairobi+CBD",
  hours: "Mon\u2013Sat \xB7 8:30am \u2013 7:00pm"
};
const waLink = (msg) => `https://wa.me/${BUSINESS.whatsappRaw}?text=${encodeURIComponent(msg)}`;
const telLink = () => `tel:${BUSINESS.phoneRaw}`;
export {
  BUSINESS,
  telLink,
  waLink
};

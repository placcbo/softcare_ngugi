const BUSINESS = {
  name: "Softcare Solutions",
  tagline: "Professional Phone Repair & Genuine Parts in Nairobi CBD",
  phone: "+254 700 123 456",
  phoneRaw: "+254700123456",
  whatsappRaw: "254700123456",
  email: "hello@softcaresolutions.co.ke",
  address: "Nairobi CBD, next to Comfort 5 Hotel",
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

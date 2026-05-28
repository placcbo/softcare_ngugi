export const BUSINESS = {
  name: "Softcare Solutions",
  tagline: "Professional Phone Repair & Genuine Parts in Nairobi CBD",
  phone: "+254 700 123 456",
  phoneRaw: "+254700123456",
  whatsappRaw: "254700123456",
  email: "hello@softcaresolutions.co.ke",
  address: "Nairobi CBD, next to Comfort 5 Hotel",
  mapsQuery: "Comfort+5+Hotel+Nairobi+CBD",
  hours: "Mon–Sat · 8:30am – 7:00pm",
};

export const waLink = (msg: string) =>
  `https://wa.me/${BUSINESS.whatsappRaw}?text=${encodeURIComponent(msg)}`;
export const telLink = () => `tel:${BUSINESS.phoneRaw}`;

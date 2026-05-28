import screenImg from "@/assets/part-screen.jpg";
import cameraImg from "@/assets/part-camera.jpg";
import batteryImg from "@/assets/part-battery.jpg";
import portImg from "@/assets/part-port.jpg";

export type PartCategory =
  | "Screens" | "Cameras" | "Batteries" | "Charging Ports"
  | "Back Covers" | "Motherboards" | "Speakers"
  | "Fingerprint Sensors" | "SIM Trays" | "Flex Cables";

export const CATEGORIES: PartCategory[] = [
  "Screens","Cameras","Batteries","Charging Ports","Back Covers",
  "Motherboards","Speakers","Fingerprint Sensors","SIM Trays","Flex Cables",
];

export const BRANDS = ["Samsung","Apple","Tecno","Infinix","Xiaomi","Oppo","Huawei"] as const;
export type Brand = typeof BRANDS[number];

export interface Part {
  id: string;
  name: string;
  model: string;
  brand: Brand;
  category: PartCategory;
  price: number;
  inStock: boolean;
  image: string;
}

const img = (c: PartCategory) =>
  c === "Cameras" ? cameraImg :
  c === "Batteries" ? batteryImg :
  c === "Charging Ports" ? portImg : screenImg;

const make = (id: number, name: string, model: string, brand: Brand, category: PartCategory, price: number, inStock = true): Part => ({
  id: `p-${id}`, name, model, brand, category, price, inStock, image: img(category),
});

export const PARTS: Part[] = [
  make(1,  "Galaxy S21 OLED Screen",        "Galaxy S21",       "Samsung", "Screens",         8500),
  make(2,  "Galaxy S22 OLED Screen",        "Galaxy S22",       "Samsung", "Screens",         9500),
  make(3,  "Galaxy S23 Ultra Screen",       "Galaxy S23 Ultra", "Samsung", "Screens",        18500),
  make(4,  "Galaxy A54 Screen Assembly",    "Galaxy A54",       "Samsung", "Screens",         6500),
  make(5,  "Galaxy A14 Display",            "Galaxy A14",       "Samsung", "Screens",         3500),
  make(6,  "iPhone 12 OLED Display",        "iPhone 12",        "Apple",   "Screens",         9500),
  make(7,  "iPhone 13 OLED Display",        "iPhone 13",        "Apple",   "Screens",        11000),
  make(8,  "iPhone 14 Pro Display",         "iPhone 14 Pro",    "Apple",   "Screens",        19500),
  make(9,  "Tecno Camon 20 Screen",         "Camon 20",         "Tecno",   "Screens",         3200),
  make(10, "Infinix Hot 30 LCD",            "Hot 30",           "Infinix", "Screens",         2400),

  make(11, "Galaxy S21 Rear Camera",        "Galaxy S21",       "Samsung", "Cameras",         3200),
  make(12, "Galaxy S22 Main Camera",        "Galaxy S22",       "Samsung", "Cameras",         3800),
  make(13, "Galaxy A54 Front Camera",       "Galaxy A54",       "Samsung", "Cameras",         1500),
  make(14, "iPhone 12 Rear Camera Module",  "iPhone 12",        "Apple",   "Cameras",         4200),
  make(15, "iPhone 13 Wide Camera",         "iPhone 13",        "Apple",   "Cameras",         4800, false),

  make(16, "Galaxy S21 Battery EB-BG991",   "Galaxy S21",       "Samsung", "Batteries",       2200),
  make(17, "Galaxy S22 Battery",            "Galaxy S22",       "Samsung", "Batteries",       2400),
  make(18, "Galaxy A14 Battery",            "Galaxy A14",       "Samsung", "Batteries",       1800),
  make(19, "iPhone 12 Battery",             "iPhone 12",        "Apple",   "Batteries",       3000),
  make(20, "iPhone 13 Battery",             "iPhone 13",        "Apple",   "Batteries",       3500),
  make(21, "Tecno Spark 10 Battery",        "Spark 10",         "Tecno",   "Batteries",       1200),

  make(22, "Galaxy S21 Charging Port",      "Galaxy S21",       "Samsung", "Charging Ports",  1500),
  make(23, "Galaxy A54 USB-C Port",         "Galaxy A54",       "Samsung", "Charging Ports",  1300),
  make(24, "iPhone 12 Lightning Port",      "iPhone 12",        "Apple",   "Charging Ports",  1800),

  make(25, "Galaxy S22 Back Glass",         "Galaxy S22",       "Samsung", "Back Covers",     2500),
  make(26, "iPhone 13 Back Glass",          "iPhone 13",        "Apple",   "Back Covers",     3200),

  make(27, "Galaxy A54 Motherboard",        "Galaxy A54",       "Samsung", "Motherboards",   12500, false),
  make(28, "Galaxy S21 Loudspeaker",        "Galaxy S21",       "Samsung", "Speakers",         900),
  make(29, "iPhone 12 Earpiece Speaker",    "iPhone 12",        "Apple",   "Speakers",        1100),
  make(30, "Galaxy A54 Fingerprint Sensor", "Galaxy A54",       "Samsung", "Fingerprint Sensors", 1600),
  make(31, "Galaxy S22 SIM Tray",           "Galaxy S22",       "Samsung", "SIM Trays",        350),
  make(32, "iPhone 13 SIM Tray",            "iPhone 13",        "Apple",   "SIM Trays",        400),
  make(33, "Galaxy S21 Main Flex Cable",    "Galaxy S21",       "Samsung", "Flex Cables",     1200),
  make(34, "iPhone 12 Power Flex Cable",    "iPhone 12",        "Apple",   "Flex Cables",     1500),
];

import phoneS23 from "@/assets/phone-s23.jpg";
import phoneA54 from "@/assets/phone-a54.jpg";
import phoneIph from "@/assets/phone-iphone13.jpg";
import phoneS21 from "@/assets/phone-s21.jpg";

export interface Phone {
  id: string;
  name: string;
  brand: string;
  storage: string;
  ram: string;
  condition: "New" | "Refurbished";
  price: number;
  image: string;
}

export const PHONES: Phone[] = [
  { id:"ph-1", name:"Samsung Galaxy S23 Ultra", brand:"Samsung", storage:"256GB", ram:"12GB", condition:"New",          price:145000, image:phoneS23 },
  { id:"ph-2", name:"Samsung Galaxy A54 5G",    brand:"Samsung", storage:"128GB", ram:"8GB",  condition:"New",          price: 42000, image:phoneA54 },
  { id:"ph-3", name:"Apple iPhone 13 Pro",      brand:"Apple",   storage:"128GB", ram:"6GB",  condition:"Refurbished",  price: 78000, image:phoneIph },
  { id:"ph-4", name:"Samsung Galaxy S21",       brand:"Samsung", storage:"128GB", ram:"8GB",  condition:"Refurbished",  price: 38000, image:phoneS21 },
  { id:"ph-5", name:"Samsung Galaxy S22",       brand:"Samsung", storage:"256GB", ram:"8GB",  condition:"Refurbished",  price: 52000, image:phoneS23 },
  { id:"ph-6", name:"Samsung Galaxy A14",       brand:"Samsung", storage:"64GB",  ram:"4GB",  condition:"New",          price: 18500, image:phoneA54 },
];

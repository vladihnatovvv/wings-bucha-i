import duplex from "@/assets/type-duplex.jpg";
import townhouse from "@/assets/type-townhouse.jpg";
import cottage from "@/assets/type-cottage.jpg";
import hero from "@/assets/hero-house.jpg";

export type House = {
  id: string;
  name: string;
  type: "duplex" | "townhouse" | "cottage";
  img: string;
  facade: string;
  area: number;
  beds: number;
  baths: number;
  floors: number;
  plot: number;
  priceUsd: number;
  available: number;
  features: string[];
  floorPlans: { label: string; img: string }[];
  unitPlans: { label: string; area: number; rooms: number; img: string }[];
};

// Inline SVG floor-plan placeholders (data URIs) so we don't need new image files.
const planFloor = (title: string, color = "#2f6e3a") =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 560'>
      <rect width='800' height='560' fill='#f5f3ec'/>
      <g fill='none' stroke='${color}' stroke-width='4'>
        <rect x='60' y='60' width='680' height='440'/>
        <line x1='60' y1='280' x2='740' y2='280'/>
        <line x1='380' y1='60' x2='380' y2='500'/>
        <line x1='60' y1='180' x2='220' y2='180'/>
        <line x1='220' y1='60' x2='220' y2='180'/>
        <line x1='540' y1='280' x2='540' y2='500'/>
        <line x1='540' y1='400' x2='740' y2='400'/>
        <rect x='100' y='100' width='90' height='60' fill='${color}' opacity='0.08'/>
        <rect x='260' y='100' width='100' height='150' fill='${color}' opacity='0.08'/>
        <rect x='420' y='100' width='280' height='150' fill='${color}' opacity='0.08'/>
        <rect x='100' y='320' width='240' height='150' fill='${color}' opacity='0.08'/>
        <rect x='420' y='320' width='100' height='150' fill='${color}' opacity='0.08'/>
        <rect x='560' y='320' width='160' height='60' fill='${color}' opacity='0.08'/>
      </g>
      <text x='60' y='40' font-family='Inter,sans-serif' font-size='18' fill='${color}' font-weight='600'>${title}</text>
      <text x='110' y='140' font-family='Inter,sans-serif' font-size='12' fill='#555'>Хол</text>
      <text x='280' y='180' font-family='Inter,sans-serif' font-size='12' fill='#555'>Кухня</text>
      <text x='520' y='180' font-family='Inter,sans-serif' font-size='12' fill='#555'>Вітальня</text>
      <text x='180' y='400' font-family='Inter,sans-serif' font-size='12' fill='#555'>Спальня</text>
      <text x='450' y='400' font-family='Inter,sans-serif' font-size='12' fill='#555'>С/в</text>
      <text x='600' y='360' font-family='Inter,sans-serif' font-size='12' fill='#555'>Гардероб</text>
    </svg>`
  );

const planUnit = (title: string, color = "#2f6e3a") =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 560'>
      <rect width='800' height='560' fill='#fbfaf6'/>
      <g fill='none' stroke='${color}' stroke-width='4'>
        <rect x='80' y='80' width='640' height='400'/>
        <line x1='400' y1='80' x2='400' y2='480'/>
        <line x1='80' y1='260' x2='400' y2='260'/>
        <line x1='560' y1='80' x2='560' y2='480'/>
        <rect x='110' y='110' width='260' height='120' fill='${color}' opacity='0.08'/>
        <rect x='110' y='290' width='260' height='160' fill='${color}' opacity='0.08'/>
        <rect x='430' y='110' width='110' height='340' fill='${color}' opacity='0.08'/>
        <rect x='590' y='110' width='110' height='160' fill='${color}' opacity='0.08'/>
        <rect x='590' y='300' width='110' height='150' fill='${color}' opacity='0.08'/>
      </g>
      <text x='80' y='60' font-family='Inter,sans-serif' font-size='18' fill='${color}' font-weight='600'>${title}</text>
      <text x='180' y='180' font-family='Inter,sans-serif' font-size='12' fill='#555'>Кухня-вітальня</text>
      <text x='190' y='380' font-family='Inter,sans-serif' font-size='12' fill='#555'>Спальня</text>
      <text x='450' y='280' font-family='Inter,sans-serif' font-size='12' fill='#555'>С/в</text>
      <text x='610' y='200' font-family='Inter,sans-serif' font-size='12' fill='#555'>Спальня</text>
      <text x='610' y='390' font-family='Inter,sans-serif' font-size='12' fill='#555'>Гардероб</text>
    </svg>`
  );

export const HOUSES: House[] = [
  {
    id: "duplex",
    name: "Дуплекс «Сосна»",
    type: "duplex",
    img: duplex, facade: duplex,
    area: 128, beds: 3, baths: 2, floors: 2, plot: 3,
    priceUsd: 145000, available: 8,
    features: ["Тераса 18 м²", "Гараж", "Газове опалення", "Панорамні вікна"],
    floorPlans: [
      { label: "Перший поверх", img: planFloor("Перший поверх · 64 м²") },
      { label: "Другий поверх", img: planFloor("Другий поверх · 64 м²") },
    ],
    unitPlans: [
      { label: "Секція A", area: 128, rooms: 4, img: planUnit("Секція A · 128 м²") },
      { label: "Секція B", area: 128, rooms: 4, img: planUnit("Секція B · 128 м²") },
    ],
  },
  {
    id: "townhouse",
    name: "Таунхаус «Криве»",
    type: "townhouse",
    img: townhouse, facade: townhouse,
    area: 96, beds: 2, baths: 2, floors: 2, plot: 1.5,
    priceUsd: 112000, available: 12,
    features: ["Внутрішній дворик", "Місце під авто", "Газове опалення", "Тепла підлога"],
    floorPlans: [
      { label: "Перший поверх", img: planFloor("Перший поверх · 48 м²") },
      { label: "Другий поверх", img: planFloor("Другий поверх · 48 м²") },
    ],
    unitPlans: [
      { label: "Тип 1", area: 96, rooms: 3, img: planUnit("Тип 1 · 96 м²") },
      { label: "Тип 2", area: 102, rooms: 3, img: planUnit("Тип 2 · 102 м²") },
    ],
  },
  {
    id: "cottage",
    name: "Котедж «Політ»",
    type: "cottage",
    img: cottage, facade: cottage,
    area: 165, beds: 4, baths: 3, floors: 2, plot: 6,
    priceUsd: 189000, available: 5,
    features: ["Власна ділянка 6 соток", "Камін", "Гараж на 2 авто", "Сауна-зона"],
    floorPlans: [
      { label: "Перший поверх", img: planFloor("Перший поверх · 95 м²") },
      { label: "Другий поверх", img: planFloor("Другий поверх · 70 м²") },
    ],
    unitPlans: [
      { label: "Класична", area: 165, rooms: 5, img: planUnit("Класична · 165 м²") },
      { label: "Розширена", area: 184, rooms: 6, img: planUnit("Розширена · 184 м²") },
    ],
  },
  {
    id: "duplex-pine",
    name: "Дуплекс «Криничний»",
    type: "duplex",
    img: hero, facade: hero,
    area: 142, beds: 3, baths: 2, floors: 2, plot: 3.5,
    priceUsd: 159000, available: 6,
    features: ["Тераса 22 м²", "Камін", "Гардеробна", "Підлогове опалення"],
    floorPlans: [
      { label: "Перший поверх", img: planFloor("Перший поверх · 72 м²") },
      { label: "Другий поверх", img: planFloor("Другий поверх · 70 м²") },
    ],
    unitPlans: [
      { label: "Секція A", area: 142, rooms: 4, img: planUnit("Секція A · 142 м²") },
      { label: "Секція B", area: 148, rooms: 4, img: planUnit("Секція B · 148 м²") },
    ],
  },
  {
    id: "townhouse-park",
    name: "Таунхаус «Паркова»",
    type: "townhouse",
    img: townhouse, facade: townhouse,
    area: 108, beds: 3, baths: 2, floors: 3, plot: 2,
    priceUsd: 124000, available: 9,
    features: ["Дах-тераса", "Гараж", "Panoramic glazing", "Smart-Home Ready"],
    floorPlans: [
      { label: "Цокольний", img: planFloor("Цоколь · 30 м²") },
      { label: "Перший поверх", img: planFloor("Перший поверх · 40 м²") },
      { label: "Другий поверх", img: planFloor("Другий поверх · 38 м²") },
    ],
    unitPlans: [
      { label: "Стандарт", area: 108, rooms: 3, img: planUnit("Стандарт · 108 м²") },
      { label: "Кутова", area: 118, rooms: 4, img: planUnit("Кутова · 118 м²") },
    ],
  },
  {
    id: "cottage-forest",
    name: "Котедж «Лісовий»",
    type: "cottage",
    img: cottage, facade: cottage,
    area: 198, beds: 5, baths: 3, floors: 2, plot: 8,
    priceUsd: 224000, available: 3,
    features: ["Ділянка 8 соток", "Басейн-зона", "Камін", "Гостьовий будиночок"],
    floorPlans: [
      { label: "Перший поверх", img: planFloor("Перший поверх · 110 м²") },
      { label: "Другий поверх", img: planFloor("Другий поверх · 88 м²") },
    ],
    unitPlans: [
      { label: "Класична", area: 198, rooms: 6, img: planUnit("Класична · 198 м²") },
      { label: "Преміум", area: 220, rooms: 7, img: planUnit("Преміум · 220 м²") },
    ],
  },
];

export const fmtUsd = (n: number) => "$" + new Intl.NumberFormat("uk-UA").format(n);
export const fmtUah = (usd: number) => new Intl.NumberFormat("uk-UA").format(Math.round(usd * 41)) + " ₴";

export const COMPARE_STORAGE_KEY = "wb_compare_ids";

export function readCompare(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(COMPARE_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function writeCompare(ids: string[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

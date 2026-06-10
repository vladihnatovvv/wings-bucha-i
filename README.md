# Wings Bucha — Крила Бучі

Лендінг житлового комплексу `Wings Bucha` у Бучі.

## Стек

- React 19 + TypeScript
- TanStack Start / Router
- Tailwind CSS v4
- Vite 7
- Cloudflare Vite plugin

## Локальний запуск

Рекомендований варіант через `npm`:

```bash
npm install
npm run dev
```

Сайт відкриється на [http://localhost:5173](http://localhost:5173).

Якщо у вас є Bun, можна так:

```bash
bun install
bun run dev
```

## Продакшн-збірка

```bash
npm run build
```

Після збірки створюються:

- `dist/client/` — клієнтські асети
- `dist/server/` — SSR-бандл

## Деплой

Поточна конфігурація підготовлена під `Cloudflare Workers`.

### Що вже готово

- є `wrangler.jsonc`
- додано `wrangler` у devDependencies
- додано готові команди для preview і deploy
- `wrangler` налаштований на деплой з `dist/server/server.js` і `dist/client/`
- збірка проєкту перевірена через `npm run build`

### Перший деплой

1. Авторизуватись у Cloudflare:

```bash
npx wrangler login
```

2. За потреби змінити назву сервісу у [wrangler.jsonc](/Users/ihnatovvladgmail.com/Downloads/wings-bucha/wrangler.jsonc).

3. Викотити застосунок:

```bash
npm run cf:deploy
```

### Локальна перевірка Cloudflare-рантайму

```bash
npm run cf:preview
```

### Важливо

- На зараз у проєкті немає обов'язкових env-змінних для деплою.
- Якщо пізніше з'являться форми, CRM, аналітика або API-ключі, їх краще додавати через `wrangler secret put`.
- Старі інструкції з `.output/` більше неактуальні для цього репозиторію: фактичний build-output зараз у `dist/`.
- `wrangler` тут не збирає `src/server.ts` напряму: він деплоїть уже підготовлений build-артефакт після `npm run build`.

## Структура

- `src/routes/` — сторінки
- `src/components/site/` — компоненти лендингу
- `src/components/ui/` — базові UI-компоненти
- `src/lib/houses.ts` — дані про будинки
- `src/styles.css` — глобальні стилі
- `public/` — статичні ресурси

## Контент

Дані про будинки зберігаються у [src/lib/houses.ts](/Users/ihnatovvladgmail.com/Downloads/wings-bucha/src/lib/houses.ts). Якщо треба змінити ціни, площі, назви або характеристики, це основний файл для редагування.

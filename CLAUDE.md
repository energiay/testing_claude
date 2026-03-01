# boss_personal_lk — Личный кабинет руководителя (Beeline)

## Что это
React SPA + серверная часть на WebTutor (корпоративная LMS).
Дашборд для руководителей: метрики, задачи сотрудников, обучения.

## Стек
- **Клиент:** React 18, CSS Modules, MUI, Bootstrap, Redux Toolkit, axios
- **Сборка:** Webpack (dev: HMR + BrowserSync, prod: webpack.config.prod.js)
- **Сервер:** WebTutor JS (не Node.js!), XQuery для запросов к БД

## Структура
- `src/` — React-приложение
- `server/` — серверная часть WebTutor
- `config.js` — URL портала и cookie для авторизации

## Алиасы в Webpack
`@Components`, `@hooks` — использовать при импортах

## Поток данных
1. `serverSideInitialCode.js` записывает настройки в DOM
2. React читает их и передаёт в `App` как `props settings`
3. Запросы: `useData → useApiRequest → POST controller.js`
4. Ответ всегда `{ success, data }`

## Важно
- Серверный код — WebTutor JS, не путать с Node.js
- `App.js` сейчас рендерит заглушку — проект в разработке
- Redux подключён, но почти не используется

## Запуск
- Dev: `node index.js` (BrowserSync + Webpack dev middleware)
- Prod: сборка через `webpack.config.prod.js`

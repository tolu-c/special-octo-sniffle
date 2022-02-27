# special-octo-sniffle
A next JS app.

### Installation Guide

#### `Terminal`

- `npx create-next-app my-project`
- `cd my-project`
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`

#### Configure your template paths, `tailwind.config.js`

```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

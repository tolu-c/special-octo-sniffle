# special-octo-sniffle

A Next JS app with Tailwind CSS.

## Installation Guide

- Create your project

```terminal
npx create-next-app my-project
cd my-project
```

-Install Tailwind CSS

```terminal
npx create-next-app my-project
cd my-project
```

- Configure your template paths, `tailwind.config.js`

```js
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

- Add the Tailwind directives to your CSS - `./styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Start your build process

```terminal
npm run dev
```

- Start using Tailwind in your project `index,js`

```jsx
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

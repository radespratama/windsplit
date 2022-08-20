# Documentation

Utility originally created to deal with long Tailwind classnames.

To make our code more readable, we extract our TailwindCSS classes into variables, for example:

```javascript
const twStyle = `
  flex-wrap
  flex-grow
  max-w-screen-lg
  mx-auto
  px-4
`;
```

The issue with writing classes this way is that they are rendered as-is in the DOM.

Example:

```javascript
<main
  class="
  flex-wrap
  flex-grow
  max-w-screen-lg
  mx-auto
  px-4"
>
  /* ... */
</main>
```

Using the `wtl` util formats classnames so they are rendered in a more standard way in the DOM.

Example:

```javascript
<p class="tw-sr-only focus:tw-not-sr-only tw-bg-teal-darker tw-text-white tw-block tw-text-sm tw-l-0">
  Hello world
</p>
```

# Installation

```javascript
npm install windsplit
```

```javascript
yarn add windsplit
```

# Usage

Wrap your classnames inside `wtl`.

```javascript
import wtl from "windsplit";

const buttonClasses = wtl(`
  bg-gray-800
  text-white
  p-1
  rounded-sm
`);
```

You can also use conditional classes:

```javascript
import wtl from "windsplit";

const buttonClasses = wtl(`
  bg-gray-800
  text-white
  p-1
  rounded-sm
  ${someState && "bg-sky-600"}
`);
```

# Toggle Dropdown

A utility function that toggles the visibility of a dropdown menu.

To install the package run:

```bash
npm install @smith109/toggle-dropdown
```

## Usage

The function will toggle the `visible` class on the dropdown menu element.

### Example HTML:

```html
<div class="dropdown">
  <button>...</button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

### Example CSS:

```css
.dropdown-menu {
  display: none;
}

.dropdown-menu.visible {
  display: block;
}
```

### Example JS:

```js
import toggleDropDown from '@smith109/toggle-dropdown';

const dropDown = document.querySelector('.dropdown');
dropDown.addEventListener('click', toggleDropDown);
```
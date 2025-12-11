# Simple Dropdown Menu

A reusable dropdown menu component

## Installation

```bash
npm install js-simple-dropdown-menu
```

# Simple Dropdown Menu

A lightweight, reusable, and customizable dropdown menu component for modern web applications. Zero dependencies, works with any framework, and easy to integrate.

## Features

- **No dependencies** - Pure vanilla JavaScript and CSS
- **Simple API** - Auto-initializes or use manual control
- **Customizable** - Hover or click triggers, multiple configuration options
- **Accessible** - Proper ARIA attributes and keyboard navigation ready
- **Mobile-friendly** - Touch-optimized with overlay support
- **Multiple instances** - Manage multiple dropdowns on the same page

## Installation

```bash
npm install js-simple-dropdown-menu
```

## Quick Start

1. **Import the CSS** (required):

```javascript
import "js-simple-dropdown-menu/dist/dropdown.min.css";
```

2. **Add HTML structure**:

```html
<div class="dropdown" data-dropdown>
  <button class="dropdown-toggle" data-dropdown-toggle>
    Select Option
    <span class="dropdown-arrow">▼</span>
  </button>
  <ul class="dropdown-menu" data-dropdown-menu>
    <li><a href="#" class="dropdown-item">Option 1</a></li>
    <li><a href="#" class="dropdown-item">Option 2</a></li>
    <li><a href="#" class="dropdown-item">Option 3</a></li>
  </ul>
</div>
```

3. **Import JavaScript**:

```javascript
import Dropdown from "js-simple-dropdown-menu";
// That's it! Auto-initializes on page load
```

## Import Methods

### ES Modules (Recommended)

```javascript
import Dropdown from "js-simple-dropdown-menu";
import "js-simple-dropdown-menu/dist/dropdown.min.css";
```

### Via CDN (Unpkg)

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/js-simple-dropdown-menu@latest/dist/dropdown.min.css"
/>
<script type="module">
  import Dropdown from "https://unpkg.com/js-simple-dropdown-menu@latest/dist/dropdown.min.js";
</script>
```

### CommonJS

```javascript
const Dropdown = require("js-simple-dropdown-menu");
require("js-simple-dropdown-menu/dist/dropdown.min.css");
```

## API Documentation

### Dropdown Class

#### Static Methods

| Method                  | Parameters                                                              | Description                                                   |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| `Dropdown.create()`     | `selector` (string, default: `"[data-dropdown]"`)<br>`options` (object) | Initializes all dropdowns matching selector                   |
| `Dropdown.closeAll()`   | `exclude` (Dropdown instance)                                           | Closes all open dropdowns except optional exclude             |
| `Dropdown.destroyAll()` | None                                                                    | Destroys all dropdown instances and cleans up event listeners |

#### Instance Methods

| Method      | Description                           |
| ----------- | ------------------------------------- |
| `open()`    | Opens the dropdown                    |
| `close()`   | Closes the dropdown                   |
| `toggle()`  | Toggles the dropdown open/closed      |
| `destroy()` | Removes event listeners and cleans up |

### Options

Pass options to `Dropdown.create()` or when creating instances manually:

```javascript
// Default options
const options = {
  trigger: "click", // 'click' or 'hover'
  closeOnClick: true, // Close when clicking menu items
  closeOnOutsideClick: true, // Close when clicking outside
};

Dropdown.create("[data-dropdown]", options);
```

## Usage Examples

### Basic Auto-Initialization

```javascript
import Dropdown from "js-simple-dropdown-menu";
import "js-simple-dropdown-menu/dist/dropdown.min.css";

// Automatically initializes all [data-dropdown] elements on DOMContentLoaded
```

### Manual Initialization

```javascript
import Dropdown from "js-simple-dropdown-menu";

// Initialize specific elements only
Dropdown.create(".custom-dropdown", {
  trigger: "hover",
  closeOnClick: false,
});
```

### Multiple Dropdowns with Different Configurations

```html
<!-- Dropdown 1 - Click trigger -->
<div class="dropdown" data-dropdown data-config='{"trigger":"click"}'>
  <!-- ... -->
</div>

<!-- Dropdown 2 - Hover trigger -->
<div class="dropdown" data-dropdown data-config='{"trigger":"hover"}'>
  <!-- ... -->
</div>
```

```javascript
// Initialize with different options based on data-config
document.querySelectorAll("[data-dropdown]").forEach((element) => {
  const config = element.dataset.config
    ? JSON.parse(element.dataset.config)
    : {};
  new Dropdown(element, config);
});
```

### Programmatic Control

```javascript
import Dropdown from "js-simple-dropdown-menu";

// Get reference to a dropdown instance
const dropdownElement = document.querySelector("[data-dropdown]");
const dropdownInstance = new Dropdown(dropdownElement);

// Open/close programmatically
dropdownInstance.open();
dropdownInstance.close();

// Close all dropdowns
Dropdown.closeAll();
```

## CSS Customization

### Default Classes

The component uses these CSS classes by default:

- `.dropdown` - Container element
- `.dropdown-toggle` - Toggle button
- `.dropdown-arrow` - Arrow indicator
- `.dropdown-menu` - Menu container
- `.dropdown-item` - Menu items
- `.show` - Added to menu when open (handled by JavaScript)
- `.open` - Added to arrow when open (handled by JavaScript)

### Custom Styling

Override the default styles by adding your own CSS:

```css
/* Example custom theme */
.dropdown-toggle {
  background-color: #8b5cf6;
  border-radius: 8px;
  font-weight: bold;
}

.dropdown-menu {
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.dropdown-item {
  padding: 12px 20px;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background-color: #f5f3ff;
  padding-left: 24px;
}
```

## Advanced Examples

### Nested Dropdowns

```html
<div class="dropdown" data-dropdown>
  <button class="dropdown-toggle" data-dropdown-toggle>
    Main Menu
    <span class="dropdown-arrow">▼</span>
  </button>
  <ul class="dropdown-menu" data-dropdown-menu>
    <li><a href="#" class="dropdown-item">Home</a></li>
    <li>
      <div class="dropdown" data-dropdown>
        <button class="dropdown-toggle dropdown-item" data-dropdown-toggle>
          Products
          <span class="dropdown-arrow">▶</span>
        </button>
        <ul class="dropdown-menu" data-dropdown-menu>
          <li><a href="#" class="dropdown-item">Product 1</a></li>
          <li><a href="#" class="dropdown-item">Product 2</a></li>
        </ul>
      </div>
    </li>
    <li><a href="#" class="dropdown-item">Contact</a></li>
  </ul>
</div>
```

### With Icons

```html
<div class="dropdown" data-dropdown>
  <button class="dropdown-toggle" data-dropdown-toggle>
    <span>Settings</span>
    <span class="dropdown-arrow">▼</span>
  </button>
  <ul class="dropdown-menu" data-dropdown-menu>
    <li>
      <a href="#" class="dropdown-item">
        <span>🔐</span>
        <span>Account</span>
      </a>
    </li>
    <li>
      <a href="#" class="dropdown-item">
        <span>🔔</span>
        <span>Notifications</span>
      </a>
    </li>
  </ul>
</div>
```

## Troubleshooting

### Common Issues

1. **Dropdown menu not hiding/showing**

   - Make sure you imported the CSS file
   - Check that `.dropdown-menu` has `opacity: 0` and `visibility: hidden` initially

2. **Clicking doesn't open menu**

   - Verify you have `data-dropdown-toggle` on the button
   - Check browser console for JavaScript errors
   - Ensure CSS is loaded before JavaScript executes

3. **Multiple dropdowns interfere with each other**

   - Use `Dropdown.closeAll()` in your custom logic
   - Ensure proper event propagation with `e.stopPropagation()`

4. **Menu appears in wrong position**
   - Parent container needs `position: relative`
   - Check for CSS conflicts with other frameworks

### Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Development

### Building from Source

```bash
# Clone repository
git clone https://github.com/yourusername/js-simple-dropdown-menu.git

# Install dependencies
npm install

# Build for production
npm run build

# Test locally
npm pack
```

### Project Structure

```
js-simple-dropdown-menu/
├── src/
│   ├── dropdown.js          # Main JavaScript component
│   └── dropdown.css         # Stylesheet
├── dist/                    # Built files
├── examples/                # Usage examples
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT © Your Name

## Support

- Open an issue on [GitHub](https://github.com/Okoro91/dropmenu)
- Check the [examples directory](https://github.com/Okoro91/dropmenu/) for more usage patterns

---

**Ready to use?** Install now:

```bash
npm install js-simple-dropdown-menu
```

**Need help?** Check the [examples directory](https://github.com/Okoro91/dropmenu/) or open an issue on GitHub.

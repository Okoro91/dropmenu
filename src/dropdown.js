class Dropdown {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      trigger: "click", // 'click' or 'hover'
      closeOnClick: true,
      closeOnOutsideClick: true,
      ...options,
    };

    this.toggleButton = element.querySelector("[data-dropdown-toggle]");
    this.menu = element.querySelector("[data-dropdown-menu]");
    this.isOpen = false;
    this.closeOverlay = null;

    this.init();
  }

  init() {
    if (this.options.trigger === "hover") {
      this.element.addEventListener("mouseenter", () => this.open());
      this.element.addEventListener("mouseleave", () => this.close());
    } else {
      this.toggleButton.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggle();
      });
    }

    if (this.options.closeOnClick) {
      this.menu.addEventListener("click", (e) => {
        if (e.target.classList.contains("dropdown-item")) {
          this.close();
        }
      });
    }

    if (this.options.closeOnOutsideClick) {
      document.addEventListener("click", (e) => {
        if (!this.element.contains(e.target) && this.isOpen) {
          this.close();
        }
      });
    }

    // Prevent closing when clicking inside menu
    this.menu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    if (this.isOpen) return;

    this.isOpen = true;
    this.menu.classList.add("show");
    this.toggleButton.querySelector(".dropdown-arrow").classList.add("open");

    // Close other dropdowns
    Dropdown.closeAll(this);

    // Add overlay for mobile/accessibility
    if (this.options.closeOnOutsideClick && window.innerWidth < 768) {
      this.addCloseOverlay();
    }
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;
    this.menu.classList.remove("show");
    this.toggleButton.querySelector(".dropdown-arrow").classList.remove("open");

    // Remove overlay
    this.removeCloseOverlay();
  }

  addCloseOverlay() {
    this.closeOverlay = document.createElement("div");
    this.closeOverlay.className = "dropdown-close-overlay";
    this.closeOverlay.addEventListener("click", () => this.close());
    document.body.appendChild(this.closeOverlay);
  }

  removeCloseOverlay() {
    if (this.closeOverlay) {
      this.closeOverlay.remove();
      this.closeOverlay = null;
    }
  }
}

// Static methods
//   static instances = new Map();

//   static create(selector = "[data-dropdown]", options = {}) {
//     document.querySelectorAll(selector).forEach((element) => {
//       if (!Dropdown.instances.has(element)) {
//         Dropdown.instances.set(element, new Dropdown(element, options));
//       }
//     });
//   }

//   static closeAll(exclude = null) {
//     Dropdown.instances.forEach((instance, element) => {
//       if (instance !== exclude && instance.isOpen) {
//         instance.close();
//       }
//     });
//   }

//   static destroyAll() {
//     Dropdown.instances.forEach((instance, element) => {
//       instance.destroy();
//     });
//     Dropdown.instances.clear();
//   }

//   destroy() {
//     this.close();
//     this.removeCloseOverlay();

//     // Remove event listeners
//     this.element.removeEventListener("mouseenter", this.open);
//     this.element.removeEventListener("mouseleave", this.close);
//     this.toggleButton.removeEventListener("click", this.toggle);
//     this.menu.removeEventListener("click", this.handleMenuClick);

//     Dropdown.instances.delete(this.element);
//   }
// }

// // Auto-initialize dropdowns on page load
// document.addEventListener("DOMContentLoaded", () => {
//   Dropdown.create();
// });

// Export for module usage
export default Dropdown;

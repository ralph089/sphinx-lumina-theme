/**
 * @module nav-dropdown
 * @description Alpine.js component for navigation dropdown menus with
 * hover intent (delayed hide) and keyboard support (Escape to close).
 */

/**
 * Factory for the nav-dropdown Alpine component.
 * Registered as ``Alpine.data("navDropdown", navDropdown)``.
 *
 * **Properties:**
 *
 * - ``open`` *(boolean)* — Whether the dropdown is visible.
 *
 * **Methods:**
 *
 * - ``toggle()`` — Toggles the dropdown open/closed.
 * - ``show()`` — Opens the dropdown, cancelling any pending hide timer.
 * - ``hide()`` — Closes the dropdown after a 150 ms delay.
 * - ``cancelHide()`` — Cancels a pending hide (e.g. when re-entering the dropdown).
 * - ``handleKeydown(e)`` — Closes on Escape and returns focus to the trigger.
 *
 * @function navDropdown
 * @returns {object} Alpine.js component data.
 */
export default function navDropdown() {
  return {
    open: false,
    _closeTimer: null,

    toggle() {
      this.open = !this.open;
    },

    show() {
      clearTimeout(this._closeTimer);
      this.open = true;
    },

    hide() {
      this._closeTimer = setTimeout(() => {
        this.open = false;
      }, 150);
    },

    cancelHide() {
      clearTimeout(this._closeTimer);
    },

    handleKeydown(e) {
      if (e.key === "Escape") {
        this.open = false;
        this.$refs.trigger?.focus();
      }
    },
  };
}

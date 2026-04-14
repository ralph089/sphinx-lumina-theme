/**
 * @module section-switcher
 * @description Alpine.js component for the doc sections switcher dropdown.
 * Manages open/close state. Keyboard close is handled in the template
 * via ``@keydown.escape``.
 */

/**
 * Factory for the section-switcher Alpine component.
 * Registered as ``Alpine.data("sectionSwitcher", sectionSwitcher)``.
 *
 * **Properties:**
 *
 * - ``open`` *(boolean)* — Whether the dropdown is visible.
 *
 * **Methods:**
 *
 * - ``toggle()`` — Toggles the dropdown open/closed.
 *
 * @function sectionSwitcher
 * @returns {object} Alpine.js component data.
 */
export default function sectionSwitcher() {
  return {
    open: false,

    toggle() {
      this.open = !this.open;
    },
  };
}

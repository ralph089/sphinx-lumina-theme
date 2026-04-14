/**
 * @module scrollspy
 * @description Alpine.js component that highlights the active table-of-contents
 * link as the user scrolls. Uses ``IntersectionObserver`` to track the current
 * heading and a clip-path sliding indicator for smooth visual feedback.
 */

/**
 * Factory for the scrollspy Alpine component.
 * Registered as ``Alpine.data("scrollspy", scrollspy)``.
 *
 * **Properties:**
 *
 * - ``activeId`` *(string|null)* — The ``id`` of the currently visible section.
 *
 * **Methods:**
 *
 * - ``init()`` — Creates the indicator, computes positions, starts observers.
 * - ``destroy()`` — Disconnects observers and removes the indicator element.
 *
 * @function scrollspy
 * @returns {object} Alpine.js component data.
 */
export default function scrollspy() {
  return {
    activeId: null,
    _observer: null,
    _resizeObserver: null,
    _indicator: null,
    _positions: new Map(),

    init() {
      const nav = this.$el;
      const links = Array.from(nav.querySelectorAll("a"));
      const ids = links
        .map((a) => a.getAttribute("href"))
        .filter((href) => href && href.startsWith("#"))
        .map((href) => href.slice(1));

      if (ids.length === 0) return;

      // Create the sliding indicator element
      this._indicator = document.createElement("div");
      this._indicator.className = "lumina-toc-indicator";
      this._indicator.setAttribute("aria-hidden", "true");
      nav.appendChild(this._indicator);

      // Compute link positions and recompute on layout changes
      this._computePositions(nav);
      this._resizeObserver = new ResizeObserver(() => {
        this._computePositions(nav);
        if (this.activeId) this._updateIndicator();
      });
      this._resizeObserver.observe(nav);

      // Track which heading is in view
      this._observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeId = entry.target.id;
              this._updateActive(nav);
              this._updateIndicator();
              break;
            }
          }
        },
        { rootMargin: "-80px 0px -60% 0px" },
      );

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) this._observer.observe(el);
      }
    },

    _computePositions(nav) {
      this._positions.clear();
      for (const link of nav.querySelectorAll("a")) {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) continue;
        const id = href.slice(1);
        const top = link.offsetTop;
        const bottom = top + link.offsetHeight;
        this._positions.set(id, [top, bottom]);
      }
    },

    _updateActive(nav) {
      for (const a of nav.querySelectorAll("a")) {
        const href = a.getAttribute("href");
        a.classList.toggle("lumina-toc-active", href === "#" + this.activeId);
      }
    },

    _updateIndicator() {
      if (!this._indicator || !this.activeId) return;
      const pos = this._positions.get(this.activeId);
      if (!pos) return;
      const [top, bottom] = pos;
      this._indicator.style.setProperty("--ind-top", `${top}px`);
      this._indicator.style.setProperty("--ind-bottom", `${bottom}px`);
    },

    destroy() {
      if (this._observer) this._observer.disconnect();
      if (this._resizeObserver) this._resizeObserver.disconnect();
      if (this._indicator) this._indicator.remove();
    },
  };
}

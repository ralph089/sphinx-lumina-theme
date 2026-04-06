/**
 * @module header-links
 * @description Alpine.js component that converts section header permalink
 * clicks into a "copy link" action. Copies the full URL to the clipboard
 * and shows a brief "Copied!" tooltip.
 */

/**
 * Factory for the header-links Alpine component.
 * Registered as ``Alpine.data("headerLinks", headerLinks)``.
 *
 * **Methods:**
 *
 * - ``init()`` — Attaches click handlers to all ``.headerlink`` elements.
 *
 * @function headerLinks
 * @returns {object} Alpine.js component data.
 */
export default function headerLinks() {
  return {
    init() {
      document.querySelectorAll("a.headerlink").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const href = link.getAttribute("href");
          const url = new URL(href, window.location.href).toString();

          copyText(url).then(() => {
            link.setAttribute("data-tooltip", "Copied!");
            link.classList.add("lumina-tooltip-visible");

            setTimeout(() => {
              link.classList.remove("lumina-tooltip-visible");
              setTimeout(() => link.removeAttribute("data-tooltip"), 150);
            }, 1500);
          });
        });
      });
    },
  };
}

function copyText(text) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  return fallbackCopy(text);
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.cssText = "position:fixed;opacity:0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return Promise.resolve();
}

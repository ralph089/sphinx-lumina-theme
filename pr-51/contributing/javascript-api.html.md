# JavaScript API

Auto-generated reference for the theme’s Alpine.js components. Each component is a factory function registered via `Alpine.data()` in [the entry point]() and referenced in Jinja2 templates with `x-data`.

## Entry Point

### boot()

<p>Initializes the theme by starting Alpine.js and running post-render
boot functions (curlCopy, tryIt). Called on DOMContentLoaded or
immediately if the DOM is already ready.</p>

## Navigation

### scrollspy()

<p>Factory for the scrollspy Alpine component.
Registered as <code>Alpine.data(&quot;scrollspy&quot;, scrollspy)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>activeId</code> <em>(string|null)</em> — The <code>id</code> of the currently visible section.</li>
<li><code>observer</code> <em>(IntersectionObserver|null)</em> — The observer instance.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>init()</code> — Collects TOC link targets and starts observing.</li>
<li><code>updateActive(nav)</code> — Toggles the <code>lumina-toc-active</code> class on TOC links.</li>
<li><code>destroy()</code> — Disconnects the IntersectionObserver.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

### sidebar()

<p>Factory for the sidebar Alpine component.
Registered as <code>Alpine.data(&quot;sidebar&quot;, sidebar)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>mobileOpen</code> <em>(boolean)</em> — Whether the mobile sidebar is visible.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>toggle()</code> — Toggles the sidebar and locks/unlocks body scroll.</li>
<li><code>close()</code> — Closes the sidebar and restores focus.</li>
<li><code>init()</code> — Attaches toggle button handlers and a media-query listener.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

### navDropdown()

<p>Factory for the nav-dropdown Alpine component.
Registered as <code>Alpine.data(&quot;navDropdown&quot;, navDropdown)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>open</code> <em>(boolean)</em> — Whether the dropdown is visible.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>toggle()</code> — Toggles the dropdown open/closed.</li>
<li><code>show()</code> — Opens the dropdown, cancelling any pending hide timer.</li>
<li><code>hide()</code> — Closes the dropdown after a 150 ms delay.</li>
<li><code>cancelHide()</code> — Cancels a pending hide (e.g. when re-entering the dropdown).</li>
<li><code>handleKeydown(e)</code> — Closes on Escape and returns focus to the trigger.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

### versionSwitcher()

<p>Factory for the version-switcher Alpine component.
Registered as <code>Alpine.data(&quot;versionSwitcher&quot;, versionSwitcher)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>open</code> <em>(boolean)</em> — Whether the version dropdown is visible.</li>
<li><code>versions</code> <em>(Array)</em> — Fetched array of <code>{ version, name, url }</code> objects.</li>
<li><code>currentLabel</code> <em>(string)</em> — Display label for the active version.</li>
<li><code>error</code> <em>(boolean)</em> — Whether version fetching failed.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>init()</code> — Reads config attributes and fetches the version manifest.</li>
<li><code>toggle()</code> — Toggles the dropdown open/closed.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

## UI Controls

### themeToggle()

<p>Factory for the theme-toggle Alpine component.
Registered as <code>Alpine.data(&quot;themeToggle&quot;, themeToggle)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>mode</code> <em>(string)</em> — Current mode: <code>&quot;auto&quot;</code>, <code>&quot;light&quot;</code>, or <code>&quot;dark&quot;</code>.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>init()</code> — Reads stored preference, applies the theme, and listens for OS changes.</li>
<li><code>cycle()</code> — Advances the mode: auto → light → dark → auto.</li>
<li><code>apply()</code> — Applies the effective theme to <code>document.documentElement</code>.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

### searchModal()

<p>Factory for the search modal Alpine component.
Registered as <code>Alpine.data(&quot;searchModal&quot;, searchModal)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>open</code> <em>(boolean)</em> — Whether the modal is visible.</li>
<li><code>query</code> <em>(string)</em> — Current search input value.</li>
<li><code>results</code> <em>(Array)</em> — Array of search result objects.</li>
<li><code>selectedIndex</code> <em>(number)</em> — Index of the keyboard-highlighted result.</li>
<li><code>loaded</code> <em>(boolean)</em> — Whether the search engine has been initialized.</li>
<li><code>error</code> <em>(string|null)</em> — Error message, if search initialization failed.</li>
<li><code>backend</code> <em>(string)</em> — Search backend: <code>&quot;pagefind&quot;</code> or <code>&quot;sphinx&quot;</code>.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>init()</code> — Sets up keyboard shortcuts and trigger buttons.</li>
<li><code>toggle()</code> — Opens or closes the modal.</li>
<li><code>openModal()</code> — Opens the modal, loads the search engine on first use.</li>
<li><code>close()</code> — Closes the modal and restores focus.</li>
<li><code>search()</code> — Runs a search query and populates results.</li>
<li><code>moveDown()</code> — Moves keyboard selection down.</li>
<li><code>moveUp()</code> — Moves keyboard selection up.</li>
<li><code>goToSelected()</code> — Navigates to the selected result.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

### backToTop()

<p>Factory for the back-to-top Alpine component.
Registered as <code>Alpine.data(&quot;backToTop&quot;, backToTop)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>visible</code> <em>(boolean)</em> — Whether the button is currently shown.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>init()</code> — Attaches a passive scroll listener.</li>
<li><code>destroy()</code> — Removes the scroll listener.</li>
<li><code>scrollToTop()</code> — Scrolls the page to the top, respecting reduced-motion preference.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

### announcementBanner()

<p>Factory for the announcement banner Alpine component.
Registered as <code>Alpine.data(&quot;announcementBanner&quot;, announcementBanner)</code>.</p>
<p><strong>Methods:</strong></p>
<ul>
<li><code>init()</code> — Reads the announcement ID from <code>data-announcement-id</code>.</li>
<li><code>dismiss()</code> — Hides the banner and persists the dismissal in localStorage.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

## Content Utilities

### headerLinks()

<p>Factory for the header-links Alpine component.
Registered as <code>Alpine.data(&quot;headerLinks&quot;, headerLinks)</code>.</p>
<p><strong>Methods:</strong></p>
<ul>
<li><code>init()</code> — Attaches click handlers to all <code>.headerlink</code> elements.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

### copyPage()

<p>Factory for the copy-page Alpine component.
Registered as <code>Alpine.data(&quot;copyPage&quot;, copyPage)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>copied</code> <em>(boolean)</em> — Briefly <code>true</code> after a successful copy.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>copy()</code> — Converts the article to Markdown and copies it to the clipboard.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

## API Tools

### curlCopyBtn()

<p>Alpine.js data factory for the per-endpoint copy-curl button.
Registered as <code>Alpine.data(&quot;curlCopyBtn&quot;, curlCopyBtn)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>copied</code> <em>(boolean)</em> — Briefly <code>true</code> after a successful copy.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>copy()</code> — Copies the pre-built curl command to the clipboard.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

### curlCopy()

<p>Boot function that scans the page for HTTP endpoints and injects
copy-curl buttons. Called from <code>boot()</code> in app.js after <code>Alpine.start()</code>.</p>

### tryItPanel()

<p>Alpine.js data factory for the interactive request panel.
Registered as <code>Alpine.data(&quot;tryItPanel&quot;, tryItPanel)</code>.</p>
<p><strong>Properties:</strong></p>
<ul>
<li><code>open</code> <em>(boolean)</em> — Whether the panel is expanded.</li>
<li><code>sending</code> <em>(boolean)</em> — True while a request is in-flight.</li>
<li><code>response</code> <em>(object|null)</em> — Last response (status, body, elapsed time).</li>
<li><code>method</code> <em>(string)</em> — HTTP method (GET, POST, etc.).</li>
<li><code>path</code> <em>(string)</em> — Endpoint path with <code>{param}</code> placeholders.</li>
<li><code>baseUrl</code> <em>(string)</em> — API base URL from theme options.</li>
</ul>
<p><strong>Methods:</strong></p>
<ul>
<li><code>init()</code> — Reads config injected by the boot function.</li>
<li><code>send()</code> — Sends the request and populates the response.</li>
<li><code>copyResponse()</code> — Copies the response body to the clipboard.</li>
<li><code>clear()</code> — Resets the response and error state.</li>
</ul>

* **Returns:**
  **object** – <p>Alpine.js component data.</p>

### tryIt()

<p>Boot function that scans the page for HTTP endpoints and injects
interactive &quot;Try It Out&quot; panels. Called from <code>boot()</code> in app.js
after <code>Alpine.start()</code>. Skipped if <code>data-try-it-out=&quot;false&quot;</code>
is set on <code>&lt;html&gt;</code>.</p>

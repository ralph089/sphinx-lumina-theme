"""Test that theme components render correctly."""


def test_header_contains_project_name(index_html):
    """Header should display the project name."""
    header = index_html.find(id="lumina-header")
    assert "Test Project" in header.get_text()


def test_header_has_search_trigger(index_html):
    """Header should have a search button."""
    header = index_html.find(id="lumina-header")
    search_btn = header.find(attrs={"data-search-trigger": True})
    assert search_btn is not None, "Missing search trigger button"


def test_header_has_theme_toggle(index_html):
    """Header should have a dark mode toggle button."""
    header = index_html.find(id="lumina-header")
    toggle = header.find(attrs={"data-theme-toggle": True})
    assert toggle is not None, "Missing theme toggle button"


def test_sidebar_has_navigation(index_html):
    """Sidebar should contain navigation from toctree."""
    sidebar = index_html.find(id="lumina-sidebar")
    nav = sidebar.find("nav")
    assert nav is not None, "Missing nav element in sidebar"


def test_sidebar_has_aria_label(index_html):
    """Sidebar nav should have accessible label."""
    sidebar = index_html.find(id="lumina-sidebar")
    nav = sidebar.find("nav", attrs={"aria-label": True})
    assert nav is not None, "Missing aria-label on sidebar nav"


def test_sidebar_nav_has_alpine_hook(index_html):
    """Sidebar nav should be bound to the sidebarNav Alpine component."""
    sidebar = index_html.find(id="lumina-sidebar")
    nav = sidebar.find("nav", attrs={"x-data": "sidebarNav()"})
    assert nav is not None, "Sidebar nav is missing x-data='sidebarNav()'"


def test_sidebar_marks_nav_collapsed_metadata(index_html):
    """Pages with ``nav_collapsed: true`` metadata should get the
    ``data-nav-collapsed`` attribute on their toctree <li>."""
    sidebar = index_html.find(id="lumina-sidebar")
    nav = sidebar.find("nav", class_="lumina-sidebar-nav")
    # guides/index.md in sample_docs has nav_collapsed: true
    collapsed_li = nav.find("li", attrs={"data-nav-collapsed": "true"})
    assert collapsed_li is not None, (
        "Expected a toctree <li> tagged data-nav-collapsed=true for guides/index"
    )
    link = collapsed_li.find("a")
    assert link is not None and "Guides" in link.get_text()


def test_toc_has_page_headings(index_html):
    """Right TOC should contain links to page sections."""
    toc = index_html.find(id="lumina-toc")
    links = toc.find_all("a")
    texts = [a.get_text(strip=True) for a in links]
    assert "Section One" in texts
    assert "Section Two" in texts

"""Utility functions for rendering Lucide icons as inline SVG."""

from markupsafe import Markup


def get_icon_svg(name, size=24, css_class="", stroke_width=2):
    """Return inline SVG markup for a Lucide icon name.

    Returns empty string if the icon name is not found.
    """
    from ._icons import ICONS

    inner = ICONS.get(name)
    if not inner:
        return ""

    cls = f' class="{css_class}"' if css_class else ""
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" '
        f'viewBox="0 0 24 24" fill="none" stroke="currentColor" '
        f'stroke-width="{stroke_width}" stroke-linecap="round" '
        f'stroke-linejoin="round"{cls} aria-hidden="true">'
        f"{inner}</svg>"
    )
    return Markup(svg)

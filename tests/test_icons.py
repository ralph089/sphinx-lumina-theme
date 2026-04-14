"""Tests for the Lucide icon system."""


from sphinx_lumina_theme._icon_utils import get_icon_svg


class TestGetIconSvg:
    """Tests for the get_icon_svg() render function."""

    def test_valid_icon_returns_svg(self):
        result = get_icon_svg("rocket")
        assert result.startswith("<svg ")
        assert 'aria-hidden="true"' in result
        assert "</svg>" in result

    def test_invalid_icon_returns_empty(self):
        result = get_icon_svg("nonexistent-icon-xyz")
        assert result == ""

    def test_custom_size(self):
        result = get_icon_svg("rocket", size=16)
        assert 'width="16"' in result
        assert 'height="16"' in result

    def test_default_size_is_24(self):
        result = get_icon_svg("rocket")
        assert 'width="24"' in result
        assert 'height="24"' in result

    def test_css_class(self):
        result = get_icon_svg("rocket", css_class="lumina-icon")
        assert 'class="lumina-icon"' in result

    def test_no_class_when_empty(self):
        result = get_icon_svg("rocket")
        assert "class=" not in result

    def test_stroke_attributes(self):
        result = get_icon_svg("rocket")
        assert 'stroke="currentColor"' in result
        assert 'stroke-linecap="round"' in result
        assert 'stroke-linejoin="round"' in result
        assert 'fill="none"' in result

    def test_custom_stroke_width(self):
        result = get_icon_svg("rocket", stroke_width=1.5)
        assert 'stroke-width="1.5"' in result

    def test_viewbox_always_24(self):
        """ViewBox is always 0 0 24 24 regardless of size param."""
        result = get_icon_svg("rocket", size=16)
        assert 'viewBox="0 0 24 24"' in result

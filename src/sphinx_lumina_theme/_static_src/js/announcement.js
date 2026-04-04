export default function announcementBanner() {
  return {
    dismissed: false,

    init() {
      const el = this.$el;
      const id = el.getAttribute("data-announcement-id");
      if (id && localStorage.getItem("lumina-announce-" + id) === "1") {
        this.dismissed = true;
      } else {
        this.dismissed = false;
      }
    },

    dismiss() {
      const el = this.$el;
      const id = el.getAttribute("data-announcement-id");
      if (id) {
        localStorage.setItem("lumina-announce-" + id, "1");
      }
      this.dismissed = true;
    },
  };
}

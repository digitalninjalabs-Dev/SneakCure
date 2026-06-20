/** Free CPU/network before route change completes — especially when leaving the homepage. */
export function prepareForNavigation() {
  document.querySelectorAll("video").forEach((video) => {
    video.pause();
  });

  window.dispatchEvent(new CustomEvent("sneakcure:navigate"));
}

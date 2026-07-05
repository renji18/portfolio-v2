function resetScroll() {
  window.scrollTo(0, 0);
  document.documentElement.style.scrollBehavior = "smooth";
  const scrollableContainer = document.querySelector("#home");
  if (scrollableContainer) scrollableContainer.scrollTop = 0;
}

export default resetScroll;

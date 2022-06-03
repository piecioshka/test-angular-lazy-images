export const intersectionHelper = ($el: HTMLImageElement) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $el.src = $el.dataset.src;
        observer.disconnect();
      }
    });
  });
  observer.observe($el);
};

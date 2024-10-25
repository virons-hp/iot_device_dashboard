const scrollRevealoption = {
  distance: "100px",
  // origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".iotProductSection", {
  ...scrollRevealoption,
  origin: "bottom",
});

ScrollReveal().reveal(".videoBgContainerHeadingText h1", {
  ...scrollRevealoption,
  origin: "left",
});

ScrollReveal().reveal(".videoBgContainerHeadingText p", {
  ...scrollRevealoption,
  origin: "right",
});


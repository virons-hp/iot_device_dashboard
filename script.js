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

ScrollReveal().reveal(".iotFeatureSection h1", {
  ...scrollRevealoption,
  origin: "bottom",
});

ScrollReveal().reveal(".iotFeatureDescription", {
  ...scrollRevealoption,
  origin: "left",
});

ScrollReveal().reveal(".iotFeatureSectionImage", {
  ...scrollRevealoption,
  origin: "right",
});

ScrollReveal().reveal(".testimonialHeading", {
  ...scrollRevealoption,
  origin: "bottom",
});

ScrollReveal().reveal("#testimonial-card1", {
  ...scrollRevealoption,
  origin: "left",
});

ScrollReveal().reveal("#testimonial-card2", {
  ...scrollRevealoption,
  origin: "bottom",
});

ScrollReveal().reveal("#testimonial-card3", {
  ...scrollRevealoption,
  origin: "right",
});

// login pop form
// Get modal, button, and close elements
const modal = document.getElementById("loginModal");

const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.getElementsByClassName("close")[0];

// for learn more button
function learnMoreBtn() {
  modal.style.display = "block";
}

// Open modal on button click
loginBtn.onclick = function () {
  modal.style.display = "block";
};

// Close modal when clicking on the close button
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside of modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

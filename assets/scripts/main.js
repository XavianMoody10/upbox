"use strict";

// TOGGLE MOBILE MENU
function toggleMobileMenu() {
  const mobileIcon = document.querySelector(".mobile-header__icon");
  const navigation = document.querySelector(".mobile-header__navigation");
  const openClass = "mobile-header__navigation--open";
  const closeClass = "mobile-header__navigation--close";

  // Toggles icon style
  function changeIcon() {
    if (mobileIcon.classList.contains("fa-bars")) {
      mobileIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
      mobileIcon.classList.replace("fa-xmark", "fa-bars");
    }
  }

  // Toggles menu open and close
  function toggleMenu() {
    if (navigation.classList.contains(openClass)) {
      navigation.classList.replace(openClass, closeClass);
    } else if (navigation.classList.contains(closeClass)) {
      navigation.classList.replace(closeClass, openClass);
    } else {
      navigation.classList.add(openClass);
    }
  }

  mobileIcon.addEventListener("click", () => {
    changeIcon();
    toggleMenu();
  });
}

// USE INTERSECTION OBSERVER TO ADD ANIMATION WHEN SCROLLING
function observeAnimations() {
  // Declare elements
  const steps = document.querySelectorAll(".step");

  // Intersection observer options
  let options = {
    threshold: 0.8,
  };

  // Callback
  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("step--animate");
      } else if (entry.intersectionRatio === 0) {
        entry.target.classList.remove("step--animate");
      }
    });
  };

  // Initiate observer
  let observer = new IntersectionObserver(callback, options);

  // Loop and observe each element
  steps.forEach((el) => {
    observer.observe(el);
  });
}

toggleMobileMenu();
window.addEventListener("scroll", observeAnimations);

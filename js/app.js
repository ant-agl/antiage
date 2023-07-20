// faq
const faq = document.querySelectorAll("[faq-js] .item");

if (faq) {
  document.addEventListener("click", (e) => {
    if (!e.target.closest("[faq-js] .item")) {
      faq.forEach((elem) => {
        elem.classList.remove("active");
        elem.removeAttribute("active");
      });
    }
  });

  faq.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (item.getAttribute("active")) {
        if (e.target.closest(".item")) {
          if (!e.target.closest(".link")) {
            faq.forEach((elem) => {
              elem.classList.remove("active");
              elem.removeAttribute("active");
            });
            item.classList.remove("active");
            item.removeAttribute("active");
          }
        }
      } else {
        if (e.target.closest(".item")) {
          if (!e.target.closest(".link")) {
            faq.forEach((elem) => {
              elem.classList.remove("active");
              elem.removeAttribute("active");
            });
            item.classList.add("active");
            item.setAttribute("active", "active");
          }
        }
      }
    });
  });
}
// /

// header lang
const headerLang = document.querySelector(".header-lang");

if (headerLang) {
  headerLang.addEventListener("click", (e) => {
    e.preventDefault();

    headerLang.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-lang")) {
      headerLang.classList.remove("active");
    }
  });
}
// /

// header menu
const headerMenuDrop = document.querySelectorAll(".header-menu-drop");

if (headerMenuDrop) {
  headerMenuDrop.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      item.classList.toggle("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-menu-drop")) {
      headerMenuDrop.forEach((item) => {
        item.classList.remove("active");
      });
    }
  });
}
// /

// modal
const modalJs = document.querySelectorAll("[data-modal]"),
  dataOpenModal = document.querySelectorAll("[data-open-modal]");

let countZIndex = 1000;

const modalOpen = (modal) => {
  modal.classList.add("active");

  setTimeout(() => {
    modal.style.opacity = "1";
  }, 0);

  countZIndex = countZIndex + 1;
  modal.style.zIndex = countZIndex;

  document.body.style.overflow = "hidden";
};

const modalClose = (modal) => {
  modal.style.opacity = "0";

  setTimeout(() => {
    modal.classList.remove("active");
  }, 300);

  document.body.style.overflow = "";
  modal.style.zIndex = "";
};

if (modalJs) {
  dataOpenModal.forEach((open) => {
    open.addEventListener("click", (e) => {
      e.preventDefault();

      modalJs.forEach((modal) => {
        if (open.dataset.openModal === modal.dataset.modal) {
          modalOpen(modal);
        }
      });
    });
  });

  modalJs.forEach((modal) => {
    const modalCloseList = modal.querySelectorAll("[modal-close]");
    const modalBg = modal.querySelector("[modal-bg]");

    modal.style.opacity = "0";

    if (modal.dataset.modal !== "menu-m") {
      modal.addEventListener("click", (e) => {
        const closest = e.target.closest(".modal-content");

        if (!closest) {
          modalClose(modal);
        }
      });
    }

    if (modalCloseList) {
      modalCloseList.forEach((elem) => {
        if (elem) {
          elem.addEventListener("click", () => {
            modalClose(modal);
          });
        }
      });
    }
    if (modalBg) {
      modalBg.addEventListener("click", () => {
        modalClose(modal);
      });
    }
  });
}
//

// add active
const addActive = document.querySelectorAll("[add-active]");

if (addActive) {
  addActive.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      item.classList.toggle("active");
    });
  });
}
//

// fancybox
Fancybox.bind("[data-fancybox]", {});
// /

// swiper
const swiperMentoringItems = new Swiper(".swiper-mentoring-items", {
  slidesPerView: "auto",
  spaceBetween: 40,
  breakpoints: {
    320: {
      spaceBetween: 10,
      touchRatio: 1,
      slideToClickedSlide: false,
      pagination: {
        el: ".swiper-pagination-mentoring-items",
        type: "bullets",
      },
    },
    670: {
      spaceBetween: 10,
      touchRatio: 1,
      slideToClickedSlide: false,
    },
    1080: {
      spaceBetween: 40,
      touchRatio: 0,
      slideToClickedSlide: true,
    },
  },
});

const swiperStepsExpert = new Swiper(".swiper-steps-expert", {
  slidesPerView: "auto",
  spaceBetween: 40,
  breakpoints: {
    320: {
      spaceBetween: 10,
      touchRatio: 1,
      slideToClickedSlide: false,
      centeredSlides: true,
    },
    670: {
      spaceBetween: 10,
      touchRatio: 1,
      slideToClickedSlide: false,
    },
    1080: {
      spaceBetween: 40,
      touchRatio: 0,
      slideToClickedSlide: true,
    },
  },
});

const swiperMentoring = new Swiper(".swiper-mentoring", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 70,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination-mentoring-items",
        type: "bullets",
      },
    },

    // when window width is >= 640px
    1080: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-mentoring",
    prevEl: ".swiper-button-prev-mentoring",
  },
});

const swiperReview = new Swiper(".swiper-review", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination-review",
        type: "bullets",
      },
    },
    670: {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination-review",
        type: "bullets",
      },
    },
    // when window width is >= 640px
    1080: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-review",
    prevEl: ".swiper-button-prev-review",
  },
});

const swiperReviewVideo = new Swiper(".swiper-review-video", {
  // Default parameters
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next-review-video",
    prevEl: ".swiper-button-prev-review-video",
  },
});
swiperReviewVideo.activeIndex = 2;
const swiperProgram = new Swiper(".swiper-program", {
  // Default parameters
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next-program",
    prevEl: ".swiper-button-prev-program",
  },
  breakpoints: {
    320: {
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination-program",
        type: "bullets",
      },
    },
    670: {
      spaceBetween: 10,
    },
    1080: {
      spaceBetween: 30,
    },
  },
});

const swiperPersonal = new Swiper(".swiper-personal", {
  slidesPerView: "auto",
  spaceBetween: 20,
  breakpoints: {
    320: {
      spaceBetween: 6,
      touchRatio: 1,
      slideToClickedSlide: false,
    },
    1080: {
      spaceBetween: 20,
      touchRatio: 0,
      slideToClickedSlide: true,
    },
  },
});
// /

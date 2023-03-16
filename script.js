// Select all accordion items
const accordionBtns = document.querySelectorAll(".accordion");

// Iterate to add event listeners
accordionBtns.forEach((item) => {
  item.addEventListener("click", function () {
    // When it's clicked, loop through all the items
    accordionBtns.forEach((el) => {
      // Close any open items
      if (el.classList.contains("is-open")) {
        closeAcc(el);
        // If it's the one that was clicked and it's closed, open it
      } else if (el === item) {
        openAcc(el);
      }
    });
  });
});

function closeAcc(el) {
  el.classList.remove("is-open");
  el.nextElementSibling.setAttribute(
    "style",
    "max-height: null; padding-bottom: null; border-bottom: null"
  );
}

function openAcc(el) {
  el.classList.add("is-open");
  el.nextElementSibling.setAttribute(
    "style",
    `max-height: ${
      el.nextElementSibling.scrollHeight + 14 + "px"
    }; padding-bottom: 14px; border-bottom: 1px solid var(--light-grayish-blue)`
  );
}

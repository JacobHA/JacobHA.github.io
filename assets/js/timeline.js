document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("show-more-btn");
  const hiddenItems = document.querySelectorAll(".timeline-entry.hidden");
  let expanded = false;

  button.addEventListener("click", function() {
    if (!expanded) {
      hiddenItems.forEach(el => el.classList.remove("hidden"));
      button.textContent = "Show Less";
      expanded = true;
    } else {
      hiddenItems.forEach(el => el.classList.add("hidden"));
      button.textContent = "Show More";
      expanded = false;
      window.scrollTo({ top: button.offsetTop - 200, behavior: "smooth" });
    }
  });
});

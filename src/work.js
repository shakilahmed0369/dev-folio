const projectItems = document.querySelectorAll(".project-card");
const projectCategories = document.querySelector(".project-categories");

// Handle project category filtering
projectCategories.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const category = e.target.dataset.category;
    // Remove the currently active category button
    const activeBtn = projectCategories.querySelector(".active");
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }
    // Set clicked button as active
    e.target.classList.add("active");

    // Show/hide project items based on selected category
    projectItems.forEach((item) => {
      if (category === "all" || item.classList.contains(category)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }
});

// Automatically trigger click on first category button to initialize filtering
const firstCategoryBtn = projectCategories.querySelector("button");
if (firstCategoryBtn) {
  firstCategoryBtn.click();
}

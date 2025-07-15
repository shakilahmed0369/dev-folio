import './style.css';

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const projectCategories = document.querySelector('.project-categories');
const projectsGrid = document.querySelector('.projects-grid');
const projectItems = document.querySelectorAll('.project-item');


menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

projectCategories.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const category = e.target.dataset.category;
    // remove active 
    const activeBtn = projectCategories.querySelector('.active');
    activeBtn.classList.remove('active');
    // add active 
    e.target.classList.add('active');

    projectItems.forEach((item) => {
      console.log(item);
      if (category === 'all' || item.classList.contains(category)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }
});

// click on first category initial
const firstCategoryBtn = projectCategories.querySelector('button');
firstCategoryBtn.click();


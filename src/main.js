import './style.css';

// Get references to navigation and project filtering DOM elements
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const projectCategories = document.querySelector('.project-categories');
const projectItems = document.querySelectorAll('.project-card');

// Toggle mobile menu visibility when hamburger icon is clicked
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Handle project category filtering
projectCategories.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const category = e.target.dataset.category;
    // Remove the currently active category button
    const activeBtn = projectCategories.querySelector('.active');
    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
    // Set clicked button as active
    e.target.classList.add('active');

    // Show/hide project items based on selected category
    projectItems.forEach((item) => {
      if (category === 'all' || item.classList.contains(category)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }
});

// Automatically trigger click on first category button to initialize filtering
const firstCategoryBtn = projectCategories.querySelector('button');
if (firstCategoryBtn) {
  firstCategoryBtn.click();
}


// Floating project image effect
// This script assumes each .project-card has a data-image attribute with the image path

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.project-card');
  let floatingImg = null;

  function createFloatingImg(src) {
    floatingImg = document.createElement('img');
    floatingImg.src = src;
    floatingImg.className = 'floating-project-img pointer-events-none';
    floatingImg.style.position = 'fixed';
    floatingImg.style.zIndex = '9999';
    floatingImg.style.width = '260px';
    floatingImg.style.height = '360px';
    floatingImg.style.objectFit = 'cover';
    floatingImg.style.borderRadius = '1rem';
    floatingImg.style.boxShadow = '0 8px 32px rgba(0,0,0,0.22)';
    floatingImg.style.transition = 'opacity 0.25s, transform 0.25s';
    floatingImg.style.opacity = 1;
    document.body.appendChild(floatingImg);
  }

  function moveFloatingImg(e) {
    if (floatingImg) {
      floatingImg.style.left = e.clientX + 24 + 'px';
      floatingImg.style.top = e.clientY - 40 + 'px';
    }
  }

  function removeFloatingImg() {
    if (floatingImg) {
      floatingImg.remove();
      floatingImg = null;
    }
  }

  cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      const imgSrc = card.getAttribute('data-image');
      if (imgSrc) {
        createFloatingImg(imgSrc);
        moveFloatingImg(e);
      }
    });
    card.addEventListener('mousemove', moveFloatingImg);
    card.addEventListener('mouseleave', removeFloatingImg);
  });
});


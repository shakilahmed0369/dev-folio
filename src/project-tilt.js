// Adds 3D teal effect to .project-item on cursor move

document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('mousemove', function(e) {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 4; // max 4deg (less 3D)
    const rotateY = ((x - centerX) / centerX) * 4;
    item.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    item.classList.add('project-item-3d');
  });
  item.addEventListener('mouseleave', function() {
    item.style.transform = '';
    item.classList.remove('project-item-3d');
  });
});

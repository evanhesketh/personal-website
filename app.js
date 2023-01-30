window.onload = function() {
  const options = {
    rootMargin: '0px 0px -200px 0px'
  }

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
         entry.target.classList.remove('show');
      } else {
        entry.target.classList.add('show');
      }
    })
  }, options);
  const hidden = document.querySelectorAll('.fade-in');
  hidden.forEach(el => appearOnScroll.observe(el));

  let menu = document.querySelector('.menu-icon');

  menu.addEventListener('click', function() {
    let navLinks = document.querySelector('.nav-links');

    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    }
    else {
      navLinks.style.display = 'block';
    }
  });

  }


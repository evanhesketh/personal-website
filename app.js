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
}


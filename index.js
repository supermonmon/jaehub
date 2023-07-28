const navEl = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 36){
                navEl.classList.add('navbar-scrolled');
            }
            else
                navEl.classList.remove('navbar-scrolled');
        });


var typed = new Typed('#hero-text-emphasize', {
    strings: ['Web Service Solution.'],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
    smartBackspace: true,
    backDelay: 2500,
  });

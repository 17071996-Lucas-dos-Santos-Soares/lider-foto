$(document).ready(function () {  
  // Scroll para seções
  let navBtn = $('.nav-item');
  let bannerSection = $('#header');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let teamSection = $('#team-area');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function () {

    let btnId = $(this).attr('id');

    if (btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if (btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if (btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if (btnId == 'portfolio-menu') {
      scrollTo = portfolioSection;
    } else if (btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
    }, 1400);
  });

});
// animações
window.revelar = ScrollReveal({reset:true})
revelar.reveal('.main-title', {
  duration: 2000,
  distance: '90px'
})

revelar.reveal('.service1', {
  duration: 2000,
  distance: '90px',
  delay: 500,
  origin: 'left'
})

revelar.reveal('.service2', {
  duration: 2000,
  distance: '90px',
  delay: 700,
  origin: 'top'
})

revelar.reveal('.service3', {
  duration: 2000,
  distance: '90px',
  delay: 900,
  origin: 'right'
})

revelar.reveal('.service4', {
  duration: 2000,
  distance: '90px',
  delay: 1000,
  origin: 'left'
})

revelar.reveal('.service5', {
  duration: 2000,
  distance: '90px',
  delay: 1200,
  origin: 'bottom'
})

revelar.reveal('.service6', {
  duration: 2000,
  distance: '90px',
  delay: 1400,
  origin: 'right'
})
revelar.reveal('.service7', {
  duration: 2000,
  distance: '90px',
  delay: 1000,
  origin: 'left'
})
revelar.reveal('.about-img', {
  duration: 2000,
  distance: '90px',
  delay: 500,
  origin: 'left'
})

revelar.reveal('.about-text', {
  duration: 2000,
  distance: '90px',
  delay: 1000,
  origin: 'right'
})

revelar.reveal('.animate-products', {
  duration: 2000,
  distance: '90px'
})

revelar.reveal('.fone', {
  duration: 2000,
  distance: '90px',
  delay: 400,
  origin:'left'
})

revelar.reveal('.email', {
  duration: 2000,
  distance: '90px',
  delay: 500,
  origin: 'left'
})

revelar.reveal('.local', {
  duration: 2000,
  distance: '90px',
  delay: 600,
  origin: 'bottom'
})
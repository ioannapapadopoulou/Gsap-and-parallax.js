//parallax

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);


//Swiper

let keys = [
    'Gryffindor',
    'Slytherin',
    'Revenclaw',
    'Hufflepuff'
];
var slider = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
      el: ".magic-links",
      clickable: true,
      renderBullet: function(index, className) {
        return '<div class="' + className + '">' + keys[index] + "</div>";
      }
    }
  });

  //Slide Animation

slider.on('slideChange', function() {
  gsap.to('.slide-detail span', 1, {
    y: "950px"
  });
  gsap.to('.slide-detail-facts div', 0.9 , {
    x: '-1000px'
  });
  gsap.to(".slide-text span", 1, {
    y: "-100px"
  });
  gsap.to('.slide-img', 0.9, {
    y: 80
    });
});

slider.on('slideChangeTransitionEnd', function() {
  gsap.to('.slide-detail span', 0.6, {
    y: 0
  });
  gsap.to('.slide-detail-facts div', 1, {
    x: 0
  });
  gsap.to(".slide-text span", 0.2, {
    y: 0,
    delay: 0.1
  });
  gsap.to(".slide-text span", 0, {
    y: "100px"
  });
  gsap.from('.slide-img' , 0.9, {
    y: -150,
  });  
});
  

  
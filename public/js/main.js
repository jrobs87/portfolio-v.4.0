

$(document).ready(() => {
    // Materialize component initialization
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.fixed-action-btn').floatingActionButton();

    // Scroll speed manipulation
    // https://github.com/nathco/jQuery.scrollSpeed
    // $(function () {
    //     // Default
    //     // jQuery.scrollSpeed(100, 100);
    //     // Custom Easing
    //     jQuery.scrollSpeed(10, 10, 'easeOutCubic');
    // });

    // Skew on scroll setup
    // https://www.jqueryscript.net/animation/Skew-Effect-On-Scroll-mdSkew.html
  
    


// Wrap every letter in a span
$('.ml12').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml12 .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 500 + 30 * i;
      }
    })
    // .add({
    //   targets: '.ml12 .letter',
    //   translateX: [0,-30],
    //   opacity: [1,0],
    //   easing: "easeInExpo",
    //   duration: 1100,
    //   delay: function(el, i) {
    //     return 100 + 30 * i;
    //   }
    // });


    
})




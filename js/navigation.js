  $(document).ready(function slider__pictureNumber() {
    var $elem = $('.carousel-inner');
    var $slider = $elem.closest(".carousel");
    var counter = $("div", $elem).length;
    var carouselIndicators = $slider.find('.carousel-indicators');
    var carouselControlPrev = $slider.find('.carousel-control-prev');
    var carouselControlNext = $slider.find('.carousel-control-next');


    if (counter < 2) {
      carouselIndicators.hide();
      carouselControlPrev.hide();
      carouselControlNext.hide();
    }
  });
  
  $(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});



// play audio clips

$('.clip').click(function(e){
  var counter = $('.counter', this);
  var clip = $('.audio-clip-itself',this)[0];
  var clipduration = 30; 
  var clipcurrent = clip.currentTime;
  var showcurrent = 0;
  
  if (clip.paused == false) {
    clip.pause();
  } else {
    $('.clip .audio-clip-itself').not(clip).each(function(){
      this.pause();
      this.currentTime = 0;
    });
    clip.play();
    clip.addEventListener('ended', function(){
      counter.addClass('transition');
      setTimeout(function(){
        counter.css('width','0');
      }, 300); // 250 plus buffer
      setTimeout(function(){
        counter.removeClass('transition');
      },600);
    });
    clip.addEventListener('timeupdate', function(){
      clipduration = clip.duration;
      clipcurrent = clip.currentTime;
      showcurrent = (clipcurrent / clipduration) * 100;
      counter.css('width',showcurrent + '%');
    });
  }

  e.preventDefault();
});


// show label

$('.labeled-trigger').click(function(){
  $('.labeled-trigger, .labeled-caption').removeClass('active');
  $(this).addClass('active');
  $(this).next().addClass('active');
});
// close label

$('.labeled-close, .labeled-caption').click(function(){
  $('.labeled-trigger, .labeled-caption').removeClass('active');
});

// hamburger menu show/hide

$(".hamburger").click(function() {
  $(this).hide();
  $('.cross').show();
  $(".menu").slideToggle();
});
$(".cross").click(function() {
  $(this).hide();
  $('.hamburger').show();
  $(".menu").slideToggle();
});
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

    
      $('.labeled').each(function(){

        var w = window.innerWidth;
        
        if( w < 620) {

          var multiplier = 1;

        } else if (w >= 620) {
          
          var multiplier = 2;

        } else if (w >= 1300) {

          var multiplier = 4;

        }
        // get the current values
        var thisx = $(this).data('xvalue');
        var thisy = $(this).data('yvalue');
        // now bump them up
        $(this).css({
          'left' : thisx * multiplier,
          'top' : thisy * multiplier
        });
      });
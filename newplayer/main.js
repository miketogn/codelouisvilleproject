      $('.clip').click(function(e){
        var counter = $('.counter', this);
        var clip = $('.audio-clip-itself',this)[0];
        var clipduration = 30; // start with 30 sec since audio isn't loaded yet;
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
    }
    ,audioClipInfo: function(){
        
      $('.clip-info-icon').click(function(){
        var thisdescription = $(this).next();

        if(thisdescription.hasClass('active')) {
          $('.clip-description').removeClass('active');
          thisdescription.slideUp(300).removeClass('active');
        } else {
          $('.clip-description').slideUp(300).removeClass('active');
          thisdescription.slideDown(300).addClass('active');
        }
      });
      
      $('.clip-description').click(function(){
        $(this).slideUp(300).removeClass('active');
      });

    }
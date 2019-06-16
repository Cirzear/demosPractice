$(function () {
    let prevBtn = $('.button-prev');
    let nextBtn = $('.button-next');
    let btns = $('.pagination > ul > li');
    let imgs = $('.lb_img');
    let current = 0, next = 0;
    let flag = true;
    let w = imgs[0].offsetWidth;

    imgs.eq(0).css({'left':0});
    nextBtn.click(function () {
        if (!flag) {
            return;
        }
        flag = false;
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        $(imgs[next]).css({left: w});
        $(imgs[current]).animate({left: -w});
        $(imgs[next]).animate({left: 0}, function () {
            flag = true;
        });
        btns.eq(next).addClass('point').end().eq(current).removeClass('point');
        current = next;

    });
    prevBtn.click(function () {
        if (!flag) {
            return;
        }
        flag = false;
        next--;
        if (next < 0) {
            next = imgs.length - 1;
        }
        $(imgs[next]).css({left: -w});
        $(imgs[current]).animate({left: w});
        $(imgs[next]).animate({left: 0}, function () {
            flag = true;
        });
        btns.eq(next).addClass('point').end().eq(current).removeClass('point');
        current = next;
    });

////////////////点//////////////////
    for(let i =0; i<btns.length; i++){
        // console.log($(btns[i]));
        btns[i].click = function() {
            if (current === i){
                return;
            }
            next = i;
            if(current < next){
                imgs[next].css({'left':w});
                imgs[current].animate({left:-w});
                imgs[next].animate({left:-w});
            }else {
                imgs[next].css({'left': -w});
                imgs[current].animate({left: w});
                imgs[next].animate({left: 0});
            }
            current = next;

        }


    }

    
    let bp = $(".container");
    let t = setInterval(function () {
        nextBtn.click();
    }, 1000);

    bp[0].onmouseover = function () {
        clearInterval(t)
    };

    bp[0].onmouseout = function () {
        t = setInterval(function () {
            nextBtn.click();
        }, 1000);
    };




})

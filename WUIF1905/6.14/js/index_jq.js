$(function () {
    let current = 0, next = 0;
    let btns = $("li");
    let imgs = $('.wrapper > .lb_img');
    let prev = $(".prev_button");
    let nexts = $(".next_button");
    let flag = true;
    let w = imgs[0].offsetWidth;
    console.log(imgs.length, w);
    prev.click(function () {
        if (!flag){
            return;
        }
        flag =false;
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        imgs[next].css({'left':w});
        imgs[current].animate({left: -w});
        imgs[next].animate({left: 0} ,function () {
            flag =true;
        });
        current = next;

    });
    nexts.click(function () {
        if (!flag){
            return;
        }
        flag =false;
        next--;
        if (next < 0) {
            next = imgs.length - 1;
        }
        imgs[next].style.left = -w + 'px';
        imgs[current].animate({left: w});
        imgs[next].animate({left: 0} ,function () {
            flag =true;
        });
        current = next;

    });

    let t = setInterval(function () {
        nexts.click();
    }, 2500);

    imgs[0].mouseenter = function () {
        clearInterval(t)
    };
    imgs[0].mouseleave = function () {
        t = setInterval(function () {
            nexts.click();
        }, 2500);
    };

});


let ad = document.querySelector('.ad');

let h =parseInt( getComputedStyle(ad,null).height);

let w = parseInt(getComputedStyle(ad,null).width);

let maxh = window.innerHeight - h;

let maxw = window.innerWidth - w;

let speed = 10;

let wspeed = 10;

let tops = parseInt(getComputedStyle(ad,null).top);

let lefts = parseInt(getComputedStyle(ad,null).left)

console.log(maxw,maxh);

window.onload = function () {

    setInterval(function () {
        if(tops >= 0){
            tops += speed;
            ad.style.top = tops + 'px';

            if(tops > maxh){
                speed *= -1;
            }
        }
        else if(tops < 0){
            speed *=-1;
            tops += speed;
            ad.style.top = tops + 'px';
        }


        if(lefts >= 0){
            lefts += wspeed;
            ad.style.left = lefts + 'px';

            if(lefts > 1158){
                wspeed *= -1;
            }
        }
        else if(lefts < 0){
            wspeed *=-1;
            lefts += wspeed;
            ad.style.left = lefts + 'px';
        }

    },100);

}

    let cateTitles = document.getElementsByClassName('category_title');

    let cateTitle = cateTitles[0].getElementsByTagName('li');

       for(let i =0; i<cateTitle.length; i++){
        cateTitle[i].onclick = function(){

            for(let j =0; j<cateTitle.length; j++){
                //注意！！！！这里不能用this.style否则无效，找了半小时bug草
               cateTitle[j].style.borderBottom= 'none';
            }

            cateTitle[i].style.borderBottom= '2px solid #000';
        }
       }

       //鼠标移入移出事件
    let cateContents = document.getElementsByClassName('category_content');

    let cateContent = cateContents[0].getElementsByTagName('li');

    let hs = cateContents[0].querySelectorAll('h4');

    console.log(hs);
    for (let i =0; i<cateContent.length;i++){
        cateContent[i].onmouseenter =function () {

            for (let j=0;j<cateContent.length;j++){
                cateContent[j].className='';
            }

            this.className = 'open';
        }
    }
    for (let i = 0; i<cateContent.length;i++){
        cateContent[i].onmouseleave =function () {
            this.className = '';
        }
    }

    cateContents[0].getElementsByTagName('ul')[0].onmouseleave = function (){

        cateContent[0].className = 'open'

    }

    //轮播图的js效果
  let images = document.getElementsByClassName('wrapper');

  let image = images[0].getElementsByClassName('lb_img');

  let dots = document.getElementsByClassName('pagination');

  let dot = dots[0].getElementsByTagName('li');

  let prev = document.getElementsByClassName('button-prev');

  let next = document.getElementsByClassName('button-next');

  for (let i = 0; i<dot.length; i++){
      dot[i].onclick = function(){
          for(let i =0;i<image.length;i++){
              image[i].style.display = 'none';
          }
          image[i].style.display = 'block';
      }
  }

  prev[0].onclick = function () {
      let index = 0;
      for (let i =0; i<image.length;i++){
          if (image[i].style.display == 'block'){
              index = i;
              break;
          }
      }
      for(let i = 0; i<image.length; i++){

          image[i].style.display ='none'

      }
      while(index == 0){
          index =image.length;
      }
      for (let i = 0; i<dot.length; i++){
          dot[i].style.backgroundColor = '#ffffff';
      }
        dot[index-1].style.backgroundColor = '#007aff'
      setTimeout(function () {
          for (let i = 0; i<dot.length; i++){
              dot[i].style.backgroundColor = '#ffffff';
          }
      },1000)
          image[index-1].style.display = 'block'

  }

    next[0].onclick = function () {
        let index = 0;
        for (let i =0; i<image.length;i++){
            if (image[i].style.display == 'block'){
                index = i;
                break;
            }
        }
        for(let i = 0; i<image.length; i++){
            image[i].style.display ='none'

        }

        while(index == image.length-1){
            index =-1;
        }
        for (let i = 0; i<dot.length; i++){
            dot[i].style.backgroundColor = '#ffffff';
        }

        dot[index+1].style.backgroundColor = '#007aff'
        setTimeout(function () {
            for (let i = 0; i<dot.length; i++){
                dot[i].style.backgroundColor = '#ffffff';
            }
        },1000)
        image[index+1].style.display = 'block'

    }

    let t = setInterval(next[0].onclick,5000);
  window.onload = function(){

     t;

  }

    images[0].onmouseenter = function (){
      clearInterval(t);
    }
    images[0].onmouseleave = function(){
      t = setInterval(next[0].onclick,5000);
    }


    console.log(image);

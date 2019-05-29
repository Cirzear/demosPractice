
dwdjs();
window.onload = dwdjs();
function dwdjs() {

    let now = Date.now();

    let dw = new Date(2019,5,7,0,0,0,0)

    let time = dw - now;

    let allseconds = (time - (time%1000))/1000;

    let allmins = (allseconds-(allseconds%60))/60;

    let allhours = (allmins-(allmins%60))/60;

    let alldays = (allhours - (allhours % 24))/24;

    let h = allhours - alldays*24;

    let m = allmins - allhours*60;

    let s = allseconds -allmins*60;

    let divs = document.getElementById("dwdjs");

    let str="距离端午节还有"+ alldays+"天"+h+"小时"+m+"分钟"+s+"秒";

    divs.innerHTML =str;
}
setInterval(dwdjs,1000)
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const earth = document.querySelector('.earth');
const title = document.querySelector('.ind-title');
const main = document.querySelector('.main');


const pos = document.documentElement;
pos.style.setProperty('--x', innerWidth / 2 + "px");
pos.style.setProperty('--y', innerHeight / 2 + "px");

window.addEventListener('scroll', function() {
   let scrollY= window.scrollY;
   img1.style.bottom = 24- scrollY * 0.1 + '%';
   img1.style.width = 80 - scrollY * 0.01 + '%';
   img1.style.filter = 'blur('+ scrollY * 0.02 +'px)';
   img2.style.right = -300 + scrollY * -2 + 'px';
   img3.style.left = -150 + scrollY * -2 + 'px';
   earth.style.height = 25 - scrollY * 0.05 + '%';
   title.style.marginTop = 17 - scrollY * 0.1 + '%';

   // console.log(scrollY, window.innerHeight);

   if (window.innerHeight == scrollY) {
      
   }
});


const colorArr = ['--dream-color', '--design-color', '--play-color'];

title.addEventListener('mouseover', function() {
   let su = colorArr[Math.floor(Math.random() * colorArr.length)];
   main.style.background = 'var(' + su + ')';
   console.log(su);
});
title.addEventListener('mouseleave', function() {
   main.style.background = '#fff';
});




// pos.addEventListener("mousemove", e => {
//    pos.style.setProperty('--x', e.clientX + "px");
//    pos.style.setProperty('--y', e.clientY + "px");
// })


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img42 = document.getElementById('img4-2');
const earth = document.querySelector('.earth');
const title = document.querySelector('.ind-title');
const main = document.querySelector('.main');


const pos = document.documentElement;
pos.style.setProperty('--x', innerWidth / 2 + "px");
pos.style.setProperty('--y', innerHeight / 2 + "px");

window.addEventListener('scroll', function() {
   let value = window.scrollY;
   img1.style.bottom = value * -1 + 'px';
   img1.style.width = 80 - value * 0.01 + '%';
   img1.style.filter = 'blur('+ value * 0.02 +'px)';
   img2.style.right = -300 + value * -2 + 'px';
   img3.style.bottom = -200 + value * -0.7 + 'px';
   // img3.style.width = 120 + value * 0.05 + '%';
   img4.style.left = -350 + value * -2 + 'px';
   img42.style.left = -450 + value * -1 + 'px';
   img42.style.filter = 'blur('+ value * 0.02 +'px)';
   earth.style.height = 25 - value * 0.05 + '%';
   // title.style.marginRight = -1000 + value * 10 + 'px';

   console.log(value);
});

pos.addEventListener("mousemove", e => {
   pos.style.setProperty('--x', e.clientX + "px");
   pos.style.setProperty('--y', e.clientY + "px");

   let xRat = e.clientX / innerWidth;
   if (xRat < 0.3) {
      main.style.background = 'var(--dream-color)';
   }
   else if (xRat < 0.6) {
      main.style.background = 'var(--design-color)';
   }
   else {
      main.style.background = 'var(--play-color)';
   }
})


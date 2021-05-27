const about = document.querySelector('.abo-descript');
const allBtn = document.querySelector('.abo-all');

const D1 = document.querySelector('.D1');
const D2 = document.querySelector('.D2');
const P3 = document.querySelector('.P3');

// D1.addEventListener('mouseover', () => {
//    about.style.background = '#d60150';
// })

// D2.addEventListener('mouseover', () => {
//    about.style.background = '#f7b52b';
// })

// P3.addEventListener('mouseover', () => {
//    about.style.background = '#2782be';
// })

allBtn.addEventListener('mouseover', () => {
   about.innerHTML = '<p>Welcome to Dongdaemun Design Plaza where you can Dream, Design, Play <br> DDP is a multi-cultural complex located at Dongdaemun History & Culture Park Station in Seoul, Korea. <br> DDP is where new design trends begin and cultures are exchanged. <br> It is a venue that introduces new products and fashion trends, <br> that shares knowledge through exhibitions, <br> and that offers diverse contents to experience new design. <br> Through these activities, DDP will be the hub of the design and fashion industry that will expand to Asia and the world.</p>';
})


allBtn.addEventListener('mouseleave', () => {
   about.innerHTML = '<p>Welcome to <span class="DDP"></span> where you can <span class="D1"></span> <span class="D2"></span> <span class="P3"></span> ! <br> DDP is a multi-cultural complex located at Dongdaemun History & Culture Park Station in Seoul, Korea. <br> DDP is where new design <span class="trends"></span> begin and <span class="cultures"></span> are exchanged. <br> It is a venue that introduces <span class="new"></span> and <span class="fashion"></span> trends,<br>that shares knowledge through <span class="exhibitions"></span><br>and that offers diverse contents to experience new design. <br> Through these activities, DDP will be <span class="hub"></span> that will expand to <span class="world"></span></p>';
})
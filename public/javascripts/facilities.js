const pos = document.documentElement;
pos.style.setProperty('--x', innerWidth / 2 + "px");
pos.style.setProperty('--y', innerHeight / 2 + "px");

pos.addEventListener("mousemove", e => {
   pos.style.setProperty('--x', e.clientX + "px");
   pos.style.setProperty('--y', e.clientY + "px");
})
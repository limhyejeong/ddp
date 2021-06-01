const facList = document.querySelectorAll('.fac-list ul li a');
const facilityName = document.querySelector('.fac-description h2').textContent;

for (let i = 0; i < facList.length; i++) {
   if (facList[i].textContent == facilityName) {
      facList[i].classList.add('fac-list-on');
   }
}

console.log(facList, facilityName);
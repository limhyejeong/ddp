// 1-1. 프로그램 기본 정보
class program {
   constructor(num, title, startDate, endDate, location, category) {
      this.num = num,
         this.title = title,
         this.startDate = startDate,
         this.endDate = endDate,
         this.location = location,
         this.category = category
   }
}
// 1-2. 프로그램 정보 등록
let pro1 = new program(1, 'Design and the Birth of Daily Life', '2019. 01. 01', '2021. 12. 31', 'www.symbolsofhappiness.or.kr/', 'Exhibition');
let pro2 = new program(2, 'House of the Future: Apartopia', '2020. 12. 17', '2021. 12. 16', 'Online exhibition', 'Exhibition');
let pro3 = new program(3, 'TeamLab: LIFE', '2020. 09. 25', '2021. 08. 22', 'Online exhibition', 'Exhibition');
let pro4 = new program(4, 'DDP Operations Guide', '2020. 05. 08', '2021. 06. 30', 'Online exhibition', 'Event');
let pro5 = new program(5, 'DDP Field Tour', '2019. 01. 01', '2021. 12. 31', 'DDP Tour Information Desk, 1F, Museum', 'DDP Tour');
// 1-3. 프로그램 배열에 넣기
const programs = [pro1, pro2, pro3, pro4, pro5];



// 2. 기본 프로그램 리스트 표시 
// 2-1. 리스트ul 생성
let listUl = document.createElement('ul');
function programListAll() {
   listUl.innerText = '';
   // 2-2. 프로그램 수 만큼 리스트 표시 함수 실행
   for (let i = 0; i < programs.length; i++) {
      const pro = programs[i];
      programList(pro.num, pro.title, pro.startDate, pro.endDate, pro.location);
   }
   // 2-3. 모든 프로그램이 담긴 리스트ul을 프로그램list 안에 삽입
   proList.appendChild(listUl);
}
// 2-4. 프로그램 리스트를 표시하는 함수(프로그램 기본정보 값 필요)
function programList(num, title, startDate, endDate, location) {
   let li = document.createElement('li');
   let a = document.createElement('a');
   a.setAttribute('href', '/programdetails');
   a.innerHTML += `<div class="pro-img"><img src="../images/program/program${num}.jpg"></div>`;
   a.innerHTML += `<h5 class="pro-tit">${title}</h5>`;
   a.innerHTML += `<div class="pro-sch">${startDate} ~ ${endDate}</div>`;
   a.innerHTML += `<div class="pro-loc">${location}</div>`;
   li.appendChild(a);
   listUl.appendChild(li);
}



// * 요소 가져오기
const proCategory = document.querySelectorAll('.pro-category li');
const proList = document.querySelector('.pro-list');




// 3. 카테고리에 맞는 프로그램 리스트 표시
// 3-1. 카테고리를 클릭하면 카테고리 리스트 함수 실행
for (let j = 0; j < proCategory.length; j++) {
   proCategory[j].addEventListener('click', (e) => {
      programCategory(proCategory[j].textContent);
   }, false);
}
// 3-2. 카테고리 리스트 함수 : 선택한 카테고리의 값과 맞는 프로그램이 있으면 프로그램 리스트 함수 실행
function programCategory(category) {
   listUl.innerText = '';
   if (category == 'All') {
      programListAll();
   }
   else {
      for (let i = 0; i < programs.length; i++) {
         const pro = programs[i];
         if (pro.category == category) {
            programList(pro.num, pro.title, pro.startDate, pro.endDate, pro.location);
         }
      }
   }

}


// 첫 실행
function init() {
   programListAll();
}

init();

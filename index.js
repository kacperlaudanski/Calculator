const buttons = document.getElementsByClassName("button");
const arr = [...buttons];

for(let i =0; i<arr.length; i++){
  arr[i].addEventListener('click', ()=>{
    arr[i].style.opacity = 1; 
  })
};

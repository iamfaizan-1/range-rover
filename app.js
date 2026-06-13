const bars = document.getElementById("bars");
const mobileList = document.getElementById("mobile-list");


let isOpen = false;


bars.addEventListener("click",()=>{


isOpen = !isOpen;



if(isOpen){


document.body.style.overflow="hidden";


// icon change

bars.innerHTML =
`
<i class="fa-solid fa-xmark"></i>
`;



// show menu

mobileList.classList.remove("hide");

mobileList.classList.add("show");



// rotate icon

bars.style.transform="rotate(180deg)";



}

else{


document.body.style.overflow="auto";


// icon change

bars.innerHTML =
`
<i class="fa-solid fa-bars"></i>
`;



// hide menu

mobileList.classList.remove("show");

mobileList.classList.add("hide");



// reset rotation

bars.style.transform="rotate(0deg)";


}



});
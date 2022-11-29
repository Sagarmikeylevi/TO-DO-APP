// console.log("connected")
let ClickBtn = document.querySelector('.click-btn');
let isClick = false;

ClickBtn.addEventListener('click' , () =>{
    if(isClick == false){
        ClickBtn.style.background = "green";
        isClick = true;
    }
    else{
        ClickBtn.style.background = "rgb(156, 24, 50)";
        isClick = false;
    }
})
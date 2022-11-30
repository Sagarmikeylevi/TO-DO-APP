console.log("connected")
let ClickBtn = document.getElementsByClassName('click-btn');

for (let i = 0; i < ClickBtn.length; i++) {

    let isClick = false;
    ClickBtn[i].addEventListener('click', () => {
       
        if (isClick == false) {
            ClickBtn[i].style.background = "green";
            
            isClick = true;
        }
        else {
            ClickBtn[i].style.background = "rgb(156, 24, 50)";
            isClick = false;
        }

    });

}



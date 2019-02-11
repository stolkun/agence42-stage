let getNumber = document.getElementsByClassName("contact__moyen--getNumber");
let number = document.getElementsByClassName("number");

getNumber[0].addEventListener("mouseover", (event) => {

    if(!number[0].classList.contains("number--actif")){
        number[0].style.bottom = (window.innerHeight - getNumber[0].getBoundingClientRect().bottom + getNumber[0].getBoundingClientRect().height/2) + "px";
        number[0].className += " number--actif";
    }

});

getNumber[0].addEventListener("mouseout", (event) => {

    if(number[0].classList.contains("number--actif")){
        number[0].classList.remove("number--actif");
    }

});
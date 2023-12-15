let Btn = document.querySelector("button");
let ShowRelation = document.querySelector(".Relation");
let check=0;
Btn.addEventListener("click", function () {
    if(check == 0){
    ShowRelation.innerText = "Freind";
    ShowRelation.style.color = "green";
    Btn.innerText = " UnFreind";
    check = 1;
    }else{
        ShowRelation.innerText = "Stranger";
        ShowRelation.style.color = "red";
        Btn.innerText = " Freind";
        check = 0;
    }
    
})
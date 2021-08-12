const bulbons = document.querySelectorAll(".fa-lightbulb");
const bulbborder = document.querySelector(".hbd-container");
const machine = document.querySelector(".machine");
const presentbtn = document.querySelector("#present-btn");

let bulbidx = 0;

function updatebulb(){
    bulbons[bulbidx].classList.remove("far");
    bulbons[bulbidx].classList.add("fas");
    bulbidx++;

    if(bulbidx >= bulbons.length){
        bulbborder.classList.add("border");
        clearbulbinterval();
    }
}

let intervalbulb = setInterval(updatebulb, 800);

function clearbulbinterval(){
    clearInterval(intervalbulb);
}

machine.addEventListener("mouseenter", ()=>{
    bulbons.forEach((bulbon)=>{
        // console.log(bulbon);
        bulbon.style.color = "#FFF47D";
    })
    bulbborder.style.borderColor = "#FFF47D";
})

machine.addEventListener("mouseleave", ()=>{
    bulbons.forEach((bulbon)=>{
        // console.log(bulbon);
        bulbon.style.color = "aliceblue";
        bulbborder.style.borderColor = "aliceblue";
    })
})


"use strict"

let inputs = document.querySelectorAll(".login-box input");
let login = document.querySelector(".login-box");
let infoContainer = document.querySelector(".info");
let submitBtn=document.querySelector(".submit-button");
let fileUpload = document.querySelector(".file-input");
let uploadBtn = document.querySelector(".fake-btn");
let imageContainer = document.querySelector("#image-container");


submitBtn.addEventListener("click",(e)=>{
    
    login.classList.add("d-none");
    infoContainer.classList.remove("d-none");
    for(let i = 0; i<inputs.length;i++){
        if(!inputs[i].value.trim()==""){
            let inputInfo = `<p>${inputs[i].value}</p>`;
            infoContainer.innerHTML +=inputInfo;
        }
    }
})

fileUpload.addEventListener("change", function (e) {
        let uploadedFiles = e.target.files;
    
        for (const file of uploadedFiles) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
                let elem = `
                <div class="image-wrapper">
                   
                    <img src="${e.target.result}" alt="">
                </div>
                `
                infoContainer.innerHTML += elem;
            }
            reader.readAsDataURL(file);
        }
    })



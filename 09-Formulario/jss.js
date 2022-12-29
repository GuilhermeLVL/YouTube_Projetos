let email =document.getElementById(`email`);
email.addEventListener(`focus`,()=>{
    email.style.borderColor = `#4A5F6A;`;
})
email.addEventListener(`blur`,()=>{
    email.style.borderColor = `#ccc;`;
})
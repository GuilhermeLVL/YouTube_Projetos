const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDetaisl = {
    timer:5000,
    success:{
        icon: `fa-solid fa-circle-check`,
        text:`Success: This is a success toast.` 
    },
    error:{
        icon: `fa-solid fa-circle-xmark`,
        text:`Error: This is a error toast.` 
    },
    warning:{
        icon: `fa-solid fa-triangle-exclamation`,
        text:`Warning: This is a warning toast.` 
    },
    info:{
        icon: `fa-solid fa-circle-info`,
        text:`Info: This is a information toast.` 
    }
}

const removeToast = (toast) => {
toast.classList.add(`hide`);
setTimeout(() => toast.remove(), 500    )
}

const createToast = (id) =>{
    const{ icon,text} = toastDetaisl[id];
  const toast = document.createElement(`li`);
  toast.className = `toast ${id}`;
  toast.innerHTML = `<div class="column">
                    <i class="fa-solid ${icon}"></i>
                    <span>${text}</span>
                    </div>
                    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;   

  notifications.appendChild(toast);
  setTimeout(() => removeToast(toast        ), toastDetaisl.timer);
}

buttons.forEach(btn => {
    btn.addEventListener(`click`, ()=> createToast(btn.id));
})
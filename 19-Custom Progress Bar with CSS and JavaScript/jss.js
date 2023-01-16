const progress = document.querySelector('.progress-done');


setInterval(() => {
 progress.style.opacity = 1;
progress.style.width = progress.getAttribute("data-done") + '%';   
},500)


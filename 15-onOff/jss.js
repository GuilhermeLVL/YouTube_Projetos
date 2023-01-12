const checkbox = document.getElementById("checkbox");
//Adiciona ao body a class "dark"
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

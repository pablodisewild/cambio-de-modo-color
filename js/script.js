const button = document.getElementById("toggleMode");

button.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
});

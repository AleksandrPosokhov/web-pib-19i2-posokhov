if (!localStorage.theme) localStorage.theme = "light"
document.body.className = localStorage.theme
toggleThemeBtn.innerText = document.body.classList.contains("dark") ? "Темная тема" : "Светлая тема"
toggleThemeBtn.onclick = () =>{
	document.body.classList.tooggle("dark")
	toggleThemeBtn.innerText = document.body.classList.contains("dark") ? "Темная тема" : "Светлая тема"
	localStorage.theme = document.body.className || "light"
}

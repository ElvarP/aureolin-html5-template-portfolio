const toggleNavigation = document.getElementById("toggleNavigation");
const navigation = document.getElementById("navigation");

toggleNavigation.addEventListener("change", () => {
	navigation.classList.toggle("!max-h-96");
});

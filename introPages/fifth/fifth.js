function openWindow(value) {
localStorage.setItem("userLevel", value);  // store that value
window.open("main.html");
}
const toggleBtn = document.getElementById('htb');
const modal = document.getElementById('modal');

toggleBtn.addEventListener("click", () => {
    modal.classList.toggle("modal--inactive");
    toggleBtn.classList.toggle("header__toggle-btn--hamburger");
    toggleBtn.classList.toggle("header__toggle-btn--x");
    console.log("click!");

});
const toggleBtn = document.getElementById('htb')
const modal = document.getElementById('modal')
const body = document.body
const html = document.documentElement

toggleBtn.addEventListener('click', () => {
	modal.classList.toggle('modal--inactive')
	toggleBtn.classList.toggle('header__toggle-btn--hamburger')
	toggleBtn.classList.toggle('header__toggle-btn--x')

	// Check if modal is active or inactive and update scrolling
	if (modal.classList.contains('modal--inactive')) {
		body.classList.remove('no-scroll')
		html.classList.remove('no-scroll')
	} else {
		body.classList.add('no-scroll')
		html.classList.add('no-scroll')
	}

	console.log('Modal toggled and scroll behavior updated')
})

const toTopBtn = document.getElementById('toTopBtn')

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		toTopBtn.classList.add('visible')
	} else {
		toTopBtn.classList.remove('visible')
	}
}

// Scroll to the top
toTopBtn.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}


const targets = document.querySelectorAll(".lazy-hide");

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        console.log('APPLYED')
      if (entry.isIntersecting) {
        console.log('INtersected')
        const t = entry.target;
        t.classList.add("animation-left");
        t.classList.remove("lazy-hide");

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);
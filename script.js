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

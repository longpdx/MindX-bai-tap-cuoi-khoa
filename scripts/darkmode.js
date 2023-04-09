const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
	if (body.classList.contains('dark-mode')) {
		localStorage.setItem('darkMode', 'enabled');
	} else {
		localStorage.setItem('darkMode', 'disabled');
	}
});

if (localStorage.getItem('darkMode') === 'enabled') {
	body.classList.add('dark-mode');
}

function lockedProfile() {

    Array.from(document.querySelectorAll('.profile button')).map((prof) => {
        prof.addEventListener('click', onSwitch);
    });

    function onSwitch(ev) {
        const mainDiv = ev.target.parentElement
        const infoDiv = mainDiv.querySelector('div');

        if (mainDiv.querySelector('input[type="radio"][value="unlock"]').checked) {
            if (ev.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = 'none';
                ev.target.textContent = 'Show more';
            }
        }
    }
}
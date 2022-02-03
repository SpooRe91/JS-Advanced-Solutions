function validate() {

    const inputField = document.getElementById('email');
    inputField.addEventListener('change', check);
    
    function check(e) {
        const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (emailPattern.test(e.target.value)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    }
}
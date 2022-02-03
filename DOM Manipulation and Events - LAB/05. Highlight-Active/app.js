function focused() {

    Array.from(document.querySelectorAll('div div input')).map((el) => {

        el.addEventListener('focus', function (e) { e.target.parentNode.className = 'focused' });
        el.addEventListener('blur', function (e) { e.target.parentNode.className = '' });

    });
};
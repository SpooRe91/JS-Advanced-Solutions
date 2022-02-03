function attachGradientEvents() {

    const hoverElement = document.getElementById('gradient');
    hoverElement.addEventListener('mousemove', onMove);
    const resutlElement = document.getElementById('result');

    function onMove(ev) {
        let percent = Math.floor((ev.offsetX / ev.target.clientWidth * 100));
        resutlElement.textContent = `${percent}%`;
    };
}
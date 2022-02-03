function attachEventsListeners() {


    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convert(value, unit) {

        const toDays = value / ratios[unit];
        return {
            days: toDays,
            hours: toDays * ratios.hours,
            minutes: toDays * ratios.minutes,
            seconds: toDays * ratios.seconds
        }
    }

    const allInputs = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
    }

    document.querySelector('main').addEventListener('click', afterConvert);

    function afterConvert(ev) {

        if (ev.target.type == 'button' && ev.target.tagName == 'INPUT') {

            const currentInput = ev.target.parentElement.querySelector('input[type="text"]');
            const currentTime = convert(Number(currentInput.value), currentInput.id);
            Object.keys(currentTime).forEach(el => allInputs[el].value = currentTime[el]);
        }
    }
}

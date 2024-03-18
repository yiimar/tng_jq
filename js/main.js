$(document).ready(function () {

    const runningArea = '#running-square-area';
    const runningCell = '#cell_';
    const sellNumber = 12;

    let opRunSq = {
        field: $(runningArea)[0],

        events: {
            mouseover: (e) => {
                if (e.target.id === 'target-div') {
                    let i, newI;
                    newI = i = [...opRunSq.field.children].indexOf(e.target.parentElement);
                    while (i === newI) {
                        newI = Math.floor(Math.random() * sellNumber);
                    }
                    $(runningCell + newI)[0].appendChild(e.target);
                    newI = i = null;
                }
            }
        }
    };

    opRunSq.field.addEventListener(`mouseover`, opRunSq.events.mouseover);
});
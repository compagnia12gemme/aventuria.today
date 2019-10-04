var today = new Date();

var godSeason = ['',
            'Praios',
            'Rondra',
            'Efferd',
            'Travia',
            'Boron',
            'Hesinde',
            'Firun',
            'Tsa',
            'Phex',
            'Peraine',
            'Ingerimm',
            'Rahja',
            'Senza Nome'];

var godMonth = ['',
            'Firun',
            'Tsa',
            'Phex',
            'Peraine',
            'Ingerimm',
            'Rahja',
            'Praios',
            'Rondra',
            'Efferd',
            'Travia',
            'Boron',
            'Hesind',
            'Senza Nome'];

function monthConvertDate (date) {
    var days = Math.ceil((date - new Date(date.getFullYear(),0,1)) / 86400000),
        month;

    var i = 1;
    while (i < godMonth.length) {
        if (i === Math.ceil(days/30)) { 
            month = godMonth [i];
        }
        else if (days > 360){
            month = godMonth [13];
        }
        i++;
    }
    return days + " di " + month + " in Aventuria";
}

document.write (Math.ceil((date - new Date(date.getFullYear(),0,1))));

function seasonConvertDate (date) {
    var days = Math.ceil((date - new Date(date.getFullYear(),0,1)) / 86400000),
        month;

    var i = 1;
    while (i < godSeason.length) {
        if (i === Math.ceil(days/30)) { 
            month = godSeason [i];
        }
        else if (days > 360){
            month = godSeason [13];
        }
        i++;
    }
    return days + " di " + month + " in Aventuria";
}

function monthConvertButton () {
    document.write('Il giorno selezionato è il ' + monthConvertDate($('#datepicker').datepicker('getDate')));
}

function seasonConvertButton () {
    document.write('Il giorno selezionato è il ' + seasonConvertDate($('#datepicker').datepicker('getDate')));
}

function monthToDay () {
    return ("Oggi è il giorno " + monthConvertDate (today) + " (ordine mesi)");
}

function seasonToDay () {
    return ("Oggi è il giorno " + seasonConvertDate (today) + " (ordine stagioni)");
}


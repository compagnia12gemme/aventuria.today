var today = new Date();
today.setTime( today.getTime() + today.getTimezoneOffset()*60*1000 );

var godMonth = ['',
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

function monthConvertDate (date) {
    var days,
        month;
    if (today.getFullYear()%4 === 0) {
        days = Math.ceil((date - new Date(date.getFullYear(),0,1)) / 86400000) - 182;
    } 
    else {
        days = Math.ceil((date - new Date(date.getFullYear(),0,1)) / 86400000) - 181;
    }

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
    return dayOfWeek (date.getUTCDay()) + ", " + days % 30 + " di " + month + " " + (date.getFullYear() - 977) + " in Aventuria";
}

function seasonConvertDate (date) {
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
    return dayOfWeek (date.getUTCDay()) + ", " + days % 30 + " di " + month + " " + (date.getFullYear() - 977) + " in Aventuria";
}

function dayOfWeek (numDayOfWeek) {
    var week = ['Rohalstag',
                'Feuertag',
                'Wassertag',
                'Windstag',
                'Erd(s)tag',
                'Markttag',
                'Praiostag'];
                
    return week [numDayOfWeek];
}

function monthConvertButton () {
    document.write('Il giorno selezionato è  ' + monthConvertDate($('#datepicker').datepicker('getDate')));
}

function seasonConvertButton () {
    document.write('Il giorno selezionato è  ' + seasonConvertDate($('#datepicker').datepicker('getDate')));
}

function monthToDay () {
    return ("Oggi è " + monthConvertDate (today) + " (ordine mesi)");
}

function seasonToDay () {
    return ("Oggi è " + seasonConvertDate (today) + " (ordine stagioni)");
}


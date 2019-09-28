var today = new Date();

var gods = ['',
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

function convertDate (date) {
    var days = Math.ceil((date - new Date(date.getFullYear(),0,1)) / 86400000),
        month;

    var i = 1;
    while (i < gods.length) {
        if (i === Math.ceil(days/30)) { 
            month = gods [i];
        }
        else if (days > 360){
            month = gods [13];
        }
        i++;
    }
    return days + " di " + month + " in Aventuria";
}

document.write("Oggi è il giorno " + convertDate (today));

function convertButton () {
    document.write('Il giorno selezionato è il ' + convertDate($('#datepicker').datepicker('getDate')));
}

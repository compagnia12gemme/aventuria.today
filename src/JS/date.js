var today = new Date();

var gods = ['a',
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
    var days = Math.ceil((date - new Date(date.getFullYear(),0,1)) / 86400000);
    var month;

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

function convertButton () {
    var jsDate = document.getElementById('datepicker');
    if (jsDate !== null) { // if any date selected in datepicker
        jsDate instanceof Date; // -> true
   
        document.write("Il giorno selezionato è il  " + convertDate (jsDate.getDate()));

    }
    else {
        document.write("Oggi è il giorno " + convertDate (today));
    }
}



//var txtnewDate = document.getElementById("datepicker");
//var newDate = txtnewDate.value;

//document.write(newDate);




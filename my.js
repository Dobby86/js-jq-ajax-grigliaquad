
// DESCRIZIONE:
// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function() {

$.ajax({
    url : "https://flynn.boolean.careers/exercises/api/random/int",
    method : "GET",
    success : function (data,stato) {
        console.log(data.response , data.success);
        if (data.response <=5){
        $("h1").addClass("yellow");
    }else {
        $("h1").addClass("green");
    }
    $("h1").text(data.response);

    },
    error : function (richiesta,stato,errori) {
        console.log("e un errore. " + errori,  stato, richiesta  );
    }
})


// fine
});

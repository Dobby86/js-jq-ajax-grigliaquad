
// DESCRIZIONE:
// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function() {

    $(".quadrato").click(
        function () {
            var questo = this;
            var numero = $("h1");

            $.ajax({
                url : "https://flynn.boolean.careers/exercises/api/random/int",
                method : "GET",
                success : function (data,stato) {
                    console.log(data.response , data.success);

                        var minore = (data.response <=5);
                        var maggiore = (data.response > 5);
                        // test

                        if (minore){

                        $(questo).css("background","yellow").append( '<h1 >' + data.response +  '</h1> ');

                        }else {

                        $(questo).css("background","green").append( '<h1 >' + data.response +  '</h1> ');

                        }
                       // soluzione stampata
                        //  var risultato = $(questo).text(data.response);
                        //
                        // risultato.append( '<h1 >' + data.response +  '</h1> ');

                    },

                    error : function (richiesta,stato,errori) {
                        console.log("e un errore. " + errori,  stato, richiesta
                      );}

             }
         )



   }
)
// fine
}
);

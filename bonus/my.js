
// DESCRIZIONE:
// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function() {
    var Pgialli = 0;
    var Pverdi = 0;


    $(".quadrato").click(
        function () {
            var questo = this;
            var numero = $("h1");
            var giaClick = "eh eh he ..Hai gia  cliccato!!"


            $.ajax({
                url : "https://flynn.boolean.careers/exercises/api/random/int",
                method : "GET",
                success : function (data,stato) {
                    console.log(data.response , data.success);

                        var minore = (data.response <=5);
                        var maggiore = (data.response > 5);
                        var vittoria = "win!!";

                        // test
                        if ($(questo).hasClass("active"))  {
                            alert(giaClick);




                        }if (data.response >= 9) {


                            $(questo).css("background","red").append('<h1 >' + vittoria +  '</h1>');

                            // bonusssssssssss
                            alert("wooooooooooooooooowwwwwwwww");
                        }else if (minore){

                        $(questo).css("background","yellow").append( '<h1 >' + data.response +  '</h1> ');
                        // bonusssssssssss
                        $(questo).addClass("active");
                        // bonusssssssssss

                        Pgialli ++ ;
                        $(".iGialli").html("N° gialli clickati: " + Pgialli);

                        }else {

                        $(questo).css("background","green").append( '<h1 >' + data.response +  '</h1> ');
                        // bonusssssssssss
                        $(questo).addClass("active");
                        // bonusssssssssss
                        Pverdi ++;
                        $(".Iverdi").html("N° verdi clickati: " + Pverdi);

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

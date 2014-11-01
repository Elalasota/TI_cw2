$(document).ready(
function(){	
	$("#slij").click(function(){
	function wiadomosc(typ){
		var wyn=true;
		console.log(typ.length);
		$.each(typ, function(key, object){
			console.log($(this).val());
        	if ($(this).val()==false ){
        		$(this).addClass("error");
            	wyn=false;	
        	}
        	else{$(this).removeClass("error");};
		});
		return wyn;}
	function spr_mail(mail){
		var dobry=/^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
	}


		var spr=wiadomosc($(":text"));
		var spr2=wiadomosc($("textarea"));
	if(spr==false||spr2==false){alert("Nie podano wszystkich danych!");}
		}
	);
	
	$("#przycisk").click(
		function(){
			$("#wiadomosc").toggle();
			var ukryte=$("#wiadomosc").is(":hidden");
			$("#przycisk").text(ukryte ? "Masz uwagi? Napisz!": "Ukryj formularz");
		}
	);
});



$("#wiadomosc").hide();
var $czeko= $("<p><span>Czekolada </span>(z nahuatl xocolatl – gorzka woda) – wyrób cukierniczy sporządzany z miazgi kakaowej, tłuszczu kakaowego (masło kakaowe), środka słodzącego i innych dodatków.</p>");
$("#tresc").prepend($czeko);
$("#tresc").prepend($("div#tresc h3:first"));
$("p#czcionka1").remove();

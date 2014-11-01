$(document).ready(
function(){	
	$("ul a:link").click(
		function(){
			var podstrona=$(this).attr('href');
			$("#tresc").html('Ładuję...');
			$("#tresc").load(podstrona);
			return false;
			});
	$("li").hover(function(){$(this).addClass("jasny"); console.log("Najechano");}, function(){$(this).removeClass("jasny"); console.log("Odjechano");});
	$("a").hover(function(){$(this).addClass("jasny"); console.log("Najechano");}, function(){$(this).removeClass("jasny"); console.log("Odjechano");});
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
		zwroc=true;
		var dobry=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(dobry.test(mail.val())==false){
			$(mail).addClass("error");
			zwroc=false;
		}
		return zwroc;
	}
		var spr=wiadomosc($(":input"));
		var spr2=spr_mail($("#mail"));
	if(spr==false){alert("Nie podano wszystkich danych!");};
	if(spr2==false){alert("Podano niepoprawny adres email!");}
	else{console.log("Jest ok");};
	});
	
	$("#czysc").click(function(){
		console.log("Czyszcze");
		$(":input").removeClass("error");
	});
	
	$("#przycisk").click(
		function(){
			$("#wiadomosc").toggle();
			var ukryte=$("#wiadomosc").is(":hidden");
			$("#przycisk").text(ukryte ? "Masz uwagi? Napisz!": "Ukryj formularz");
		}
	);
	
	
});

function zaladuj(div, file){
		$(div).load(file);
		return false;
};
$("#wiadomosc").hide();
var $czeko= $("<p><span>Czekolada </span>(z nahuatl xocolatl – gorzka woda) – wyrób cukierniczy sporządzany z miazgi kakaowej, tłuszczu kakaowego (masło kakaowe), środka słodzącego i innych dodatków.</p>");
$("#tresc").prepend($czeko);
$("#tresc").prepend($("div#tresc h3:first"));
$("p#czcionka1").remove();
$("#pasek").append("<p>Nie klikać!</p>");
//$("#pasek").click(function())

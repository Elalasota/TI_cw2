$(document).ready(
function(){	
	$("p img").click(function(){ $(this).slideUp("slow");});
	
	$("h1").animate({opacity:"1"}, 500,function(){znikanie();} );
function znikanie(){
	$("h1").animate({opacity:"0"}, 1500);
	$("h1").animate({opacity:"1"}, 750,function(){znikanie();});
};

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
	$("#pasek").append("<p>Nie klikać!</p>");
	$("#pasek p").css("font-size", "16px").css("color","#FFF6D0" ).css("text-align", "center");
	$("#pasek p").click(function(){
		console.log("Zmieniono");
		$("body").css("background-color", "#F3C8D6");
		$("#tresc").css("background-color", "#FCB9DE");
		$("#pasek").css("background-color", "#FF2E9D");
		$(".naglowki").css("background-color", "#FF2E9D");
		$("#stopka").css("background-color", "#ED6EB2");
		$("#logo").css("background-color", "#ED6EB2");
		$(".czeko").css("background-color", "#D48EBB");
		
	});	
	
	obrazy=['obrazy/1.jpg', 'obrazy/2.jpg', 'obrazy/3.jpg', 'obrazy/4.jpg', 'obrazy/5.jpg'];

$("#przod").click(function(){
	nastepny_obraz();
});

$("#tyl").click(function(){
	poprzedni_obraz();
});
function aktualny_obraz() {
	i = jQuery.inArray($('#ruchoma_galeria').attr('src'), obrazy);
	return i;}

function zmien_obraz(i) {
	$('#ruchoma_galeria').animate({opacity: 0},//pelna przezroczystosc
	 function() {
		$('#ruchoma_galeria').attr('src', obrazy[i]); //nadanie obrazkowi nowego atrybutu
		$('#pudelko img').load(function() {
			$('#ruchoma_galeria').stop().animate({	//stop w aktualnej animacji, kolejna - wylaczenie przezroczystosci
				opacity: 1,
			});});});}

function nastepny_obraz() {
	var i=aktualny_obraz();
	if (i < obrazy.length - 1) {
		zmien_obraz(i + 1);
	} else {
		zmien_obraz(0);
	}};
	
function poprzedni_obraz() {
	var i=aktualny_obraz();
	if (i==0) {
		zmien_obraz(obrazy.length-1);
	} else {
		zmien_obraz(i-1);
	}};
		

function zaladuj(div, file){
		$(div).load(file);
		return false;};
		
});
$("#wiadomosc").hide();
var $czeko= $("<p><span>Czekolada </span>(z nahuatl xocolatl – gorzka woda) – wyrób cukierniczy sporządzany z miazgi kakaowej, tłuszczu kakaowego (masło kakaowe), środka słodzącego i innych dodatków.</p>");
$("#tresc").prepend($czeko);
$("#tresc").prepend($("div#tresc h3:first"));
$("p#czcionka1").remove();
$("<p>Kocham czekoladę!</p>").replaceAll(".bok");

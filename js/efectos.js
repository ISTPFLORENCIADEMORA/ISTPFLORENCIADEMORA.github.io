$(document).ready(function(){

	// Scroll Elementos Menu
		var banner = $('#banner').offset().top,
			noticias = $('#noticias').offset().top,
			ubicacion = $('#ubicacion').offset().top;
			testimonios = $('#testimonios').offset().top;
	
	// Boton Acerca de
		$('#btn-banner').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 100
			}, 500); 
		});
	
		$('#btn-noticias').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: noticias + 50
			},500);
		});
	
	
		$('#btn-ubicacion').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: ubicacion + 50
			},500);
		});
	
	// Efecto Menu
	$('#btn-testimonios').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: testimonios + 50
		},500);
	});
	
	
	
	
	});
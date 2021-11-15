$(document).ready(function(){

	// Scroll Elementos Menu
		var aula = $('#aula').offset().top,
			biblioteca = $('#biblioteca').offset().top,
			libro = $('#libro').offset().top;
			bolsas = $('#bolsas').offset().top;
			formacion = $('#formacion').offset().top;
			mesas = $('#mesas').offset().top;
	
	// Boton Acerca de
		$('#btn-aula').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: aula
			}, 500);
		});
	
		$('#btn-biblioteca').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: biblioteca
			},500);
		});
	
	
		$('#btn-libro').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: libro
			},500);
		});
	
	// Efecto Menu
	$('#btn-bolsas').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: bolsas
		},500);
	});

	$('#btn-formacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: formacion
		},500);
	});

	$('#btn-mesa').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: mesa
		},500);
	});
	
	
	
	
	});
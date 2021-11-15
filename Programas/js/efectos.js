$(document).ready(function(){

	// Scroll Elementos Menu
		var contabilidad = $('#contabilidad').offset().top,
			enfemeria = $('#enfemeria').offset().top;
	
	// Boton Acerca de
		$('#btn-contabilidad').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: contabilidad
			}, 500);
		});
	
		$('#btn-enfermeria').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: enfemeria
			}, 500);
		});
	
	
	
	});
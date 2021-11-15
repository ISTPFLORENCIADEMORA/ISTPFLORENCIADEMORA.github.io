$(document).ready(function(){

	// Scroll Elementos Menu
		var palabras = $('#palabras').offset().top,
			vision = $('#vision').offset().top,
			mision = $('#mision').offset().top;
			historia = $('#historia').offset().top;
			objetivos = $('#objetivos').offset().top;
			infraestructura = $('#infraestructura').offset().top;
			documentos = $('#documentos').offset().top;
		
	
	// Boton Acerca de
	
	
	$('#btn-palabras').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 200
		}, 500);
	});
	
	$('#btn-vision').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 300
		}, 500);
	});

	$('#btn-mision').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: mision
		}, 500);
	});

	$('#btn-historia').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: historia
		}, 500);
	});

	$('#btn-objetivos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: objetivos
		}, 500);
	});

	$('#btn-infraestructura').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: infraestructura
		}, 500);
	});

	$('#btn-documentos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: documentos
		}, 500);
	});

	
	});
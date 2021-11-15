// (function(){
	var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		apellido=formulario.apellido,
		asunto=formulario.asunto,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById('error');

	function validarNombre(e){
		if (nombre.value == '' || nombre.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>';
			console.log('Por favor completa el nombre');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
	function validarApellido(e){
		if (apellido.value == '' || apellido.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el apellido</li>';
			console.log('Por favor completa el apellido');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
	function validarAsunto(e){
		if (asunto.value == '' || asunto.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el asunto</li>';
			console.log('Por favor completa el asunto');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarCorreo(e){
		if (correo.value == '' || correo.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el correo</li>';
			console.log('Por favor completa el correo');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarSexo(e){
		if (sexo.value == '' || sexo.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor selecciona el sexo</li>';
			console.log('Por favor completa el sexo');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarTerminos(e){
		if (terminos.checked == false){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor acepta los terminos y condiciones</li>';
			console.log('Por favor completa el terminos');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	// Funcion encargada de validar todos los campos
	function validarForm(e){
		// Reiniciamos el error para que inicie sin mensaje.
		error.innerHTML = '';

		validarNombre(e);
		validarApellido(e);
		validarAsunto(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
		
	}

	formulario.addEventListener('submit', validarForm);
// }())
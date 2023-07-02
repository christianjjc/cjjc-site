<?php 
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> telefono: $telefono.<br> Mensaje:".$_POST['mensaje'];


	if(mail('06_presunto_parches@icloud.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>
/**
 * LOGIN:
 * -----
 * 1. Usar Selector para capturar el formulario de Login.
 * 2. Escuchar el evento submit del formulario y llamar funcion de ingresarUsuario
 * 3. Previene el comportamiento predeterminado del envío del formulario
 * 4. Recupera los valores de email y contraseña del formulario.
 * 5. Obtener la lista de usuarios desde localStorage con la llave 'usuarios'.
 * 6. Verifica si el email ingresado existe en los usuarios registrados.
 *    Si no muestra la alerta correspondiente, Restea el formulario y retorna
 * 7. Verifica si la contraseña coincide
 *    Si no coincide, muestra la alerta correspondiente, Restea el formulario y retorna
 * 8. Guarda el usuarioLogueado en el LocalStorage
 * 9. Redirecciona al index.html
 */

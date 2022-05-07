Ejercicio 3. Ejercicio para practicar fetch.
Crea una página web con una sola vista que use la API que proporciona https://reqres.in/.

La vista estará dividida en 2 partes.

En la de la izquierda se mostrará:

Una lista con los usuarios que devuelva la llamada https://reqres.in/api/users.

Un formulario simple que permitirá crear usuarios con los campos "name", "job" y un botón para enviar los datos. Cuando el usuario lo pulse se enviará una llamada POST mediante fetch a 'https://reqres.in/api/users' con los datos del formulario.

Cuando se pulse un usuario de la lista se realizará la siguiente:

Recuperar la información del usuario con una llamada a https://reqres.in/api/users/{id del usuario pulsado}.

Mostrar la información devuelta en el panel de la derecha.

Puntos "extra" molones:

Recargar la lista de usuarios tras enviar el formulario.

Mostrar indicadores mientras se carga y se envía información.

Validar que los campos no están vacíos antes de enviarlos.

Repositorio de ayuda
He creado el siguiente repositorio donde encontrarás la "solución" a cada uno de los ejercicios anteriores:

https://github.com/ger86/latteandfront-js-final-exercises

Esto no quiere decir que sea la única que existe. Te animo a que pruebes a resolver cada ejercicio por tu cuenta y, sólo después, eches un vistazo a mis soluciones para comparar y ver otras formas de abordar un mismo problema.

También te puede servir si no encuentras la forma de enfocar cualquiera de los problemas que te planteo o si necesitas ver cómo se implementa determinada funcionalidad.

Pero recuerda, lo más importante es que aprendas a enfrentarte a problemas sencillos y vayas cogiendo soltura y confianza trabajando con Javascript.

¡Muchas suerte!


# peliculasVenturing
lista de peliculas - back nodejs - front react


Para correr la aplicacion levantar el apache y el MySQL del XAMPP

y desde consola entrar a la ruta del repositorio clonado y luego
LEVANTAR EL BACK
\n cd back
\n npm run dev

LEVANTAR EL FRONT (en otra terminal)
cd front
npm start


Se va a abrir la aplicación en el navegador
- En la pestaña Peliculas 
 - Se listan las peliculas que estan en la base
 - Con la barra de busqueda se las puede filtrar por el nombre del titulo
 - La lista va a ser por default de 5 filas, se puede cambiar y tambien es paginable
 - En las ultimas 2 columnas hay iconitos
    - El primer icono te lleva a la pagina de modificacion
    - El segundo icono elimina el registro
- En la pestaña de Agregar
    - Se puede agregar un nuevo registro, agregando los dato y apretando el boton
- Pagina de Modificacion
    - se puede modificar la descripcion y el año de la pelicula
- En la pestaña de Subir archivo
    - Hay un boton que permite levantar un archivo, no va a hacer nada porque no se como manejarlo desde el back


EL BACK 
es node express mysql
se crea una conexion, crea una base, se conecta a la base, crea una tabla (pelicula)
en el puerto 7000 hace las request
    GET api/peliculas
    PUT api/actualizar
    DELETE api/delete
    POST api/subirPelicula


Problemas encontrados
*En back
npm mysql es syncronico y fue dificil manejar las llamadas (principalmente porque es mi primer encuentro con node y su event loop), le pedi ayuda a un amigo y me explico que hay una herramienta llamada callback, que hace que desde la llamada no se ejecute la respuesta si no se ejecuto la funcion.
*En front
estoy muy acostumbrada al jsTypiado y me llevo tiempo encontrarle la vuelta al js normal, pero sin mayor dificultad lo logre ;D . Tambien estuve un buen rato re-aprendiendo algunas de las base de las nuevas versiones de librerias claves de react (react-router-dom), que con las actualizaciones cambian ciertos nombres.



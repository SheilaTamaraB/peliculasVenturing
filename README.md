# peliculasVenturing
lista de peliculas - back nodejs - front react


Para correr la aplicacion levantar el apache y el MySQL del XAMPP y crear una base de datos con nombre: peliculas

y desde consola entrar a la ruta del repositorio clonado y luego

LEVANTAR EL BACK

cd back

npm run dev


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
    - Hay un boton que permite levantar un archivo.


EL BACK 

es node express mysql

se crea una conexion, se conecta a la base, crea una tabla (pelicula)

en el puerto 7000 hace las request

    GET api/peliculas --> obtiene todas las peliculas de la db
    PUT api/actualizar --> con key titulo modifica la descripcion o el año
    DELETE api/delete --> con key titulo elimina el registro
    POST api/subirPelicula --> agrega un nuevo registro
    POST api/uploadPeliculasFile --> guarda el archivo en la carpeta temporal, lo formate, elimina los repetidos dentro del mismo archivo, inserta los registros en la base de datos y elimina el archivo temporal.


Problemas encontrados

*En back

npm mysql me fue dificil manejar las llamadas (principalmente porque es mi primer encuentro con node y su event loop), le pedi ayuda a un amigo y me explico que hay una funcion callback, que hace que desde la llamada no se ejecute la respuesta si no se ejecuto la funcion.


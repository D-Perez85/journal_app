# JOURNAL APP - 

Este proyecto  representa una pagina de notas, para llevar un registro de las mismas. 

La interacción con el Usuario esta pensada para darle al mismo la opción de podere hacer un CRUD (POST-GET-UPDATE-DELETE) de las notas, las cuales persisten en Firebase y a través del uso de redux poder ir haciendo los distintos cambios en el state de cada nota, (activar, editar, guardar y borrar). 

Ofrecerá formularios de Login & Register, los cuales operaran de la siguiente manera: 
          -Login: se puede hacer con datos hardcodeados dentro del input, o loguearse con cuenta de Google personal (a traves de un botón que se ve en el form).
          -Register: tiene los datos hardcodeados a modo de prueba, (se puede cambiar la opcion desde FormRegister para su validación). 
          
La pagina cuenta tambien con un menu lateral donde se pueden ver cada una de las notas con su:  title, body, image.
Se puede acceder a las mismas con clickear sobre ellas, en busca de  para modificar cualquiera de sus actions del state (redux). 


>#### Algunos puntos importantes del proyecto: 
              - Cuenta con la ultima version react-roouter-dom para las distintas vistas, 
              - Redux para ir actualizando los cambios de State a modo global, 
              - Presenta Sass como hoja de estilo en cascada, 
              - Presenta modales que van informando de los distintos cambios en el State, (ejemplo succesful, register,error etc).
              - Firebase & Firestore para autenticar y persistir datos
                        

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.


### Instalación 🔧

### `Clonar` 
Clonar el proyecto utilizando git clone  dentro de tu entorno local para poder obtener el codigo fuente. 
```
https://github.com/D-Perez85/journal_app.git

```
### `Instalar Dependencias`
Instala las dependencias necesarias para poder correr la App...
```
npm install
```
### `Run`
Una vez instaladas las dependencias podras correr la App con el comando start en el directorio del proyecto. 
Una vez compilado podras ver el resultado en http://localhost:3000/
```
npm start
```

## Learn More About React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##
Made with ❤️ by [Damian Perez](https://github.com/D-Perez85) 😊

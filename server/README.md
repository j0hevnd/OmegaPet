# OmegaPetShop
Proyecto de clase Ciclo 4 MinTic Grupo 25

Definición del proyecto 
OmegaPetShop

Descripción del Proyecto (Mundo del proyecto)
Objetivo General – Objetivos Específicos
Requerimientos Funcionales - No Funcionales
Planificación SCRUM – Jira
Repositorio de Código (GitLab o GitHub)
Evidencias de las reuniones de equipo

### Información del proyecto 

_Librería Lombok_

_La librería Lombok nos ayuda con la inicialización de 
los atributos de las clases y demás métodos que se puedan presentar_

- Ingresa aquí para ver un poco lo que hace [Lombok](https://openwebinars.net/blog/que-es-lombok/#:~:text=Ventajas%20de%20usar%20Lombok&text=Nos%20permite%20tener%20getters%2C%20setters,totalmente%20instant%C3%A1neo%20para%20el%20desarrollador.)

###### _El proyecto usa como base de datos MongoDB_
### Rutas de la aplicación

- GetAll: http://127.0.0.1:8080/api/products


- GetOne: http://127.0.0.1:8080/api/products/{id}


- Post: http://127.0.0.1:8080/api/products

```
    {
        "id": "1",
        "productName": "Rascador de gatos",
        "productImg": "rascador.jpg",
        "productDescription": "Para que tus amigos gatunos se relagen un ratico",
        "productPrice": 20.35
    }
```


- Put: http://127.0.0.1:8080/api/products/{id}
```
    {
        "id": "1",
        "productName": "Rascador de gatos",
        "productImg": "rascador.jpg",
        "productDescription": "Para que tus amigos gatunos se relagen un ratico",
        "productPrice": 25.35
    }
```

- Delete: http://127.0.0.1:8080/api/products/{id}

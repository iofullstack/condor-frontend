## Pasos para el sistema:

### `1. Crear primero los modulos:`

#### URL
```sh      
BASE_URL/api/modules
```
#### METHOD
```sh
POST
```
#### SEND
```json
{
  name
}
```
#### RESPONSE
```json
{
  message,
  savedModule
}
```

### `2. Agregar permisos a un módulo:`

#### URL
```sh      
BASE_URL/api/module/:idModule/permits
```
#### METHOD
```sh
POST
```
#### SEND
```json
{
  action,
  description
}
```
#### RESPONSE
```json
{
  message,
  savedModule
}
```
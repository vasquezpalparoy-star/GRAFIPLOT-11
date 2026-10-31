# GRAFIPLOT Educativo

Conexión: Cuentas Claras Negocio (gyvztqpvgtinxoqhyfbw). Las tablas nuevas usan el prefijo `educ_` y un bucket privado exclusivo `educ_logos`. No se instalan las migraciones originales sobre este proyecto compartido. No se modifican tablas, funciones ni triggers de los otros programas. Auth es compartido por el proyecto; se usa almacenamiento de sesión independiente y cierre de sesión local. Los perfiles educativos se crean al entrar en esta aplicación.

## Habilitado

Editor manual, guardado de sesiones, planificación, padrón y logos con RLS por usuario. Tema rojo en modo claro y oscuro; documento de impresión conserva sus colores.

## Pendiente

1. Publicar en GitHub Pages desde main, raíz. No usar el CNAME del autor original.
2. Añadir la URL publicada a las redirecciones permitidas de Auth sin quitar las existentes; revisar confirmación de correo y SMTP. No cambiar el Site URL global sin revisar las otras aplicaciones.
3. Configurar un proveedor IA y su clave únicamente en secretos de servidor; implementar un gateway educativo independiente. La IA está desactivada de forma explícita mientras falta este servicio. No se reutiliza el servicio ni créditos del autor.
4. Instalar/compilar el motor local de exportación Word/PDF y comprobarlo en Windows. Las descargas originales siguen siendo del autor; aún falta publicar ejecutables propios.
5. El centro administrativo y el sistema comercial avanzado requieren instalación aislada posterior; no se desplegaron sobre el proyecto compartido.

La configuración compartida de Auth y usuarios continúa siendo común a todas las aplicaciones del mismo proyecto. Para independencia total de autenticación se requiere otro proyecto.

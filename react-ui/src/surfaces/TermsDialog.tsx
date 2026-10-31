import type {CSSProperties} from 'react';

export function TermsDialog() {
    return <>
{" "}
{"\n"}
<div id="terms-modal" className="load-modal hidden" style={{"zIndex": "10000"} as CSSProperties}>
{"\n"}
<div className="load-modal-content glass-card" style={{"maxWidth": "720px", "padding": "2rem", "textAlign": "left", "maxHeight": "85vh", "overflowY": "auto"} as CSSProperties}>
{"\n"}
<div className="load-modal-header" style={{"borderBottom": "1px solid var(--border)", "paddingBottom": "0.75rem", "marginBottom": "1.25rem", "display": "flex", "justifyContent": "space-between", "alignItems": "center"} as CSSProperties}>
{"\n"}
<div style={{"display": "flex", "alignItems": "center", "gap": "0.6rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" style={{"color": "var(--accent)", "width": "22px", "height": "22px"} as CSSProperties} aria-hidden="true">
<use href="#icon-shield">

</use>
</svg>
{"\n"}
<h3 style={{"fontSize": "1.2rem", "fontWeight": "800", "color": "var(--color-foreground)", "margin": "0"} as CSSProperties}>
{"\n                        Condiciones de uso y tratamiento de la información — Sesiones GRAFIPLOT\n                    "}
</h3>
{"\n"}
</div>
{"\n"}
<button id="btn-close-terms" className="btn btn-ghost btn-sm" style={{"fontSize": "1.1rem", "padding": "4px 8px"} as CSSProperties} aria-label="Cerrar">
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-close">

</use>
</svg>
</button>
{"\n"}
</div>
{"\n"}
<div style={{"fontSize": "0.85rem", "lineHeight": "1.6", "color": "var(--text-primary)", "display": "flex", "flexDirection": "column", "gap": "1.1rem"} as CSSProperties}>
{"\n"}
<div style={{"background": "rgba(0, 210, 255, 0.06)", "border": "1px solid rgba(0, 210, 255, 0.2)", "borderRadius": "8px", "padding": "0.85rem 1rem", "fontSize": "0.82rem"} as CSSProperties}>
{"\n"}
<strong>
{"Última actualización: Octubre de 2026"}
</strong>
{" | Versión del Sistema: "}
<strong>
{"Sesiones GRAFIPLOT 2.0 (Motor v1.4.1)"}
</strong>
<br/>
{"\n                    Desarrollado y operado por "}
<strong>
{"Samuel Y. Pablo Claudio (pablitodp)"}
</strong>
{" — Huánuco, Perú.\n                "}
</div>
{"\n"}
<p>
{"Bienvenido a "}
<strong>
{"Sesiones GRAFIPLOT"}
</strong>
{" ("}
<code>
{"sesiones.sypablitodp.site"}
</code>
{"). Este espacio de apoyo pedagógico, planificación curricular y generación de documentos busca facilitar la labor de docentes de Educación Básica Regular del Perú en Inicial, Primaria y Secundaria. El acceso, registro y uso de sus servicios implica aceptar estas condiciones y la política de privacidad dentro del marco legal peruano vigente."}
</p>
{"\n"}
<h4 style={{"color": "var(--accent)", "fontWeight": "700", "marginTop": "0.5rem", "display": "flex", "alignItems": "center", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-user">

</use>
</svg>
{"\n                    1. REGISTRO, SEGURIDAD Y AUTENTICACIÓN\n                "}
</h4>
{"\n"}
<p>
{"La cuenta de Sesiones GRAFIPLOT es individual y no debe transferirse. Cada persona debe proteger sus datos de acceso. La autenticación se gestiona con Supabase Auth y el acceso a los registros se limita mediante políticas por fila (RLS), de modo que cada docente consulte sus propios datos, perfil y planificaciones."}
</p>
{"\n"}
<h4 style={{"color": "var(--accent)", "fontWeight": "700", "marginTop": "0.5rem", "display": "flex", "alignItems": "center", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-download">

</use>
</svg>
{"\n                    2. FUNCIONAMIENTO DEL MOTOR DE ESCRITORIO (pablitohost.exe / pablitopyhost.exe) Y DATOS DEL EQUIPO\n                "}
</h4>
{"\n"}
<div style={{"background": "var(--bg-card)", "border": "1px solid var(--border)", "borderRadius": "8px", "padding": "1rem", "display": "flex", "flexDirection": "column", "gap": "0.75rem"} as CSSProperties}>
{"\n"}
<p>
<strong>
{"¿Por qué se descarga el ejecutable local?"}
</strong>
<br/>
{"\n                    La generación de documentos Word complejos desde un navegador presenta limitaciones. Para trabajar con tablas anidadas, anchos definidos, instrumentos de evaluación y fórmulas editables en OMML (Office Math Markup Language), se utiliza un motor de escritorio que busca mantener la estructura del documento y "}
<strong>
{"procesar tus documentos pedagógicos en el equipo, sin enviarlos a convertidores externos en la nube"}
</strong>
{", se desarrolló el motor local "}
<code>
{"pablitohost.exe"}
</code>
{" (también denominado "}
<code>
{"pablitopyhost.exe"}
</code>
{")."}
</p>
{"\n"}
<p>
<strong>
{"Arquitectura técnica en Python:"}
</strong>
<br/>
{"\n                    El motor es un micro-servicio local programado íntegramente en "}
<strong>
{"Python"}
</strong>
{" mediante un servicio asíncrono ligero (FastAPI / Uvicorn) y bibliotecas para XML y docx. Permanece en segundo plano en tu computadora y atiende únicamente en el puerto local "}
<code>
{"http://127.0.0.1:8000"}
</code>
{"."}
</p>
{"\n"}
<p>
<strong>
{"Comunicación segura mediante Tokens Autorizados:"}
</strong>
<br/>
{"\n                    La comunicación entre la página y el motor del equipo aplica el mecanismo de seguridad "}
<strong>
{"Private Network Access (PNA)"}
</strong>
{". Toda petición requiere obligatoriamente un "}
<strong>
{"token criptográfico de vinculación"}
</strong>
{" creado al poner en marcha el programa. Además, la validación de origen (CORS) limita las solicitudes a los dominios autorizados ("}
<code>
{"https://sesiones.sypablitodp.site"}
</code>
{") y al entorno de desarrollo local. Las peticiones de otros sitios u orígenes sin autorización se rechazan."}
</p>
{"\n"}
<p>
<strong>
{"Garantía de Privacidad y Aislamiento (No intrusión en tu sistema):"}
</strong>
</p>
{"\n"}
<ul style={{"margin": "0", "paddingLeft": "1.2rem", "display": "flex", "flexDirection": "column", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<li>
<strong>
{"Sin exploración de documentos personales:"}
</strong>
{" El componente no explora ni recolecta fotografías, documentos u otros archivos personales. Trabaja con sus propios recursos y con el contenido enviado desde la página para la exportación."}
</li>
{"\n"}
<li>
<strong>
{"Cero telemetría invasiva:"}
</strong>
{" No observa el uso de tu computadora, no guarda lo que escribes en el teclado y no utiliza cámaras, micrófonos ni otros periféricos."}
</li>
{"\n"}
<li>
<strong>
{"Exportación local:"}
</strong>
{" Toma la sesión o planificación remitida por el navegador y entrega un documento Word o PDF. El proceso de conversión puede requerir archivos temporales según el formato solicitado."}
</li>
{"\n"}
</ul>
{"\n"}
</div>
{"\n"}
<h4 style={{"color": "var(--accent)", "fontWeight": "700", "marginTop": "0.5rem", "display": "flex", "alignItems": "center", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n                    3. ASISTENCIA PEDAGÓGICA CON INTELIGENCIA ARTIFICIAL Y CRÉDITOS\n                "}
</h4>
{"\n"}
<p>
{"Sesiones GRAFIPLOT contempla asistentes de OpenAI, Google Gemini y DeepSeek como apoyo de redacción pedagógica. Cuando se habilita y solicita una función de IA, los datos necesarios de la petición y los adjuntos incluidos se remiten por servicios de Supabase al proveedor configurado, que los trata conforme a sus condiciones. No necesitas indicar nombres de estudiantes: evita añadir información personal en los mensajes y archivos. Las credenciales del proveedor se mantienen en el servidor y no se exponen al navegador. El consumo de IA queda reflejado en un "}
<strong>
{"sistema de créditos"}
</strong>
{"."}
</p>
{"\n"}
<h4 style={{"color": "var(--accent)", "fontWeight": "700", "marginTop": "0.5rem", "display": "flex", "alignItems": "center", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-file">

</use>
</svg>
{"\n                    4. PROPIEDAD INTELECTUAL Y TITULARIDAD DOCENTE\n                "}
</h4>
{"\n"}
<p>
{"Las planificaciones, sesiones, fichas, rúbricas y demás recursos que elabores o modifiques en este espacio son "}
<strong>
{"propiedad intelectual exclusiva del docente que los elabora"}
</strong>
{". Sesiones GRAFIPLOT no reclama derechos de autor sobre el material pedagógico producido por sus usuarios."}
</p>
{"\n"}
<h4 style={{"color": "var(--accent)", "fontWeight": "700", "marginTop": "0.5rem", "display": "flex", "alignItems": "center", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-target">

</use>
</svg>
{"\n                    5. RESPONSABILIDAD Y AUTONOMÍA PEDAGÓGICA\n                "}
</h4>
{"\n"}
<p>
{"Los asistentes de IA de Sesiones GRAFIPLOT son recursos de apoyo para reducir tareas administrativas y ofrecer propuestas curriculares con referencia al CNEB. La revisión, adaptación al contexto y validación pedagógica de cada sesión corresponde al docente antes de aplicarla en clase o presentarla ante su institución, UGEL o DRE."}
</p>
{"\n"}
<h4 style={{"color": "var(--accent)", "fontWeight": "700", "marginTop": "0.5rem", "display": "flex", "alignItems": "center", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-shield">

</use>
</svg>
{"\n                    6. PROTECCIÓN DE DATOS PERSONALES (LEY N° 29733) Y DERECHOS ARCO\n                "}
</h4>
{"\n"}
<p>
{"La autenticación y la conservación de los datos de cuenta, sesiones, planificaciones y padrones se realizan mediante Supabase. El navegador mantiene borradores y copias locales separados por cuenta, también en equipos de uso compartido. Las solicitudes de IA siguen el tratamiento explicado en la sección anterior. Tus datos no se venden ni se alquilan. Si deseas ejercer derechos de acceso, rectificación, cancelación u oposición, o pedir la eliminación de la cuenta y su contenido, contacta al soporte indicado más abajo. Durante la beta, confirma con soporte los plazos y el alcance de la conservación y eliminación."}
</p>
{"\n"}
<h4 style={{"color": "var(--accent)", "fontWeight": "700", "marginTop": "0.5rem", "display": "flex", "alignItems": "center", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-mail">

</use>
</svg>
{"\n                    7. CANALES DE CONTACTO Y SOPORTE OFICIAL\n                "}
</h4>
{"\n"}
<p>
{"Si necesitas orientación técnica, ayuda con la exportación, información sobre privacidad o comunicar un incidente, utiliza el contacto del desarrollador:"}
</p>
{"\n"}
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "0.6rem", "fontSize": "0.82rem"} as CSSProperties}>
{"\n"}
<a href="mailto:pabloclsa87@gmail.com" style={{"display": "inline-flex", "alignItems": "center", "gap": "4px", "padding": "4px 10px", "background": "rgba(255,255,255,0.05)", "border": "1px solid var(--border)", "borderRadius": "6px", "color": "var(--color-foreground)", "textDecoration": "none"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-mail">

</use>
</svg>
{" pabloclsa87@gmail.com\n                    "}
</a>
{"\n"}
<a href="https://wa.me/51918165428" target="_blank" rel="noopener noreferrer" style={{"display": "inline-flex", "alignItems": "center", "gap": "4px", "padding": "4px 10px", "background": "rgba(37, 211, 102, 0.1)", "border": "1px solid rgba(37, 211, 102, 0.3)", "borderRadius": "6px", "color": "#25d366", "textDecoration": "none"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-whatsapp">

</use>
</svg>
{" WhatsApp: 918 165 428\n                    "}
</a>
{"\n"}
<a href="https://space.sypablitodp.site" target="_blank" rel="noopener noreferrer" style={{"display": "inline-flex", "alignItems": "center", "gap": "4px", "padding": "4px 10px", "background": "rgba(0, 210, 255, 0.1)", "border": "1px solid rgba(0, 210, 255, 0.3)", "borderRadius": "6px", "color": "#00d2ff", "textDecoration": "none"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-globe">

</use>
</svg>
{" space.sypablitodp.site\n                    "}
</a>
{"\n"}
</div>
{"\n"}
<h4 style={{"color": "var(--accent)", "fontWeight": "700", "marginTop": "0.5rem", "display": "flex", "alignItems": "center", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-building">

</use>
</svg>
{"\n                    8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN\n                "}
</h4>
{"\n"}
<p>
{"Estas condiciones se interpretan y aplican de acuerdo con la legislación de la República del Perú. En caso de controversia, las partes acuerdan someterse a la competencia exclusiva de los órganos judiciales del distrito de "}
<strong>
{"Huánuco, Perú"}
</strong>
{"."}
</p>
{"\n"}
</div>
{"\n"}
<div style={{"marginTop": "1.5rem", "paddingTop": "1rem", "borderTop": "1px solid var(--border)", "display": "flex", "justifyContent": "flex-end", "gap": "0.75rem"} as CSSProperties}>
{"\n"}
<button id="btn-accept-terms-modal" className="btn btn-primary" style={{"padding": "0.6rem 1.4rem", "fontWeight": "600", "display": "inline-flex", "alignItems": "center", "gap": "0.4rem"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"\n                    Entendido y Aceptar\n                "}
</button>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
    </>;
}

import type {CSSProperties} from 'react';

export function Landing() {
    return <>
{" "}
{"\n"}
<div id="landing-view" className="landing-view">
{"\n"}
{"\n"}
<header className="landing-navbar">
{"\n"}
<a href="#/" className="landing-brand" aria-label="Sesiones GRAFIPLOT - Inicio">
{"\n"}
<div className="landing-brand-logo">
{"\n"}
<img src="assets/grafiplot-sesiones.png" alt="Sesiones GRAFIPLOT Logo"/>
{"\n"}
</div>
{"\n"}
<div className="landing-brand-text">
{"\n"}
<span className="landing-brand-title">
{"Sesiones GRAFIPLOT"}
</span>
{"\n"}
<span className="landing-brand-badge">
{"PLANIFICACIÓN DOCENTE · PERÚ"}
</span>
{"\n"}
</div>
{"\n"}
</a>
{"\n"}
<ul className="landing-nav-links">
{"\n"}
<li>
<a href="#como-funciona" className="landing-nav-link">
{"Cómo empezar"}
</a>
</li>
{"\n"}
<li>
<a href="#motor-local" className="landing-nav-link">
{"Motor de escritorio"}
</a>
</li>
{"\n"}
<li>
<a href="#modelos-ia" className="landing-nav-link">
{"Asistentes de IA"}
</a>
</li>
{"\n"}
<li>
<a href="#preguntas-frecuentes" className="landing-nav-link">
{"Dudas habituales"}
</a>
</li>
{"\n"}
<li>
<a href="#contacto" className="landing-nav-link">
{"Contacto"}
</a>
</li>
{"\n"}
<li>
<a href="descargas_landing.html" className="landing-nav-link">
{"Descargas"}
</a>
</li>
{"\n"}
</ul>
{"\n"}
<div className="landing-nav-actions">
{"\n"}
<label className="theme-picker" title="Tema de la aplicación">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-theme">

</use>
</svg>
{"\n"}
<span className="sr-only">
{"Tema de la aplicación"}
</span>
{"\n"}
<select data-theme-selector="" aria-label="Tema de la aplicación">
{"\n"}
<option value="system">
{"Sistema"}
</option>
{"\n"}
<option value="light">
{"Claro"}
</option>
{"\n"}
<option value="dark">
{"Oscuro"}
</option>
{"\n"}
</select>
{"\n"}
</label>
{"\n"}
<button type="button" className="btn btn-ghost btn-sm" data-action="open-login" aria-label="Acceder a tu cuenta">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-user">

</use>
</svg>
{"\n"}
<span>
{"Acceder a mi cuenta"}
</span>
{"\n"}
</button>
{"\n"}
<button type="button" className="btn btn-primary btn-sm" data-action="enter-app" aria-label="Abrir editor de sesiones de aprendizaje">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n"}
<span>
{"Abrir mi espacio"}
</span>
{"\n"}
</button>
{"\n"}
</div>
{"\n"}
</header>
{"\n"}
{"\n"}
<section className="landing-hero">
{"\n"}
<div className="landing-hero-copy">
{"\n"}
<div className="landing-pill-badge">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n"}
<span>
{"DA FORMA A TU PRÓXIMA CLASE"}
</span>
{"\n"}
</div>
{"\n"}
<h1 className="landing-hero-title">
{"\n                    Una enseñanza que inspira"}
<br/>
<span className="highlight">
{"nace de una buena planificación."}
</span>
{"\n"}
</h1>
{"\n"}
<p className="landing-hero-subtitle">
{"\n                    Organiza experiencias de aprendizaje para "}
<strong>
{"Inicial, Primaria o Secundaria"}
</strong>
{". Selecciona los aprendizajes, desarrolla tu propuesta con apoyo de la IA y personalízala antes de descargarla en "}
<strong>
{"Word o PDF"}
</strong>
{".\n                "}
</p>
{"\n"}
<div className="landing-hero-actions">
{"\n"}
<button type="button" className="landing-btn-lg landing-btn-primary" data-action="enter-app" aria-label="Comenzar a planificar sesión de aprendizaje gratis">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n"}
<span>
{"Empezar mi planificación"}
</span>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-arrow-right">

</use>
</svg>
{"\n"}
</button>
{"\n"}
<a href="#como-funciona" className="landing-btn-lg landing-btn-ghost" aria-label="Ver cómo funciona la plataforma">
{"\n"}
<span>
{"Conocer el proceso"}
</span>
{"\n"}
</a>
{"\n"}
</div>
{"\n"}
<div className="landing-badges-row">
{"\n"}
<div className="landing-badge-item">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"\n"}
<span>
{"Alineado al CNEB"}
</span>
{"\n"}
</div>
{"\n"}
<div className="landing-badge-item">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n"}
<span>
{"Asistencia pedagógica con IA"}
</span>
{"\n"}
</div>
{"\n"}
<div className="landing-badge-item">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-file">

</use>
</svg>
{"\n"}
<span>
{"Documentos Word editables"}
</span>
{"\n"}
</div>
{"\n"}
<div className="landing-badge-item">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-shield">

</use>
</svg>
{"\n"}
<span>
{"Tu trabajo bajo tu control"}
</span>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
{"\n"}
<div className="landing-hero-preview landing-lesson-visual" role="img" aria-label="Ejemplo de planificación: elegir competencias y capacidades, revisar la sesión y llevarla a Word o PDF.">
{"\n"}
<div className="gp-studio-heading" aria-hidden="true"><span className="gp-studio-brand"><img src="assets/grafiplot-sesiones.png" alt=""/><span>Sesiones <strong>GRAFIPLOT</strong></span></span><span className="gp-studio-label">TU TALLER DE APRENDIZAJE</span></div>
<div className="lesson-scene" aria-hidden="true">
{"\n"}
<div className="lesson-dot-grid">

</div>
{"\n"}
<div className="lesson-mini-app">
{"\n"}
<div className="lesson-mini-top">
<span>
<svg className="ui-icon">
<use href="#icon-folder">

</use>
</svg>
{" Tu siguiente experiencia"}
</span>
<span className="lesson-mini-saved">
<i>

</i>
{" Guardado"}
</span>
</div>
{"\n"}
<div className="lesson-mini-body">
{"\n"}
<div className="lesson-mini-steps">
<span>
<svg className="ui-icon">
<use href="#icon-check">

</use>
</svg>
{" Datos"}
</span>
<strong>
{"2 Aprendizajes"}
</strong>
<span>
{"3 Revisión"}
</span>
</div>
{"\n"}
<span className="lesson-mini-context">
{"MATEMÁTICA · 2.° DE SECUNDARIA"}
</span>
{"\n"}
<h2>
{"Todo aprendizaje"}
<br/>
{"comienza con una elección."}
</h2>
{"\n"}
<p>
{"¿Qué aprenderá tu grupo?"}
</p>
{"\n"}
<div className="lesson-mini-option selected">
<span className="lesson-mini-check">
<svg className="ui-icon">
<use href="#icon-check">

</use>
</svg>
</span>
<span>
{"Resuelve problemas de cantidad"}
<small>
{"4 capacidades para seleccionar"}
</small>
</span>
</div>
{"\n"}
<div className="lesson-mini-option">
<span className="lesson-mini-box">

</span>
<span>
{"Resuelve problemas de regularidad,"}
<br/>
{"equivalencia y cambio"}
</span>
</div>
{"\n"}
<div className="lesson-mini-capacity">
<svg className="ui-icon">
<use href="#icon-check">

</use>
</svg>
{" Traduce cantidades a expresiones numéricas"}
</div>
{"\n"}
<div className="lesson-mini-capacity">
<svg className="ui-icon">
<use href="#icon-check">

</use>
</svg>
{" Argumenta sus procedimientos"}
</div>
{"\n"}
<div className="lesson-mini-bottom">
{"Tu propuesta ya está en marcha"}
</div>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
<div className="lesson-floating-paper">
<span className="lesson-paper-label">
<svg className="ui-icon">
<use href="#icon-file">

</use>
</svg>
{" DE LA PLANIFICACIÓN AL AULA"}
</span>
<div className="lesson-paper-lines">
<i>

</i>
<i>

</i>
<i>

</i>
</div>
<div className="lesson-paper-table">
<span>
{"Inicio"}
</span>
<i>

</i>
<span>
{"Desarrollo"}
</span>
<i>

</i>
<span>
{"Cierre"}
</span>
<i>

</i>
</div>
<div className="lesson-paper-formats">
{"WORD "}
<span>
{"·"}
</span>
{" PDF "}
<svg className="ui-icon">
<use href="#icon-check">

</use>
</svg>
</div>
</div>
{"\n"}
<div className="lesson-teacher-note">
<svg className="ui-icon">
<use href="#icon-sparkles">

</use>
</svg>
<span>
{"La IA aporta una propuesta."}
<br/>
<strong>
{"Tú decides cómo enseñarla."}
</strong>
</span>
</div>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
</section>
{"\n"}
{"\n"}
<section id="como-funciona" className="landing-section">
{"\n"}
<div className="landing-section-header">
{"\n"}
<span className="landing-section-eyebrow">
{"Tu ruta de trabajo"}
</span>
{"\n"}
<h2 className="landing-section-title">
{"Tu planificación, en tres momentos"}
</h2>
{"\n"}
<p className="landing-section-desc">
{"Dedica menos tiempo a las tareas administrativas y más a acompañar el aprendizaje de tu grupo."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-steps-grid">
{"\n"}
<div className="landing-step-card">
{"\n"}
<span className="landing-step-number">
{"1"}
</span>
{"\n"}
<h3 className="landing-step-title">
{"Organiza el marco curricular"}
</h3>
{"\n"}
<p className="landing-step-text">
{"Indica el nivel, el grado y el área de tu clase; después selecciona las competencias y capacidades del CNEB disponibles para ese contexto."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-step-card">
{"\n"}
<span className="landing-step-number">
{"2"}
</span>
{"\n"}
<h3 className="landing-step-title">
{"Desarrolla tu propuesta con IA"}
</h3>
{"\n"}
<p className="landing-step-text">
{"Los asistentes de IA pueden ayudarte a redactar la situación significativa, organizar el inicio, desarrollo y cierre, y formular criterios de evaluación. Su uso requiere la configuración del servicio."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-step-card">
{"\n"}
<span className="landing-step-number">
{"3"}
</span>
{"\n"}
<h3 className="landing-step-title">
{"Convierte tu trabajo en un documento"}
</h3>
{"\n"}
<p className="landing-step-text">
{"Utiliza el motor de escritorio para producir archivos Word (.docx) con tablas curriculares, ecuaciones OMML editables y encabezados institucionales."}
</p>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
</section>
{"\n"}
{"\n"}
<section id="motor-local" className="landing-section">
{"\n"}
<div className="landing-section-header">
{"\n"}
<span className="landing-section-eyebrow">
{"Web y escritorio, conectados"}
</span>
{"\n"}
<h2 className="landing-section-title">
{"¿Para qué sirve el motor de escritorio?"}
</h2>
{"\n"}
<p className="landing-section-desc">
{"La plataforma combina la comodidad del navegador con el procesamiento de escritorio para conservar la estructura de tus documentos Word (.docx)."}
</p>
{"\n"}
</div>
{"\n"}
<div className="motor-local-card">
{"\n"}
<div className="motor-local-info">
{"\n"}
<div className="motor-local-badge">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n"}
<span>
{"Estructura documental cuidada"}
</span>
{"\n"}
</div>
{"\n"}
<h3 className="motor-local-title">
{"Generación de documentos desde Windows"}
</h3>
{"\n"}
<p className="motor-local-desc">
{"\n                        Para conservar tablas anidadas, márgenes A4 y ecuaciones OMML editables en Word, el proyecto utiliza un componente de escritorio llamado "}
<strong>
{"pablitopyhost.exe"}
</strong>
{": un servicio ligero que se ejecuta en tu equipo y se enlaza con esta página mediante "}
<code>
{"localhost:8000"}
</code>
{".\n                    "}
</p>
{"\n"}
<div className="motor-local-features">
{"\n"}
<div className="motor-feature-item">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"\n"}
<span>
{"Tablas curriculares con una distribución consistente"}
</span>
{"\n"}
</div>
{"\n"}
<div className="motor-feature-item">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"\n"}
<span>
{"Fórmulas en OMML que puedes seguir editando"}
</span>
{"\n"}
</div>
{"\n"}
<div className="motor-feature-item">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"\n"}
<span>
{"Encabezados con los datos de tu institución, DRE y UGEL"}
</span>
{"\n"}
</div>
{"\n"}
<div className="motor-feature-item">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"\n"}
<span>
{"Procesamiento local independiente de la memoria del navegador"}
</span>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
<div className="motor-local-actions">
{"\n"}
<a href="descargas_landing.html" className="landing-btn-lg landing-btn-primary" aria-label="Ir a la página de descarga del motor local">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-download">

</use>
</svg>
{"\n"}
<span>
{"Obtener motor para Windows (.exe)"}
</span>
{"\n"}
</a>
{"\n"}
<a href="conexion.html" className="landing-btn-lg landing-btn-ghost" aria-label="Ver estado de conexión del motor">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-refresh">

</use>
</svg>
{"\n"}
<span>
{"Comprobar la conexión"}
</span>
{"\n"}
</a>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
</section>
{"\n"}
{"\n"}
<section id="modelos-ia" className="landing-section">
{"\n"}
<div className="landing-section-header">
{"\n"}
<span className="landing-section-eyebrow">
{"Herramientas para tu práctica docente"}
</span>
{"\n"}
<h2 className="landing-section-title">
{"Distintas capacidades de IA para tu aula"}
</h2>
{"\n"}
<p className="landing-section-desc">
{"Selecciona la alternativa de inteligencia artificial que responda a las necesidades de tu planificación."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-models-grid">
{"\n"}
<div className="landing-model-card">
{"\n"}
<span className="landing-model-badge">
{"Nuevo"}
</span>
{"\n"}
<div className="landing-model-icon">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n"}
</div>
{"\n"}
<h3 className="landing-model-title">
{"GPT-6 Luna"}
</h3>
{"\n"}
<span className="landing-model-provider">
{"OpenAI Router"}
</span>
{"\n"}
<p className="landing-model-desc">
{"Apoyo ágil para proponer situaciones significativas y creativas vinculadas al contexto peruano."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-model-card">
{"\n"}
<span className="landing-model-badge" style={{"background": "rgba(123, 97, 255, 0.15)", "color": "#7b61ff", "borderColor": "rgba(123, 97, 255, 0.3)"} as CSSProperties}>
{"Recomendado"}
</span>
{"\n"}
<div className="landing-model-icon" style={{"color": "#7b61ff"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-target">

</use>
</svg>
{"\n"}
</div>
{"\n"}
<h3 className="landing-model-title">
{"DeepSeek R1 / V3"}
</h3>
{"\n"}
<span className="landing-model-provider">
{"DeepSeek Router"}
</span>
{"\n"}
<p className="landing-model-desc">
{"Asistencia para relacionar los propósitos de aprendizaje y construir instrumentos de evaluación formativa con coherencia pedagógica."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-model-card">
{"\n"}
<span className="landing-model-badge" style={{"background": "rgba(16, 185, 129, 0.15)", "color": "#10b981", "borderColor": "rgba(16, 185, 129, 0.3)"} as CSSProperties}>
{"Rápido"}
</span>
{"\n"}
<div className="landing-model-icon" style={{"color": "#10b981"} as CSSProperties}>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"\n"}
</div>
{"\n"}
<h3 className="landing-model-title">
{"Gemini 2.5 Flash"}
</h3>
{"\n"}
<span className="landing-model-provider">
{"Google DeepMind"}
</span>
{"\n"}
<p className="landing-model-desc">
{"Ayuda para preparar actividades de cada momento de la clase, elaborar fichas y ajustar las propuestas a diferentes ritmos de aprendizaje."}
</p>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
</section>
{"\n"}
{"\n"}
<section id="preguntas-frecuentes" className="landing-section">
{"\n"}
<div className="landing-section-header">
{"\n"}
<span className="landing-section-eyebrow">
{"Resolvemos tus consultas"}
</span>
{"\n"}
<h2 className="landing-section-title">
{"Lo que necesitas conocer antes de empezar"}
</h2>
{"\n"}
<p className="landing-section-desc">
{"Consulta las dudas habituales sobre el espacio de trabajo, la exportación y las referencias curriculares."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-faq-container">
{"\n"}
<div className="landing-faq-item">
{"\n"}
<h3 className="landing-faq-question">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-download">

</use>
</svg>
{"\n                        ¿Qué hace el motor de escritorio y cuándo lo necesito?\n                    "}
</h3>
{"\n"}
<p className="landing-faq-answer">
{"El componente de escritorio permite preparar documentos Word (.docx) con tablas curriculares, márgenes definidos, instrumentos de evaluación y ecuaciones OMML editables. Este motor ("}
<code>
{"pablitopyhost.exe"}
</code>
{") funciona en segundo plano dentro de tu equipo y procesa el archivo para conservar su estructura."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-faq-item">
{"\n"}
<h3 className="landing-faq-question">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"\n                        ¿Se puede trabajar únicamente desde el navegador?\n                    "}
</h3>
{"\n"}
<p className="landing-faq-answer">
{"Sí. El navegador permite planificar, escribir, editar y conservar tu trabajo en el dispositivo o en tu cuenta. La asistencia de IA requiere su servicio configurado. Para las exportaciones que utilizan el motor nativo, debes tenerlo instalado y en ejecución."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-faq-item">
{"\n"}
<h3 className="landing-faq-question">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-target">

</use>
</svg>
{"\n                        ¿Qué relación tiene la plataforma con el CNEB?\n                    "}
</h3>
{"\n"}
<p className="landing-faq-answer">
{"Las referencias de competencias, capacidades, desempeños y enfoques se organizan tomando como base el Currículo Nacional del MINEDU. La cobertura disponible depende del nivel, área y grado; contrasta siempre las referencias con tu programa curricular."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-faq-item">
{"\n"}
<h3 className="landing-faq-question">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n                        ¿Con qué asistentes de IA puede trabajar el sistema?\n                    "}
</h3>
{"\n"}
<p className="landing-faq-answer">
{"El proyecto admite la integración de asistentes de OpenAI, DeepSeek y Google Gemini mediante servicios de servidor. Los modelos que podrás utilizar dependerán del proveedor y la configuración habilitados para esta instalación."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-faq-item">
{"\n"}
<h3 className="landing-faq-question">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sliders">

</use>
</svg>
{"\n                        ¿Cómo se administra el consumo de IA?\n                    "}
</h3>
{"\n"}
<p className="landing-faq-answer">
{"El proyecto contempla un registro de consumo y créditos en Supabase. En esta instalación, la activación de la IA y la gestión comercial avanzada siguen pendientes de configuración; esta pantalla no realiza cobros."}
</p>
{"\n"}
</div>
{"\n"}
<div className="landing-faq-item">
{"\n"}
<h3 className="landing-faq-question">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-shield">

</use>
</svg>
{"\n                        ¿Cómo se resguarda la información de mi cuenta?\n                    "}
</h3>
{"\n"}
<p className="landing-faq-answer">
{"Puedes conservar tus sesiones en el dispositivo y sincronizarlas con Supabase cuando accedes a tu cuenta. Las políticas por usuario restringen el acceso a tus registros. Si utilizas IA, el contenido necesario de la solicitud se procesa con el proveedor configurado; evita incluir información personal de estudiantes."}
</p>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
</section>
{"\n"}
{"\n"}
<section className="landing-cta-banner">
{"\n"}
<div className="landing-cta-card">
{"\n"}
<h2 className="landing-cta-title">
{"Tu siguiente clase puede empezar hoy"}
</h2>
{"\n"}
<p className="landing-cta-text">
{"Reúne tus ideas y organiza una propuesta de aprendizaje pensada para tu grupo."}
</p>
{"\n"}
<button type="button" className="landing-btn-lg landing-btn-primary" data-action="enter-app" aria-label="Entrar al editor y planificar sesión ahora">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n"}
<span>
{"Abrir el planificador y comenzar"}
</span>
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-arrow-right">

</use>
</svg>
{"\n"}
</button>
{"\n"}
</div>
{"\n"}
</section>
{"\n"}
{"\n"}
<section id="contacto" className="landing-contact-section">
{"\n"}
<div className="landing-contact-content">
{"\n"}
<h2 className="landing-contact-title">
{"CONVERSEMOS"}
</h2>
{"\n"}
<div className="landing-contact-divider">

</div>
{"\n"}
<p className="landing-contact-desc">
{"\n                    Si buscas ayuda o quieres desarrollar una propuesta digital, comparte tu consulta mediante los canales disponibles.\n                "}
</p>
{"\n"}
<div className="landing-contact-buttons">
{"\n"}
<a href="https://wa.me/51918165428" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-whatsapp" aria-label="Contactar por WhatsApp al 918165428">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-whatsapp">

</use>
</svg>
{"\n"}
<span>
{"WHATSAPP"}
</span>
{"\n"}
</a>
{"\n"}
<a href="mailto:pabloclsa87@gmail.com" className="contact-btn contact-btn-email" aria-label="Enviar correo a pabloclsa87@gmail.com">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-mail">

</use>
</svg>
{"\n"}
<span>
{"EMAIL"}
</span>
{"\n"}
</a>
{"\n"}
<a href="https://space.sypablitodp.site" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-web" aria-label="Visitar sitio personal space.sypablitodp.site">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-globe">

</use>
</svg>
{"\n"}
<span>
{"WEB PERSONAL"}
</span>
{"\n"}
</a>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
</section>
{"\n"}
{"\n"}
<footer className="landing-footer">
<div className="gp-footer-brand"><img src="assets/grafiplot-sesiones.png" alt="Logo de Sesiones GRAFIPLOT"/><div><strong>Sesiones GRAFIPLOT</strong><p>Tus ideas, convertidas en experiencias para aprender.</p></div></div>
{"\n"}
<div className="landing-creator-box">
{"\n"}
<div className="landing-creator-icon" aria-hidden="true">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-sparkles">

</use>
</svg>
{"\n"}
</div>
{"\n"}
<p className="landing-creator-text">
{"\n                    PROYECTO ORIGINAL CREADO CON "}
<svg className="ui-icon icon-heart" aria-hidden="true">
<use href="#icon-heart">

</use>
</svg>
{" POR "}
<a href="https://space.sypablitodp.site" target="_blank" rel="noopener noreferrer" className="creator-highlight">
{"SAMUEL PABLO CLAUDIO"}
</a>
{"\n"}
</p>
{"\n"}
<span className="landing-classified-tag">
{"© 2026 PABLITO_DP — ACCESO CLASIFICADO"}
</span>
{"\n"}
</div>
{"\n"}
<div className="landing-footer-links">
{"\n"}
<a href="https://space.sypablitodp.site" target="_blank" rel="noopener noreferrer" className="landing-footer-link">
{"space.sypablitodp.site"}
</a>
{"\n"}
<a href="descargas_landing.html" className="landing-footer-link">
{"Exportación de Word"}
</a>
{"\n"}
<a href="conexion.html" className="landing-footer-link">
{"Estado del servicio"}
</a>
{"\n"}
<a href="#" id="link-terms-footer" className="landing-footer-link">
{"Condiciones y privacidad"}
</a>
{"\n"}
<a href="#/app" className="landing-footer-link" data-action="enter-app">
{"Abrir mi espacio"}
</a>
{"\n"}
</div>
{"\n"}
</footer>
{"\n"}
</div>
{"\n"}
    </>;
}

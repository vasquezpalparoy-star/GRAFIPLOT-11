import {ArrowRight, ArrowUpRight, BookOpen, Check, CircleHelp, FileText, LogOut, Monitor, Plus, ShieldCheck, Sparkles, WandSparkles} from 'lucide-react';
import {SessionCards} from '../live';

export function Home() {
    return <>
<div id="home-view" className="home-view hidden">
    <header className="home-header">
        <button type="button" className="home-brand" data-action="view-home" aria-label="Ir a Mi panel">
            <span className="home-brand-mark"><img src="assets/grafiplot-sesiones.png" alt="" aria-hidden="true"/></span>
            <span><strong>Mi panel</strong><small>Tus recursos para la siguiente experiencia</small></span>
        </button>
        <nav className="home-nav" aria-label="Navegación del espacio"><a href="#/home" className="home-nav-link active">Mi panel</a><a href="#/sessions" className="home-nav-link">Mis sesiones</a></nav>
        <div className="home-account">
            <a className="home-support" href="mailto:pabloclsa87@gmail.com" aria-label="Contactar con soporte"><CircleHelp size={18}/><span>Soporte</span></a>
            <label className="theme-picker" title="Tema de la aplicación"><Monitor size={16} aria-hidden="true"/><span className="sr-only">Tema de la aplicación</span><select data-theme-selector="" aria-label="Tema de la aplicación"><option value="system">Sistema</option><option value="light">Claro</option><option value="dark">Oscuro</option></select></label>
            <div className="home-account-copy"><strong id="home-account-name">Docente</strong><span id="home-account-plan">Plan docente</span></div>
            <span id="home-account-avatar" className="home-account-avatar" aria-hidden="true">D</span>
            <button type="button" id="home-logout" className="btn btn-ghost btn-sm" aria-label="Cerrar sesión"><LogOut size={17}/><span>Salir</span></button>
        </div>
    </header>
    <main className="home-main" id="home-main">
        <section className="home-welcome" aria-labelledby="home-welcome-title">
            <div className="home-welcome-copy">
                <span className="home-eyebrow"><span className="home-live-dot"/>UN LUGAR PARA ORGANIZAR TUS CLASES</span>
                <h1 id="home-welcome-title">Tu próxima experiencia comienza aquí</h1>
                <p>Lo que imaginas para tus estudiantes encuentra aquí su punto de partida.<br/>Prepara nuevas propuestas, organiza tus documentos y retoma tu trabajo.</p>
                <div className="home-primary-actions">
                    <button type="button" className="btn btn-primary home-primary-button" data-home-action="new-session"><Plus size={19}/>Crear nueva sesión<ArrowUpRight size={17}/></button>
                    <button type="button" id="home-continue-session" className="btn btn-ghost home-secondary-button hidden" data-home-action="continue-session"><BookOpen size={17}/>Continuar último borrador<ArrowRight size={16}/></button>
                </div>
                <span className="home-welcome-note"><Check size={14}/>Tus ideas, tus decisiones. La IA te acompaña.</span>
            </div>
            <aside className="home-guide" aria-label="Guía para comenzar">
                <div className="home-guide-art" aria-hidden="true"><span className="home-orbit orbit-one"/><span className="home-orbit orbit-two"/><span className="home-guide-spark"><WandSparkles size={32}/></span><span className="home-orbit-star"><Sparkles size={18}/></span></div>
                <div className="home-guide-heading"><span className="home-guide-icon"><Sparkles size={18}/></span><div><span>DE TU PROPUESTA A LA PRÁCTICA</span><strong>Organiza tu experiencia por etapas</strong></div></div>
                <ol className="home-guide-steps"><li><span>1</span><p><strong>Indica el contexto</strong>Define el nivel, el área y la intención de aprendizaje.</p></li><li><span>2</span><p><strong>Elabora con apoyo de IA</strong>Desarrolla una propuesta tomando como referencia el CNEB.</p></li><li><span>3</span><p><strong>Comprueba y descarga</strong>Ajusta el contenido y obtén el archivo de tu clase.</p></li></ol>
            </aside>
        </section>
        <section className="home-summary" aria-label="Resumen de la cuenta">
            <article className="home-summary-card"><span className="home-summary-icon"><FileText size={21}/></span><div><strong id="home-session-count">0</strong><span>Planificaciones conservadas</span></div><span className="home-stat-caption">Tus documentos a tu alcance</span></article>
            <article className="home-summary-card"><span className="home-summary-icon accent-purple"><Sparkles size={21}/></span><div><strong id="home-credit-count">--</strong><span>Créditos de IA</span></div><span className="home-stat-caption">Para elaborar nuevas propuestas</span></article>
            <article className="home-summary-card home-plan-summary"><span className="home-summary-icon accent-green"><ShieldCheck size={21}/></span><div className="home-plan-summary-copy"><strong id="home-plan-name">Docente</strong><span>Plan actual</span></div><button type="button" className="home-plan-link" data-home-action="view-plans">Ver planes<ArrowRight size={15}/></button></article>
        </section>
<section className="home-section" aria-labelledby="home-tools-title">
{"\n"}
<div className="home-section-heading">
{"\n"}
<div>
{"\n"}
<span className="home-eyebrow">
{"Herramientas"}
</span>
{"\n"}
<h2 id="home-tools-title">
{"¿En qué trabajarás hoy?"}
</h2>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
<div className="home-tool-grid">
{"\n"}
<article className="home-tool-card home-tool-card-active">
{"\n"}
<span className="home-tool-icon">
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-file">

</use>
</svg>
</span>
{"\n"}
<div className="home-tool-copy">
{"\n"}
<span className="home-tool-status">
{"Disponible"}
</span>
{"\n"}
<h3>
{"Una sesión de aprendizaje"}
</h3>
{"\n"}
<p>
{"Organiza, desarrolla y descarga propuestas curriculares para Inicial, Primaria y Secundaria con referencia al CNEB."}
</p>
{"\n"}
</div>
{"\n"}
<button type="button" className="home-tool-action" data-home-action="new-session">
{"\n                            Preparar una clase "}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-arrow-right">

</use>
</svg>
{"\n"}
</button>
{"\n"}
</article>
{"\n"}
<article className="home-tool-card home-tool-card-active" aria-label="Planificación conectada">
{"\n"}
<span className="home-tool-icon">
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-folder">

</use>
</svg>
</span>
{"\n"}
<div className="home-tool-copy">
{"\n"}
<span className="home-tool-status">
{"Beta"}
</span>
{"\n"}
<h3>
{"Planificación conectada"}
</h3>
{"\n"}
<p>
{"Desarrolla Experiencias, Unidades y Proyectos de aprendizaje y conserva su mapa de trabajo de manera progresiva."}
</p>
{"\n"}
</div>
{"\n"}
<button type="button" className="home-tool-action" data-open-planning="">
{"Explorar mis planificaciones"}
</button>
{"\n"}
</article>
{"\n"}
</div>
{"\n"}
</section>
{"\n"}
<section id="home-sessions-section" className="home-section home-sessions-section" aria-labelledby="home-sessions-title">
{"\n"}
<div className="home-section-heading">
{"\n"}
<div>
{"\n"}
<span className="home-eyebrow">
{"Archivo de mis propuestas"}
</span>
{"\n"}
<h2 id="home-sessions-title">
{"Mis sesiones"}
</h2>
{"\n"}
</div>
{"\n"}
<button type="button" id="home-toggle-all-sessions" className="btn btn-ghost btn-sm hidden">
{"Ver todas"}
</button>
{"\n"}
</div>
{"\n"}
<div id="home-session-list" className="home-session-list" aria-live="polite"><SessionCards/></div>
</section>
{"\n"}
</main>
{"\n"}
<dialog id="home-plans-dialog" className="home-plans-dialog" aria-labelledby="home-plans-title" aria-describedby="home-plans-description">
{"\n"}
<div className="home-plans-shell">
{"\n"}
<header className="home-plans-header">
{"\n"}
<div>
{"\n"}
<span className="home-eyebrow">
{"Comparación de planes"}
</span>
{"\n"}
<h2 id="home-plans-title">
{"Revisa las características de cada alternativa"}
</h2>
{"\n"}
<p id="home-plans-description">
{"Compara las opciones con calma. Por ahora, esta sección no permite modificar el plan ni efectuar pagos."}
</p>
{"\n"}
</div>
{"\n"}
<button type="button" className="home-plans-close" data-home-action="close-plans" aria-label="Cerrar comparación de planes">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-close">

</use>
</svg>
{"\n"}
</button>
{"\n"}
</header>
{"\n"}
<div className="home-plans-grid">
{"\n"}
<article className="home-plan-card" data-plan-code="free">
{"\n"}
<div className="home-plan-card-heading">
{"\n"}
<div>
<span className="home-plan-kicker">
{"Para comenzar"}
</span>
<h3>
{"Gratuito"}
</h3>
</div>
{"\n"}
<span className="home-plan-current-badge" hidden={true}>
{"Tu plan actual"}
</span>
{"\n"}
</div>
{"\n"}
<p className="home-plan-description">
{"Las herramientas básicas para preparar y conservar tus primeras propuestas."}
</p>
{"\n"}
<p className="home-plan-credits">
<strong>
{"30"}
</strong>
<span>
{"créditos de IA por ciclo"}
</span>
</p>
{"\n"}
<ul className="home-plan-benefits">
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Crear sesiones con IA"}
</li>
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Guardar tus planificaciones"}
</li>
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Exportar a Word y PDF"}
</li>
{"\n"}
</ul>
{"\n"}
<span className="home-plan-status">
{"En desarrollo"}
</span>
{"\n"}
</article>
{"\n"}
<article className="home-plan-card" data-plan-code="beta_teacher">
{"\n"}
<div className="home-plan-card-heading">
{"\n"}
<div>
<span className="home-plan-kicker">
{"Acceso anticipado"}
</span>
<h3>
{"Docente Beta"}
</h3>
</div>
{"\n"}
<span className="home-plan-current-badge" hidden={true}>
{"Tu plan actual"}
</span>
{"\n"}
</div>
{"\n"}
<p className="home-plan-description">
{"Pensado para quienes exploran Sesiones GRAFIPLOT y aportan a su mejora."}
</p>
{"\n"}
<p className="home-plan-credits">
<strong>
{"100"}
</strong>
<span>
{"créditos de IA por ciclo"}
</span>
</p>
{"\n"}
<ul className="home-plan-benefits">
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Todo lo incluido en Gratuito"}
</li>
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Adjuntar fuentes al copiloto"}
</li>
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Acceso anticipado a novedades"}
</li>
{"\n"}
</ul>
{"\n"}
<span className="home-plan-status">
{"En desarrollo"}
</span>
{"\n"}
</article>
{"\n"}
<article className="home-plan-card home-plan-card-featured" data-plan-code="teacher">
{"\n"}
<div className="home-plan-card-heading">
{"\n"}
<div>
<span className="home-plan-kicker">
{"Para el día a día"}
</span>
<h3>
{"Docente Plus"}
</h3>
</div>
{"\n"}
<span className="home-plan-current-badge" hidden={true}>
{"Tu plan actual"}
</span>
{"\n"}
</div>
{"\n"}
<p className="home-plan-description">
{"Más recursos y capacidad para quienes planifican de manera habitual."}
</p>
{"\n"}
<p className="home-plan-credits">
<strong>
{"150"}
</strong>
<span>
{"créditos de IA por ciclo"}
</span>
</p>
{"\n"}
<ul className="home-plan-benefits">
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Todo lo incluido en Gratuito"}
</li>
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Archivos y calidad equilibrada"}
</li>
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Plantillas personalizadas"}
</li>
{"\n"}
</ul>
{"\n"}
<span className="home-plan-status">
{"En desarrollo"}
</span>
{"\n"}
</article>
{"\n"}
<article className="home-plan-card" data-plan-code="pro">
{"\n"}
<div className="home-plan-card-heading">
{"\n"}
<div>
<span className="home-plan-kicker">
{"Máxima capacidad"}
</span>
<h3>
{"Docente Pro"}
</h3>
</div>
{"\n"}
<span className="home-plan-current-badge" hidden={true}>
{"Tu plan actual"}
</span>
{"\n"}
</div>
{"\n"}
<p className="home-plan-description">
{"Pensado para una actividad frecuente con acceso a funciones de mayor alcance."}
</p>
{"\n"}
<p className="home-plan-credits">
<strong>
{"400"}
</strong>
<span>
{"créditos de IA por ciclo"}
</span>
</p>
{"\n"}
<ul className="home-plan-benefits">
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Todo lo incluido en Plus"}
</li>
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Calidad máxima de IA"}
</li>
{"\n"}
<li>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-check">

</use>
</svg>
{"Acceso previsto a planificación avanzada"}
</li>
{"\n"}
</ul>
{"\n"}
<span className="home-plan-status">
{"En desarrollo"}
</span>
{"\n"}
</article>
{"\n"}
</div>
{"\n"}
<footer className="home-plans-footer">
{"\n"}
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-shield">

</use>
</svg>
{"\n"}
<p>
<strong>
{"Vista informativa."}
</strong>
{" Esta sección no genera cargos ni modifica tu suscripción."}
</p>
{"\n"}
</footer>
{"\n"}
</div>
{"\n"}
</dialog>
{"\n"}
</div>
{"\n"}
    </>;
}

import type {CSSProperties} from 'react';

export function AuthDialog() {
    return <>
{" "}
{"\n"}
<div id="auth-modal" className="load-modal hidden" style={{"zIndex": "9999"} as CSSProperties}>
{"\n"}
<div className="load-modal-content glass-card auth-premium-card" style={{"maxWidth": "420px", "padding": "2.5rem", "textAlign": "center", "position": "relative"} as CSSProperties}>
{"\n"}
{"\n"}
<button id="btn-close-auth" className="btn btn-ghost btn-sm" aria-label="Cerrar" style={{"position": "absolute", "top": "1rem", "right": "1rem", "color": "#71717a"} as CSSProperties}>
<svg className="ui-icon" aria-hidden="true">
<use href="#icon-close">

</use>
</svg>
</button>
{"\n"}
{"\n"}
<div style={{"marginBottom": "1.5rem", "display": "flex", "justifyContent": "center"} as CSSProperties}>
{"\n"}
<div style={{"background": "#090a0f", "border": "1px solid rgba(255,255,255,0.06)", "padding": "12px", "borderRadius": "8px", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "var(--shadow-sm)"} as CSSProperties}>
{"\n"}
<img src="assets/grafiplot-sesiones.png" alt="Sesiones GRAFIPLOT" className="gp-auth-logo"/>
{"\n"}
</div>
{"\n"}
</div>
{"\n"}
{"\n"}
<div className="auth-tabs">
{"\n"}
<button type="button" id="auth-tab-login" className="auth-tab active">
{"Ingresar"}
</button>
{"\n"}
<button type="button" id="auth-tab-register" className="auth-tab">
{"Registrarme"}
</button>
{"\n"}
</div>
{"\n"}
{"\n"}
<div className="load-modal-header" style={{"display": "none"} as CSSProperties}>
{"\n"}
<h3 id="auth-title">
{"Acceder a mi cuenta"}
</h3>
{"\n"}
</div>
{"\n"}
<p id="auth-subtitle" style={{"display": "none"} as CSSProperties}>

</p>
{"\n"}
<form id="auth-form" autoComplete="off">
{"\n"}
<p id="auth-recovery-description" className="hidden" role="status">

</p>
{"\n"}
{"\n"}
<div id="auth-group-username" className="form-group hidden" style={{"textAlign": "left", "marginBottom": "1rem"} as CSSProperties}>
{"\n"}
<input type="text" id="auth-username" className="auth-field" placeholder="Nombre de usuario sin espacios"/>
{"\n"}
</div>
{"\n"}
{"\n"}
<div className="form-group" style={{"textAlign": "left", "marginBottom": "1rem"} as CSSProperties}>
{"\n"}
<input type="email" id="auth-email" className="auth-field" placeholder="Correo electrónico" required={true}/>
{"\n"}
</div>
{"\n"}
{"\n"}
<div className="form-group" style={{"textAlign": "left", "marginBottom": "1rem"} as CSSProperties}>
{"\n"}
<input type="password" id="auth-password" className="auth-field" placeholder="Contraseña" required={true}/>
{"\n"}
</div>
{"\n"}
{"\n"}
<div id="auth-group-confirm-password" className="form-group hidden" style={{"textAlign": "left", "marginBottom": "1rem"} as CSSProperties}>
{"\n"}
<input type="password" id="auth-confirm-password" className="auth-field" placeholder="Repite tu contraseña"/>
{"\n"}
</div>
{"\n"}
{"\n"}
<div id="auth-group-terms" className="form-group hidden" style={{"textAlign": "left", "marginBottom": "1.5rem", "display": "flex", "alignItems": "center", "gap": "8px"} as CSSProperties}>
{"\n"}
<input type="checkbox" id="auth-terms" style={{"width": "16px", "height": "16px", "cursor": "pointer", "accentColor": "#00d2ff", "margin": "0"} as CSSProperties}/>
{"\n"}
<label htmlFor="auth-terms" style={{"fontSize": "0.8rem", "color": "#71717a", "lineHeight": "1.3", "cursor": "pointer", "userSelect": "none"} as CSSProperties}>
{"\n                        Acepto los "}
<a href="#" style={{"color": "#00d2ff", "textDecoration": "none", "fontWeight": "600", "borderBottom": "1px dotted #00d2ff"} as CSSProperties}>
{"Términos\n                            y Privacidad"}
</a>
{"\n"}
</label>
{"\n"}
</div>
{"\n"}
{"\n"}
<button type="submit" id="btn-submit-auth" className="auth-submit-btn">
{"\n                    Acceder a mi cuenta\n                "}
</button>
{"\n"}
<button type="button" id="btn-forgot-password" className="btn btn-ghost">
{"Recuperar mi acceso"}
</button>
{"\n"}
</form>
{"\n"}
{"\n"}
<div style={{"display": "none"} as CSSProperties}>
{"\n"}
<span id="auth-toggle-text">
{"¿Es tu primera visita?"}
</span>
{"\n"}
<a href="#" id="auth-toggle-mode">
{"Créala aquí"}
</a>
{"\n"}
</div>
{"\n"}
{"\n"}
<div style={{"marginTop": "0.5rem"} as CSSProperties}>
{"\n"}
<button type="button" id="btn-cancel-auth" className="auth-cancel-btn" style={{"background": "none", "border": "none", "color": "#71717a", "fontSize": "0.9rem", "cursor": "pointer", "transition": "color 0.2s"} as CSSProperties}>
{"Cancelar"}
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

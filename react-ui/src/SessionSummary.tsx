import {ArrowUpRight, BookOpen, Check, Clock3, FileText, GraduationCap, Layers3, ShieldCheck, Target} from 'lucide-react';
import {entries, type Snapshot} from './bridge';

export function SessionSummary({state}:{state:Snapshot}) {
    const f=state.fields;
    return <aside className="sl-summary" aria-label="Resumen de tu sesión">
        <div className="sl-session-preview"><div className="sl-preview-pattern" aria-hidden="true"><span/><span/><span/><BookOpen size={44}/></div>
            <span className="sl-preview-kicker">TU PLANIFICACIÓN, EN RESUMEN</span>
            <h3 className={!f.titulo ? 'empty' : ''}>{f.titulo || 'Una propuesta que empieza a tomar forma'}</h3>
            <div className="sl-preview-tags"><span><GraduationCap size={14}/>{f.grado || 'El grupo de aprendizaje'}</span><span><Clock3 size={14}/>{f.duracion || 'Duración prevista'}</span></div>
            <div className="sl-preview-area"><span>{f.area || 'Elige un área curricular'}</span><ArrowUpRight size={17}/></div>
        </div>
        <div className="sl-summary-details"><div className="sl-section-label"><h3>Una experiencia con intención</h3><span className="sl-status-dot"/></div>
            {[
                {Icon:Target,title:'Aprendizajes bien definidos',text:entries(f.competencia).length ? `${entries(f.competencia).length} competencias seleccionadas` : 'Competencias y criterios de evaluación'},
                {Icon:Layers3,title:'Cada momento de la clase',text:'Inicio, desarrollo y cierre'},
                {Icon:FileText,title:'Preparada para continuar',text:'Comprueba, personaliza y descarga en Word o PDF'}
            ].map(({Icon,title,text})=><div className="sl-summary-item" key={title}><span><Icon size={18}/></span><div><strong>{title}</strong><p>{text}</p></div><Check size={14}/></div>)}
        </div>
        <div className="sl-teacher-note"><ShieldCheck size={20}/><div><strong>La decisión pedagógica sigue siendo tuya.</strong><p>La IA aporta una propuesta. Tú compruebas los contenidos y los adecuas a tu grupo.</p></div></div>
    </aside>;
}

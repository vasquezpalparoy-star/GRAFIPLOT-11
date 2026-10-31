import {Check, CheckCheck, FileText, Palette, Paperclip, Settings2, Sparkles, Trash2, TriangleAlert, Users} from 'lucide-react';
import {Disclosure, FormField, SectionHeading} from './components';
import {entries, type Bridge, type Snapshot} from './bridge';

export function ReviewStep({state,bridge}:{state:Snapshot;bridge:Bridge}) {
    const f=state.fields;
    return <section className="sl-card sl-main-card" aria-labelledby="react-step-heading">
        <SectionHeading icon={CheckCheck} eyebrow="ANTES DE DAR EL SIGUIENTE PASO" title="Comprueba tu propuesta de clase" description="Verifica la información y realiza los ajustes que consideres necesarios antes de crear la sesión."/>
        <div className="sl-form-body">
            <div className="sl-review-title"><span className="sl-review-check"><Check size={22}/></span><div><small>SESIÓN DE APRENDIZAJE</small><h3>{f.titulo}</h3><p>{[f.nivel, f.grado, f.area].filter(Boolean).join(' · ')}<span> · {f.duracion}</span></p></div></div>
            <div className="sl-review-grid">{[
                ['Competencias',f.competencia],['Capacidades',f.capacidad],['Desempeño',f.desempeno],
                ['Actividades propuestas',f.activities],['Criterios de evaluación',f.criteria],['Evidencia',f.evidence]
            ].map(([label,value])=><div key={label}><h4>{label}</h4><p>{value || 'Pendiente de completar y comprobar en la propuesta'}</p></div>)}</div>
            {state.warnings.length>0 && <Disclosure icon={TriangleAlert} title="Puntos que conviene comprobar" note={`${state.warnings.length} observaciones · no bloquean por sí solas la generación`}>
                <ul className="sl-warning-list">{state.warnings.map(warning=><li key={warning}>{warning}</li>)}</ul>
            </Disclosure>}
            <div className="sl-section-label"><h3>Personaliza los detalles</h3><span>Ajustes complementarios</span></div>
            <Disclosure icon={Settings2} title="Asistencia y enfoque didáctico" note="Preferencias de elaboración y método de trabajo">
                <div className="sl-field-grid"><FormField name="quality" label="Modo de calidad" state={state} bridge={bridge} options={state.qualities}/>
                    <FormField name="methodology" label="Metodología" state={state} bridge={bridge} options={state.methodologies}/></div>
                <p className="sl-small-note">Las opciones dependen de tu cuenta y disponibilidad. Los créditos y permisos se comprueban al generar.</p>
                <button className="sl-text-button" type="button" onClick={()=>void bridge.refreshAvailability()}>Volver a comprobar disponibilidad</button>
            </Disclosure>
            <Disclosure icon={Paperclip} title="Fuentes de apoyo" note={state.sourceFile || 'Adjunta un archivo que ayude a contextualizar la propuesta'}>
                {state.sourceFile ? <div className="sl-attached-file"><FileText size={22}/><span>{state.sourceFile}</span><button type="button" className="sl-icon-button" aria-label="Quitar archivo" onClick={()=>bridge.removeAttachment()}><Trash2 size={18}/></button></div>
                    : <label className="sl-upload"><Paperclip size={25}/><strong>Añade una referencia para tu clase</strong><span>Un material que ayude a contextualizar el aprendizaje.</span><input aria-label="Adjuntar referencia" type="file" onChange={event=>{const file=event.target.files?.[0];if(file) bridge.setAttachment(file);}}/></label>}
                <FormField name="sourceInstruction" label="¿Cómo usamos esta referencia?" state={state} bridge={bridge} rows={2} placeholder="Ej. Toma la situación de la primera página como punto de partida"/>
            </Disclosure>
            <Disclosure icon={Palette} title="Formato y apariencia del documento" note="Estructura y diseño del archivo final">
                <div className="sl-field-grid"><FormField name="template" label="Tipo de sesión" state={state} bridge={bridge} options={state.templates}/><FormField name="designPreset" label="Estilo del documento" state={state} bridge={bridge} options={state.presets}/></div>
                <button type="button" className="sl-text-button" onClick={()=>bridge.showLegacy('advanced')}>Abrir todas las opciones del editor</button>
            </Disclosure>
            <Disclosure icon={Users} title="Estudiantes" note={entries(f.alumnos).length ? `${entries(f.alumnos).length} registrados` : 'Opcional · no se necesita una lista para crear la sesión'}>
                <FormField name="alumnos" label="Lista de estudiantes" state={state} bridge={bridge} rows={5} hint="Un nombre por línea. Puedes añadir la lista después de generar."/>
            </Disclosure>
            <div className="sl-generation-note"><Sparkles size={20}/><p>La IA elaborará una propuesta para tu revisión. Mantén esta pestaña abierta durante la generación y comprueba el resultado antes de usarlo en clase.</p></div>
            {state.hasDocument && <p className="sl-small-note">Las propuestas que ajustes aquí se aplican al generar de nuevo. Para editar directamente la sesión guardada, abre el editor avanzado.</p>}
        </div>
    </section>;
}

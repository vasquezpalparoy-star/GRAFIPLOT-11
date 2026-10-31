import {BookOpenCheck, Lightbulb, PencilLine, Sparkles, TriangleAlert} from 'lucide-react';
import {Disclosure, FormField, SectionHeading} from './components';
import {includes, type Bridge, type Snapshot} from './bridge';

export function LearningStep({state,bridge}:{state:Snapshot;bridge:Bridge}) {
    const selected=state.profiles.filter(profile=>includes(state.fields.competencia,profile.competency.officialName));
    return <section className="sl-card sl-main-card" aria-labelledby="react-step-heading">
        <SectionHeading icon={BookOpenCheck} eyebrow="EL APRENDIZAJE COMO EJE" title="Selecciona qué aprenderá tu grupo" description="Determina los aprendizajes esperados y añade las propuestas que quieras desarrollar."/>
        <div className="sl-form-body">
            <div className={state.profiles.length ? 'sl-inline-info' : 'sl-inline-info caution'}><TriangleAlert size={19}/><p>{state.profiles.length ? 'Referencias curriculares de perfiles piloto. Revisa su correspondencia con tu programa curricular.' : state.curriculumStatus || 'Comprobando la cobertura curricular…'}</p></div>
            <div className="sl-section-label"><h3>Competencias y capacidades</h3><span className="sl-count">{selected.length} seleccionadas</span></div>
            <div className="sl-competencies">{state.profiles.map((profile,index)=> {
                const checked=includes(state.fields.competencia,profile.competency.officialName);
                return <div key={profile.id} className={`sl-competency${checked ? ' selected' : ''}`}>
                    <label className="sl-competency-label"><input type="checkbox" checked={checked} onChange={()=>bridge.toggleCompetency(index)}/><span>{profile.competency.officialName}</span></label>
                    {checked && <div className="sl-capacities">{profile.capacities.map((capacity,capacityIndex)=><label key={capacity.officialName}><input type="checkbox" checked={includes(state.fields.capacidad,capacity.officialName)} onChange={()=>bridge.toggleCapacity(index,capacityIndex)}/><span>{capacity.officialName}</span></label>)}</div>}
                </div>;
            })}</div>
            <Disclosure icon={PencilLine} title={state.profiles.length ? 'Editar o incorporar aprendizajes propios' : 'Incorporar aprendizajes del programa curricular'}>
                <FormField name="competencia" label="Competencias" state={state} bridge={bridge} rows={3} hint="Escribe cada una en una línea; también puedes separarlas con punto y coma."/>
                <FormField name="capacidad" label="Capacidades" state={state} bridge={bridge} rows={3}/>
            </Disclosure>
            <FormField name="desempeno" label="Desempeño precisado" state={state} bridge={bridge} rows={3} placeholder="¿Qué actuación esperas observar durante la clase?" hint="Incorpora el desempeño de referencia y adáptalo al contexto de tus estudiantes."/>
            {selected.length>0 && <Disclosure icon={BookOpenCheck} title="Revisar ejemplos de desempeños curriculares">
                {selected.map(profile=><div className="sl-reference" key={profile.id}><strong>{profile.competency.officialName}</strong><p>{profile.provenance?.reviewNote || 'Referencia piloto sujeta a cotejo con el programa curricular del MINEDU.'}</p><ul>{(profile.performancesByGrade?.[state.fields.grado.match(/\d+/)?.[0] || ''] || []).map(item=><li key={item.description}>{item.description}</li>)}</ul></div>)}
            </Disclosure>}
            <div className="sl-ideas-card"><div className="sl-ideas-heading"><span><Lightbulb size={21}/></span><div><h3>Tu experiencia enriquece la propuesta</h3><p>Estas aportaciones se pueden modificar y se distinguen de las referencias del currículo.</p></div><Sparkles size={19}/></div>
                <FormField name="activities" label="Actividades que deseas desarrollar" state={state} bridge={bridge} rows={3} placeholder="Ej. Observar plantas de la localidad y registrar sus características en grupos"/>
                <FormField name="criteria" label="Criterios de evaluación" state={state} bridge={bridge} rows={3} placeholder="¿Qué señales mostrarán el aprendizaje? Escribe un criterio en cada línea."/>
                <FormField name="evidence" label="Evidencia de aprendizaje" state={state} bridge={bridge} rows={2} placeholder="¿Con qué producto o actuación evidenciarán lo aprendido?"/>
                <p className="sl-small-note">Si no añades propuestas, podrás revisar las sugerencias de la IA al crear la sesión. Estas sugerencias no constituyen enunciados oficiales del currículo.</p>
            </div>
        </div>
    </section>;
}

/* Vistas del rol Coordinador (verde). */
const VC = {
  dashboard(){
    const d=DATA.coord;
    return `<div class="grid g4">${d.kpis.map(C.kpi).join('')}</div>
    <div class="grid g2" style="margin-top:16px">
      <div class="card"><h3>Tendencia de deserción mensual</h3>${C.line(d.meses,[{vals:d.meta,c:'#f59e0b',dash:1},{vals:d.real,c:'#ef4444'}],{min:6,max:12})}
        <div class="legend"><span><i style="background:#f59e0b"></i>Meta</span><span><i style="background:#ef4444"></i>Real</span></div></div>
      <div class="card"><h3>Distribución por nivel de riesgo</h3>${C.bars(d.niveles,{suffix:'',max:400})}<div class="note">87 casos críticos y altos requieren atención inmediata.</div></div>
    </div>`;
  },
  prediccion(){
    const d=DATA.coord;
    return `<div class="banner"><div><b>Motor de inteligencia predictiva · EduAlert</b><br><small>Modelo entrenado con datos académicos, financieros y de asistencia. Precisión 88.3%</small></div><span class="chip ok">Activo</span></div>
    <div class="grid g2e">
      <div class="card"><h3>Tendencia de abandono proyectada</h3>${C.line(d.proyMeses,[{vals:d.proyeccion,c:'#ef4444'}],{min:6,max:14,area:true})}</div>
      <div class="card"><h3>Alertas tempranas IA</h3>${d.alertas.map(([n,p,l])=>`<div class="row"><div class="who"><span class="av">${C.ini(n)}</span><div><b>${n}</b><br><small>Probabilidad ${p}%</small></div></div>${C.chip(l)}</div>`).join('')}</div>
    </div>`;
  },
  programas(){
    const d=DATA.coord.programas,col=v=>v>=30?'#ef4444':v>=20?'#f59e0b':v>=12?'#eab308':'#16a34a';
    return `<div class="grid g2e"><div class="card"><h3>Ranking de deserción por programa</h3>${C.bars(d.map(([n,v])=>[n,v,col(v)]),{max:40})}</div>
      <div class="card"><h3>Estadísticas por programa</h3>${d.map(([n,v])=>`<div class="row"><div><b>${n}</b><br><small>Tasa de deserción</small></div><span class="chip" style="background:${col(v)}22;color:${col(v)}">${v}%</span></div>`).join('')}</div></div>`;
  },
  seguimiento(){
    const s=DATA.seguimiento;
    return `<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
      <div class="card"><div class="hero"></div><div class="av">${s.ini}</div><b>${s.n}</b><br><small>Ingeniería Civil · 6° semestre</small>
        <h3 style="margin-top:16px">Información académica</h3>${s.info.map(([k,v])=>`<div class="kv"><span>${k}</span><b>${v}</b></div>`).join('')}
        <h3 style="margin-top:16px">Estado del caso</h3>${s.caso.map(([k,v])=>`<div class="kv"><span>${k}</span>${C.chip(v)}</div>`).join('')}</div>
      <div class="card"><h3>Plan de acción personalizado</h3>${s.plan.map((t,i)=>`<button class="task ${S.plan[i]?'done':''}" data-action="task" data-v="${i}"><span class="ck">✓</span>${t}</button>`).join('')}</div>
      <div class="card"><h3>Historial de intervenciones</h3>${s.hist.map(([t,w,c])=>`<div class="row"><div><b>${t}</b><br><small>${w}</small></div>${C.chip(c==='ok'?'Estable':'Medio')}</div>`).join('')}</div>
    </div>`;
  }
};

/* Vistas del rol Bienestar (morado). */
const VB = {
  dashboard(){
    const d=DATA.bienestar;
    return `<div class="grid g4">${d.kpis.map(C.kpi).join('')}</div>
    <div class="grid g2" style="margin-top:16px">
      <div class="card"><h3>Estudiantes atendidos</h3>${C.line(d.meses,[{vals:d.atendidos,c:'#7c3aed'},{vals:d.nuevos,c:'#3b82f6'}],{max:120,area:true})}
        <div class="legend"><span><i style="background:#7c3aed"></i>Atendidos</span><span><i style="background:#3b82f6"></i>Nuevos</span></div></div>
      <div class="card"><h3>Indicadores de bienestar</h3>${C.donut(d.indic)}<div style="margin-top:14px">${C.legend(d.indic.map(i=>[i[0],i[1]+'%',i[2]]))}</div></div>
    </div>`;
  },
  citas(){
    const days=Array.from({length:30},(_,i)=>i+1), off=6;
    const cal=['L','M','X','J','V','S','D'].map(d=>`<span>${d}</span>`).join('')+'<i></i>'.repeat(off)+days.map(d=>`<button data-action="day" data-v="${d}" class="${d===S.day?'on':''}">${d}</button>`).join('');
    return `<div class="grid" style="grid-template-columns:300px 1fr">
      <div class="grid"><div class="card"><h3>Junio 2025</h3><div class="cal">${cal}</div></div>
        <div class="card"><h3>Disponibilidad</h3>${DATA.slots.map(([t,s])=>`<div class="slot"><span>${t}</span><span class="chip ${s==='Libre'?'ok':'warn'}">${s}</span></div>`).join('')}
        <button class="btn" style="width:100%;margin-top:6px" data-action="newcita">+ Nueva cita</button></div></div>
      <div class="card"><h3>Agenda del día · Junio ${S.day}</h3>${S.citas.map(c=>`<div class="cita"><time>${c.t}</time><span class="bd"></span><div><b>${c.n}</b><br><small>${c.m}</small></div>${C.chip(c.st)}</div>`).join('')}</div>
    </div>`;
  },
  estudiantes(){
    const q=S.q.toLowerCase(), f=S.filter;
    const rows=DATA.students.filter(s=>(f==='todos'||(f==='riesgo'&&s.r==='Alto')||(f==='seg'&&s.e==='En seguimiento')||(f==='activos'&&s.e==='Activo'))&&(s.n+s.p).toLowerCase().includes(q));
    const fb=[['todos','Todos'],['riesgo','Alto riesgo'],['seg','En seguimiento'],['activos','Activos']].map(([k,l])=>`<button data-action="filter" data-v="${k}" class="${f===k?'on':''}">${l}</button>`).join('');
    return `<div class="filters">${fb}</div><div class="card wrap"><table><thead><tr><th>Nombre</th><th>Programa</th><th>Semestre</th><th>Nivel de riesgo</th><th>Estado</th></tr></thead><tbody>
      ${rows.map(s=>`<tr><td><div class="who"><span class="av">${C.ini(s.n)}</span>${s.n}</div></td><td>${s.p}</td><td>${s.s}</td><td>${C.chip(s.r)}</td><td>${C.chip(s.e)}</td></tr>`).join('')||'<tr><td colspan="5" class="mute">Sin resultados. Prueba con otro filtro o nombre.</td></tr>'}</tbody></table></div>`;
  },
  factores(){
    return `<div class="grid g2e">
      <div class="card"><h3>Factores de riesgo identificados</h3>${C.bars(DATA.factores)}</div>
      <div class="card"><h3>Análisis multidimensional de riesgo</h3>${C.radar(DATA.radar)}</div>
      <div class="card"><h3>Factores emocionales</h3>${C.bars(DATA.emocional)}</div>
      <div class="card"><h3>Registrar nuevo factor de riesgo</h3><div class="form">
        <select id="ftipo" aria-label="Tipo de factor"><option>Académico</option><option>Económico</option><option>Familiar</option><option>Emocional</option></select>
        <textarea id="fdesc" rows="3" placeholder="Describe el factor observado"></textarea>
        <button class="btn" data-action="addfactor">Guardar factor</button></div>
        <div id="flist">${S.factors.map(f=>`<div class="row"><span>${f.d}</span><span class="chip">${f.t}</span></div>`).join('')}</div></div>
    </div>`;
  }
};

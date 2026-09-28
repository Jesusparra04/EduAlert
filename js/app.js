/* Router, estado y eventos. Roles: coordinador | bienestar. */
const NAV = {
  coordinador:[['dashboard','Dashboard Ejecutivo','Dashboard Ejecutivo','Indicadores estratégicos · Período 2025-1','▦'],['prediccion','Predicción de Riesgo','Predicción de Riesgo','Inteligencia predictiva y alertas tempranas','◈'],['programas','Deserción por Programas','Deserción por Programas','Ranking, estadísticas y focos de riesgo','▤'],['seguimiento','Seguimiento Individual','Seguimiento Individual','Perfil de caso · Carlos Mendoza Pérez','☺']],
  bienestar:[['dashboard','Dashboard','Dashboard General','Atención de estudiantes · Bienestar Universitario','▦'],['citas','Citas','Gestión de Citas','Agenda y disponibilidad','◷'],['estudiantes','Estudiantes','Seguimiento de Estudiantes','Vigilancia y monitoreo de riesgo activo','☰'],['factores','Factores de Riesgo','Factores de Riesgo','Análisis de factores de deserción estudiantil','⚠']]
};
const VIEWS = { coordinador:VC, bienestar:VB };
/* Vista de entrada de cada rol: a dónde manda el login. */
const HOME = { coordinador:'dashboard', bienestar:'dashboard' };
const S = { role:null, view:null, filter:'todos', q:'', day:10, citas:[...DATA.citas], factors:[], plan:[true,false,false,false] };
const $ = s => document.querySelector(s);
const toast = m => { const t=$('#toast'); t.textContent=m; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800); };

function showLogin(){
  $('#app').hidden=true; document.body.removeAttribute('data-role');
  $('#login').hidden=false; document.title='EduAlert · Alerta de atención temprana';
}
function go(role, view){
  if(!DATA.roles[role]) return showLogin();
  const nav=NAV[role];
  if(!nav.find(n=>n[0]===view)) view=HOME[role]||nav[0][0];
  Object.assign(S,{role,view});
  const r=DATA.roles[role], n=nav.find(x=>x[0]===view);
  $('#login').hidden=true; $('#app').hidden=false; document.body.dataset.role=role;
  $('#brandName').textContent=r.brand; $('#uAv').textContent=r.user.ini; $('#uName').textContent=r.user.name; $('#uRole').textContent=r.user.role;
  $('#period').hidden=!r.period; $('#ttl').textContent=n[2]; $('#sub').textContent=n[3]; document.title=`${n[2]} · EduAlert`;
  $('#nav').innerHTML=nav.map(x=>`<button data-action="nav" data-v="${x[0]}" class="${x[0]===view?'on':''}"><span>${x[4]}</span>${x[1]}</button>`).join('');
  history.replaceState(null,'',`#/${role}/${view}`); render();
}
function render(){ $('#view').innerHTML = VIEWS[S.role][S.view](); }

document.addEventListener('click', e=>{
  const b=e.target.closest('[data-action]'); if(!b) return; const v=b.dataset.v;
  switch(b.dataset.action){
    case 'role': go(v,HOME[v]); break;
    case 'nav': go(S.role,v); break;
    case 'switch': showLogin(); break;
    case 'filter': S.filter=v; render(); break;
    case 'day': S.day=+v; render(); break;
    case 'task': S.plan[+v]=!S.plan[+v]; render(); break;
    case 'newcita': { const n=prompt('Nombre del estudiante:'); if(n&&n.trim()){ S.citas.push({t:'16:00',n:n.trim(),m:'Nueva cita',st:'Pendiente'}); render(); toast('Cita creada'); } break; }
    case 'addfactor': { const d=$('#fdesc').value.trim(); if(!d) return toast('Describe el factor antes de guardar'); S.factors.unshift({t:$('#ftipo').value,d}); render(); toast('Factor registrado'); break; }
  }
});
$('#q').addEventListener('input', e=>{
  S.q=e.target.value;
  if(S.role==='bienestar'&&S.view!=='estudiantes'&&S.q){ go('bienestar','estudiantes'); $('#q').focus(); return; }
  if(S.view==='estudiantes') render();
});
window.addEventListener('hashchange',()=>{ const [,r,v]=location.hash.split('/'); if(r&&(r!==S.role||v!==S.view)) go(r,v); });

(function init(){
  const [,r,v]=location.hash.split('/');
  r ? go(r,v) : showLogin();
})();

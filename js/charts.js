/* Componentes SVG y helpers de UI sin dependencias. */
const C = {
  kpi([l,v,s,cls,c]) {
    return `<div class="card kpi"><span class="ic" style="background:${c}22;color:${c}">●</span><small>${l}</small><b>${v}</b><small class="${cls}">${s}</small></div>`;
  },
  line(labels, series, {min=0,max=100,area=false,h=180}={}) {
    const w=520,p=30,x=i=>p+i*(w-2*p)/(labels.length-1),y=v=>h-24-(v-min)/(max-min)*(h-44);
    let g='';for(let k=0;k<=4;k++){const v=min+(max-min)*k/4,yy=y(v);g+=`<line x1="${p}" x2="${w-p}" y1="${yy}" y2="${yy}" stroke="#eceef3"/><text x="4" y="${yy+3}">${Math.round(v)}</text>`;}
    const t=labels.map((l,i)=>`<text x="${x(i)}" y="${h-6}" text-anchor="middle">${l}</text>`).join('');
    const s=series.map(o=>{const pts=o.vals.map((v,i)=>[x(i),y(v)]),d=pts.map((q,i)=>(i?'L':'M')+q[0]+' '+q[1]).join(' ');
      const a=area?`<path d="${d} L${x(labels.length-1)} ${h-24} L${x(0)} ${h-24}Z" fill="${o.c}" opacity=".12"/>`:'';
      const dots=o.dash?'':pts.map(q=>`<circle cx="${q[0]}" cy="${q[1]}" r="3.5" fill="#fff" stroke="${o.c}" stroke-width="2"/>`).join('');
      return `${a}<path d="${d}" fill="none" stroke="${o.c}" stroke-width="2.5" ${o.dash?'stroke-dasharray="5 4"':''}/>${dots}`;}).join('');
    return `<svg viewBox="0 0 ${w} ${h}" role="img">${g}${t}${s}</svg>`;
  },
  bars(items, {suffix='%',max=100}={}) {
    return items.map(([l,v,c])=>`<div style="margin-bottom:12px"><div class="lbl"><span>${l}</span><b>${v}${suffix}</b></div><div class="bar"><i style="width:${v/max*100}%;background:${c||'var(--accent)'}"></i></div></div>`).join('');
  },
  donut(items) {
    const tot=items.reduce((a,i)=>a+i[1],0),R=40,L=2*Math.PI*R;let off=0;
    const seg=items.map(([,v,c])=>{const d=v/tot*L,e=`<circle r="${R}" cx="60" cy="60" fill="none" stroke="${c}" stroke-width="18" stroke-dasharray="${d} ${L-d}" stroke-dashoffset="${-off}" transform="rotate(-90 60 60)"/>`;off+=d;return e;}).join('');
    return `<svg viewBox="0 0 120 120" style="max-width:150px;margin:auto" role="img">${seg}</svg>`;
  },
  legend(items) { return `<div class="legend">${items.map(([l,v,c])=>`<span><i style="background:${c}"></i>${l} ${v}</span>`).join('')}</div>`; },
  radar(items) {
    const n=items.length,cx=110,cy=100,R=68,pt=(i,r)=>{const a=-Math.PI/2+i*2*Math.PI/n;return [cx+Math.cos(a)*R*r,cy+Math.sin(a)*R*r];};
    const rings=[.33,.66,1].map(r=>`<polygon points="${items.map((_,i)=>pt(i,r).join(',')).join(' ')}" fill="none" stroke="#eceef3"/>`).join('');
    const poly=items.map(([,v],i)=>pt(i,v/100).join(',')).join(' ');
    const lb=items.map(([l],i)=>{const [x,y]=pt(i,1.28);return `<text x="${x}" y="${y}" text-anchor="middle">${l}</text>`;}).join('');
    return `<svg viewBox="0 0 220 200" role="img">${rings}<polygon points="${poly}" fill="var(--accent)" fill-opacity=".25" stroke="var(--accent)" stroke-width="2"/>${lb}</svg>`;
  },
  chip(t) {
    const m={Alto:'bad',Inminente:'bad',Medio:'warn',Bajo:'ok',Estable:'ok',Activo:'info',Confirmada:'ok',Pendiente:'warn',Reprogramada:'info','En seguimiento':'warn',Programado:'info','En proceso':'warn'};
    return `<span class="chip ${m[t]||''}">${t}</span>`;
  },
  ini: n => n.split(' ').slice(0,2).map(s=>s[0]).join('')
};

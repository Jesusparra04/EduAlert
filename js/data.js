/* Datos de ejemplo. Sustituir por llamadas a la API cuando exista backend. */
const DATA = {
  roles: {
    coordinador: { label:'Coordinador', desc:'Deserción, predicción de riesgo y seguimiento académico', color:'#16a34a', brand:'Coordinación', period:true,
      user:{ name:'Dr. Ramón Suárez', role:'Coordinador académico', ini:'RS' } },
    bienestar: { label:'Bienestar', desc:'Citas, seguimiento de estudiantes y factores de riesgo', color:'#7c3aed', brand:'Bienestar',
      user:{ name:'Dra. Paola Vega', role:'Psicóloga · Bienestar', ini:'PV' } }
  },
  students: [
    { n:'Ana García López', p:'Ing. Sistemas', s:'5°', r:'Alto', e:'En seguimiento' },
    { n:'Luis Martínez', p:'Administración', s:'3°', r:'Medio', e:'Activo' },
    { n:'Sofía Hernández', p:'Derecho', s:'7°', r:'Bajo', e:'Estable' },
    { n:'Miguel Torres', p:'Contaduría', s:'4°', r:'Alto', e:'En seguimiento' },
    { n:'Valentina Ruiz', p:'Psicología', s:'6°', r:'Medio', e:'Activo' },
    { n:'Carlos Mendoza', p:'Ing. Civil', s:'6°', r:'Alto', e:'En seguimiento' }
  ],
  citas: [
    { t:'08:00', n:'Ana García', m:'Psicología', st:'Confirmada' },
    { t:'09:30', n:'Luis Martínez', m:'Académico', st:'Pendiente' },
    { t:'11:00', n:'Carlos Mendoza', m:'Seguimiento', st:'Confirmada' },
    { t:'14:00', n:'Sofía Hernández', m:'Orientación', st:'Confirmada' },
    { t:'15:30', n:'Miguel Torres', m:'Reprogramada', st:'Reprogramada' }
  ],
  slots: [['08:00–09:00','Libre'],['10:00–11:30','Ocupado'],['14:00–15:00','Libre'],['16:00–17:00','Libre']],
  bienestar: {
    kpis:[['Total atendidos','1,248','+18 este mes','up','#7c3aed'],['Citas hoy','12','5 confirmadas','up','#16a34a'],['En riesgo','87','8 casos nuevos','dn','#ef4444'],['Casos cerrados','342','+12 este mes','up','#f59e0b']],
    meses:['Ene','Feb','Mar','Abr','May','Jun'],
    atendidos:[62,70,58,84,96,110], nuevos:[40,52,46,60,72,80],
    indic:[['Estable',35,'#7c3aed'],['Ansiedad',25,'#3b82f6'],['Deserción',15,'#ef4444'],['Bajo ánimo',25,'#f59e0b']]
  },
  factores:[['Estrés académico',78,'#7c3aed'],['Dificultades económicas',61,'#f59e0b'],['Problemas familiares',40,'#ef4444'],['Ansiedad',55,'#3b82f6'],['Bajo rendimiento',70,'#16a34a']],
  radar:[['Académico',78],['Social',45],['Económico',61],['Emocional',70],['Familiar',40]],
  emocional:[['Estrés',85,'#7c3aed'],['Ansiedad',65,'#3b82f6'],['Depresión',40,'#ef4444'],['Baja autoest.',55,'#f59e0b']],
  coord: {
    kpis:[['Total matriculados','2,847','▲ 1.4% vs período','up','#16a34a'],['En riesgo de deserción','202','+15 este mes','dn','#ef4444'],['Casos activos','87','','','#f59e0b'],['Casos cerrados','342','','','#16a34a']],
    meses:['Ene','Feb','Mar','Abr','May'], meta:[9,9,9,9,9], real:[11,9.5,10,8.5,9],
    niveles:[['Crítico',23,'#7c3aed'],['Alto',64,'#ef4444'],['Medio',128,'#f59e0b'],['Bajo',387,'#16a34a']],
    programas:[['Ing. Civil',38],['Contaduría',34],['Admón. Emp.',27],['Derecho',19],['Psicología',15],['Ing. Sistemas',12],['Medicina',9]],
    proyeccion:[7,8,10,12,11,9,10,12], proyMeses:['Feb','Mar','Abr','May','Jun','Jul','Ago','Sep'],
    alertas:[['Carlos Mendoza',94,'Inminente'],['Ana García',81,'Alto'],['Luis Martínez',76,'Alto'],['Miguel Torres',71,'Alto']]
  },
  seguimiento: {
    n:'Carlos Mendoza Pérez', ini:'CM',
    info:[['Código','03-2021-0947'],['Promedio actual','2.8 / 5.0'],['Créditos aprobados','88 / 160'],['Materias pendientes','3 con riesgo de pérdida'],['Prob. de deserción','38% (Alta)']],
    caso:[['Bienestar','Activo'],['Apoyo académico','Programado'],['Apoyo económico','En proceso']],
    plan:['Tutoría individualizada en Cálculo III','Citas semanales con psicología','Solicitud de beca de sostenimiento','Revisión de carga académica'],
    hist:[['Sesión de tutoría','Hace 3 días','ok'],['Cita psicológica','Hace 1 semana','ok'],['Alerta automática','Hace 2 semanas','warn']]
  }
};

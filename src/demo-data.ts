import type { Case, Movement, Unit } from './domain';
export const unit: Unit = { id:'UT-000184', product:'Stent coronario liberador de fármaco 3.0 × 18 mm', lot:'L240915', serial:'SN-XI-000184', expiry:'2028-09-30', location:'Clínica del Parque · Banco de stock', state:'entregado', cost:720000 };
export const caseData: Case = { id:'SALUD-2026-00421', patient:'M. R. · Afiliado 48•••', payer:'Salud Provincial', institution:'Clínica del Parque', doctor:'Dra. Sofía Morales · MP 11234', authorization:'TR-2026-8841', amount:1850000, state:'Pendiente de documentación', required:['Autorización', 'Remito conformado', 'Parte intervencionista', 'Sticker de implante'], received:['Autorización', 'Remito conformado'], unitId:'UT-000184' };
export const movements: Movement[] = [
 {id:'MOV-901',at:'02 oct 2026 · 09:14',type:'RECEPCION',from:'Proveedor MediSupply',to:'Depósito central',user:'Maru Cepeda (Stock)',doc:'OC-2026-118'},
 {id:'MOV-945',at:'07 oct 2026 · 15:30',type:'CONSIGNACION',from:'Depósito central',to:'Clínica del Parque · Banco de stock',user:'Alex P. (Logística)',doc:'R-000781'},
 {id:'MOV-973',at:'13 oct 2026 · 08:42',type:'RESERVA',from:'Clínica del Parque · Banco de stock',to:'Clínica del Parque · Banco de stock',user:'Valentina T. (Casos)',doc:'SALUD-2026-00421'},
 {id:'MOV-978',at:'14 oct 2026 · 11:05',type:'ENTREGA',from:'Clínica del Parque · Banco de stock',to:'Quirófano · Clínica del Parque',user:'Alex P. (Logística)',doc:'R-000794'}
];
export const cases = [caseData, { ...caseData, id:'SALUD-2026-00418', patient:'A. S. · Afiliado 31•••', state:'Listo para presentar/facturar' as const, unitId:'UT-000172', amount:1420000, received:['Autorización','Remito conformado','Parte intervencionista','Sticker de implante'] }, { ...caseData, id:'LIC-2026-00034', patient:'P. C. · Afiliado 74•••', payer:'Cobertura Médica Regional', state:'Autorizado' as const, amount:980000 }];

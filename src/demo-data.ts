import type { Case, Movement, Unit } from './domain';
export const unit: Unit = { id:'UT-000184', product:'Stent coronario liberador de fármaco 3.0 × 18 mm', lot:'L240915', serial:'SN-XI-000184', expiry:'2028-09-30', location:'Hospital San Martín · Banco de stock', state:'entregado', cost:720000 };
export const caseData: Case = { id:'IOMA-2026-00421', patient:'M. R. · Afiliado 48•••', payer:'IOMA', institution:'Hospital San Martín', doctor:'Dra. Laura Fernández · MP 11234', authorization:'TR-2026-8841', amount:1850000, state:'Pendiente de documentación', required:['Autorización', 'Remito conformado', 'Parte intervencionista', 'Sticker de implante'], received:['Autorización', 'Remito conformado'], unitId:'UT-000184' };
export const movements: Movement[] = [
 {id:'MOV-901',at:'02 oct 2026 · 09:14',type:'RECEPCION',from:'Proveedor CardioSur',to:'Depósito central',user:'María G. (Stock)',doc:'OC-2026-118'},
 {id:'MOV-945',at:'07 oct 2026 · 15:30',type:'CONSIGNACION',from:'Depósito central',to:'Hospital San Martín · Banco de stock',user:'Juan P. (Logística)',doc:'R-000781'},
 {id:'MOV-973',at:'13 oct 2026 · 08:42',type:'RESERVA',from:'Hospital San Martín · Banco de stock',to:'Hospital San Martín · Banco de stock',user:'Ana T. (Casos)',doc:'IOMA-2026-00421'},
 {id:'MOV-978',at:'14 oct 2026 · 11:05',type:'ENTREGA',from:'Hospital San Martín · Banco de stock',to:'Quirófano · Hospital San Martín',user:'Juan P. (Logística)',doc:'R-000794'}
];
export const cases = [caseData, { ...caseData, id:'IOMA-2026-00418', patient:'A. S. · Afiliado 31•••', state:'Listo para presentar/facturar' as const, unitId:'UT-000172', amount:1420000, received:['Autorización','Remito conformado','Parte intervencionista','Sticker de implante'] }, { ...caseData, id:'LIC-2026-00034', patient:'P. C. · Afiliado 74•••', payer:'Hospital del Oeste', state:'Autorizado' as const, amount:980000 }];

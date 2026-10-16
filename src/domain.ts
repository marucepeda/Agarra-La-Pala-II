export type UnitState = 'disponible' | 'reservado' | 'consignado' | 'entregado' | 'consumido' | 'devuelto' | 'cuarentena' | 'vencido' | 'baja';
export type CaseState = 'Borrador' | 'En gestión' | 'Autorizado' | 'Material reservado' | 'Entregado' | 'Pendiente de documentación' | 'Listo para presentar/facturar' | 'Presentado' | 'Facturado' | 'Cobrado' | 'Cerrado';
export type MovementType = 'RECEPCION' | 'CONSIGNACION' | 'RESERVA' | 'ENTREGA' | 'CONSUMO' | 'DEVOLUCION';
export interface Unit { id:string; product:string; lot:string; serial:string; expiry:string; location:string; state:UnitState; cost:number; }
export interface Movement { id:string; at:string; type:MovementType; from:string; to:string; user:string; doc:string; note?:string; }
export interface Case { id:string; patient:string; payer:string; institution:string; doctor:string; authorization:string; amount:number; state:CaseState; required:string[]; received:string[]; unitId:string; }

export function canConsume(unit: Unit, expectedLocation: string) {
  if (unit.state === 'consumido') return 'La serie ya fue consumida: no puede registrarse un segundo consumo.';
  if (new Date(unit.expiry) < new Date('2026-10-15')) return 'La unidad está vencida. Se requiere autorización explícita y auditoría.';
  if (unit.location !== expectedLocation) return `La unidad se encuentra en ${unit.location}, no en ${expectedLocation}.`;
  if (!['entregado', 'reservado', 'consignado'].includes(unit.state)) return `No es posible consumir una unidad en estado ${unit.state}.`;
  return null;
}

export function documentsComplete(c: Case) { return c.required.every(d => c.received.includes(d)); }
export function canPresent(c: Case, unit: Unit) {
  if (unit.state !== 'consumido') return 'El material trazable todavía no fue consumido.';
  if (!documentsComplete(c)) return 'Faltan documentos obligatorios validados para este tipo de gestión.';
  return null;
}

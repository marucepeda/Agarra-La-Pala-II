import { describe, expect, it } from 'vitest';
import { canConsume, canPresent, documentsComplete } from './domain';
import { caseData, unit } from './demo-data';

describe('reglas críticas de trazabilidad', () => {
  it('impide un segundo consumo de la misma serie', () => {
    expect(canConsume({ ...unit, state: 'consumido' }, 'Quirófano · Hospital San Martín')).toMatch(/segundo consumo/);
  });
  it('impide consumo desde una ubicación incorrecta', () => {
    expect(canConsume(unit, 'Depósito central')).toMatch(/se encuentra/);
  });
  it('impide presentación si falta evidencia obligatoria', () => {
    expect(canPresent(caseData, { ...unit, state: 'consumido' })).toMatch(/Faltan documentos/);
  });
  it('habilita presentación cuando existe consumo y checklist completo', () => {
    const complete = { ...caseData, received: [...caseData.required] };
    expect(documentsComplete(complete)).toBe(true);
    expect(canPresent(complete, { ...unit, state: 'consumido' })).toBeNull();
  });
});

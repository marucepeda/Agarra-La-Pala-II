# Supuestos y decisiones pendientes

## Supuestos del MVP

- Una unidad trazable representa una serie individual o una porción identificable de lote. Para productos sólo por lote, se crean unidades de cantidad controlada.
- `inventory_movements` es el ledger inmutable que determina estado y ubicación; no existe edición directa de saldo.
- Consumo normal exige material entregado, no vencido y en la ubicación declarada. Una excepción de vencimiento requiere permiso `inventory.override_expiry`, motivo y evidencia.
- La documentación se considera completa sólo cuando está en estado `validado`, no cuando se adjunta un archivo.
- Los datos de la demo son sintéticos y los identificadores parcialmente enmascarados.

## Decisiones pendientes

| Decisión | Alternativas | Impacto |
|---|---|---|
| Ventana de presentación | calendario mensual fijo / configurada por pagador | Define corte, elegibilidad y reapertura. |
| Evidencia de consumo | sticker + parte / sticker solamente por producto | Afecta la matriz documental y riesgo de rechazo. |
| Granularidad por lote | una unidad por pieza / balance por lote | La primera ofrece mayor trazabilidad; la segunda reduce volumen. |
| Correcciones de inventario | doble movimiento / movimiento de ajuste aprobado | La primera es más estricta; ambas requieren motivo y auditoría. |
| Integración fiscal | AFIP directa / ERP contable intermediario | Modifica el diseño de emisión y conciliación. |
| Retención de pacientes | política por convenio / plazo corporativo | Requiere aprobación legal y automatización de anonimización. |

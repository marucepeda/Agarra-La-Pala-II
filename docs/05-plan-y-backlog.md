# Plan por sprints y backlog priorizado

## Sprints propuestos (2 semanas)

| Sprint | Resultado |
|---|---|
| 0 | discovery, decisiones pendientes, modelo, diseño de permisos, infraestructura y CI. |
| 1 | identidad, roles, maestros, producto/unidad, recepción y ledger inmutable. |
| 2 | ubicaciones, consignación, remitos, búsqueda y trazabilidad de unidad. |
| 3 | casos IOMA, reserva/entrega/consumo, checklist y documentos privados. |
| 4 | presentación IOMA, snapshots, factura interna, cobro parcial y tablero. |
| 5 | migración piloto, pruebas E2E, seguridad, capacitación y salida controlada. |

## Backlog MVP

| Prioridad | Historia | Criterios de aceptación |
|---|---|---|
| P0 | Como Stock recibo una unidad identificada. | Exige producto, lote/serie según producto y vencimiento; crea ledger. |
| P0 | Como Logística consigno una unidad con remito. | Origen y destino válidos; remito contiene unidad; propiedad permanece Optimizar. |
| P0 | Como Gestión creo un caso IOMA y asigno material. | Pagador, institución, trámite y material requeridos; no hay doble asignación activa. |
| P0 | Como Gestión consumo una serie. | Bloquea doble consumo, vencimiento y ubicación incorrecta. |
| P0 | Como Gestión valido evidencias. | Presentación bloqueada con cualquier requisito pendiente/rechazado. |
| P0 | Como Finanzas presento y facturo. | Un caso no integra dos tandas activas; snapshot preservado al presentar. |
| P0 | Como Finanzas imputo cobros. | Permite parcialidades, no excede factura y muestra saldo. |
| P1 | Como Auditor consulto un recorrido. | Une recepción, remitos, caso, documentos, presentación, factura y pago. |
| P1 | Como Stock controlo vencimientos. | Alertas 90/60/30 días y valor de costo comprometido. |
| P1 | Como Auditor protejo PII. | Usuario no autorizado ve datos enmascarados y acceso auditado. |
| P2 | Como negocio gestiono Diabetes/Venta directa. | Tipos disponibles y reglas extensibles, sin flujos específicos iniciales. |

## Migración de planillas

| Fuente | Destino | Tratamiento |
|---|---|---|
| Stock Biosud / STOCK OPTIMIZAR | productos, unidades, movimientos | separar lote y serie, normalizar fechas, conservar fila/origen. |
| Cuaderno de Entradas | casos, instituciones, pagadores, facturas | deduplicar por CUIT + nombre, marcar campos ambiguos para revisión. |
| Remito de Consigna | remitos y destinos | extraer documentos y validar institución/CUIT. |
| Pacientes Roche | pacientes | migración restringida, hash de fuente, minimización de PII. |

Pipeline: extraer copia inmutable → perfilar → mapear → normalizar → deduplicar → cargar staging → informe de errores → aprobación → carga final. Los valores sin lote/serie, vencimiento o clave de caso quedan en cola de remediación y nunca se inventan.

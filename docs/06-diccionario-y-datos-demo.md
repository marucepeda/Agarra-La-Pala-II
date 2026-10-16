# Diccionario de datos detallado y datos de ejemplo

Todos los identificadores son UUID salvo números comerciales visibles. `created_at`, `updated_at` y `created_by` aplican a todas las tablas de negocio.

| Entidad | Campos obligatorios | Campos opcionales / reglas |
|---|---|---|
| `roles` | `id`, `code`, `name` | `code` único; permisos versionados. |
| `users` | `id`, `role_id`, `email`, `status` | nombre; `email` único; nunca guardar contraseña si hay OIDC. |
| `audit_logs` | `id`, `actor_id`, `action`, `entity_type`, `entity_id`, `occurred_at` | `before_json`, `after_json`, IP; sólo append. |
| `products` | `id`, `sku`, `description`, `uom`, `requires_lot`, `requires_serial` | GTIN, marca, categoría, vida útil, almacenamiento. |
| `suppliers` | `id`, `legal_name`, `cuit` | contacto y condiciones; CUIT único. |
| `institutions` | `id`, `name`, `cuit`, `city` | domicilio, GLN/CUFE, `has_consignment_bank`. |
| `locations` | `id`, `code`, `type`, `owner_scope` | institución asociada; `type`: central, banco, cuarentena, vencidos, devolución. |
| `payers` | `id`, `name`, `cuit` | condiciones de pago, reglas de presentación en JSON versionado. |
| `patients` | `id`, `internal_code`, `full_name`, `status` | afiliado, pagador, contacto mínimo cifrado; acceso restringido. |
| `doctors` | `id`, `full_name` | matrícula, instituciones mediante tabla puente `doctor_institutions`. |
| `management_types` | `id`, `code`, `name` | `requires_patient`; valores IOMA, LICITACION, DIABETES, DIRECTA. |
| `traceable_units` | `id`, `product_id`, `lot` si aplica, `serial` si aplica, `expiry_date`, `cost`, `currency` | despacho; lote/serie requeridos según producto. |
| `inventory_movements` | `id`, `unit_id`, `type`, `occurred_at`, `actor_id` | origen, destino, motivo, documento, `reversal_of_id`; inmutable. |
| `delivery_notes` | `id`, `number`, `type`, `issued_at`, `origin_location_id`, `destination_location_id` | firmado, archivo, estado. |
| `delivery_note_items` | `id`, `delivery_note_id`, `unit_id`, `quantity` | único por remito y unidad. |
| `cases` | `id`, `case_number`, `management_type_id`, `status`, `payer_id`, `institution_id`, `opened_at` | paciente/médico cuando aplican, trámite, OC, presupuesto, monto. |
| `case_materials` | `id`, `case_id`, `unit_id`, `status`, `assigned_at`, `actor_id` | remito, fecha de entrega/consumo; unidad activa única. |
| `document_types` | `id`, `code`, `name` | alcance: caso/remito/presentación/factura. |
| `documents` | `id`, `type_id`, `status`, `storage_key`, `sha256`, `uploaded_at`, `uploaded_by` | enlaces polimórficos controlados; comentario y validador. |
| `document_requirements` | `id`, `management_type_id`, `document_type_id`, `required` | reglas por pagador/producto en fase posterior. |
| `presentations` | `id`, `payer_id`, `period`, `opened_at`, `cutoff_at`, `status` | enviado, importe capturado; pagador-período único. |
| `presentation_cases` | `id`, `presentation_id`, `case_id`, `amount_snapshot` | `document_snapshot_json`, exclusión y motivo. |
| `invoices` | `id`, `number`, `issued_at`, `payer_id`, `amount`, `currency`, `due_date`, `status` | tipo de cambio, archivo, anulación. |
| `invoice_items` | `id`, `invoice_id`, `case_id`, `presentation_id`, `amount` | al menos un vínculo de origen, importe positivo. |
| `payments` | `id`, `payer_id`, `paid_at`, `amount`, `currency`, `method`, `reference` | responsable, comprobante. |
| `payment_allocations` | `id`, `payment_id`, `invoice_id`, `amount` | suma por pago y factura no puede exceder importes válidos. |
| `price_lists` | `id`, `name`, `currency`, `valid_from` | ítems en `price_list_items`; vigencias sin solapamiento. |
| `exchange_rates` | `id`, `currency`, `rate_date`, `value` | único moneda/fecha; fuente y timestamp. |

## Dataset de demostración (sintético)

| Tipo | Identificador | Muestra |
|---|---|---|
| Producto | `STENT-DES-3018` | Stent coronario liberador de fármaco 3.0 × 18 mm. |
| Unidad | `UT-000184` | Lote `L240915`, serie `SN-XI-000184`, vence 30/09/2028. |
| Institución | `INS-001` | Hospital San Martín, banco de stock habilitado. |
| Caso | `IOMA-2026-00421` | Paciente enmascarado `M. R.`, trámite `TR-2026-8841`. |
| Presentación | `OCT-2026` | IOMA, corte 31/10/2026. |
| Factura | `FC-A 0003-0000142` | $1.850.000; permite imputaciones parciales de $500.000. |

Los nombres, documentos, CUIT y afiliaciones del dataset son ficticios o enmascarados; no se incorporó información personal desde las planillas existentes.

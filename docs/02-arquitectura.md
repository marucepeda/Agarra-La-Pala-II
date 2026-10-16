# Arquitectura técnica propuesta

```text
React + TypeScript ── HTTPS ── API TypeScript (REST)
                                  ├── PostgreSQL (ledger + negocio)
                                  ├── Object storage privado (documentos)
                                  ├── Cola/eventos (auditoría, alertas)
                                  └── Adaptadores: AFIP / e-mail / BI
```

- **Frontend:** React, TypeScript, formularios con validación de esquema y RBAC desde los claims de sesión.
- **API:** módulos `identity`, `master-data`, `inventory`, `cases`, `documents`, `presentations`, `billing` y `audit`. Las transacciones críticas se ejecutan en una única transacción PostgreSQL.
- **Base:** PostgreSQL. El estado actual se deriva del último movimiento válido; vistas materializadas pueden acelerar el tablero.
- **Documentos:** bucket privado, URL firmada de corta duración, hash SHA-256, antivirus y versionado. La base guarda metadatos, no binarios.
- **Seguridad:** OIDC, MFA para roles privilegiados, mínimo privilegio por permiso, cifrado en tránsito/reposo, máscaras en listados, registro de acceso a paciente y retención aprobada.
- **Operación:** Docker Compose para desarrollo; CI ejecuta migraciones, tests y análisis estático. Backups cifrados y pruebas de restauración.

API propuesta: `POST /units/receive`, `POST /inventory-movements`, `POST /cases`, `POST /cases/:id/materials/:unitId/consume`, `POST /documents`, `POST /presentations/:id/cases`, `POST /invoices`, `POST /payments`. Cada comando devuelve `409` con mensaje de regla si la transición no es válida.

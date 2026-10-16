# Optimizar · MVP de trazabilidad clínica

MVP navegable para el circuito de Convenios/Intervencionismo: recepción, consignación, caso, entrega, consumo, documentación, presentación, factura y cobro parcial.

## Ejecutar

```bash
npm install
npm run dev
```

## Publicar la demo en GitHub Pages

1. Crear un repositorio vacío en GitHub y subir este proyecto a la rama `main`.
2. En el repositorio, abrir **Settings → Pages** y seleccionar **GitHub Actions** como fuente de publicación.
3. Cada cambio enviado a `main` construye y publica automáticamente la demo.

La URL será `https://<usuario>.github.io/<repositorio>/`. Esta publicación es sólo para demostración: no cargar datos clínicos reales ni documentos sensibles en GitHub Pages.

## Recorrido de demostración

1. Abrir **Casos** y revisar `IOMA-2026-00421`.
2. Registrar el consumo de `UT-000184`; un segundo intento queda bloqueado.
3. Cargar los dos documentos pendientes.
4. Ir a **Presentaciones** e incorporar el caso apto.
5. Ir a **Facturación** e imputar uno o más cobros parciales.

La interfaz usa datos ficticios, no persistencia. La implementación productiva propuesta y el modelo relacional están en [`docs/`](docs/).

## Estructura

```text
src/             interfaz React y reglas demostrables
docs/            arquitectura, datos, flujos y plan
```

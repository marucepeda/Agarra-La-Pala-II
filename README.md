# Producto AI · Portfolio de ejercicios

Este repositorio reúne resoluciones de los laboratorios prácticos de la capacitación **Producto AI**, dictada por Albert en su edición de julio de 2026. Los enunciados pertenecen a su [repositorio oficial](https://github.com/albertcapacitacion/ProductAI).

## Proyecto: Optimizar · MVP de trazabilidad clínica

MVP navegable para el circuito de Convenios/Intervencionismo: recepción, consignación, caso, entrega, consumo, documentación, presentación, factura y cobro parcial.

### Ejecutar localmente

```bash
npm install
npm run dev
```

### Publicación en GitHub Pages

Cada cambio en `main` construye y publica automáticamente la demo mediante GitHub Actions. En el repositorio, abrir **Settings → Pages** y seleccionar **GitHub Actions** como fuente de publicación.

La publicación se genera desde el flujo `Publicar demo en GitHub Pages`, que compila el proyecto antes de enviarlo a Pages.

La demo quedará disponible en `https://marucepeda.github.io/Agarra-La-Pala-II/`.

> La publicación contiene sólo datos ficticios. No cargar datos clínicos reales ni documentos sensibles en GitHub Pages.

### Recorrido de demostración

1. Abrir **Casos** y revisar `IOMA-2026-00421`.
2. Registrar el consumo de `UT-000184`; un segundo intento queda bloqueado.
3. Cargar los dos documentos pendientes.
4. Ir a **Presentaciones** e incorporar el caso apto.
5. Ir a **Facturación** e imputar uno o más cobros parciales.

La implementación productiva propuesta y el modelo relacional están en [`docs/`](docs/).

```text
src/             interfaz React y reglas demostrables
docs/            arquitectura, datos, flujos y plan
```

## La capacitación

Producto AI propone un enfoque práctico para construir productos digitales con la asistencia de inteligencia artificial, sin requerir conocimientos previos de programación. A lo largo de las sesiones se utilizan ChatGPT, Codex, Claude, Google AI Studio y GitHub, cada una en la etapa del proyecto donde resulta más útil.

El método se organiza en siete pasos: planificar, dividir tareas, implementar, probar, revisar y mejorar, guardar versiones, y desplegar e iterar.

## Más información

Para conocer las capacitaciones de Albert o inscribirse a futuras ediciones (modalidad en vivo y asincrónica), el contacto es [albertcapacitaciondigital@gmail.com](mailto:albertcapacitaciondigital@gmail.com).

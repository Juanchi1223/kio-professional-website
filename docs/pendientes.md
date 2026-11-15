# Pendientes de la landing

Todos los placeholders están visibles en `index.html` y marcados con `data-pendiente` (buscalos con `grep -n "data-pendiente\|\[FOTO\|\[Completar" index.html`).

## Placeholders a completar

| Sección (`id`) | Placeholder | Qué falta |
|---|---|---|
| `<head>` | `[Completar: og:image y og:url]` | Imagen 1200×630 para compartir y URL final del sitio |
| Hero (`#inicio`) | `[FOTO VERTICAL: paciente entrenando en el gimnasio de la sede nueva]` | Foto vertical del gimnasio |
| Prepagas (`#prepagas`) | Otras prepagas | Faltan los logos de las demás (hoy solo OSDE y Swiss Medical). Se suman con un `<li>` + `<img class="logo-prepaga">` en `assets/img/prepagas/` |
| Servicios (`#servicios`) | `[FOTO: sesión de kinesiología]` | Foto servicio 01 |
| Servicios | `[FOTO: consultorio]` | Foto servicio 02 |
| Servicios | `[FOTO: ejercicio funcional]` | Foto servicio 03 |
| Servicios | `[FOTO: sesión de RPG]` | Foto servicio 04 |
| Servicios | `[FOTO: gimnasio]` | Foto servicio 05 |
| Servicios | `[FOTO: aparatología]` | Foto servicio 06 |
| Tecnología (`#tecnologia`) | `[FOTO: equipo BTL en uso]` | Foto del equipo BTL |
| Especialidades (`#especialidades`) | `[Completar: link de onyrA]` | URL del botón "Conocé onyrA" (hoy apunta a la misma sección) |
| Sede (`#sede`) | `[MAPA: Av. Maipú 1736]` | Mapa o imagen del mapa (no se inventó un embed) |
| Sede | `[Completar: colectivos, tren, estacionamiento]` | Cómo llegar |
| Equipo (`#equipo`) | `[FOTO]` ×4 | Fotos de los profesionales |
| Equipo | `[Nombre y apellido]` ×4 | Nombres (Traumatología, Kinesiología, Kinesiología · RPG, Gimnasio de rehabilitación) |
| Preguntas frecuentes (`#preguntas`) | `[Completar lista de prepagas.]` | Lista de prepagas |
| Preguntas frecuentes | `[Completar: orden médica, credencial, estudios, ropa cómoda.]` | Qué traer a la primera sesión |

## Datos del mock que conviene confirmar con KIO

| Sección | Dato | Motivo |
|---|---|---|
| Prepagas y FAQ | OSDE y Swiss Medical | El doc dice "hay Swiss Medical y OSDE, entre otras", pero la lista falta confirmar |
| Hero | "Turnos online 24 h" | El portal permite agendar online, pero "24 h" no figura en el doc |
| Hero | "+10 años en zona norte", "3 especialidades" | Salen de reseñas desde 2013 y de las 3 marcas; validar el número |
| Tecnología | "estimulación electromagnética que acelera la recuperación" | Afirmación clínica sin respaldo en el doc; validar la redacción |
| Especialidades | Botón "Conocé ICUO" → Instagram @icuokinesiologia | Link tomado del doc; confirmar si prefieren otro destino |

## Otros pendientes

- Logotipo completo vectorial con la bajada "ESPACIO DE SALUD" (hoy el wordmark es texto junto al isotipo).
- Favicon: se generó desde el isotipo (`assets/img/favicon-32.png`, `apple-touch-icon.png`); falta un `.ico` si lo quieren.
- Dominio y hosting; después completar `og:url` y `og:image`.

## Footer: elementos de la referencia que no se incluyeron (sin datos)

- Teléfono fijo de recepción: la referencia trae uno que no es de KIO; en los datos hay fijos históricos (011 4797-4334 / 4796-0640) sin confirmar.
- "Zona de atención" (accesos desde Olivos, San Isidro, Martínez, etc.): confirmar qué zonas comunicar.
- Páginas legales (Términos de Atención, Privacidad Médica) y Canal de Pacientes: no existen; se suman cuando haya contenido y destino.
- Facebook `/kiocentro` (de la marca anterior): confirmar si se incluye junto a Instagram.
- El isotipo del footer va en blanco (versión monocroma) porque la parte negra no se ve sobre fondo oscuro; confirmar o pasar una versión para fondo oscuro.

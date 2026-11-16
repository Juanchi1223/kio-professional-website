# Pendientes de la landing

Todos los placeholders están visibles en `index.html` y marcados con `data-pendiente` (buscalos con `grep -n "data-pendiente\|\[FOTO\|\[Completar" index.html`).

## Placeholders a completar

| Sección (`id`) | Placeholder | Qué falta |
|---|---|---|
| `<head>` | `og:url` y `og:image` absoluta | `og:image` ya apunta a `assets/img/og/og-kio.jpg` (relativa); falta el dominio para `og:url` y para pasarla a URL absoluta, que es lo que exigen las redes |
| Prepagas (`#prepagas`) | Otras prepagas | Faltan los logos de las demás (hoy solo OSDE y Swiss Medical). Se suman con un `<li>` + `<img class="logo-prepaga">` en `assets/img/prepagas/` |
| Especialidades (`#especialidades`) | `[Completar: link de onyrA]` | URL del botón "Conocé onyrA" (hoy apunta a la misma sección) |
| Sede | `[Completar: colectivos, tren, estacionamiento]` | Cómo llegar |
| Equipo (`#equipo`) | Fotos y nombres de los 4 profesionales | Hay fotos (`equipo-1` a `equipo-4`) y nombres cargados (Dr. Martín Gómez, Lic. Federico Álvarez, Lic. Mariana Rossi, Lic. Sofía Morales) que **no figuran en los datos del negocio**. Confirmar que sean los profesionales reales de KIO y que tengan su consentimiento; si no, reemplazar |
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
- Favicon: se generó desde el isotipo (`assets/img/marca/favicon-32.png`, `marca/apple-touch-icon.png`); falta un `.ico` si lo quieren.
- Dominio y hosting; después completar `og:url` y `og:image`.

## Footer: elementos de la referencia que no se incluyeron (sin datos)

- Teléfono fijo de recepción: la referencia trae uno que no es de KIO; en los datos hay fijos históricos (011 4797-4334 / 4796-0640) sin confirmar.
- "Zona de atención" (accesos desde Olivos, San Isidro, Martínez, etc.): confirmar qué zonas comunicar.
- Páginas legales (Términos de Atención, Privacidad Médica) y Canal de Pacientes: no existen; se suman cuando haya contenido y destino.
- Facebook `/kiocentro` (de la marca anterior): confirmar si se incluye junto a Instagram.
- El isotipo del footer va en blanco (versión monocroma) porque la parte negra no se ve sobre fondo oscuro; confirmar o pasar una versión para fondo oscuro.

## Fotos cargadas (revisar con KIO)

- Se usan `hero-gimnasio.jpg`, las 6 `servicio-*.jpg`, `tecnologia-equipo.jpg` y `og-kio.jpg`. `tecnologia-equipo-alt.jpg` quedó sin usar.
- Confirmar que las fotos puedan publicarse (derechos y consentimiento de las personas) y que muestren el equipamiento y las instalaciones reales, en especial la de Tecnología, que se presenta como el sistema BTL.
- Los `alt` están escritos a partir de lo que se ve en cada imagen; ajustarlos si cambian las fotos.
- No quedan placeholders de foto salvo los datos pendientes de la tabla.
- El mapa de la sede es un embed de Google Maps por dirección (sin API key ni interacción). Verificar que el pin caiga justo en la sede (Maipú 1736, dentro de COTO).

# LaLiga en datos

Sitio web de estadísticas y previsiones de LaLiga, publicado en GitHub Pages. Tres secciones:

- **Jornada** (`index.html`) — resultados de la última jornada disputada, partidos en juego/pendientes, calendario de la siguiente jornada y clasificación completa.
- **Previsiones** (`predicciones.html`) — simulador interactivo de la próxima jornada: controles deslizantes que ajustan un modelo (forma reciente, rendimiento casa/fuera, ventaja de jugar en casa, probabilidad de empate) y recalculan en vivo el reparto de probabilidades de cada partido.
- **Equipos** (`equipos.html`) — ficha de cada uno de los 20 equipos: posición, puntos, racha, récord como local/visitante, goles a favor/en contra y próximo rival.

🔗 Publicado con GitHub Pages (Settings → Pages → Deploy from branch `main` / `root`).

## Arquitectura

Sitio estático de varias páginas, sin build step:

```
index.html          Jornada
predicciones.html   Previsiones
equipos.html        Equipos
assets/data.js      Datos (clasificación, resultados, calendario) y modelo de predicción — compartido por las tres páginas
assets/styles.css   Sistema de diseño compartido
```

## Cómo se actualiza

Cada lunes por la tarde, una vez completada la jornada, se actualiza `assets/data.js`: resultados de la jornada jugada, clasificación, forma de cada equipo (últimos 5 partidos), récord casa/fuera y el calendario de la jornada siguiente. Como las tres páginas leen del mismo archivo, basta con actualizar ese fichero para que Jornada, Previsiones y Equipos reflejen los datos nuevos.

## Metodología del modelo de previsión

Para cada equipo se calcula un índice combinando:
- Puntos por partido de la temporada (ponderable contra la forma reciente)
- Diferencia de goles por partido
- Forma de los últimos 5 encuentros
- Rendimiento específico como local o visitante

La diferencia de índice entre ambos equipos, más la ventaja de jugar en casa, se convierte en probabilidades de victoria local/empate/victoria visitante. Es un modelo estadístico sencillo, no una predicción profesional: no conoce lesiones, sanciones, alineaciones ni el estado anímico del equipo. Sirve para explorar escenarios, no para apostar con certeza.

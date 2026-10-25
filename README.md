# Futbol-Stats

Predicciones interactivas de cada jornada de LaLiga, mismo formato que el simulador de escaños electorales: controles deslizantes que ajustan un modelo (forma reciente, rendimiento casa/fuera, ventaja de jugar en casa) y recalculan en vivo las probabilidades de cada partido.

🔗 Página publicada: se activa tras el primer push con GitHub Pages (Settings → Pages → Deploy from branch `main` / `root`).

## Cómo se actualiza

Cada lunes por la tarde se reconstruyen los datos de la jornada recién disputada (clasificación, forma, récord casa/fuera) y se genera la predicción de la jornada siguiente. El archivo `index.html` es autocontenido: toda la lógica y los datos viven en el propio HTML.

## Metodología

Para cada equipo se calcula un índice combinando:
- Puntos por partido de la temporada
- Diferencia de goles por partido
- Forma de los últimos 5 encuentros
- Rendimiento específico como local o visitante

La diferencia de índice entre ambos equipos, más la ventaja de jugar en casa, se convierte en probabilidades de victoria/empate/derrota. No es una previsión real — no conoce lesiones, sanciones ni alineaciones.

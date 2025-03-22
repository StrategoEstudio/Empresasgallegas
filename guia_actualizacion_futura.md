# Plantilla para Futuras Recopilaciones de Datos

## Estructura de Carpetas
```
webscraping_pontevedra/
├── datos_crudos/                  # Datos extraídos sin procesar
│   ├── restaurantes/              # Datos de restaurantes por zona
│   ├── hoteles/                   # Datos de hoteles por zona
│   ├── cafeterias/                # Datos de cafeterías por zona
│   └── otros_sectores/            # Para futuros sectores a analizar
├── analisis/                      # Análisis procesados
│   ├── presencia_digital/         # Análisis de presencia online
│   ├── valoraciones/              # Análisis de valoraciones y opiniones
│   └── tendencias/                # Análisis de tendencias por sector
├── visualizaciones/               # Gráficos y mapas
├── informes/                      # Informes generados
└── mapeo_negocios/                # Plantillas de mapeo actualizadas
    ├── centro_historico.csv       # Negocios del centro histórico
    ├── zona_ensanche.csv          # Negocios de la zona del ensanche
    └── otras_zonas.csv            # Negocios de otras zonas
```

## Instrucciones para Futuras Actualizaciones

### 1. Recopilación de Datos
- Utilizar Google Maps, TripAdvisor y redes sociales como fuentes principales
- Mantener la estructura de datos consistente con los archivos CSV existentes
- Documentar la fecha de recopilación para cada conjunto de datos

### 2. Análisis de Presencia Digital
- Evaluar sitios web usando criterios de:
  * Diseño responsive
  * Velocidad de carga
  * SEO básico
  * Funcionalidades (reservas, contacto, etc.)
- Evaluar redes sociales usando criterios de:
  * Frecuencia de publicación
  * Engagement (likes, comentarios, compartidos)
  * Calidad del contenido
  * Respuesta a comentarios

### 3. Actualización de la Plantilla de Mapeo
- Mantener el formato CSV con los campos definidos
- Añadir nuevos negocios siguiendo la numeración existente
- Actualizar información de negocios ya registrados cuando sea necesario
- Documentar cambios significativos en las observaciones

### 4. Ampliación a Nuevos Sectores
Para incluir nuevos sectores, seguir estos pasos:
1. Crear nueva carpeta en datos_crudos/otros_sectores/[nombre_sector]
2. Adaptar scripts de extracción para el nuevo sector
3. Mantener consistencia en los campos de análisis
4. Actualizar visualizaciones para incluir comparativas con nuevos sectores

### 5. Ampliación Geográfica
Para expandir el análisis a otras zonas:
1. Crear nuevos archivos CSV por zona geográfica
2. Mantener la misma estructura de datos
3. Actualizar mapas para incluir las nuevas zonas
4. Realizar análisis comparativos entre zonas

## Campos Obligatorios para Nuevos Registros
- Nombre del negocio
- Tipo de negocio
- Dirección/Zona
- Presencia online
- Nivel digital
- Puntos de mejora detectados
- Potencial de inversión

## Campos Opcionales Recomendados
- Servicios actuales de marketing
- Observaciones
- Valoración media (si disponible)
- Rango de precios
- Antigüedad del negocio
- Tamaño aproximado
- Perfil de cliente objetivo

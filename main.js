// Inicialización de gráficos
document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de distribución de negocios
    const distribucionCtx = document.getElementById('distribucionChart').getContext('2d');
    const distribucionChart = new Chart(distribucionCtx, {
        type: 'pie',
        data: {
            labels: ['Restaurantes', 'Hoteles', 'Cafeterías'],
            datasets: [{
                data: [5, 9, 10],
                backgroundColor: [
                    '#e74c3c',
                    '#3498db',
                    '#2ecc71'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Distribución de Negocios en Pontevedra'
                }
            }
        }
    });

    // Gráfico de valoraciones medias
    const valoracionesCtx = document.getElementById('valoracionesChart').getContext('2d');
    const valoracionesChart = new Chart(valoracionesCtx, {
        type: 'bar',
        data: {
            labels: ['Restaurantes', 'Hoteles', 'Cafeterías'],
            datasets: [{
                label: 'Valoración media (0-5)',
                data: [3.62, 3.77, 4.50],
                backgroundColor: [
                    '#e74c3c',
                    '#3498db',
                    '#2ecc71'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    title: {
                        display: true,
                        text: 'Valoración (0-5)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Tipo de negocio'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Valoración Media por Tipo de Negocio'
                }
            }
        }
    });

    // Gráfico de presencia digital
    const presenciaDigitalCtx = document.getElementById('presenciaDigitalChart').getContext('2d');
    const presenciaDigitalChart = new Chart(presenciaDigitalCtx, {
        type: 'bar',
        data: {
            labels: ['Sitio Web', 'Facebook', 'Instagram', 'Twitter/X'],
            datasets: [{
                label: 'Porcentaje de negocios',
                data: [100, 100, 100, 12.5],
                backgroundColor: [
                    '#3498db',
                    '#3b5998',
                    '#e4405f',
                    '#1da1f2'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Porcentaje (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Plataforma'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Presencia Digital de Negocios en Pontevedra (%)'
                }
            }
        }
    });

    // Gráfico de actividad en redes sociales
    const actividadRedesCtx = document.getElementById('actividadRedesChart').getContext('2d');
    const actividadRedesChart = new Chart(actividadRedesCtx, {
        type: 'doughnut',
        data: {
            labels: ['Media', 'Alta', 'Baja', 'Baja (gestionado por cadena)'],
            datasets: [{
                data: [4, 2, 1, 1],
                backgroundColor: [
                    '#f39c12',
                    '#2ecc71',
                    '#e74c3c',
                    '#95a5a6'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Nivel de Actividad en Redes Sociales'
                }
            }
        }
    });

    // Añadir funcionalidad para filtrar empresas de nueva creación
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                const rows = document.querySelectorAll('#nuevas-empresas-table tbody tr');
                
                rows.forEach(row => {
                    if (filter === 'all') {
                        row.style.display = '';
                    } else {
                        const province = row.querySelector('td:nth-child(4)').textContent;
                        if (province.includes(filter)) {
                            row.style.display = '';
                        } else {
                            row.style.display = 'none';
                        }
                    }
                });
                
                // Actualizar botones activos
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Añadir funcionalidad para actualizar datos
    const updateForm = document.getElementById('update-data-form');
    if (updateForm) {
        updateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            
            // Simulación de actualización (en una implementación real, esto enviaría datos a un servidor)
            alert('Datos enviados correctamente. En una implementación real, estos datos se guardarían en una base de datos.');
            this.reset();
        });
    }
});

// Función para cargar datos dinámicamente (simulada)
function loadNewCompanies() {
    // En una implementación real, esto cargaría datos de una API o base de datos
    console.log('Cargando nuevas empresas...');
    // La tabla ya está precargada en el HTML con los datos disponibles
}

// Llamar a la función de carga al iniciar
loadNewCompanies();

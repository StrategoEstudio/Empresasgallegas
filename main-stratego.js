// Mejoras de JavaScript para navegación profesional
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de gráficos (mantenemos el código original)
    initCharts();
    
    // Añadir barra superior
    addTopBar();
    
    // Añadir botón de volver arriba
    addBackToTopButton();
    
    // Mejorar la navegación con efectos de scroll suave
    enhanceNavigation();
    
    // Añadir preloader
    addPreloader();
    
    // Añadir funcionalidad para filtrar empresas
    setupFilters();
    
    // Añadir funcionalidad para el formulario
    setupForms();
});

// Función para inicializar los gráficos
function initCharts() {
    // Gráfico de distribución de negocios
    if (document.getElementById('distribucionChart')) {
        const distribucionCtx = document.getElementById('distribucionChart').getContext('2d');
        const distribucionChart = new Chart(distribucionCtx, {
            type: 'pie',
            data: {
                labels: ['Restaurantes', 'Hoteles', 'Cafeterías'],
                datasets: [{
                    data: [5, 9, 10],
                    backgroundColor: [
                        '#ff6b00',
                        '#0056b3',
                        '#28a745'
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
                        text: 'Distribución de Negocios en Pontevedra',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }

    // Gráfico de valoraciones medias
    if (document.getElementById('valoracionesChart')) {
        const valoracionesCtx = document.getElementById('valoracionesChart').getContext('2d');
        const valoracionesChart = new Chart(valoracionesCtx, {
            type: 'bar',
            data: {
                labels: ['Restaurantes', 'Hoteles', 'Cafeterías'],
                datasets: [{
                    label: 'Valoración media (0-5)',
                    data: [3.62, 3.77, 4.50],
                    backgroundColor: [
                        '#ff6b00',
                        '#0056b3',
                        '#28a745'
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
                            text: 'Valoración (0-5)',
                            font: {
                                weight: 'bold'
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Tipo de negocio',
                            font: {
                                weight: 'bold'
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Valoración Media por Tipo de Negocio',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }

    // Gráfico de presencia digital
    if (document.getElementById('presenciaDigitalChart')) {
        const presenciaDigitalCtx = document.getElementById('presenciaDigitalChart').getContext('2d');
        const presenciaDigitalChart = new Chart(presenciaDigitalCtx, {
            type: 'bar',
            data: {
                labels: ['Sitio Web', 'Facebook', 'Instagram', 'Twitter/X'],
                datasets: [{
                    label: 'Porcentaje de negocios',
                    data: [100, 100, 100, 12.5],
                    backgroundColor: [
                        '#0056b3',
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
                            text: 'Porcentaje (%)',
                            font: {
                                weight: 'bold'
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Plataforma',
                            font: {
                                weight: 'bold'
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Presencia Digital de Negocios en Pontevedra (%)',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }

    // Gráfico de actividad en redes sociales
    if (document.getElementById('actividadRedesChart')) {
        const actividadRedesCtx = document.getElementById('actividadRedesChart').getContext('2d');
        const actividadRedesChart = new Chart(actividadRedesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Media', 'Alta', 'Baja', 'Baja (gestionado por cadena)'],
                datasets: [{
                    data: [4, 2, 1, 1],
                    backgroundColor: [
                        '#f39c12',
                        '#28a745',
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
                        text: 'Nivel de Actividad en Redes Sociales',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }

    // Gráficos para la página de nuevas empresas
    if (document.getElementById('empresasPorProvinciaChart')) {
        const provinciaCtx = document.getElementById('empresasPorProvinciaChart').getContext('2d');
        const provinciaChart = new Chart(provinciaCtx, {
            type: 'bar',
            data: {
                labels: ['A Coruña', 'Pontevedra', 'Lugo', 'Ourense'],
                datasets: [{
                    label: 'Empresas creadas (Marzo 2025)',
                    data: [148, 146, 33, 43],
                    backgroundColor: [
                        '#0056b3',
                        '#28a745',
                        '#f39c12',
                        '#e74c3c'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Empresas por Provincia',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }

    if (document.getElementById('empresasPorSectorChart')) {
        const sectorCtx = document.getElementById('empresasPorSectorChart').getContext('2d');
        const sectorChart = new Chart(sectorCtx, {
            type: 'pie',
            data: {
                labels: ['Servicios', 'Comercio', 'Construcción', 'Industria', 'Tecnología', 'Otros'],
                datasets: [{
                    data: [35, 25, 15, 10, 10, 5],
                    backgroundColor: [
                        '#0056b3',
                        '#28a745',
                        '#f39c12',
                        '#e74c3c',
                        '#9b59b6',
                        '#95a5a6'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Distribución por Sector',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
}

// Función para añadir barra superior
function addTopBar() {
    const header = document.querySelector('header');
    if (!header) return;
    
    const topBar = document.createElement('div');
    topBar.className = 'top-bar';
    
    const topBarContainer = document.createElement('div');
    topBarContainer.className = 'container';
    
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.innerHTML = '<span>📧 info@analisisdemercado.es</span> <span>📱 +34 644 000000</span>';
    
    const socialIcons = document.createElement('div');
    socialIcons.className = 'social-icons';
    socialIcons.innerHTML = `
        <a href="#" title="LinkedIn">LinkedIn</a>
        <a href="#" title="Twitter">Twitter</a>
        <a href="#" title="Facebook">Facebook</a>
    `;
    
    topBarContainer.appendChild(contactInfo);
    topBarContainer.appendChild(socialIcons);
    topBar.appendChild(topBarContainer);
    
    header.parentNode.insertBefore(topBar, header);
}

// Función para añadir botón de volver arriba
function addBackToTopButton() {
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.title = 'Volver arriba';
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Función para mejorar la navegación
function enhanceNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Si es un enlace interno con ancla
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Resaltar sección activa durante el scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Función para añadir preloader
function addPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="loader"></div>
        <p>Cargando...</p>
    `;
    preloader.style.position = 'fixed';
    preloader.style.top = '0';
    preloader.style.left = '0';
    preloader.style.width = '100%';
    preloader.style.height = '100%';
    preloader.style.backgroundColor = 'white';
    preloader.style.display = 'flex';
    preloader.style.flexDirection = 'column';
    preloader.style.justifyContent = 'center';
    preloader.style.alignItems = 'center';
    preloader.style.zIndex = '9999';
    
    document.body.appendChild(preloader);
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    });
}

// Función para configurar filtros
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                const rows = document.querySelectorAll('#nuevas-empresas-table tbody tr, table tbody tr');
                
                rows.forEach(row => {
                    if (filter === 'all') {
                        row.style.display = '';
                    } else {
                        const province = row.querySelector('td:nth-child(4)');
                        if (province && province.textContent.includes(filter)) {
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
}

// Función para configurar formularios
function setupForms() {
    const updateForm = document.getElementById('update-data-form');
    if (updateForm) {
        updateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostrar animación de carga
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.innerHTML = '<span class="loader" style="width: 20px; height: 20px;"></span> Enviando...';
            submitButton.disabled = true;
            
            // Simulación de envío (en una implementación real, esto enviaría datos a un servidor)
            setTimeout(function() {
                submitButton.innerHTML = '✓ Enviado correctamente';
                
                setTimeout(function() {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    updateForm.reset();
                }, 2000);
            }, 1500);
        });
    }
}

// Función para cambiar entre modo claro y oscuro (opcional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Guardar preferencia en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Verificar preferencia guardada
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

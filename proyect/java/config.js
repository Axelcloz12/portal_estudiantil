// ============================================
// CONFIGURACIÓN GLOBAL DE LA API
// ============================================

// Detectar si estamos en localhost o en producción
const isLocalhost = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1';

// URL base de la API
const API_BASE_URL = isLocalhost ? 'http://localhost:3000' : '';

// Función para construir URLs completas
function apiUrl(path) {
    // Asegurar que path comienza con /
    if (!path.startsWith('/')) {
        path = '/' + path;
    }
    return API_BASE_URL + path;
}

console.log('🔧 Configuración de API cargada:');
console.log('   Host:', window.location.hostname);
console.log('   Modo:', isLocalhost ? 'LOCAL' : 'PRODUCCIÓN');

// Variables
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?')
let cantidadPresupuesto;

// Classes
/// Clase del presupuesto
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto)
    this.restante = Number(presupuesto)
  }

  // Metodo para restar del presupuesto actual
  presupuestoRestante(cantidad = 0) {
    return this.restante -= Number(cantidad)
  }
}
/// Clase de la interfaz, todo lo relacionado al HTML
class Interfaz {
  insertarPresupuesto(cantidad) {
    console.log('insertarPresupuesto', cantidad)
    document.querySelector('span#total').textContent = `${cantidad}`
    document.querySelector('span#restante').textContent = `${cantidad}`
  }
}

// EventListeners
document.addEventListener('DOMContentLoaded', function() {
  (presupuestoUsuario === null || presupuestoUsuario === '')
    ? window.location.reload()
    :
      // Instanciar la clase de presupuesto
      cantidadPresupuesto = new Presupuesto(presupuestoUsuario)
      const { presupuesto, restante } = cantidadPresupuesto
      // Instanciar la clase de interfaz
      const ui = new Interfaz()
      ui.insertarPresupuesto(presupuesto)
    ;
})
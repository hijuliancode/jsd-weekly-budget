// Variables
const presupuestoUsuario = 1200; //prompt('¿Cuál es tu presupuesto semanal?')
let cantidadPresupuesto;

// Classes
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto)
    this.restante = Number(presupuesto)
  }

  // Metodo para restar del presupuesto actual
  presupuestoRestante(cantidad) {
    return this.restante -= Number(cantidad)
  }
}

// EventListeners
document.addEventListener('DOMContentLoaded', function() {
  (presupuestoUsuario === null || presupuestoUsuario === '')
    ? window.location.reload()
    :
      cantidadPresupuesto = new Presupuesto(presupuestoUsuario)
      console.log(cantidadPresupuesto)
    ;
})
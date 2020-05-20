// Variables
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?')
const formulario = document.getElementById('agregar-gasto')
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
  imprimirMensaje(mensaje, tipo) {
    const divMensaje = document.createElement('div')
    divMensaje.classList.add('text-center', 'alert')
    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger')
    } else {
      divMensaje.classList.add('alert-success');
    }
    divMensaje.appendChild(document.createTextNode(mensaje))
    // Insertar en el DOM
    document.querySelector('.primario').insertBefore(divMensaje, formulario)

    // Quitar el alert despues de 3 segundos
    setTimeout(() => {
      document.querySelector('.primario .alert').remove()
      formulario.reset()
    }, 1500);
  }
  agregarGastoAListado(nombre, cantidad) {
    const gastosListado = document.querySelector('#gastos ul');
    // Crear LI para agregar a la lista
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <span>${nombre}</span>
      <span class="badge badge-primary badge-pill">${cantidad}</span>
    `;
    console.log(li)
    gastosListado.appendChild(li);
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
formulario.addEventListener('submit', function(e) {
  e.preventDefault()

  // Leer del formulario de gastos
  const nombreGasto = document.querySelector('#gasto').value
  const cantidadGasto = document.querySelector('#cantidad').value

  // Instanciar Interfaz
  const ui = new Interfaz()

  // Comprobar que los campos no estén vacios
  if (nombreGasto === '' || cantidadGasto === '') {
    ui.imprimirMensaje('Hubo un error', 'error')
  } else {
    ui.imprimirMensaje('Se agrego al carrito', 'success')
    ui.agregarGastoAListado(nombreGasto, cantidadGasto)
  }
})
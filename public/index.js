const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const boosmapOP = document.getElementById("boosmapOP").value;
  const ubicacion = document.getElementById("ubicacion");
  const cuadroMsj = document.getElementById("cuadroMsj");

  const opes = obtenerOP(boosmapOP);

  opes.forEach((element, i) => {
    const locaciones = `
<div class="d-flex align-items-end mb-2">
      <label class = "pr-2" id="${element}" for="select${i + 1}">${element}</label>

      <select class="form-control" id="select${i + 1}" onchange="showSelected(select${i + 1}, ${element})">
      <option value="titulo">Escoja destino</option>
      <option value="vina">Viña del Mar</option>
      <option value="valparaiso">Valparaiso</option>
      <option value="villaAlemana">Villa Alemana</option>
      <option value="quilpue">Quilpue</option>
      <option value="concon">Concon</option>
    </select>
    </div>
        `;
    ubicacion.innerHTML += locaciones;
  });

  btn.style.display = "none";
  btnEnviar.style.display = "block";
  cuadroMsj.style.display = "none";
});

const calculoRuta = (rutas) => {
  let vina = 3200;
  let valparaiso = 3800;
  let villaAlemana = 4500;
  let quilpue = 3800;
  let concon = 4500;

  for (const property in rutas) {
    if (property == "vina") {
      vina = vina * rutas[property];
    }
    if (property == "valparaiso") {
      valparaiso = valparaiso * rutas[property];
    }
    if (property == "villaAlemana") {
      villaAlemana = villaAlemana * rutas[property];
    }
    if (property == "quilpue") {
      quilpue = quilpue * rutas[property];
    }
    if (property == "concon") {
      concon = concon * rutas[property];
    }
  }
  const total = vina + valparaiso + villaAlemana + quilpue + concon;

  return total;
};

const obtenerOP = (boosmapOP) => {
  let opListas = [];
  let separado = boosmapOP.split(/[\s,]+/).map((x) => {
      if (x.length == 8 && Number(x)) {
      opListas.push(x);
    }
  }); return opListas;
};
const opYDestino = [];

const locaciones = [
{ 
  ciudad: 'vina',
  monto: 3200
},
{ 
  ciudad: 'valparaiso',
  monto: 3800
},
{ 
  ciudad: 'quilpue',
  monto: 3800
},
{ 
  ciudad: 'concon',
  monto: 5000
},
{ 
  ciudad: 'villaAlemana',
  monto: 5000
}]

const showSelected = (ubic, op) => {
  const {monto} = locaciones.find(e => e.ciudad == ubic.value)
  const ubicacion = ubic.value

  let ruta = {
    op,
    ubicacion,
    monto
  };

  console.log(ruta);

  axios.post('/send', ruta)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  opYDestino.push(ruta);
  cambiaLabel(ubic, op);
};

const cambiaLabel = (ubic, op) => {
 
  const label = document.getElementById(op);
  ubic.style.display = "none";
  label.innerHTML = `${op} ${ubic.value} `;
  label.classList.remove("pr-2");
  label.classList += " opConUbicacion";
};

const btnEnviar = document.getElementById("btnEnviar");

// btnEnviar.addEventListener("click", (e) => {
//   e.preventDefault();

//   const cornershop = Number(document.getElementById('cornershop').value)
//   const propinas = Number(document.getElementById('propinas').value)

// const nuevoArray = [...opYDestino, {cornershop}, {propinas}];
// console.log(nuevoArray);


// });

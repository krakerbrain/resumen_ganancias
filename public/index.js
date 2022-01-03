const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const cornershop = parseInt(document.getElementById("cornershop").value);
  const propinas = parseInt(document.getElementById("propinas").value);
  const boosmapOP = document.getElementById("boosmapOP").value;
  // const vina = parseInt(document.getElementById("vina").value);
  // const valparaiso = parseInt(document.getElementById("valparaiso").value);
  // const villaAlemana = parseInt(document.getElementById("villaAlemana").value);
  // const quilpue = parseInt(document.getElementById("quilpue").value);
  // const concon = parseInt(document.getElementById("concon").value);
  const ubicacion = document.getElementById("ubicacion");
  const cuadroMsj = document.getElementById("cuadroMsj");

  const opes = obtenerOP(boosmapOP);

  opes.forEach((element, i) => {
    console.log(element, i);
    const locaciones = `

      <label for="">${element}</label>
      <select class="form-control" id="select${i + 1}">
      <option value="${element}">Viña del Mar</option>
      <option value="${element}">Valparaiso</option>
      <option value="${element}">Villa Alemana</option>
      <option value="${element}">Quilpue</option>
      <option value="${element}">Concon</option>
    </select>

        `;
    ubicacion.innerHTML += locaciones;
  });

  btn.style.display = "none";
  btnEnviar.style.display = "block";
  cuadroMsj.style.display = "none";

  console.log(opes);

  /*   const rutas = {
    vina: vina,
    valparaiso: valparaiso,
    villaAlemana: villaAlemana,
    quilpue: quilpue,
    concon: concon,
  };

  const totalRutas = calculoRuta(rutas);

  const valores = {
    cornershop,
    propinas,
    totalRutas,
  };

  axios
    .post("/send", valores)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); */
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
    if (x.length == 8) {
      opListas.push(x);
    }
  });
  return opListas;
};

const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();

  const selectOp = document.querySelector("#select1"); //.selectedOptions[0].value;
  //const locacion = document.querySelector("#select1").selectedOptions[0].text;

  console.log(selectOp);
});

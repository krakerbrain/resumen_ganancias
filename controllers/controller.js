const {addBoosmap, sumaBoosmap} = require ("../database/consultas")

const registro = async (req, res) => {
  
        const {op, ubicacion, monto} = req.body;
       const boosmap = await addBoosmap(op, ubicacion, monto)
        const suma = await sumaBoosmap(monto)
        console.log(suma.rows[0].sum)
}

module.exports = {
    registro
}
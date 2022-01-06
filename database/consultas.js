const PoolSingleton = require("./poolbd");
const pool = PoolSingleton.getInstance();

const addBoosmap = async (op, ubicacion, monto) => {

    const consulta = {
      text: `INSERT INTO boosmap (fecha, numero_op, direccion, monto) 
                        values (CURRENT_DATE,$1,$2,$3) RETURNING *;`,
      values: [op, ubicacion, monto],
    };
   
    try {
      const result = await pool.query(consulta);
      return result;
    } catch (error) {
      return error;
    }
  };

  const sumaBoosmap = async (monto) => {
      
      try {
        const result = await pool.query (`select sum(${monto}) from boosmap  where fecha = current_date`)
        return result;
      } catch (error) {
        return error;
      }
  }

  module.exports = {
    addBoosmap,
    sumaBoosmap
    
  }
const { userData } = require("../data/datas");

const obtenerPlanes = async (req, res) => {
  try {
    userData.obtenerPlanes((err, result) => {
      if (err) {
        console.error("Error al los planes:", err.message);
        res.status(500).json({ error: "Error al consultar los planes" });
      } else {
        console.log("Planes consultados exitosamente");
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const obtenerPlanPorId = async (req, res) => {
  try {
    const { id } = req.params;
    userData.obtenerPlanPorId(id, (err, result) => {
      if (err) {
        console.error("Error al consultar el plan:", err.message);
        res.status(500).json({ error: "Error al consultar el plan" });
      } else {
        console.log("Plan consultado exitosamente");
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  obtenerPlanes,
  obtenerPlanPorId,
};

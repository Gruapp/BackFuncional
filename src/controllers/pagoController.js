const { userData } = require("../data/datas");

const pagarPlan = async (req, res) => {
  try {
    const { idPlan, idCliente } = req.body;
    userData.pagarPlan(idPlan, idCliente, (err, result) => {
      if (err) {
        console.error("Error al pagar el plan:", err.message);
        res.status(500).json({ error: "Error al pagar el plan" });
      } else {
        console.log("Plan pagado exitosamente");
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  pagarPlan,
};

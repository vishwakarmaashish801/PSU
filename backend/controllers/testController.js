const db = require("../config/db");

const getAllQuestions = (req, res) => {
  const query = "SELECT * FROM psu_questions";
  db.query(query, (err, results) => {
    if (err) {
        console.error({error: message});
        return res.status(500).json({message: err.message});
    }
    res.status(200).json(results)
  })
}

module.exports = {
    getAllQuestions
}
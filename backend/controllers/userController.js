const db = require("../config/db");

const getAllUser =  (req , res) => {

    const query = "SELECT * FROM psu_users";
    db.query(query, (err, results) => {
      if (err) {
          console.error({error: message});
          return res.status(500).json({message: err.message});
      }
      res.status(200).json(results)
    })

}

module.exports = {
    getAllUser
}
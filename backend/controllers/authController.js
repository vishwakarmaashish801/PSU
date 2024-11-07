const db = require("../config/db");
const bcrypt = require("bcrypt");
//Registration logic 

const registerUser = async (req, res) => {
    const {  name, email, phone, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
         

        // Generate the unique Id for the user followed by "OLLATOPSU"  by random 4 digit number
        let userId;
        let isUnique = false;

        //loop until the unique id found for the user
        while(!isUnique){
            const randomNum = Math.floor(1000 + Math.random() * 9000);
            userId = `OLLATOPSU${randomNum}`;


            //Check if the userId exists in the databse 
            const checkQuery = "SELECT * FROM psu_users WHERE user_id = ?";
            const [rows] =  await db.promise().query(checkQuery, [userId]);
            if(rows.length === 0){
                isUnique = true;
            }
        }

        //SQL query to insert the user data tot the psu_users table
        const query = "INSERT INTO psu_users (name, user_id, phone, email, password) VALUES (?, ?, ?, ?, ?)"

        //execute the query
        db.query(
            query,
            [
                name,
                userId,
                email,
                phone,
                hashedPassword

            ],
            (err, results) => {
                if(err){
                    console.error("error register the user", err);
                    return res.status(500).json({message: err.message});
                }
                  return res.status(200).json({ message :"User registred sucessfully", userId});
                 console.log(results);
            }
        )
    } catch (error) {
        console.error("error hashing the password", error);
        res.status(500).json({error:"internal server error"});
    }
}


module.exports = {
    registerUser
}
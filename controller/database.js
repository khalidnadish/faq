
import db from "mysql2"
const dataBase = db.createConnection({
    host: "localhost",
     user: "root",
     database: "nadish_site",
     password: "Leno_1972",
     connectTimeout: 30000
  })
   export default dataBase
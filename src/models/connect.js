import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,
    }
);

export default sequelize;

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log("ok");
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// sequelize-auto -h localhost -d db_youtube -u root -x Pttn2002@ -p 3307 --dialect mysql -o src/models -l esm
// sequelize-auto -h localhost -d btap_sql -u root -x Pttn2002@ -p 3307 --dialect mysql -o src/models -l esm

const Sequelize = require('sequelize');

const sequelize = new Sequelize('disqueria', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



/* si no existe creamos la tabla */
class Disco extends Sequelize.Model {}
Disco.init({
    nombre_disco:Sequelize.STRING,
    anio_lanzamiento:Sequelize.INTEGER
}, { sequelize, modelName: 'disco', timestamps: false});


/* crea una placa*/
sequelize.sync()
  .then(() => Disco.create({
    nombre_disco: 'Bad',
    anio_lanzamiento: '1984'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

/* eliminamos un registro*/
Disco.destroy({
  where: {
    id: 2
  }
}).then(() => {
  console.log("Elimine Registro");
});


'use strict';
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", 
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNum: DataTypes.STRING,
    },
    {
      underscored: true,
      tableName: 'Users',
    }
    );
    
    return User;
  };
  
  module.exports = User;
  
  // underscored : Este campo nos ajudará a resolver o primeiro problema, ele fará com que parâmetros recebidos em Camel Case , sejam convertidos em Snake Case , quando for feita uma consulta a respectiva tabela.
  
  // tableName : Este campo nos ajudará a resolver o segundo problema, aqui podemos declarar explicitamente, qual o nome da tabela que estamos referenciando, retirando assim a responsabilidade do Sequelize de nomear a tabela.

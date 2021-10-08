// models/Address.js
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'Addresses',
    underscored: true,
  });

  Address.associate = (models) => {
    // ele diz que a chave pertence a employee_id
    Address.belongsTo(
      models.Employee,
      { foreignKey: 'employee_id', as: 'employees' }
    );
  };

  return Address;
};

// metodosde associação: 
  // hasOne (possui um 1:1)
  // belongsTo (pertencia a um 1:1)
  
  // hasMany (possui varios 1:n)
  // belongsToMany (pertencia a varios 1:n)
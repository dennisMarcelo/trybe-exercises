// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasMany(
      models.Address,
      { foreignKey: 'employee_id', as: 'addresses' }
    );
  };

  return Employee;
};

// metodosde associação: 
  // hasOne (possui um 1:1)
  // belongsTo (pertencia a um 1:1)
  
  // hasMany (possui varios 1:n)
  // belongsToMany (pertencia a varios 1:n)
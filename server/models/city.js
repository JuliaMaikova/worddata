module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
      district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
     
    });
  
    City.associate = (models) => {
      City.belongsTo(models.Country, {
        foreignKey: 'countryCode',
        onDelete: 'CASCADE',
      });
    };
  
    return City;
  };
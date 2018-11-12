module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
      
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false
      },
      surfacearea: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      indepyear: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      lifeexpectancy: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      gnp: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      gnpold: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      localname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      governmentformon: {
        type: DataTypes.STRING,
        allowNull: false
      },
      headofstate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      capital: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      code2: {
        type: DataTypes.STRING,
        allowNull: false
      }
      
    });
  
    Country.associate = (models) => {
      Country.hasMany(models.City, {
        foreignKey: 'countryCode',
        as: 'cities',
      });
    };
  
    return Country;
  };
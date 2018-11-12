module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Cities', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
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
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        countryCode: {
          type: Sequelize.STRING,
          onDelete: 'CASCADE',
          references: {
            model: 'Countries',
            key: 'code',
            as: 'countryCode',
          },
        },
      }),
    down: (queryInterface /* , Sequelize */) =>
      queryInterface.dropTable('Cities'),
  };
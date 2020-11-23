// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const utenti = sequelizeClient.define('utenti', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dialablePhone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preferredComm: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isInvitation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isVerified: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    verifyExpires: {
      type: DataTypes.DATE
    },
    verifyToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verifyShortToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verifyChanges: {
      type: DataTypes.STRING
    },
    resetExpires: {
      type: DataTypes.DATE
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resetShortToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mfaExpires: {
      type: DataTypes.DATE
    },
    mfaShortToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordHistory: {
      type: DataTypes.STRING
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  utenti.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return utenti;
};

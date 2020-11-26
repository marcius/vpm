// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('utenti', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
     type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dialablePhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    preferredComm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isInvitation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isVerified: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    verifyExpires: {
      type: DataTypes.DATE
    },
    verifyToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    verifyShortToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    verifyChanges: {
      type: DataTypes.STRING,
      get() {
          return JSON.parse(this.getDataValue('verifyChanges'));
      },
      set(val) {
          this.setDataValue('verifyChanges', JSON.stringify(val));
      }
    },
    resetExpires: {
      type: DataTypes.DATE
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resetShortToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mfaExpires: {
      type: DataTypes.DATE
    },
    mfaShortToken: {
      type: DataTypes.STRING,
      allowNull: true
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
  }, {
    tableName: 'utenti',
    timestamps: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};

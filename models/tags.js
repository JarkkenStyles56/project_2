module.exports = function (sequelize, DataTypes) {
  var Tags = sequelize.define("Tags", {
    tagName: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false });

  // RELATIONSHIPS GO HERE 11/14 -CF
  // Tags.associate = function (models) {};

  return Tags;
};

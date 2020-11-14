module.exports = function (sequelize, DataTypes) {
  var Tags = sequelize.define("Tags", {
    tagName: {
      type: DataTypes.STRING,
    },
  });

  // RELATIONSHIPS GO HERE 11/14 -CF
  // Tags.associate = function (models) {};

  return Tags;
};

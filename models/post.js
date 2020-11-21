module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define(
    "Post",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isArticle: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      isReview: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    { timestamps: false }
  );

  Post.associate = function (models) {
    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });

    Post.hasMany(models.Comment, {
      foreignKey: {
        allowNull: false,
      },
    });

  };

  return Post;
};

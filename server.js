const express = require('express');
const routes = require('./routes');
const { DataTypes } = require('sequelize');
// import sequelize connection
import sequelize from "./config/connection.js";
const Category= sequelize.define('Category', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_id: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {});
const Product= sequelize.define('Product', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.STRING,
    allowNull: false 
  },
    category_id: {
      type: DataTypes.STRING,
      allowNull: false }
},{});

const Tag = sequelize.define('Tag', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tag_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {});
const ProductTag = sequelize.define('Product', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tag_id: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{});

Category.hasMany(Product);
Product.hasOne(Category);
Product.hasMany(Tag);
Tag.hasMany(Product);
Product.belongsToMany(Tag, { through: "ProductTag" });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

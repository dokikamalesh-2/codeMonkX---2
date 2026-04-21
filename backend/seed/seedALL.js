require('dotenv').config();
const mongoose = require('mongoose');

const Language = require('../models/Language');

const c = require('./data/c');
const cpp = require('./data/cpp');
const python = require('./data/python');
const java = require('./data/java');

async function seedAll() {
  try {
    //CONNECT FIRST
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    console.log("Clearing old data...");
    await Language.deleteMany();

    console.log("Inserting new data...");
    await Language.insertMany([c, cpp, python, java]);

    console.log("Seeding completed!");

    process.exit();

  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

seedAll();
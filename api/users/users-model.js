const db = require("../../data/dbConfig");

function find() {
 return db("users");
}

function findById(id) {
 return db("users").where("id", id).first();
}

function findBy(filter) {
 return db("users").where(filter);
}

async function add(user) {
 const [id] = await db("user").insert(user);
 return findById(id);
}

module.exports = {
 find,
 findBy,
 findById,
 add,
};

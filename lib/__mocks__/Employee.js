// mock exports for testing class constructors that require Employee.js
module.exports = function (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
}
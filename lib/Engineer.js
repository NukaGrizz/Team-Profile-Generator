const Employee = require('./Employee');
// Engineer.js class constructor and methods
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email);

        this.gitHub = gitHub;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
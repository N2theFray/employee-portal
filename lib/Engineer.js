const Employee = require("./Employee");

class Engineer extends Employee {
        constructor (name, id, email, gitAddress){
            super(name, id, email)
    
            this.gitAddress = gitAddress;
        }
    
        
                
                
        
    
}

module.exports = Engineer
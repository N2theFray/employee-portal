const Employee = require("./Employee");

class Engineer extends Employee {
        constructor (name, id, email, gitAddress){
            super(name, id, email)
    
            this.gitAddress = gitAddress;
        }
    
        
        getGithub(){
            return this.gitAddress
        }
        getRole(){
            return 'Engineer'
        }
                
        
    
}

module.exports = Engineer
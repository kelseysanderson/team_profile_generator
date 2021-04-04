class Employee {
    constructor (name, id, email){ 
        this.name = name;
        this.id = id;
        this.email = email;
    }

  
    getName(){
      return name
  }

    getRole(){
      return "Employee"
  }

    getId(){
     return this.id
  }

    getEmail(){
    return this.email
  }
}

module.exports = Employee;
//github—GitHub username

//getGithub()

//getRole()—overridden to return 'Engineer'
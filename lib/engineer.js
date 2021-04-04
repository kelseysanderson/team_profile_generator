const Employee = require("./employee");


class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;   
    }

   getRole(){
      return "Engineer"
  }

  getGithub(){
      return this.github
  }

  toHtml(){
    return `<div class="card" style = "box-shadow:10px 10px 2px 1px rgba(41, 75, 168, 0.2); border-radius: 5px;">
        <div class = card-title class="card-title" style="padding: 10px 0px 10px 10px; border-bottom: 2px solid #8a6f17; background-color:#c29d23; color: #f7f5f2">
            <h3>${this.name}</h3>
            <h4>${this.getRole()}</h4>
        </div>
        <div class="card-body">
        <ul class="card-text">
            <li>${this.id}</li>
            <li>${this.email}</li>
            <li>${this.github}</li>
        </ul>
        </div>
    </div>`
}

//generatehtml for engineer
}


module.exports = Engineer;
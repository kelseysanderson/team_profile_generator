const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
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
                <li>${this.officeNumber}</li>
            </ul>
            </div>
        </div>`
    }
}

module.exports = Manager;


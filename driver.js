class Driver {
    constructor(name){
        this.name = name;
    }

    static create({name}){
        return new Driver(name);
    }

}

module.exports = Driver 
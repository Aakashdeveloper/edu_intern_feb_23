class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet=() =>{ return `Say hi to ${this.name}`}
}

let Hindi = new language('Hindi','India')

Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}

Hindi.greet()
'Say Hi to Hindi'
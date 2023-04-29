function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {
        return `Say Hi to ${name}`
    }
}

let Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi to Hindi'

let french = new language('French','France')
french
language {name: 'French', country: 'France', greet: ƒ}
french.name
'French'
french.greet()
'Say Hi to French'
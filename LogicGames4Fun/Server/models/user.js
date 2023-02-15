export default class User {
    constructor(login, password, email, name, surname, gender, dateOfBirth){
        this.login = login;
        this.password = password;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.gender = gender; 
        this.dateOfBirth = dateOfBirth;
    }
}
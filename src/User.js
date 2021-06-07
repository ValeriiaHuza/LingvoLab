export default class User {

    name;
    level;
    progressGame1;

    constructor(name) {
        this.name = name;
        this.level = "";
        this.progressGame1 = [""];
    }

    getName(){
        return this.name;
    }

    getLevel() {
        return this.level;
    }

    setLevel(lev){
        this.level = lev;
    }

    getProgressGame1(){
        return this.progressGame1;
    }

    addWordsGame1(word){
        this.progressGame1.push(word);
    }

    setProgressGame1(array){
        this.progressGame1=array;
    }
    static build(json){
        let temp = JSON.parse(json);

        let newUser = new User(temp.name);
        newUser.setLevel(temp.level);
        newUser.setProgressGame1(temp.progressGame1);
        return newUser;
    }

    toString(){
        return JSON.stringify({
            name:this.name,
            level:this.level,
            progressGame1:this.progressGame1
        });
    }
}

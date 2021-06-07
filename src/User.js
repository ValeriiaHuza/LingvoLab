export default class User {

    name;
    level;
    progressGame1;

    progressGame2;

    progressGame3;

    progressGame4;

    constructor(name) {
        this.name = name;
        this.level = "";
        this.progressGame1 = [""];
        this.progressGame2 = [""];
        this.progressGame3 = [""];
        this.progressGame4 = [""];

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

    setProgressGame1(array){
        this.progressGame1=array;
    }


    getProgressGame2(){
        return this.progressGame2;
    }

    setProgressGame2(array){
        this.progressGame2=array;
    }


    getProgressGame3(){
        return this.progressGame3;
    }

    setProgressGame3(array){
        this.progressGame3=array;
    }

    getProgressGame4(){
        return this.progressGame4;
    }

    setProgressGame4(array){
        this.progressGame4=array;
    }

    static build(json){
        let temp = JSON.parse(json);

        let newUser = new User(temp.name);
        newUser.setLevel(temp.level);
        newUser.setProgressGame1(temp.progressGame1);
        newUser.setProgressGame2(temp.progressGame2);
        newUser.setProgressGame3(temp.progressGame3);
        newUser.setProgressGame4(temp.progressGame4);

        return newUser;
    }

    toString(){
        return JSON.stringify({
            name:this.name,
            level:this.level,
            progressGame1:this.progressGame1,
            progressGame2:this.progressGame2,
            progressGame3:this.progressGame3,
            progressGame4:this.progressGame4
        });
    }
}

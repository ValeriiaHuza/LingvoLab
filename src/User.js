export default class User {

    name;
    level;
    progressGame1;

    indexAtGame2;
    progressGame2;

    indexAtGame3;
    progressGame3;

    progressGame4;


    constructor(name) {
        this.name = name;
        this.level = "";
        this.progressGame1 = [""];
        this.progressGame2 = [""];
        this.progressGame3 = [""];
        this.progressGame4 = [""];
        this.indexAtGame3 = 0;
        this.indexAtGame2 = 0;


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

    getIndexAtGame2(){
        return this.indexAtGame2;
    }

    setIndexAtGame2(number){
        this.indexAtGame2=number;
    }


    getProgressGame3(){
        return this.progressGame3;
    }

    setProgressGame3(array){
        this.progressGame3=array;
    }

    getIndexAtGame3(){
        return this.indexAtGame3;
    }

    setIndexAtGame3(number){
        this.indexAtGame3=number;
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
        newUser.setIndexAtGame2(temp.indexAtGame2);
        newUser.setProgressGame3(temp.progressGame3);
        newUser.setIndexAtGame3(temp.indexAtGame3);
        newUser.setProgressGame4(temp.progressGame4);

        return newUser;
    }

    toString(){
        return JSON.stringify({
            name:this.name,
            level:this.level,
            progressGame1:this.progressGame1,
            progressGame2:this.progressGame2,
            indexAtGame2:this.indexAtGame2,
            progressGame3:this.progressGame3,
            indexAtGame3:this.indexAtGame3,
            progressGame4:this.progressGame4
        });
    }
}

export default class User {

    name;
    level;

    indexAtTest;
    countRes;

    progressGame1;

    indexAtGame2;
    progressGame2;

    indexAtGame3;
    progressGame3;

    indexAtGame4;
    progressGame4;


    constructor(name) {
        this.name = name;
        this.level = "";
        this.progressGame1 = [""];
        this.progressGame2 = [""];
        this.progressGame3 = [""];
        this.progressGame4 = [""];
        this.indexAtGame4 = 0;
        this.indexAtGame3 = 0;
        this.indexAtGame2 = 0;
        this.countRes = 0;
        this.indexAtTest = 0;

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

    addCountRes(){
        this.countRes++;
    }

    setIndexAtTest(number){
        this.indexAtTest = number;
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

    getIndexAtGame4(){
        return this.indexAtGame4;
    }

    setIndexAtGame4(number){
        this.indexAtGame4=number;
    }


    static build(json){
        let temp = JSON.parse(json);

        let newUser = new User(temp.name);

        newUser.setIndexAtTest(temp.indexAtTest);
        newUser.countRes = temp.countRes;

        newUser.setLevel(temp.level);
        newUser.setProgressGame1(temp.progressGame1);

        newUser.setProgressGame2(temp.progressGame2);
        newUser.setIndexAtGame2(temp.indexAtGame2);

        newUser.setProgressGame3(temp.progressGame3);
        newUser.setIndexAtGame3(temp.indexAtGame3);

        newUser.setProgressGame4(temp.progressGame4);
        newUser.setIndexAtGame4(temp.indexAtGame4);

        return newUser;
    }

    toString(){
        return JSON.stringify({
            name:this.name,
            level:this.level,
            indexAtTest:this.indexAtTest,
            countRes:this.countRes,
            progressGame1:this.progressGame1,
            progressGame2:this.progressGame2,
            indexAtGame2:this.indexAtGame2,
            progressGame3:this.progressGame3,
            indexAtGame3:this.indexAtGame3,
            progressGame4:this.progressGame4,
            indexAtGame4:this.indexAtGame4,

        });
    }
}

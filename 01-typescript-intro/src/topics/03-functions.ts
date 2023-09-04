function addNumber(a: number, b: number){
    return a + b;
}

const addNumberArrow = (a:number, b:number) : string => {
    return `${a + b}`
};

function multiply(firstNumber: number, secondNumber: number, base: number){
    return firstNumber * base;
}

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name : 'Strider',
    hp : 50,
    showHp(){
        console.log(`Puntos de vida ${ this.hp }`);
    }
}

healCharacter(strider, 10);

strider.showHp();

// const result : number = addNumber(1,2);
// const result2 : string = addNumberArrow(1,2);
// console.log({result});
// console.log({result2});





export{};
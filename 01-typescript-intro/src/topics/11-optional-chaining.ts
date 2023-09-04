export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Rodrigo"
}

const passenger2: Passenger = {
    name: "Karen",
    children: ['Natalia', 'Elizabeth'],
}

const returntChildrenNumber = (passenger: Passenger) : number => {
    //El optionalChaining indica que si viene usa la propiedad sino viene regresa undefined
    const howManyCHildren = passenger.children?.length ||0 ;

    //Podemos indicar a Typescript que siempre va a recibir el valor con "!"
    //not null assertion operator
    //forma de decirle a typeSript confia que nunca vas a recibir un valor nulo es ese punto
    // const howManyCHildren = passenger.children!.length;

    console.log(passenger.name, howManyCHildren);
    return howManyCHildren;
}

returntChildrenNumber(passenger2);

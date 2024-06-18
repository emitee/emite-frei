import prompt from "prompt-sync";
let read = prompt();

let value = 0;

export function menu() {

    console.log("pressione enter para abrir o menu:")
    let enter = read();

    console.clear();

    console.log(`1 - Depositar.
2 - Sacar.
3 - Mostrar saldo.   
4 - Calcular juros.`);

let choises = read();
   
if (choises == "1") {

    console.clear();

    console.log("valor que deseja depositar:")
    let a = read();

    depositar(a)

} else if (choises == "2") {

    console.clear();

    console.log("valor que deseja sacar:")
    let a = read();

    sacar(a)

} else if (choises == "3") {

    console.clear();

    mostrarSaldo();

} else if (choises == "4") {

    console.clear();

    console.log("qual a capital desejada:");
    let a = Number(read());

    console.clear();

    console.log("qual a porcentagem mensal de juros:");
    let b = Number(read());

    console.clear();

    console.log("qual o tempo (em meses) desejado:");
    let c = Number(read());

    console.clear();

    juros(a, b, c);

}
else if (choises == "sair" || choises == "Sair") {
    for (let sair = 0; sair > -1; sair++) {
        break;
    }
}

}

export function depositar(a) {

    let infinity = 0;
    let convertA = Number(a);
    while (infinity == 0) {

        if (convertA > 0) {
            value += convertA;
            console.clear();
            console.log(`seu saldo atual é de: ${value}`);
            console.log("");
            menu()
        }
        else if (a == "c") {
            infinity++;
        }
        else {
            console.log("insira um valor válido:")
            let valueUndefined = read();
            let convert = Number(valueUndefined)
            if (convert > 0) {
                value += convert;
                console.clear();
                console.log(`seu saldo atual é de: ${value}`);
                console.log("");
                menu();
            }
            else if (valueUndefined == "c") {
                infinity++;
            }
        }
    }
}

export function sacar(a) {

    let infinity = 0;
    let convertA = Number(a);
    while (infinity == 0) {

        if (convertA > 0 && value > convertA) {
            value -= convertA;
            console.clear();
            console.log(`seu saldo atual é de: ${value}`);
            console.log("");
            menu()
        }
        else if (a == "c") {
            infinity++;
        }
        else {
            console.log("saldo insuficiente para saque, insira um valor válido:")
            let valueUndefined = read();
            let convert = Number(valueUndefined)
            if (convert > 0 && value > convert) {
                value -= convert;
                console.clear();
                console.log(`seu saldo atual é de: ${value}`);
                console.log("");
                menu();
            }
            else if (valueUndefined == "c") {
                infinity++;
            }
        }
    }

}

export function mostrarSaldo() {
    console.log(`seu saldo atual é de: ${value}`);
    console.log("");
    menu();
}

export function juros(a, b, c) {
    console.clear();
    let juros = a * ((1 + (b / 100))**c);
    console.log(`o valor com juros compostos seria de: ${juros.toFixed(2)}`);
    console.log("");
    menu();
}


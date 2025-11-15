function fac(num){
    return num < 2 ? 1 : num * fac(num - 1);
};

    let num = parseInt(prompt("Qual o número? "))
    document.writeln(`número ${num}! ${fac(num)}`)
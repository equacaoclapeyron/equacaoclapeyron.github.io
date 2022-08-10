
function calcular_elementos(x){
    var n = parseFloat(document.getElementById("mols").value);
    var T = parseFloat(document.getElementById("temperatura").value);
    var vol = parseFloat(document.getElementById("volume").value);
    var R = 0.082;

    var P = ( n * R * T ) / vol;

    document.write("<h1> Valores: " + n + T + vol + "</h1>")
    document.write("<h1> Valores: " + P + "</h1>");
}
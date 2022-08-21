
function calcular_elementos(){
    var n = parseFloat(document.getElementById("mols").value);
    var T = parseFloat(document.getElementById("temperatura").value);
    var vol = parseFloat(document.getElementById("volume").value);
    var R = 0.082;

    var P = ( n * R * T ) / vol;
    P = P.toFixed(2);
    

    document.write("<html>");
    document.write("<head>");
    document.write("<style>");
    document.write("body{");
    document.write("background-color: lightblue;");
    document.write("background-image: url('https://cdn.wallpapersafari.com/5/24/IvSYOt.jpg');");
    document.write("background-blend-mode: multiply;");
    document.write("background-repeat: no-repeat;");
    document.write("background-position: 50% 100%;");
    document.write("background-size: 1500px;");
    document.write("}");
    document.write("</style>");
    document.write("<link rel='stylesheet' href='styles.css'>");
    document.write("<title>⛄ ✨ Quimica Faggion ✨ ⛄</title>");
    document.write("<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>");
    document.write("</head>");
    document.write("<body>");
    document.write("<header>");
    document.write("<img class='logo' src='kisspng-vector-graphics-atomic-nucleus-atomsymbol-atom-icons-925-free-vector-icons-5bf4afc74dfe55.1205308915427624393195.png' alt='logo'>");
    document.write("<nav>");    
    document.write("<ul class='nav_links'>");
    document.write("<li><a href='https://sigaa.ifpr.edu.br/sigaa/verTelaLogin.do'>SIGAA</a></li>");
    document.write("<li><a href='https://youtu.be/YpqRJvp5bug'>Video</a></li>");
    document.write("<li><a href='membros.html'>Membros</a></li>");
    document.write("<li id='contato'><a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmWwSBdlKMLWNmBsdtGPhtlhwXkVJDQGmQTQvFLkqPLtbFTNfDMDCwRZLQhvKRSQKrCkDv'>Contato</a></li>");
    document.write("</ul>");
    document.write("</nav>");
    document.write("</header>");
    document.write("<div id='headera'>");
    document.write("<h1><strong>Gases Ideais</strong></h1>");
    document.write("</div> <br> <br> <br> <br> <br> <br> <br>");
    document.write("<h1 class='resultado_feito'> Resolução: " + P + " =  0,082  x " + n + " x " + T + " / " + vol + "</h1>");
    document.write("<h1 class='resultado_feito'> Resultado: " + P + " ATM</h1>");
    
    
    document.write("</body>");
}
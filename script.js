function Calcular() {
    document.querySelector(".box3").style.height = '50px';
    document.querySelector(".box3 h2").style.filter = "opacity(100%)";
    var altura = document.getElementById('altura_input').value;
    var peso = document.getElementById('peso_input').value;

    var altura2 = (altura * altura);
    var resultado = (peso / altura2);
    var resultado2 = (resultado = resultado.toFixed(2));

    console.log(resultado2);

    var elementoValor = document.getElementById("IMC");
    var valor = "Seu IMC é " + resultado2;
    elementoValor.innerHTML = valor;

    if (resultado2 < 17) {
        document.querySelector(".img1").style.filter = "opacity(100%)";
        document.querySelector(".img1").style.scale = (1.5);
        document.querySelector(".img2").style.filter = "opacity(10%)";
        document.querySelector(".img2").style.scale = (1.0);
        document.querySelector(".img3").style.filter = "opacity(10%)";
        document.querySelector(".img3").style.scale = (1.0);
        document.querySelector(".img4").style.filter = "opacity(10%)";
        document.querySelector(".img4").style.scale = (1.0);
        document.querySelector(".img5").style.filter = "opacity(10%)";
        document.querySelector(".img5").style.scale = (1.0);
        document.querySelector(".img6").style.filter = "opacity(10%)";
        document.querySelector(".img6").style.scale = (1.0);
        document.querySelector(".img7").style.filter = "opacity(10%)";
        document.querySelector(".img7").style.scale = (1.0);
    }

    else if (resultado2 >= 17 && resultado2 <= 18.49) {
        document.querySelector(".img2").style.filter = "opacity(100%)";
        document.querySelector(".img2").style.scale = (1.5);
        document.querySelector(".img1").style.filter = "opacity(10%)";
        document.querySelector(".img1").style.scale = (1.0);
        document.querySelector(".img3").style.filter = "opacity(10%)";
        document.querySelector(".img3").style.scale = (1.0);
        document.querySelector(".img4").style.filter = "opacity(10%)";
        document.querySelector(".img4").style.scale = (1.0);
        document.querySelector(".img5").style.filter = "opacity(10%)";
        document.querySelector(".img5").style.scale = (1.0);
        document.querySelector(".img6").style.filter = "opacity(10%)";
        document.querySelector(".img6").style.scale = (1.0);
        document.querySelector(".img7").style.filter = "opacity(10%)";
        document.querySelector(".img7").style.scale = (1.0);
    }

    else if (resultado2 >= 18.5 && resultado2 <= 24.99) {
        document.querySelector(".img3").style.filter = "opacity(100%)";
        document.querySelector(".img3").style.scale = (1.5);
        document.querySelector(".img2").style.filter = "opacity(10%)";
        document.querySelector(".img2").style.scale = (1.0);
        document.querySelector(".img1").style.filter = "opacity(10%)";
        document.querySelector(".img1").style.scale = (1.0);
        document.querySelector(".img4").style.filter = "opacity(10%)";
        document.querySelector(".img4").style.scale = (1.0);
        document.querySelector(".img5").style.filter = "opacity(10%)";
        document.querySelector(".img5").style.scale = (1.0);
        document.querySelector(".img6").style.filter = "opacity(10%)";
        document.querySelector(".img6").style.scale = (1.0);
        document.querySelector(".img7").style.filter = "opacity(10%)";
        document.querySelector(".img7").style.scale = (1.0);
    }

    else if (resultado2 >= 25 && resultado2 <= 29.99) {
        document.querySelector(".img4").style.filter = "opacity(100%)";
        document.querySelector(".img4").style.scale = (1.5);
        document.querySelector(".img2").style.filter = "opacity(10%)";
        document.querySelector(".img2").style.scale = (1.0);
        document.querySelector(".img3").style.filter = "opacity(10%)";
        document.querySelector(".img3").style.scale = (1.0);
        document.querySelector(".img1").style.filter = "opacity(10%)";
        document.querySelector(".img1").style.scale = (1.0);
        document.querySelector(".img5").style.filter = "opacity(10%)";
        document.querySelector(".img5").style.scale = (1.0);
        document.querySelector(".img6").style.filter = "opacity(10%)";
        document.querySelector(".img6").style.scale = (1.0);
        document.querySelector(".img7").style.filter = "opacity(10%)";
        document.querySelector(".img7").style.scale = (1.0);
    }

    else if (resultado2 >= 30 && resultado2 <= 34.99) {
        document.querySelector(".img5").style.filter = "opacity(100%)";
        document.querySelector(".img5").style.scale = (1.5);
        document.querySelector(".img2").style.filter = "opacity(10%)";
        document.querySelector(".img2").style.scale = (1.0);
        document.querySelector(".img3").style.filter = "opacity(10%)";
        document.querySelector(".img3").style.scale = (1.0);
        document.querySelector(".img4").style.filter = "opacity(10%)";
        document.querySelector(".img4").style.scale = (1.0);
        document.querySelector(".img1").style.filter = "opacity(10%)";
        document.querySelector(".img1").style.scale = (1.0);
        document.querySelector(".img6").style.filter = "opacity(10%)";
        document.querySelector(".img6").style.scale = (1.0);
        document.querySelector(".img7").style.filter = "opacity(10%)";
        document.querySelector(".img7").style.scale = (1.0);
    }

    else if (resultado2 >= 35 && resultado2 <= 39.99) {
        document.querySelector(".img6").style.filter = "opacity(100%)";
        document.querySelector(".img6").style.scale = (1.5);
        document.querySelector(".img2").style.filter = "opacity(10%)";
        document.querySelector(".img2").style.scale = (1.0);
        document.querySelector(".img3").style.filter = "opacity(10%)";
        document.querySelector(".img3").style.scale = (1.0);
        document.querySelector(".img4").style.filter = "opacity(10%)";
        document.querySelector(".img4").style.scale = (1.0);
        document.querySelector(".img5").style.filter = "opacity(10%)";
        document.querySelector(".img5").style.scale = (1.0);
        document.querySelector(".img1").style.filter = "opacity(10%)";
        document.querySelector(".img1").style.scale = (1.0);
        document.querySelector(".img7").style.filter = "opacity(10%)";
        document.querySelector(".img7").style.scale = (1.0);
    }

    else if (resultado2 >= 40) {
        document.querySelector(".img7").style.filter = "opacity(100%)";
        document.querySelector(".img7").style.scale = (1.5);
        document.querySelector(".img2").style.filter = "opacity(10%)";
        document.querySelector(".img2").style.scale = (1.0);
        document.querySelector(".img3").style.filter = "opacity(10%)";
        document.querySelector(".img3").style.scale = (1.0);
        document.querySelector(".img4").style.filter = "opacity(10%)";
        document.querySelector(".img4").style.scale = (1.0);
        document.querySelector(".img5").style.filter = "opacity(10%)";
        document.querySelector(".img5").style.scale = (1.0);
        document.querySelector(".img6").style.filter = "opacity(10%)";
        document.querySelector(".img6").style.scale = (1.0);
        document.querySelector(".img1").style.filter = "opacity(10%)";
        document.querySelector(".img1").style.scale = (1.0);
    }
}

function Tema() {
    document.body.classList.toggle("dark")
}
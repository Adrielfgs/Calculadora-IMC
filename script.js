function Calcular() {
    document.querySelector(".box3").style.height = '30px';
    document.querySelector(".box4").style.height = '80px';
    document.querySelector(".box3 h2").style.filter = "opacity(100%)";
    document.querySelector(".box4 h3").style.filter = "opacity(100%)";
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
        var elementoValor1 = document.getElementById("INF");
        var valor = "Você está muito abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico";
        elementoValor1.innerHTML = valor;
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
        var elementoValor2 = document.getElementById("INF");
        var valor = "Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico";
        elementoValor2.innerHTML = valor;
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
        var elementoValor3 = document.getElementById("INF");
        var valor = "Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.";
        elementoValor3.innerHTML = valor;
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
        var elementoValor4 = document.getElementById("INF");
        var valor = "Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.";
        elementoValor4.innerHTML = valor;
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
        var elementoValor5 = document.getElementById("INF");
        var valor = "Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.";
        elementoValor5.innerHTML = valor;
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
        var elementoValor6 = document.getElementById("INF");
        var valor = "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo";
        elementoValor6.innerHTML = valor;
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
        var elementoValor7 = document.getElementById("INF");
        var valor = "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.";
        elementoValor7.innerHTML = valor;
    }
}

function Tema() {
    document.body.classList.toggle("dark")
}
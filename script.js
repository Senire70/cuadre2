function obtenerFecha() {
    const fecha = new Date();
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    const fechaFormateada = `${diaSemana} ${dia} de ${mes}, ${año}`;
    document.querySelector('.date').textContent = fechaFormateada;
};

// Llamar a la función para mostrar la fecha al cargar la página
obtenerFecha();

// function calculate () {

// };







// console.log(gasolinaPS1);

function calcular() {
    const input = document.getElementById('name').value;
    document.querySelector('.name').textContent = `${input.toUpperCase()}`;





    let gasolinaPS1 = document.getElementById('gasoline-p_start').value;
    let gasolinaPE1 = document.getElementById('gasoline-p_end').value;
    let gasolinaPP = document.getElementById('gasoline-p_price').value;


    let gasolinaPS2 = document.getElementById('gasoline-p_start2').value;
    let gasolinaPE2 = document.getElementById('gasoline-p_end2').value;

    let gasolinaRS1 = document.getElementById('gasoline-r_start').value;
    let gasolinaRE1 = document.getElementById('gasoline-r_end').value;
    let gasolinaRP = document.getElementById('gasoline-r_price').value;


    let gasolinaRS2 = document.getElementById('gasoline-r_start2').value;
    let gasolinaRE2 = document.getElementById('gasoline-r_end2').value;

    let dieselULS1 = document.getElementById('diesel-ul_start').value;
    let dieselULE1 = document.getElementById('diesel-ul_end').value;
    let dieselULP = document.getElementById('diesel-ul_price').value;


    let dieselULS2 = document.getElementById('diesel-ul_start2').value;
    let dieselULE2 = document.getElementById('diesel-ul_end2').value;

    let dieselRS1 = document.getElementById('diesel-r_start').value;
    let dieselRE1 = document.getElementById('diesel-r_end').value;
    let dieselRP = document.getElementById('diesel-r_price').value;

    let dieselRS2 = document.getElementById('diesel-r_start2').value;
    let dieselRE2 = document.getElementById('diesel-r_end2').value;



    let twoThousand = document.getElementById('two-thousand').value;
    let thousand = document.getElementById('thousand').value;
    let fiveHundred = document.getElementById('five-hundred').value;
    let twoHundred = document.getElementById('two-hundred').value;
    let hundred = document.getElementById('hundred').value;
    let fifty = document.getElementById('fifty').value;
    let twentyFive = document.getElementById('twenty-five').value;
    let ten = document.getElementById('ten').value;
    let five = document.getElementById('five').value;
    let one = document.getElementById('one').value;

    let entregas = document.getElementById('entregas').value;
    let cards = document.getElementById('cards').value;
    let magycards = document.getElementById('magycards').value;
    let tickets = document.getElementById('tickets').value;
    let lubricants = document.getElementById('lubricants').value;
    let recargas = document.getElementById('recargas').value;




    let multiplicador = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1]
    let totalDesglose = twoThousand * multiplicador[0] +
        thousand * multiplicador[1] +
        fiveHundred * multiplicador[2] +
        twoHundred * multiplicador[3] +
        hundred * multiplicador[4] +
        fifty * multiplicador[5] +
        twentyFive * multiplicador[6] +
        ten * multiplicador[7] +
        five * multiplicador[8] +
        one * multiplicador[9];


    let totalGPS = Number(gasolinaPS1) + Number(gasolinaPS2);
    let totalGPE = Number(gasolinaPE1) + Number(gasolinaPE2);

    let totalGRS = Number(gasolinaRS1) + Number(gasolinaRS2);
    let totalGRE = Number(gasolinaRE1) + Number(gasolinaRE2);




    let totalDULS = Number(dieselULS1) + Number(dieselULS2);
    let totalDULE = Number(dieselULE1) + Number(dieselULE2);

    let totalDRS = Number(dieselRS1) + Number(dieselRS2);
    let totalDRE = Number(dieselRE1) + Number(dieselRE2);


    let totalV =
        ((totalGPE - totalGPS) * gasolinaPP) +
        ((totalGRE - totalGRS) * gasolinaRP) +
        ((totalDRE - totalDRS) * dieselRP) +
        ((totalDULE - totalDULS) * dieselULP) +
        Number(lubricants) + 
        Number(recargas);

    document.querySelector('#total-v').textContent = `${totalV}`;

    let totalC = Number(entregas) + Number(cards) + Number(magycards) + Number(tickets) + Number(totalDesglose);

    document.querySelector('#total-c').textContent = `${totalC}`;

    let texto = document.querySelector('#texto');


    if (totalC < totalV) {
        texto.textContent = 'Faltante';
        texto.style.color ='red';
        let diferencia = document.createElement("strong")
        diferencia.style.color ='red';
        diferencia.textContent = `${totalC - totalV}`;
        texto.appendChild(diferencia);
    }
    else if (totalC === totalV) {
        texto.textContent = 'Diferencia';
        texto.style.color ='#0064ff';
        let diferencia = document.createElement("strong")
        diferencia.style.color ='#0064ff';
        diferencia.textContent = `${totalC - totalV}`;
        texto.appendChild(diferencia);
    }
    else if (totalC > totalV) {
        texto.textContent = 'Diferencia';
        texto.style.color ='#66FF00';
        let diferencia = document.createElement("strong")
        diferencia.style.color ='#66FF00';
        diferencia.textContent = `${totalC - totalV}`;
        texto.appendChild(diferencia);
    }

    else {
        texto.textContent = 'HA OCURRIDO UN ERROR: ha ocurrido un error inesperado, vuelva a introducir los datos, y verifique que estén correctamente';
        texto.style.color ='#ffd000';

    }

};

document.querySelector('button').addEventListener('click', calcular);
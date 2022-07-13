function calculaKmMilha(){
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = Math.round(km * 1.609);
}
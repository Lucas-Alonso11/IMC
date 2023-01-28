function calcular () {
    let altura = document.getElementById('txta')
    let peso = document.getElementById('txtp')
    let res = document.querySelector('div#res')
    

    if (altura.value.length == 0 || peso.value.length == 0) {
        window.alert('Digite um numero')
        res.innerHTML = 'Impossivel contar'
    } else {
        let a = Number(altura.value)
        let p = Number(peso.value)
        let imc = p / (a*a)
        imc = imc.toFixed(2)
        res.innerHTML = `O Seu IMC é: ${imc}</br>`
        
        if (imc <= 18.5) {
            res.innerHTML += 'Você está <strong>abaixo do Peso</strong>'
        }else if (imc > 18.5 && imc <= 24.99) {
            res.innerHTML += 'Seu peso é <strong>normal</strong>'
        } else if ( imc >= 25 && imc <= 29.99) {
            res.innerHTML += 'Você está com <strong>Sobrepeso</strong>'
        } else if (imc >= 30) {
            res.innerHTML += 'Você está com <strong>obesidade</strong>, procure um médico!'
        }
    } 
        
}

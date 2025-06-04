localStorage.setItem("usuario", "jzapata@gmail.com");

const usuarioConsignar = localStorage.getItem("usuario");


document.getElementById("consignar").addEventListener('click', function consignar() {

    let usuario = document.getElementById("usuario-consignacion").value;
    let monto = parseFloat(document.getElementById("cantidad").value);
    let montoprovicional = 200000;

    if (usuario == usuarioConsignar) {
        montoprovicional += monto;
        alert("tu saldo ahora es de :" + montoprovicional);

    } else {
        alert("Usurio no existente")
    }

})


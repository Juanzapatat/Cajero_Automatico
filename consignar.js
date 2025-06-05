// Simulación de usuario logueado (solo para pruebas, deberías hacerlo en login real)
if (!localStorage.getItem("usuario")) {
    localStorage.setItem("usuario", "jzapata@gmail.com");
}

// Establece saldo inicial si no existe
if (!localStorage.getItem("saldo")) {
    localStorage.setItem("saldo", "200000");
}

const usuarioConsignar = localStorage.getItem("usuario");

document.getElementById("consignar").addEventListener('click', function consignar(event) {
    event.preventDefault(); // evita recarga si está en formulario

    let usuario = document.getElementById("usuario-consignacion").value;
    let monto = parseFloat(document.getElementById("cantidad").value);
    let saldoActual = parseFloat(localStorage.getItem("saldo"));

    if (usuario === usuarioConsignar) {
        if (monto > 0) {
            saldoActual += monto;
            localStorage.setItem("saldo", saldoActual);
            alert("Consignación exitosa. Tu nuevo saldo es: $" + saldoActual);
        } else {
            alert("Ingresa un monto válido.");
        }
    } else {
        alert("Usuario no existente.");
    }
});

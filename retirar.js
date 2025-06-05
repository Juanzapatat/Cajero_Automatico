// Simulación de usuario ya logueado (solo para pruebas)
if (!localStorage.getItem("usuario")) {
    localStorage.setItem("usuario", "jzapata@gmail.com");
}

// Establecer saldo inicial si no existe
if (!localStorage.getItem("saldo")) {
    localStorage.setItem("saldo", "200000");
}

const usuarioRetiro = localStorage.getItem("usuario");

document.getElementById("retirar").addEventListener('click', function retirar(event) {
    event.preventDefault(); // Evita el envío del formulario

    const usuario = document.getElementById("usuario-retiro").value;
    const monto = parseFloat(document.getElementById("cantidad").value);
    const categoria = document.getElementById("categoria").value;
    let saldo = parseFloat(localStorage.getItem("saldo"));

    if (usuario === usuarioRetiro) {
        if (monto > 0 && monto <= saldo) {
            saldo -= monto;
            localStorage.setItem("saldo", saldo);
            alert(`¡Retiro exitoso! Ahora tu saldo es de: $${saldo}`);
            // Aquí podrías guardar la categoría en movimientos también
        } else {
            alert("Monto inválido o saldo insuficiente.");
        }
    } else {
        alert("Usuario no existente.");
    }
});

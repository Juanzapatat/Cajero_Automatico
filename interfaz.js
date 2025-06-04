
    // Asociar cada botón con una URL
    document.getElementById("consultar").addEventListener("click", function () {
        window.location.href = "consultar_saldo.html";
    });

    document.getElementById("transferir").addEventListener("click", function () {
        window.location.href = "transferir.html";
    });

    document.getElementById("consignar").addEventListener("click", function () {
        window.location.href = "consignar.html";
    });

    document.getElementById("retirar").addEventListener("click", function () {
        window.location.href = "retirar.html";
    });

    document.getElementById("ver-movimientos").addEventListener("click", function () {
        window.location.href = "ver_movimientos.html";
    });

    document.getElementById("cerrar-sesion").addEventListener("click", function () {
        window.location.href = "login.html"; // Suponiendo que regresa a la pantalla de inicio de sesión
    });


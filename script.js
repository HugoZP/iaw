document.addEventListener("DOMContentLoaded", function () {
    let startBlock = document.getElementById("start");
    let maze = document.getElementById("maze");
    let boundaries = document.querySelectorAll(".boundary"); // Seleccionamos todas las paredes
    let statusText = document.getElementById("status"); // Elemento donde se muestra el mensaje
    let endBlock = document.getElementById("end"); // Bloque de llegada (E)

    maze.addEventListener("mousemove", function (event) {
        let mazeRect = maze.getBoundingClientRect();
        let x = event.clientX - mazeRect.left;
        let y = event.clientY - mazeRect.top;

        // Mover el div "start" siguiendo el cursor
        startBlock.style.position = "absolute";
        startBlock.style.left = x + "px";
        startBlock.style.top = y + "px";

        // Verificar si el cursor está tocando una pared (boundary)
        boundaries.forEach(function (boundary) {
            let boundaryRect = boundary.getBoundingClientRect();
            if (
                event.clientX >= boundaryRect.left &&
                event.clientX <= boundaryRect.right &&
                event.clientY >= boundaryRect.top &&
                event.clientY <= boundaryRect.bottom
            ) {
                statusText.textContent = "Has perdido"; // Cambiar el mensaje en pantalla
                statusText.style.color = "red"; // Cambiar el color del texto
                console.log("¡Has tocado una pared! Has perdido."); // Mensaje en la consola
            }
        });

        // Verificar si el cursor ha llegado al final del laberinto
        let endRect = endBlock.getBoundingClientRect();
        if (
            event.clientX >= endRect.left &&
            event.clientX <= endRect.right &&
            event.clientY >= endRect.top &&
            event.clientY <= endRect.bottom
        ) {
            statusText.textContent = "¡Has ganado!"; // Cambiar el mensaje en pantalla
            statusText.style.color = "green"; // Cambiar el color del texto
            console.log("¡Felicidades! Has ganado el laberinto."); // Mensaje en consola
            alert("¡Felicidades! Has ganado el laberinto"); // Mostrar alerta
        }
    });
});

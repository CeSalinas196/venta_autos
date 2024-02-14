
    // Función para desplazarse al inicio de la página
    function scrollToTop() {
        document.body.scrollTop = 0; // Para navegadores antiguos
        document.documentElement.scrollTop = 0; // Para navegadores modernos
    }

    // Muestra u oculta el botón dependiendo de la posición de desplazamiento
    window.onscroll = function() {
        toggleScrollToTopButton();
    };

    function toggleScrollToTopButton() {
        var button = document.getElementById("btnScrollToTop");

        // Muestra el botón cuando la posición de desplazamiento es mayor que 300 píxeles
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }


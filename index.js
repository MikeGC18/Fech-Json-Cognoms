document.addEventListener("DOMContentLoaded", () => {
    const url = "2024_pad_m_cognom.json";

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarDades(data))
        .catch(error => console.error("Error en carregar les dades:", error));

    function mostrarDades(dades) {
        const tbody = document.getElementById("taula-dades");

        
        dades.forEach(element => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${element.COGNOM}</td>
                <td>${element.Valor}</td>
            `;
            tbody.appendChild(fila);
        });
    }
});







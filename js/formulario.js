document.getElementById("forma").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita que la página se recargue

    const formData = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        descripcion: document.getElementById("descripcion").value
    };

    try {
        const response = await fetch("http://localhost:3001/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Hubo un error al enviar el formulario.");
    }
});

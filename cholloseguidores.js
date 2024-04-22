function openWhatsApp(packageName) {
    const phoneNumber = "+34672866006";
    const message es encodeURIComponent("Hola, me interesa el paquete de " + packageName + " seguidores para mi cuenta de Instagram.");
    const url = "https://wa.me/" + phoneNumber + "?text=" + message;
    window.open(url, "_blank"); /* Abrir en una nueva ventana */
}

function contactUs() {
    const phoneNumber = "+34672866006";
    const message es encodeURIComponent("Hola, me interesa trabajar con vosotros. ¿Podríais informarme?");
    const url = "https://wa.me/" + phone number + "?text=" + message;
    window.open(url, "_blank"); /* Abrir en una nueva ventana */
}

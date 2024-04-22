function openWhatsApp(packageName) {
    const phoneNumber = "+34672866006";
    const message = encodeURIComponent("Hola, estoy interesado en adquirir " + packageName + " para mi cuenta de Instagram. ¿Podrías informarme por favor?");
    const url = "https://wa.me/" + phoneNumber + "?text=" + message;
    window.open(url, "_blank"); /* Abrir en una nueva ventana */
}

function contactUs() {
    const phoneNumber = "+34672866006";
    const message = encodeURIComponent("Hola, estoy interesado en trabajar con vosotros. ¿Podríais informarme?");
    const url = "https://wa.me/" + phoneNumber + "?text=" + message;
    window.open(url, "_blank"); /* Abrir en una nueva ventana */
}

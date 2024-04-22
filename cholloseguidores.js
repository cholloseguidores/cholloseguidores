function openWhatsApp(packageName) {
    const phoneNumber = "+34672866006";
    const message = encodeURIComponent("Hola, estoy interesado en adquirir " + packageName + " para mi cuenta de Instagram. ¿Podrías informarme por favor?");
    const url = "https://api.whatsapp.com/send/?phone=" + phoneNumber + "&text=" + message;
    window.open(url, "_blank"); // Abre en una nueva pestaña
}

function contactUs() {
    const phoneNumber = "+34672866006";
    const message = encodeURIComponent("Hola, estoy interesado en trabajar con vosotros. ¿Podríais informarme más?");
    const url = "https://api.whatsapp.com/send/?phone=" + phoneNumber + "&text=" + message;
    window.open(url, "_blank"); // Abre en una nueva pestaña
}

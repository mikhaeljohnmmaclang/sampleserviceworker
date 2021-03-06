// Check if Service Worker is Supported By Browser
if ('serviceWorker' in navigator) {
    console.log("Service Worker Supported!");

    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("../sw.js")
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log(`Service Worker Error: ${err}`))
    });
}
$(document).ready(function() {
    $("#header").load("../header.html");
    $("#footer").load("../footer.html");
});
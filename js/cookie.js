(function () {
    var CC = "Weles-Cookie-Consent"
    var ccEl = document.getElementById("cookieconsent");
    if (!ccEl) return;
    if (!window.localStorage || !window.localStorage[CC]) {
        ccEl.classList.remove("d-none");
        document.getElementById("cookieconsent_ok").addEventListener("click", function () {
            if (window.localStorage)
                window.localStorage[CC] = new Date().getTime()
            ccEl.classList.add("d-none");
        })
    }
})()

/* =========================
   CONFIGURATION
========================= */

const SITE_CONFIG = {

    photographer: "MON PSEUDO",

    creator: "VOTRE NOM",

    phone: "+261000000000",

    email: "votreemail@example.com",

    whatsapp: "261000000000"

};


/* =========================
   INITIALISATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const photographer =
        document.getElementById("photographerName");

    const creator =
        document.getElementById("creatorName");

    if (photographer) {
        photographer.textContent =
            SITE_CONFIG.photographer;
    }

    if (creator) {
        creator.textContent =
            SITE_CONFIG.creator;
    }

    updateContactLinks();

});


/* =========================
   CONTACT
========================= */

function updateContactLinks() {

    const phoneLink =
        document.querySelector('a[href^="tel:"]');

    const whatsappLink =
        document.querySelector('a[href*="wa.me"]');

    const emailLink =
        document.querySelector('a[href^="mailto:"]');


    if (phoneLink) {

        phoneLink.href =
            "tel:" + SITE_CONFIG.phone;

        const span =
            phoneLink.querySelector("span");

        if (span) {
            span.textContent =
                SITE_CONFIG.phone;
        }

    }


    if (whatsappLink) {

        whatsappLink.href =
            "https://wa.me/" +
            SITE_CONFIG.whatsapp;

    }


    if (emailLink) {

        emailLink.href =
            "mailto:" + SITE_CONFIG.email;

        const span =
            emailLink.querySelector("span");

        if (span) {
            span.textContent =
                SITE_CONFIG.email;
        }

    }

}


/* =========================
   CONNEXION
========================= */

function openLogin() {

    const modal =
        document.getElementById("loginModal");

    if (modal) {
        modal.classList.add("active");
    }

}


function closeLogin() {

    const modal =
        document.getElementById("loginModal");

    if (modal) {
        modal.classList.remove("active");
    }

}


/* =========================
   CONNEXION VISITEUR
========================= */

function loginVisitor(event) {

    event.preventDefault();


    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    const savedAccount =
        localStorage.getItem("photoEventAccount");


    /* Aucun compte */

    if (!savedAccount) {

        alert(
            "❌ Aucun compte n'existe encore. " +
            "Veuillez créer votre compte."
        );

        return;

    }


    const account =
        JSON.parse(savedAccount);


    /* Vérification */

    if (
        username === account.username &&
        password === account.password
    ) {

        localStorage.setItem(
            "photoEventVisitor",
            username
        );


        closeLogin();


        alert(
            "✅ Bienvenue " +
            username +
            " !"
        );


        return;

    }


    /* Identifiants incorrects */

    alert(
        "❌ Pseudo ou mot de passe incorrect."
    );

}


/* =========================
   CRÉATION DE COMPTE
========================= */

function createAccount() {

    const username =
        prompt("👤 Choisissez votre pseudo :");


    if (!username || username.trim() === "") {

        alert(
            "❌ Vous devez entrer un pseudo."
        );

        return;

    }


    const password =
        prompt("🔑 Choisissez votre mot de passe :");


    if (!password) {

        alert(
            "❌ Vous devez entrer un mot de passe."
        );

/* =========================
   CONFIGURATION
========================= */

const SITE_CONFIG = {

    photographer: "MON PSEUDO",

    creator: "VOTRE NOM",

    phone: "+261000000000",

    email: "votreemail@example.com",

    whatsapp: "261000000000"

};


/* =========================
   INITIALISATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const photographer =
        document.getElementById("photographerName");

    const creator =
        document.getElementById("creatorName");

    if (photographer) {
        photographer.textContent =
            SITE_CONFIG.photographer;
    }

    if (creator) {
        creator.textContent =
            SITE_CONFIG.creator;
    }

    updateContactLinks();

});


/* =========================
   CONTACT
========================= */

function updateContactLinks() {

    const phoneLink =
        document.querySelector('a[href^="tel:"]');

    const whatsappLink =
        document.querySelector('a[href*="wa.me"]');

    const emailLink =
        document.querySelector('a[href^="mailto:"]');


    if (phoneLink) {

        phoneLink.href =
            "tel:" + SITE_CONFIG.phone;

        const span =
            phoneLink.querySelector("span");

        if (span) {
            span.textContent =
                SITE_CONFIG.phone;
        }

    }


    if (whatsappLink) {

        whatsappLink.href =
            "https://wa.me/" +
            SITE_CONFIG.whatsapp;

    }


    if (emailLink) {

        emailLink.href =
            "mailto:" + SITE_CONFIG.email;

        const span =
            emailLink.querySelector("span");

        if (span) {
            span.textContent =
                SITE_CONFIG.email;
        }

    }

}


/* =========================
   CONNEXION
========================= */

function openLogin() {

    const modal =
        document.getElementById("loginModal");

    if (modal) {
        modal.classList.add("active");
    }

}


function closeLogin() {

    const modal =
        document.getElementById("loginModal");

    if (modal) {
        modal.classList.remove("active");
    }

}


/* =========================
   CONNEXION VISITEUR
========================= */

function loginVisitor(event) {

    event.preventDefault();


    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    const savedAccount =
        localStorage.getItem("photoEventAccount");


    /* Aucun compte */

    if (!savedAccount) {

        alert(
            "❌ Aucun compte n'existe encore. " +
            "Veuillez créer votre compte."
        );

        return;

    }


    const account =
        JSON.parse(savedAccount);


    /* Vérification */

    if (
        username === account.username &&
        password === account.password
    ) {

        localStorage.setItem(
            "photoEventVisitor",
            username
        );


        closeLogin();


        alert(
            "✅ Bienvenue " +
            username +
            " !"
        );


        return;

    }


    /* Identifiants incorrects */

    alert(
        "❌ Pseudo ou mot de passe incorrect."
    );

}


/* =========================
   CRÉATION DE COMPTE
========================= */

function createAccount() {

    const username =
        prompt("👤 Choisissez votre pseudo :");


    if (!username || username.trim() === "") {

        alert(
            "❌ Vous devez entrer un pseudo."
        );

        return;

    }


    const password =
        prompt("🔑 Choisissez votre mot de passe :");


    if (!password) {

        alert(
            "❌ Vous devez entrer un mot de passe."
        );

        return;

    }


    if (password.length < 4) {

        alert(
            "❌ Le mot de passe doit contenir " +
            "au moins 4 caractères."
        );

        return;

    }


    const confirmPassword =
        prompt("🔑 Confirmez votre mot de passe :");


    if (password !== confirmPassword) {

        alert(
            "❌ Les mots de passe ne correspondent pas."
        );

        return;

    }


    const account = {

        username: username.trim(),

        password: password

    };


    localStorage.setItem(
        "photoEventAccount",
        JSON.stringify(account)
    );


    alert(
        "✅ Compte créé avec succès !\n\n" +
        "Vous pouvez maintenant vous connecter."
    );

}


/* =========================
   FERMER LE MODAL
========================= */

document.addEventListener("click", function (event) {

    const modal =
        document.getElementById("loginModal");


    if (
        modal &&
        event.target === modal
    ) {

        closeLogin();

    }

})
        ).textContent =
            SITE_CONFIG.email;

    }

}


/* =========================
   CONNEXION
========================= */

function openLogin() {

    const modal =
        document.getElementById(
            "loginModal"
        );

    modal.classList.add("active");

}


function closeLogin() {

    const modal =
        document.getElementById(
            "loginModal"
        );

    modal.classList.remove("active");

}


/* =========================
   CONNEXION TEMPORAIRE
========================= */

function loginVisitor(event) {

    event.preventDefault();


    const username =
        document.getElementById(
            "username"
        ).value;


    /*
       POUR LE MOMENT :

       Nous enregistrons simplement
       le pseudo dans le téléphone.

       Plus tard, cette partie sera
       remplacée par notre véritable
       système de comptes sécurisé.
    */

    localStorage.setItem(
        "photoEventVisitor",
        username
    );


    closeLogin();


    alert(
        "Bienvenue " +
        username +
        " !"
    );

}


/* =========================
   CRÉATION DE COMPTE
========================= */

function createAccount() {

    const username = prompt(
        "Choisissez votre pseudo :"
    );

    if (!username) {
        return;
    }

    const password = prompt(
        "Choisissez votre mot de passe :"
    );

    if (!password) {
        return;
    }

    const confirmPassword = prompt(
        "Confirmez votre mot de passe :"
    );

    if (password !== confirmPassword) {

        alert(
            "❌ Les mots de passe ne correspondent pas."
        );

        return;
    }


    const account = {

        username: username,

        password: password

    };


    localStorage.setItem(
        "photoEventAccount",
        JSON.stringify(account)
    );


    alert(
        "✅ Votre compte a été créé avec succès !"
    );

}

/* =========================
   FERMETURE EN CLIQUANT
   EN DEHORS DE LA FENÊTRE
========================= */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "loginModal"
            );


        if (
            event.target === modal
        ) {

            closeLogin();

        }

    }
);

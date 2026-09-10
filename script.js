/* =========================
   CONFIGURATION
========================= */

/*
   MODIFIE CES INFORMATIONS
   APRÈS AVOIR INSTALLÉ LE SITE.
*/

const SITE_CONFIG = {

    photographer:
        "MON PSEUDO",

    creator:
        "VOTRE NOM",

    phone:
        "+261000000000",

    email:
        "votreemail@example.com",

    whatsapp:
        "261000000000"

};


/* =========================
   AFFICHER LES INFORMATIONS
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const photographer =
            document.getElementById(
                "photographerName"
            );

        const creator =
            document.getElementById(
                "creatorName"
            );


        if (photographer) {

            photographer.textContent =
                SITE_CONFIG.photographer;

        }


        if (creator) {

            creator.textContent =
                SITE_CONFIG.creator;

        }


        updateContactLinks();

    }
);


/* =========================
   CONTACT
========================= */

function updateContactLinks() {

    const phoneLink =
        document.querySelector(
            'a[href^="tel:"]'
        );

    const whatsappLink =
        document.querySelector(
            'a[href*="wa.me"]'
        );

    const emailLink =
        document.querySelector(
            'a[href^="mailto:"]'
        );


    if (phoneLink) {

        phoneLink.href =
            "tel:" +
            SITE_CONFIG.phone;

        phoneLink.querySelector(
            "span"
        ).textContent =
            SITE_CONFIG.phone;

    }


    if (whatsappLink) {

        whatsappLink.href =
            "https://wa.me/" +
            SITE_CONFIG.whatsapp;

    }


    if (emailLink) {

        emailLink.href =
            "mailto:" +
            SITE_CONFIG.email;

        emailLink.querySelector(
            "span"
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

    alert(
        "La création de compte sera activée dans la prochaine étape."
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

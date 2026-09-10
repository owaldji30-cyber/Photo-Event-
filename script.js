alert("SCRIPT.JS CHARGÉ");
/* =========================
   CONFIGURATION
========================= */

const API_URL = "https://script.google.com/macros/s/AKfycbwJ_M7CxWkCeqJBYNYvpan_fj-EPVyv9OqhAymtdNzAEpSpq4rILPmkHQkEWuhaayLF/exec";

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

    loadEvents();
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
   CHARGEMENT AUTOMATIQUE
   DES ÉVÉNEMENTS ET ALBUMS
========================= */

async function loadEvents() {

    const eventsGrid =
        document.querySelector(".events-grid");

    if (!eventsGrid) {
        return;
    }


    try {

        eventsGrid.innerHTML =
            "<p>Chargement des événements...</p>";


        const response =
            await fetch(API_URL);


        if (!response.ok) {
            throw new Error(
                "Impossible de contacter l'API"
            );
        }


        const data =
            await response.json();


        eventsGrid.innerHTML = "";


        if (!data.events ||
            data.events.length === 0) {

            eventsGrid.innerHTML =
                "<p>Aucun événement disponible.</p>";

            return;
        }


        data.events.forEach(function (event) {

            const card =
                document.createElement("div");

            card.className =
                "event-card";


            let albumsHTML = "";


            if (event.albums &&
                event.albums.length > 0) {

                event.albums.forEach(
                    function (album) {

                        albumsHTML += `
                            <a
                                href="${album.url}"
                                target="_blank"
                                class="album-btn"
                            >
                                📁 ${album.name}
                            </a>
                        `;
                    }
                );

            } else {

                albumsHTML =
                    "<p>Aucun album disponible.</p>";
            }


            card.innerHTML = `

                <div class="event-date">
                    ÉVÉNEMENT
                </div>

                <h3>
                    ${event.name}
                </h3>

                <p>
                    Retrouvez les photos
                    de cet événement.
                </p>

                <div class="album-buttons">
                    ${albumsHTML}
                </div>

            `;


            eventsGrid.appendChild(card);

        });


    } catch (error) {

        console.error(
            "Erreur API :",
            error
        );


        eventsGrid.innerHTML = `
            <p>
                Impossible de charger
                les événements.
            </p>
        `;
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


function loginVisitor(event) {

    event.preventDefault();


    const username =
        document.getElementById("username").value;


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

    const username =
        prompt(
            "Choisissez votre nom d'utilisateur :"
        );


    if (!username) {
        return;
    }


    const password =
        prompt(
            "Choisissez votre mot de passe :"
        );


    if (!password) {
        return;
    }


    localStorage.setItem(
        "photoEventAccount",
        JSON.stringify({
            username: username,
            password: password
        })
    );


    alert(
        "Compte créé avec succès !"
    );
}


/* =========================
   FERMETURE DU MODAL
========================= */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "loginModal"
            );

        if (
            modal &&
            event.target === modal
        ) {

            closeLogin();

        }

    }
);

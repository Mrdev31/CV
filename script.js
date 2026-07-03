// =========================
// COPIAR DISCORD
// =========================

function copyDiscord() {

    navigator.clipboard.writeText("dotworry723");

    alert("Discord copiado al portapapeles.");

}
// =========================
// COPIAR CORREO
// =========================

function copyCorreo () {
    navigator.clipboard.writeTest("mrsad8248@gmail.com");

    alert("Correo copiado al portapapeles.");

}
// =========================
// ANIMACIONES DE ENTRADA
// =========================

window.addEventListener("load", () => {

    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {

        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";

        setTimeout(() => {

            section.style.transition = "all .8s ease";

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }, index * 120);

    });

});

// =========================
// MODO CLARO / OSCURO
// =========================

const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    toggle.innerHTML = "☀️";

}

toggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const light = document.body.classList.contains("light-mode");

    toggle.innerHTML = light ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        light ? "light" : "dark"
    );

});

// =========================
// PARTÍCULAS DEL FONDO
// =========================

const particlesContainer =
    document.getElementById("particles");

for (let i = 0; i < 40; i++) {

    const particle =
        document.createElement("span");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.opacity =
        Math.random() * 0.5;

    particlesContainer.appendChild(
        particle
    );

}
 /* =========================
   BOTÓN MODO OSCURO
========================= */

#theme-toggle {

    position: fixed;

    top: 20px;
    right: 20px;

    width: 55px;
    height: 55px;

    border: none;

    border-radius: 50%;

    cursor: pointer;

    font-size: 24px;

    background: rgba(255,255,255,.1);

    backdrop-filter: blur(10px);

    color: white;

    z-index: 9999;

    transition: .3s;
}

#theme-toggle:hover {

    transform: scale(1.1);

}

/* =========================
   MODO CLARO
========================= */

.light-mode {

    background: #f1f5f9;

    color: #0f172a;
}

.light-mode .sidebar {

    background: white;

    border-right: 1px solid #dbeafe;
}

.light-mode section {

    color: #0f172a;
}

.light-mode p,
.light-mode li {

    color: #334155;
}

.light-mode h2 {

    color: #0284c7;
}

.light-mode .contact-card {

    background: #e2e8f0;
}

.light-mode .bar {

    background: #cbd5e1;
}

/* =========================
   PARTÍCULAS
========================= */

#particles {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    overflow: hidden;

    pointer-events: none;

    z-index: -1;
}

.particle {

    position: absolute;

    bottom: -20px;

    width: 4px;
    height: 4px;

    border-radius: 50%;

    background: #22d3ee;

    animation: float linear infinite;
}

@keyframes float {

    from {

        transform:
            translateY(0)
            scale(1);

        opacity: 0;
    }

    20% {

        opacity: .6;
    }

    to {

        transform:
            translateY(-110vh)
            scale(1.5);

        opacity: 0;
    }

}
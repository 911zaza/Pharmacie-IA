const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const videoContainer = document.getElementById("videoContainer");
const doorVideo = document.getElementById("doorVideo");
const backgroundBefore = document.getElementById("backgroundBefore");
const backgroundAfter = document.getElementById("backgroundAfter");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");

/* Animation entrée */
enterBtn.onclick = () => {
    welcomeScreen.classList.add("hidden");
    backgroundBefore.classList.add("hidden");
    videoContainer.classList.add("active");
    doorVideo.play();
};

doorVideo.onended = () => {
    videoContainer.classList.remove("active");
    backgroundAfter.classList.add("visible");
    loginForm.classList.add("visible");
};

/* Passer à l'inscription */
showRegister.onclick = () => {
    loginForm.classList.remove("visible");
    registerForm.classList.add("visible");
};

/* INSCRIPTION + REDIRECTION */
document.getElementById("register").onsubmit = (e) => {
    e.preventDefault();

    const type = document.getElementById("regType").value;

    if (type === "patient") {
        window.location.href = "home-patient.html";
    } else if (type === "medecin") {
        window.location.href = "home-medecin.html";
    } else if (type === "pharmacien") {
        window.location.href = "home-pharmacien.html";
    }
};



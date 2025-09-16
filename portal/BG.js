
VANTA.WAVES({
    el: "#bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x000000,
    shininess: 25.00,
    waveHeight: 25.00,
    waveSpeed: 1.05,
    zoom: 1.20
})

// toggle forgot box
const forgotLink = document.getElementById("forgot-link")
const forgotBox = document.getElementById("forgot-box")
forgotLink.addEventListener("click", () => {
    if(forgotBox.style.display === "flex"){
        forgotBox.style.display = "none"
    } else {
        forgotBox.style.display = "flex"
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorBox = document.querySelector(".color-box");
    const hexCode = document.getElementById("hexCode");
    const copyHex = document.getElementById("copyHex");

    function updateColor() {
        let r = redRange.value;
        let g = greenRange.value;
        let b = blueRange.value;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        let hex = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;
        
        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex.toUpperCase();
    }

    function updateFromInput() {
        let r = Math.min(255, Math.max(0, redInput.value || 0));
        let g = Math.min(255, Math.max(0, greenInput.value || 0));
        let b = Math.min(255, Math.max(0, blueInput.value || 0));

        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        updateColor();
    }

    function copyHexToClipboard() {
        navigator.clipboard.writeText(hexCode.textContent)
            .then(() => {
                copyHex.textContent = "✔ Copiado!";
                setTimeout(() => copyHex.textContent = "📋 Copiar", 2000);
            })
            .catch(err => console.error("Error al copiar:", err));
    }

    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);
    
    redInput.addEventListener("input", updateFromInput);
    greenInput.addEventListener("input", updateFromInput);
    blueInput.addEventListener("input", updateFromInput);

    copyHex.addEventListener("click", copyHexToClipboard);

    updateColor();
});

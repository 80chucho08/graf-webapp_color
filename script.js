document.addEventListener("DOMContentLoaded", function () {
    const redInput = document.getElementById("red");
    const greenInput = document.getElementById("green");
    const blueInput = document.getElementById("blue");

    const redNumber = document.getElementById("redNumber");
    const greenNumber = document.getElementById("greenNumber");
    const blueNumber = document.getElementById("blueNumber");

    const colorPicker = document.getElementById("colorPicker");

    const colorDisplay = document.getElementById("colorDisplay");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        let r = parseInt(redInput.value);
        let g = parseInt(greenInput.value);
        let b = parseInt(blueInput.value);

        let hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();

        colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        hexCode.textContent = hex;

        redNumber.value = r;
        greenNumber.value = g;
        blueNumber.value = b;

        colorPicker.value = hex;
    }

    function updateRangeFromNumber() {
        let r = Math.min(255, Math.max(0, parseInt(redNumber.value) || 0));
        let g = Math.min(255, Math.max(0, parseInt(greenNumber.value) || 0));
        let b = Math.min(255, Math.max(0, parseInt(blueNumber.value) || 0));

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        updateColor();
    }

    function updateFromColorPicker() {
        let hex = colorPicker.value;
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        updateColor();
    }

    redInput.addEventListener("input", updateColor);
    greenInput.addEventListener("input", updateColor);
    blueInput.addEventListener("input", updateColor);

    redNumber.addEventListener("input", updateRangeFromNumber);
    greenNumber.addEventListener("input", updateRangeFromNumber);
    blueNumber.addEventListener("input", updateRangeFromNumber);

    colorPicker.addEventListener("input", updateFromColorPicker);

    updateColor();
});

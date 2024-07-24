document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("btn"));
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (button.id === "clear") {
                currentInput = "";
            } else if (button.id === "backspace") {
                currentInput = currentInput.slice(0, -1);
            } else if (button.id === "equals") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = "Error";
                }
            } else {
                currentInput += value;
            }

            display.textContent = currentInput;
        });
    });
});

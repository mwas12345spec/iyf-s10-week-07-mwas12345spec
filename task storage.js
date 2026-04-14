const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input, textarea");

inputs.forEach(input => {
    const saved = sessionStorage.getItem(input.name);

    if (saved) {
        input.value = saved;
    }

    input.addEventListener("input", () => {
        sessionStorage.setItem(input.name, input.value);
    });
});

form.addEventListener("submit", () => {
    inputs.forEach(input => {
        sessionStorage.removeItem(input.name);
    });
});

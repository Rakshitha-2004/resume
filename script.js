function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function submitForm() {
    alert("Thank you! Your message has been sent successfully.");
    return false;
}
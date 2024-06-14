document.addEventListener("DOMContentLoaded", function() {
    const links = {
        "index.html": "home-link",
        "about.html": "about-link",
        "education.html": "education-link",
        "experience.html": "experience-link",
        "publications.html": "publications-link",
        "cv.html": "cv-link",
        "resume.html": "resume-link",
        "social.html": "social-link",
        "news.html": "news-link",
        "reflections.html": "reflections-link",
        "other.html": "other-link"
    };

    const currentPage = window.location.pathname.split("/").pop();
    const activeLinkId = links[currentPage];

    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add("active");
    }
});

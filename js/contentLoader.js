function loadContent(section, contentFile, backgroundImage) {
    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;
            if (backgroundImage) {
                document.getElementById(section).style.backgroundImage = `url(${backgroundImage})`;
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    const pageMap = {
        'index.html': { section: 'home-content', file: 'content/home.html', bgImage: 'images/home-bg.jpg' },
        'about.html': { section: 'about-content', file: 'content/about.html', bgImage: 'images/about-bg.jpg' },
        'education.html': { section: 'education-content', file: 'content/education.html', bgImage: 'images/education-bg.jpg' },
        'experience.html': { section: 'experience-content', file: 'content/experience.html', bgImage: 'images/experience-bg.jpg' },
        'publications.html': { section: 'publications-content', file: 'content/publications.html', bgImage: 'images/publications-bg.jpg' },
        'cv.html': { section: 'cv-content', file: 'content/cv.html', bgImage: 'images/cv-bg.jpg' },
        'resume.html': { section: 'resume-content', file: 'content/resume.html', bgImage: 'images/resume-bg.jpg' },
        'social.html': { section: 'social-content', file: 'content/social.html', bgImage: 'images/social-bg.jpg' },
        'news.html': { section: 'news-content', file: 'content/news.html', bgImage: 'images/news-bg.jpg' },
        'reflections.html': { section: 'reflections-content', file: 'content/reflections.html', bgImage: 'images/reflections-bg.jpg' },
        'other.html': { section: 'other-content', file: 'content/other.html', bgImage: 'images/other-bg.jpg' }
    };

    const currentPage = window.location.pathname.split('/').pop();
    if (pageMap[currentPage]) {
        loadContent(pageMap[currentPage].section, pageMap[currentPage].file, pageMap[currentPage].bgImage);
    }

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

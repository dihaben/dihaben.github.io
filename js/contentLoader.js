document.addEventListener("DOMContentLoaded", function() {
    function loadContent(elementId, contentFilePath) {
        var targetElement = document.getElementById(elementId);
        fetch(contentFilePath)
            .then(response => response.text())
            .then(data => {
                targetElement.innerHTML = data;
            })
            .catch(err => console.error("Error fetching content:", err));
    }

    var pageMap = {
        'index.html': { element: 'content', file: 'myindex.html' },
        'myabout.html': { element: 'content', file: 'about.html' },
        'myeducation.html': { element: 'content', file: 'education.html' },
        'myexperience.html': { element: 'content', file: 'experience.html' },
        'mypublications.html': { element: 'content', file: 'publications.html' },
        'mycv.html': { element: 'content', file: 'cv.html' },
        'myresume.html': { element: 'content', file: 'resume.html' },
        'mysocial.html': { element: 'content', file: 'social.html' },
        'mynews.html': { element: 'content', file: 'news.html' },
        'myreflections.html': { element: 'content', file: 'reflections.html' },
        'myother.html': { element: 'content', file: 'other.html' }
    };

    var currentPage = window.location.pathname.split('/').pop();
    if (pageMap[currentPage]) {
        loadContent(pageMap[currentPage].element, pageMap[currentPage].file);
    }

    var links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

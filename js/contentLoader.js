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
        'about.html': { element: 'content', file: 'myabout.html' },
        'education.html': { element: 'content', file: 'myeducation.html' },
        'experience.html': { element: 'content', file: 'myexperience.html' },
        'publications.html': { element: 'content', file: 'mypublications.html' },
        'cv.html': { element: 'content', file: 'mycv.html' },
        'resume.html': { element: 'content', file: 'myresume.html' },
        'social.html': { element: 'content', file: 'mysocial.html' },
        'news.html': { element: 'content', file: 'mynews.html' },
        'reflections.html': { element: 'content', file: 'myreflections.html' },
        'other.html': { element: 'content', file: 'myother.html' }
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

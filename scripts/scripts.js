
// Ce script permet de faire apparaitre les singes du bandeau au scroll de la page puis de les animer en les faisant rebondir 
// grâce au CSS .

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function animateSinges() {
    var bandeau = document.querySelector('.Bandeau-Singe');
    var singes = bandeau.querySelectorAll('img');

    var bandeauInView = isElementInViewport(bandeau);

    singes.forEach(function(singe, index) {
        if (bandeauInView) {
            singe.classList.add('animate');
        } else {
            singe.classList.remove('animate');
        }
    });
}
window.addEventListener('scroll', animateSinges);







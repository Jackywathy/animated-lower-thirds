function animationIn(elementId: string) {
    const elementAnim = document.getElementById(elementId)!;
    elementAnim.classList.remove("animation-out");
    void elementAnim.offsetWidth;
    elementAnim.classList.add("animation-in");
}

function animationOut(elementId: string) {
    const elementAnim = document.getElementById(elementId)!;
    elementAnim.classList.remove("animation-in");
    void elementAnim.offsetWidth;
    elementAnim.classList.add("animation-out");
}

/** Gets the url parameter  */
function getUrlParameter(sParam: string) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const myParam = urlSearchParams.get(sParam);
    if(myParam === null) {
        return null;
    }
    return decodeURIComponent(myParam)
}

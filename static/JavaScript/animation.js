links=document.getElementsByClassName("header-link");
for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function() {
            animateLinkson(links[i]);
        });
        links[i].addEventListener('mouseout', function() {
            animateLinksoff(links[i]);
        });
};
function animateLinkson(link) {
    link.style.textDecorationColor = "black";
    link.style.textDecorationThickness = "0.15rem";
    console.log('hovered');
};
function animateLinksoff(link) {
    link.style.textDecorationColor = "transparent";
    link.style.textDecorationThickness = "0px";
    console.log('unhovered');
};
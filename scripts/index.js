/**
 * @Author: Christopher Gonzalez <gchriswill>
 * @Date:   2018-08-11T23:59:03-05:00
 * @Email:  gchriswill@me.com
 * @Filename: index.js
 * @Last modified by:   gchriswill
 * @Last modified time: 2018-08-11T23:59:25-05:00
 */

// DOMContentLoaded - for one time till browser clears cached memory.
// load - for every time the browser refreshes the page.
document.addEventListener("readystatechange", function(ev) {
    // Initial Page Settings
    if (document.readyState === "complete") {
        var logo = document.getElementById("logo-container");

        if(typeof(Storage) !== "undefined") {

            if(!sessionStorage.initialLand){
                // Initial Implementations
                sessionStorage.initialLand = 1;
                logo.style.transition = "3s";
                logo.style.opacity = "1";

                alertUser();
            }else{
                logo.style.opacity = "1";
            }

        }else {
            logo.style.opacity = "1";
            alert("Your browser does not support web storage. This means that is outdated or very old...\n\nPlease update or install the lastest version of your current browser in order for us to provide a much better experience... 😉 👍");
        }
    }

}, false);

function alertUser(ev){
    alert("⚠️ Hi there!\n\nThank you for any interest that you might have in me. As for now, my website is currently being built.\n\nTo get in touch or connect with me, please take a look at the button at the bottom-right conner of this page, I'll ❤️ to hear from you.\n\nHope to see you again soon...");
}

function toogleShareAction(ev){
    var actionButton = document.getElementById("action-link-button");
    var githubButton = document.getElementById("github-link-button");
    var linkedinButton = document.getElementById("linkedin-link-button");
    
    // Toggle the active class for hamburger animation
    var isMenuOpen = actionButton.classList.contains('active');

    if (!isMenuOpen) {
        // Open menu
        actionButton.classList.add('active');
        actionButton.setAttribute('aria-expanded', 'true');

        // Use requestAnimationFrame for smooth animations
        requestAnimationFrame(function() {
            githubButton.style.transform = "translateX(-120px) scale(0.5)";
            githubButton.style.opacity = "0.5";
            githubButton.style.visibility = "visible";

            linkedinButton.style.transform = "translateX(-60px) scale(0.5)";
            linkedinButton.style.opacity = "0.5";
            linkedinButton.style.visibility = "visible";
        });

    } else {
        // Close menu
        actionButton.classList.remove('active');
        actionButton.setAttribute('aria-expanded', 'false');

        requestAnimationFrame(function() {
            githubButton.style.transform = "translateX(0) scale(1)";
            githubButton.style.opacity = "0";
            githubButton.style.visibility = "hidden";

            linkedinButton.style.transform = "translateX(0) scale(1)";
            linkedinButton.style.opacity = "0";
            linkedinButton.style.visibility = "hidden";
        });
    }

    // Enhanced hover effects with better performance
    function addHoverEffect(button, translateX) {
        button.addEventListener("mouseenter", function(){
            if (actionButton.classList.contains('active')) {
                button.style.transform = `translateX(${translateX}px) scale(0.4)`;
                button.style.opacity = "0.25";
            }
        });

        button.addEventListener("mouseleave", function(){
            if (actionButton.classList.contains('active')) {
                button.style.transform = `translateX(${translateX}px) scale(0.5)`;
                button.style.opacity = "0.5";
            }
        });
    }

    // Add hover effects only once
    if (!actionButton.hasAttribute('data-hover-initialized')) {
        addHoverEffect(githubButton, -120);
        addHoverEffect(linkedinButton, -60);
        actionButton.setAttribute('data-hover-initialized', 'true');
    }

    ev.preventDefault();
}

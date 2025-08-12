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
    var actionIcon = document.getElementById("action-link-button-icon");
    var githubButton = document.getElementById("github-link-button");
    var linkedinButton = document.getElementById("linkedin-link-button");

    if (actionIcon.innerHTML !== "close"){
        actionIcon.transition = "0.3s";
        actionIcon.innerHTML = "close";

        actionButton.style.transition = "0.3s";
        actionButton.style.transform = "rotate(0.5turn)";
        actionButton.style.textShadow = "-1px -1px 2px rgba(0,0,0, 0.4)";

        githubButton.style.transition = "0.3s";
        githubButton.style.opacity = "0.5";
        githubButton.style.visibility = "visible";
        githubButton.style.transform = "translateX(-120px) scale(0.5)";

        linkedinButton.style.transition = "0.3s";
        linkedinButton.style.opacity = "0.5";
        linkedinButton.style.visibility = "visible";
        linkedinButton.style.transform = "translateX(-60px) scale(0.5)";

    }else{
        actionIcon.transition = "0.3s";
        actionIcon.innerHTML = "menu";

        actionButton.style.transition = "0.3s";
        actionButton.style.transform = "rotate(1turn)";
        actionButton.style.textShadow = "1px 1px 3px rgba(0,0,0, 0.4)";

        githubButton.style.transition = "0.3s";
        githubButton.style.opacity = "0";
        githubButton.style.visibility = "hidden";
        githubButton.style.transform = "translateY(0) scale(1)";

        linkedinButton.style.transition = "0.3s";
        linkedinButton.style.opacity = "0";
        linkedinButton.style.visibility = "hidden";
        linkedinButton.style.transform = "translateX(0px) scale(1)";

    }

    githubButton.addEventListener("mouseover", function(){
        githubButton.style.transition = "0.3s";
        githubButton.style.opacity = "0.25";
        githubButton.style.transform = "translateX(-120px) scale(0.4)";
    });

    githubButton.addEventListener("mouseout", function(){
        githubButton.style.transition = "0.3s";
        githubButton.style.opacity = "0.5";
        githubButton.style.transform = "translateX(-120px) scale(0.5)";
    });

    linkedinButton.addEventListener("mouseover", function(){
        linkedinButton.style.transition = "0.3s";
        linkedinButton.style.opacity = "0.25";
        linkedinButton.style.transform = "translateX(-60px) scale(0.4)";
    });

    linkedinButton.addEventListener("mouseout", function(){
        linkedinButton.style.transition = "0.3s";
        linkedinButton.style.opacity = "0.5";
        linkedinButton.style.transform = "translateX(-60px) scale(0.5)";
    });

    ev.preventDefault();
}

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

                // alertUser();
            }else{
                logo.style.opacity = "1";
            }

        }
        
        // else {
        //     logo.style.opacity = "1";
        //     alert("Your browser does not support web storage. This means that is outdated or very old...\n\nPlease update or install the lastest version of your current browser in order for us to provide a much better experience... 😉 👍");
        // }
    }

}, false);

// function alertUser(ev){
//     alert("⚠️ Hi there!\n\nThank you for any interest that you might have in me. As for now, my website is currently being built.\n\nTo get in touch or connect with me, please take a look at the social media buttons at the top-right corner of this page, I'll ❤️ to hear from you.\n\nHope to see you again soon...");
// }

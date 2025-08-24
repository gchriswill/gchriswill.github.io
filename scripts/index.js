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
        var logo1 = document.getElementById("logo-container1");
        var logo2 = document.getElementById("logo-container2");
        var logo3 = document.getElementById("logo-container3");

        if(typeof(Storage) !== "undefined") {

            if(!sessionStorage.initialLand){

                // Initial Implementations
                sessionStorage.initialLand = 1;
                logo.style.transition = "opacity 3s";
                logo.style.opacity = "1";

                if (logo1) {
                    logo1.style.transition = "opacity 3s";
                    logo1.style.opacity = "0.75";
                }

                if (logo2) {

                    logo2.style.transition = "opacity 3s";
                    logo2.style.opacity = "0.5";
                }

                if (logo3) {

                    logo3.style.transition = "opacity 3s";
                    logo3.style.opacity = "0.25";
                }

                // alertUser();
            } else {

                logo.style.opacity = "1";

                if (logo1) {
                    logo1.style.opacity = "0.75";
                }

                if (logo2) {
                    logo2.style.opacity = "0.5";
                }

                if (logo3) {
                    logo3.style.opacity = "0.25";
                }
            }
        }
        
        // Clear transitions after fade-in to allow parallax transforms
        setTimeout(function() {

            logo.style.transition = "none";

            if (logo1) {
                logo1.style.transition = "none";
            }

            if (logo2) {
                logo2.style.transition = "none";
            }

            if (logo3) {
                logo3.style.transition = "none";
            }

        }, 3200);
    }

}, false);

// Initialize Parallax.js when the page loads
window.addEventListener("load", function() {
    
    console.log('Window loaded, starting parallax initialization');
    
    // Immediate test
    var main = document.getElementsByTagName('main');
    var scene = document.getElementById('scene');
    var logoContainer1 = document.getElementById('logo-container1');
    var logoContainer2 = document.getElementById('logo-container2');
    var logoContainer3 = document.getElementById('logo-container3');

    console.log('Scene element:', scene);
    console.log('Logo container 1:', logoContainer1);
    console.log('Logo container 2:', logoContainer2);
    console.log('Logo container 3:', logoContainer3);
    console.log('Logo container 1 opacity:', logoContainer1 ? logoContainer1.style.opacity : 'not found');
    console.log('Logo container 2 opacity:', logoContainer2 ? logoContainer2.style.opacity : 'not found');
    console.log('Logo container 3 opacity:', logoContainer3 ? logoContainer3.style.opacity : 'not found');
    console.log('Parallax library loaded:', typeof Parallax !== 'undefined');
    
    // Try initializing immediately first
    if (scene && typeof Parallax !== 'undefined') {
        
        try {
            
            var parallaxInstance = new Parallax(scene, {
                relativeInput: true,
                clipRelativeInput: true,
                hoverOnly: false,
                // inputElement: document, // Remove this - let it use default (scene)
                calibrateX: false,
                calibrateY: false,
                invertX: false,
                invertY: false,
                limitX: 150,  // Increase movement limit for more visibility
                limitY: 150,  // Increase movement limit for more visibility
                scalarX: 12,  // Increase responsiveness 
                scalarY: 12,  // Increase responsiveness
                frictionX: 0.1, // Faster response
                frictionY: 0.1, // Faster response
                originX: 0.5,   // Center origin
                originY: 0.5    // Center origin
            });


            console.log('Parallax initialized immediately:', parallaxInstance);
            
            // Test if it's working by manually triggering mouse move
            // setTimeout(function() {
            //     console.log('Testing parallax with simulated mouse move...');
            //     var evt = new MouseEvent('mousemove', {
            //         clientX: 100,
            //         clientY: 100,
            //         bubbles: true
            //     });
            //     document.dispatchEvent(evt);
            // }, 1000);
            
        } catch (error) {
            console.error('Parallax initialization error:', error);
        }
    } else {
        console.error('Scene not found or Parallax not loaded');
    }
});

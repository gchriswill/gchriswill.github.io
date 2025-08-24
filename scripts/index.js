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
    
    // iOS DeviceOrientation permission handling
    requestIOSMotionPermission();
});

/**
 * Request DeviceOrientationEvent permission on iOS devices
 * This enables enhanced parallax effects using device motion
 */
function requestIOSMotionPermission() {
    
    // Check if this is an iOS device
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (!isIOS) {
        console.log('Not an iOS device, skipping motion permission request');
        return;
    }
    
    console.log('iOS device detected, checking motion permission...');
    
    // Check if DeviceOrientationEvent.requestPermission exists (iOS 13+)
    if (typeof DeviceOrientationEvent !== 'undefined' && 
        typeof DeviceOrientationEvent.requestPermission === 'function') {
        
        console.log('DeviceOrientationEvent.requestPermission available');
        
        // Create a button for user to grant permission (required by iOS)
        createPermissionButton();
        
    } else if (typeof DeviceOrientationEvent !== 'undefined') {
        
        // iOS < 13 or permission already granted
        console.log('DeviceOrientationEvent available without permission request');
        enableDeviceOrientationParallax();
        
    } else {
        console.log('DeviceOrientationEvent not supported');
    }
}

/**
 * Create a permission request button for iOS users
 */
function createPermissionButton() {
    
    // Check if button already exists
    if (document.getElementById('ios-permission-btn')) {
        return;
    }
    
    var button = document.createElement('button');
    button.id = 'ios-permission-btn';
    button.innerHTML = 'Enable Motion Effects';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.9);
        border: 2px solid #007AFF;
        border-radius: 8px;
        color: #007AFF;
        font-size: 14px;
        font-weight: 600;
        padding: 12px 16px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', function() {
        requestDeviceOrientationPermission(button);
    });
    
    // Add hover effects
    button.addEventListener('mouseenter', function() {
        this.style.background = '#007AFF';
        this.style.color = 'white';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.9)';
        this.style.color = '#007AFF';
    });
    
    document.body.appendChild(button);
    console.log('Permission button created');
}

/**
 * Request device orientation permission from user
 */
function requestDeviceOrientationPermission(button) {
    
    console.log('Requesting DeviceOrientation permission...');
    
    DeviceOrientationEvent.requestPermission()
        .then(function(response) {
            
            console.log('Permission response:', response);
            
            if (response === 'granted') {
                
                console.log('DeviceOrientation permission granted');
                
                // Remove the permission button
                if (button && button.parentNode) {
                    button.style.opacity = '0';
                    setTimeout(function() {
                        if (button.parentNode) {
                            button.parentNode.removeChild(button);
                        }
                    }, 300);
                }
                
                // Enable device orientation parallax
                enableDeviceOrientationParallax();
                
            } else {
                
                console.log('DeviceOrientation permission denied');
                
                // Update button text to show denial
                button.innerHTML = 'Motion Permission Denied';
                button.style.background = 'rgba(255, 59, 48, 0.9)';
                button.style.borderColor = '#FF3B30';
                button.style.color = 'white';
                
                // Remove button after delay
                setTimeout(function() {
                    if (button.parentNode) {
                        button.style.opacity = '0';
                        setTimeout(function() {
                            if (button.parentNode) {
                                button.parentNode.removeChild(button);
                            }
                        }, 300);
                    }
                }, 2000);
            }
            
        })
        .catch(function(error) {
            
            console.error('Error requesting DeviceOrientation permission:', error);
            
            // Update button to show error
            button.innerHTML = 'Permission Error';
            button.style.background = 'rgba(255, 149, 0, 0.9)';
            button.style.borderColor = '#FF9500';
            
            setTimeout(function() {
                if (button.parentNode) {
                    button.style.opacity = '0';
                    setTimeout(function() {
                        if (button.parentNode) {
                            button.parentNode.removeChild(button);
                        }
                    }, 300);
                }
            }, 2000);
        });
}

/**
 * Enable device orientation based parallax effects for mobile
 */
function enableDeviceOrientationParallax() {
    
    console.log('Enabling device orientation parallax...');
    
    var scene = document.getElementById('scene');
    
    if (!scene) {
        console.error('Scene element not found for device orientation');
        return;
    }
    
    // Add device orientation event listener
    window.addEventListener('deviceorientation', function(event) {
        
        // Get orientation values
        var gamma = event.gamma; // Left to right tilt (-90 to 90)
        var beta = event.beta;   // Front to back tilt (-180 to 180)
        
        if (gamma !== null && beta !== null) {
            
            // Normalize the values for parallax
            var normalizedX = Math.max(-45, Math.min(45, gamma)) / 45; // -1 to 1
            var normalizedY = Math.max(-45, Math.min(45, beta - 45)) / 45; // -1 to 1, offset for natural hold
            
            // Apply to parallax layers
            var logoContainers = [
                document.getElementById('logo-container'),
                document.getElementById('logo-container1'),
                document.getElementById('logo-container2'),
                document.getElementById('logo-container3')
            ];
            
            var depths = [0.05, 0.1, 0.3, 0.5];
            
            logoContainers.forEach(function(container, index) {
                if (container && depths[index]) {
                    
                    var moveX = normalizedX * depths[index] * 30; // Scale movement
                    var moveY = normalizedY * depths[index] * 30;
                    
                    // Apply transform
                    container.style.transform = 'translate3d(' + moveX + 'px, ' + moveY + 'px, 0)';
                }
            });
        }
        
    }, true);
    
    console.log('Device orientation parallax enabled');
}

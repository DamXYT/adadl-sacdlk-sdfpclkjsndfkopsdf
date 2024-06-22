// Get IP address
function getIP(callback){
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        callback(data.ip);
    });
}

// Update IP address on the page
getIP(ip => {
    document.getElementById('ip-address').innerText = ip;
});

// Track time spent on the page
let startTime = Date.now();

setInterval(() => {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    document.getElementById('time-spent').innerText = elapsedTime;
}, 1000);

window.addEventListener("load", () => {
    let lon;
    let lat;

    let top__timezone = document.querySelector('.top__timezone');
    let main__summary = document.querySelector('.main__summary');
    let bottom__temperature = document.querySelector('.bottom__temperature-temp');
    let bottom__humidity = document.querySelector('.bottom__humidity-hum');
    let switchinput = document.querySelector('#switch');
    let tempF = document.querySelector('.bottom__temperature-iconF');
    let tempC = document.querySelector('.bottom__temperature-iconC');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/933b851769842e22305c1d3d9dbacf4c/${lat},${lon}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const {humidity, icon, summary, temperature} = data.currently;
                    top__timezone.innerText = data.timezone;
                    main__summary.innerText = summary;
                    bottom__temperature.innerText = temperature;
                    bottom__humidity.innerText = humidity;

                    
                    function setIcons(icon, iconID) {
                        const skycons = new Skycons({color: "white"});
                        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
                        skycons.play();
                        return skycons.set(iconID, Skycons[currentIcon]);
              
                    } 
                    setIcons(icon, document.querySelector('#icon')); 

                    let celsius = (temperature - 32) * (5 / 9);
                    switchinput.addEventListener('click', () => {
                        if(switchinput.checked) {
                            bottom__temperature.innerText = temperature;
                            tempF.style.display = 'block';
                            tempC.style.display = 'none';
                        } else {
                            bottom__temperature.innerText = Math.ceil(celsius);
                            tempC.style.display = 'block';
                            tempF.style.display = 'none';
                        }
                    });    
                });
        });
    } 
});
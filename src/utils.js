export const getTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    minutes = minutes < 10 ? '0'+minutes : minutes;
    hours = hours < 10 ? '0'+hours : hours;

    return hours + ':' + minutes;
}

export const checkSpeedConnection = async () => {
    let startTime;
    const downloadSize = 1024 * 1024 * 0.60;

    const startTest = async () => {
        startTime = (new Date()).getTime();
        return new Promise((resolve, reject) => {
            const download = new Image();
            download.onload = () => resolve(calculateDownloadSpeed((new Date()).getTime()));
            download.onerror = reject
            download.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png?' + startTime;
        })
    }

    function calculateDownloadSpeed(endTime) {
        const duration = (endTime - startTime) / 1000;
        const bitsLoaded = downloadSize * 8;
        const bps = (bitsLoaded / duration).toFixed(0);
        const kbps = (bps / 1024).toFixed(0);
        const mbps = (kbps / 1024).toFixed(0);

        return {
            download: navigator.connection.downlink,
            upload: mbps,
        }
    }

    return await startTest();
}

export const getIconUrl = (name) => {
    return new URL(`./assets/country/${name.toLowerCase()}.svg`, import.meta.url).href
}

export const randomInt = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
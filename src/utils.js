export const getTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    minutes = minutes < 10 ? '0'+minutes : minutes;
    hours = hours < 10 ? '0'+hours : hours;

    return hours + ':' + minutes;
}
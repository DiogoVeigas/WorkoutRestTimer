function leftPadding0(number){
    return number >= 10 ? number : "0" + number;
}

export function secondsToMinutes(seconds){
    let minutes = Math.floor(seconds / 60);
    let newSeconds =  Math.floor(seconds % 60);

    return `${leftPadding0(minutes)}:${leftPadding0(newSeconds)}`;
}
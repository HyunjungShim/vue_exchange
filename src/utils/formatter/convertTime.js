function displayDate(date){
    date = new Date(date)
    return date.getFullYear() + '-'
        + (date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1) + '-'
        + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + ' '
        + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ':'
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
}

function dateFormatFunc(date){
    return date.getFullYear() + '-'
    + (date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1) + '-'
    + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + ' '
    + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ':'
    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
}

function dateDiff(before_date){
    before_date = (before_date*1000);
    let now_date = (new Date().getTime());
    return Math.round((now_date-before_date)/(1000*60).toFixed(0));
}

function convertTimeScale(time){
    let convertTime = new Date(time * 1000);
    let localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    let optionsT = {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: "2-digit",
        hour12: false,
        timeZone: localTimezone,
    };
    let localTime = convertTime.toLocaleString('en-US', optionsT).replace(',', '');
    localTime = localTime.replace(/\//g, '-');
    return localTime;
}

function convertTimeScaleWithLocal(originalTime, timeZone){
    const zonedDate = new Date(new Date(originalTime * 1000).toLocaleString('en-US', { timeZone }));
    const year = zonedDate.getFullYear();
    const month = (zonedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = zonedDate.getDate().toString().padStart(2, '0');
    const hours = zonedDate.getHours().toString().padStart(2, '0');
    const minutes = zonedDate.getMinutes().toString().padStart(2, '0');
    let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDateTime;
}

export {
    dateFormatFunc,
    displayDate,
    dateDiff,
    convertTimeScale,
    convertTimeScaleWithLocal
}
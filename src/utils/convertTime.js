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
    before_date = Math.floor(new Date(before_date).getTime());
    let now_date = Math.floor(Date.now());
    return ((now_date-before_date) / (60));
}

export {
    dateFormatFunc,
    displayDate,
    dateDiff
}
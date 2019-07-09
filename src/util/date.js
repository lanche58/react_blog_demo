 // 设置时间格式为xxxx-xx-xx
function setDateFormat(milliseconds) {
    const date = new Date(milliseconds);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return year + '-' + month + '-' + day;
}

export {
    setDateFormat
}
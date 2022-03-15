export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatLongString(str, maxlength=40) {
    if(str.length > maxlength) {
        str = str.slice(0, maxlength);
        str += "...";
    }
    return str;
}
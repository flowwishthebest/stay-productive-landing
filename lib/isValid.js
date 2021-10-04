//Function to check if string is numeric (should cover undefined, "", " ", null, true, false cases)
function isNumeric(input) {
    return (input - 0) == input && ('' + input).trim().length > 0;
}

//Function to check if given query param is valid (both parts are numeric strings and number after decimal point is single digit numeric string)
module.exports = function isValid(string) {
    try {
        const fp = string.split('.')[0];
        const sp = string.split('.')[1];

        if (isNumeric(fp) && isNumeric(sp) && sp.length === 1)
            return true;
        return false;
    } catch (error) {
        return false;
    }
}
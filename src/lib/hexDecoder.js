export const hexToString = (hexValue) => {

    let str = '';
    for (let i = 0; i < hexValue.length; i += 2) {
        str += String.fromCharCode(parseInt(hexValue.substr(i, 2), 16));
    }
    return str;
};

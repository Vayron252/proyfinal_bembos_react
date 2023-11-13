
export const obtenerTamanioPantalla = () => {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth;
    return x;
}

export const formatoDosDecimales = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });
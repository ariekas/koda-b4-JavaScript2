// buatkan fungsi untuk menghitung 
// 4 fungsi
// confersi suhu celsius ke farenhaid
// celsius ke reamur
// celsius ke celvin
// outpun hasil korversikan kan dengan format yang benar

function farenhaid(c) {
    const farenhaidKonvert = (c * 9/5) + 32
    return farenhaidKonvert
}

const reamur = function(c){
    const reamurKonvert = (4/5)*c
    return reamurKonvert
}

const kelvin = (c) => {
    const kelvinKonvert = c + 273.15
    return kelvinKonvert
}

function ouput(c){
    console.log("Hasil konversi Celsius " + c + " ke Fahrenheit adalah:" + farenhaid(c))
    console.log("Hasil konversi Celsius " + c + " ke reamur adalah:"  + reamur(c))
    console.log("Hasil konversi Celsius " + c + " ke kelvin adalah:" + kelvin(c))
}

ouput(50)

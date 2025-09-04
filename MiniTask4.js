// buatkan fungsi untuk menghitung 
// 4 fungsi
// confersi suhu celsius ke Fahrenheit
// celsius ke reamur
// celsius ke celvin
// outpun hasil korversikan kan dengan format yang benar

function Fahrenheit(c) {
    const FahrenheitKonvert = (c * 9/5) + 32 + " Fahrenheit"
    return FahrenheitKonvert
}

const reamur = function(c){
    const reamurKonvert = (4/5)*c + " Reamur"
    return reamurKonvert
}

const kelvin = (c) => {
    const kelvinKonvert = c + 273.15 + " Kelvin"
    return kelvinKonvert
}

// function ouput(c){
//     console.log("Hasil konversi Celsius " + c + " ke Fahrenheit adalah:" + Fahrenheit(c))
//     console.log("Hasil konversi Celsius " + c + " ke reamur adalah:"  + reamur(c))
//     console.log("Hasil konversi Celsius " + c + " ke kelvin adalah:" + kelvin(c))
// }

function out(c, cb){
    console.log("Celsius "+ c +" Hasil konversinya: " + cb(c))
    return
}

// ouput(50)


out(5, Fahrenheit)
out(5, reamur)
out(5, kelvin)


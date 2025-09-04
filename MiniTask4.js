// buatkan fungsi untuk menghitung 
// 4 fungsi
// confersi suhu celsius ke Fahrenheit
// celsius ke reamur
// celsius ke celvin
// outpun hasil korversikan kan dengan format yang benar

function fahrenheit(c) {
    const FahrenheitKonvert = (c * 9/5) + 32 
    return FahrenheitKonvert
}

const reamur = function(c){
    const reamurKonvert = (4/5)*c 
    return reamurKonvert
}

const kelvin = (c) => {
    const kelvinKonvert = c + 273.15
    return kelvinKonvert
}

// function ouput(c){
//     console.log("Hasil konversi Celsius " + c + " ke Fahrenheit adalah:" + Fahrenheit(c))
//     console.log("Hasil konversi Celsius " + c + " ke reamur adalah:"  + reamur(c))
//     console.log("Hasil konversi Celsius " + c + " ke kelvin adalah:" + kelvin(c))
// }

function out(c, cb1,cb2,cb3){
   
    console.log("Celsius "+ c +" Hasil konversinya: " + cb1(c),cb2(c),cb3(c))
    return
}

out(5, fahrenheit, reamur, kelvin)

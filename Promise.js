let kuadrat = function (nilai, ceknilai) {
    let hasil = nilai * nilai;
    let error = null;

    if (hasil === 0)
        error = "error";

    ceknilai(error, hasil);
}

const { promisify } = require("util");
const kuadratPromise = promisify(kuadrat);

let nilai = 5;

kuadratPromise(nilai)
    .then(hasil => console.log(hasil))
    .catch(error => console.log(error));
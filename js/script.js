alert("External JS");
confirm("This is confirm from External JS");

//String
let nama = "Andi";
let name = 'Andi';
let abc = `abc,
def,
ghi
`
// Number
let umur = 20;
let numur = -15;
let age = 0;

// BigInt
let angkaBesar = 12345678901234567890123n;

// Array
let buah = new Array("Pisang", "Mangga", "Apel");
let barang = ["TV", "Handphone", "Laptop", "Mobil", "Motor"];

barang.push("Rumah");
barang.pop();
barang.shift();
delete barang[0];

// Operator Penugasan
let ab = 10;
let bc = 20;

// Operator Aritmatika
let tambah = 1 + 1;
let kurang = 1 - 1;
let kali = 1 * 1;
let bagi = 1 / 1;

// Operator Logika
let a = (1 + 1) === 2;
let b = 1 + 2 > 1 + 1;
let c = 1 + 1 < 2 + 2;

// Object
let pengguna = {
  nama: "Hero",
  usia: 20,
  alamat: {
    jalan: "Ciputat",
    kota: "Bandung"
  },
  hobi: ["Main Api"]
};

console.log(`Me name is: ${nama}. Me age is: ${umur}. Me like ${buah[0]}. Me want to buy ${barang[barang.length - 1]}`);
console.log(abc);


//Block Statement and Error Handling
let duid = prompt("Punya Duid?");

try {
  alert1("Abc"); //Not defined!
} catch (err) {
  throw Error(err.message);
} finally {
  alert("This is from finally in try catch! It'll be running regardles of the try catch");
}

if (duid === "Yes" || duid === "y") {
  alert("Lu punya duid, lu punya kuasa");
} else if (duid === "No" || duid === "n") {
  alert("Kasian gak punya duid, cari Sugar Daddy sono!");
}
else {
  throw Errr("Ginjal belum laku!");
}


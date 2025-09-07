const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listProduk = [
  {
    name: "PAN Reguler Pizza",
    price: 124000,
  },
  {
    name: "PAN Personal Pizza",
    price: 56000,
  },
  {
    name: "PAN Large Pizza",
    price: 163000,
  },
];

let storageProduct = [];

let historyProduct = [];

function menuUtama() {
  console.log("Selamat datang di Pizza Hut, Silahkan pilih menu: ");
  console.log("1. Lihat Menu");
  console.log("2. Lihat Keranjang");
  console.log("3. Lihat History");
  console.log("4. EXIT");
  console.log("========================================");
  rl.question("Masukan Angka untuk memilih menu: ", (input) => {
    input = parseInt(input);
    console.log("========================================");
    switch (input) {
      case 1:
        tambahMenu();
        break;
      case 2:
        calcuCart();
        break;
      case 3:
        history();
        break;
      case 4:
        console.log("Datang kembali");
        rl.close();
        break;
      default:
        rl.close();
    }
  });
}

function history() {
  console.log("History Pesanan Anda:");

  let count = 0;
  while (historyProduct[count] !== undefined) {
    let order = historyProduct[count];
    console.log(`Pesanan ke-${count + 1}:`);
    
    for (const item in order.items) {
      if (item !== "Total") {
        console.log(`  ${item}: Rp ${order.items[item]}`);
      }
    }
    console.log(`  Total: Rp ${order.total}`);
    count++;
  }

  console.log("========================================");
  rl.question("Kemblai ke menu utama? (Y): ", (inputConfim) => {
    if(inputConfim === "y"){
      menuUtama()
    }
  })

}

function calcuCart() {
  let count = 0;
  let subtotalPerItem = {};

  while (storageProduct[count] !== undefined) {
    if (subtotalPerItem[storageProduct[count].name]) {
      subtotalPerItem[storageProduct[count].name] +=
        storageProduct[count].price;
    } else {
      subtotalPerItem[storageProduct[count].name] = storageProduct[count].price;
    }
    count++;
  }

  let total = 0;
  console.log("List Cart Anda:");
  for (let item in subtotalPerItem) {
    console.log(`Item: ${item}, Subtotal: ${subtotalPerItem[item]}`);
    total += subtotalPerItem[item];
  }

  subtotalPerItem["Total"] = total;

  if (total == 0) {
    console.log("Tidak ada Produk dalam cart");
  } else {
    console.log(`Total: ${total}`);
  }

  console.log("========================================");
  rl.question("Comfirmasi Beli? (Y/N): ", (inputCart) => {
    if (inputCart == "y") {
      historyProduct = [
        ...historyProduct,
        {
          items: subtotalPerItem,
          total: total
        }
      ];
      storageProduct = [];
      menuUtama();
    } else {
      menuUtama();
    }
  });
}

function tambahMenu() {
  let count = 0;
  while (listProduk[count] !== undefined) {
    console.log(`${count}. ${listProduk[count].name}: ${listProduk[count].price}`);
    count++;
  }
  console.log("========================================");
  rl.question("Pilih Menu(Masukan angka Index): ", (inputProduk) => {
    inputProduk = parseInt(inputProduk);
    let dataInput = {
      ...listProduk[inputProduk],
    };
    storageProduct = [...storageProduct, dataInput];

    console.log("========================================");
    console.log("List Pesanan Anda:");
    let count = 0;
    while (storageProduct[count] !== undefined) {
      console.log(`${storageProduct[count].name}`);
      count++;
    }

    console.log("========================================");
    rl.question("Pesan lagi? (Y/N): ", (inputt) => {
      if (inputt == "y") {
        tambahMenu();
      } else {
        menuUtama();
      }
    });
  });
}

menuUtama();

const obj = {
    str: [
      "a",
      "b",
      "c",
      [
        "A",
        [
          "A",
          "B",
          {
            man: [
              {
                the: {
                  name: {
                    of: {
                      us: "Koda",
                    },
                  },
                },
              },
            ],
          },
        ],
      ],
    ],
  };

  const nameKoda = {
    ...obj
  }

  const {str:[_,__,___,[____,[_____,______,{man:[{the:{name:{of:{us: namaKamu}}}}]}]]]} = nameKoda

  console.log(namaKamu)
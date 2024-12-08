import { PrayerType, commonPrayerMovements } from './prayer-steps';

const {
  niyetEtmek,
  iftitahTekbiri,
  kiyam,
  kiraat,
  ruku,
  kavme,
  secde,
  celse,
  kade,
  selam
} = commonPrayerMovements;

export const prayerTypes: PrayerType[] = [
  {
    id: "sabah",
    name: "Sabah Namazı",
    rekatCount: 4,
    description: "Sabah namazı 2 rekat sünnet, 2 rekat farz olmak üzere toplam 4 rekattır.",
    time: "İmsak vaktinden güneşin doğuşuna kadar",
    steps: [
      {
        id: "sabah-sunnet",
        name: "Sünnet",
        description: "2 Rekat Sünnet",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Sabah namazının sünnetine niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      },
      {
        id: "sabah-farz",
        name: "Farz",
        description: "2 Rekat Farz",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Sabah namazının farzına niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      }
    ]
  },
  {
    id: "ogle",
    name: "Öğle Namazı",
    rekatCount: 10,
    description: "Öğle namazı 4 rekat ilk sünnet, 4 rekat farz ve 2 rekat son sünnet olmak üzere toplam 10 rekattır.",
    time: "Güneşin tepe noktasını geçmesinden ikindi vaktine kadar",
    steps: [
      {
        id: "ogle-ilk-sunnet",
        name: "İlk Sünnet",
        description: "4 Rekat İlk Sünnet",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Öğle namazının ilk sünnetine niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "İlk oturuş - Sadece Ettehiyyatü okunur"
          },
          // 3. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 4. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      },
      {
        id: "ogle-farz",
        name: "Farz",
        description: "4 Rekat Farz",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Öğle namazının farzına niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "İlk oturuş - Sadece Ettehiyyatü okunur"
          },
          // 3. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 4. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      },
      {
        id: "ogle-son-sunnet",
        name: "Son Sünnet",
        description: "2 Rekat Son Sünnet",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Öğle namazının son sünnetine niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      }
    ]
  },
  {
    id: "ikindi",
    name: "İkindi Namazı",
    rekatCount: 8,
    description: "İkindi namazı 4 rekat sünnet ve 4 rekat farz olmak üzere toplam 8 rekattır.",
    time: "Öğle namazı vaktinin çıkmasından güneşin batmasına kadar",
    steps: [
      {
        id: "ikindi-sunnet",
        name: "Sünnet",
        description: "4 Rekat Sünnet",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "İkindi namazının sünnetine niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "İlk oturuş - Sadece Ettehiyyatü okunur"
          },
          // 3. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 4. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      },
      {
        id: "ikindi-farz",
        name: "Farz",
        description: "4 Rekat Farz",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "İkindi namazının farzına niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "İlk oturuş - Sadece Ettehiyyatü okunur"
          },
          // 3. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 4. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      }
    ]
  },
  {
    id: "aksam",
    name: "Akşam Namazı",
    rekatCount: 5,
    description: "Akşam namazı 3 rekat farz ve 2 rekat sünnet olmak üzere toplam 5 rekattır.",
    time: "Güneşin batmasından yatsı vaktine kadar",
    steps: [
      {
        id: "aksam-farz",
        name: "Farz",
        description: "3 Rekat Farz",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Akşam namazının farzına niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "İlk oturuş - Sadece Ettehiyyatü okunur"
          },
          // 3. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      },
      {
        id: "aksam-sunnet",
        name: "Sünnet",
        description: "2 Rekat Sünnet",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Akşam namazının sünnetine niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      }
    ]
  },
  {
    id: "yatsi",
    name: "Yatsı Namazı",
    rekatCount: 13,
    description: "Yatsı namazı 4 rekat ilk sünnet, 4 rekat farz, 2 rekat son sünnet ve 3 rekat vitir olmak üzere toplam 13 rekattır.",
    time: "Akşam namazı vaktinin çıkmasından imsak vaktine kadar",
    steps: [
      {
        id: "yatsi-ilk-sunnet",
        name: "İlk Sünnet",
        description: "4 Rekat İlk Sünnet",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Yatsı namazının ilk sünnetine niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "İlk oturuş - Sadece Ettehiyyatü okunur"
          },
          // 3. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 4. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      },
      {
        id: "yatsi-farz",
        name: "Farz",
        description: "4 Rekat Farz",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Yatsı namazının farzına niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "İlk oturuş - Sadece Ettehiyyatü okunur"
          },
          // 3. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 4. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Sadece Fatiha okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      },
      {
        id: "yatsi-son-sunnet",
        name: "Son Sünnet",
        description: "2 Rekat Son Sünnet",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Yatsı namazının son sünnetine niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      },
      {
        id: "vitir",
        name: "Vitir",
        description: "3 Rekat Vacip",
        movements: [
          // 1. Rekat
          {
            ...niyetEtmek,
            description: "Vitir namazına niyet ettim"
          },
          iftitahTekbiri,
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          // 2. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "İlk oturuş - Sadece Ettehiyyatü okunur"
          },
          // 3. Rekat
          kiyam,
          {
            ...kiraat,
            description: "Fatiha ve zamm-ı sure okunur, sonra tekbir alınıp Kunut duaları okunur"
          },
          ruku,
          kavme,
          secde,
          celse,
          secde,
          {
            ...kade,
            description: "Son oturuş - Ettehiyyatü, Allahümme salli, Allahümme barik, Rabbena duaları okunur"
          },
          selam
        ]
      }
    ]
  }
];

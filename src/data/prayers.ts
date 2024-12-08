import { Prayer } from '../types';
import { createPrayerSteps, createVitrPrayerSteps } from './prayerSteps';

// Import prayer images
import sabahNamaziHero from '../img/sabahnamazi_hero.jpg';
import ogleNamaziHero from '../img/oglenamazi_hero.jpg';
import ikindiNamaziHero from '../img/ikindinamazi_hero.jpg';
import aksamNamaziHero from '../img/aksamnamazi_hero.jpg';
import yatsiNamaziHero from '../img/yatsinamazi-hero.jpg';

export const prayers: Prayer[] = [
  {
    id: 1,
    name: 'Sabah Namazı',
    description: 'Sabah namazı toplam 4 rekattır: 2 rekat sünnet, 2 rekat farz',
    rekatCount: 4,
    time: 'İmsak ile güneş doğuşu arası',
    imageUrl: sabahNamaziHero,
    timeImageUrl: sabahNamaziHero,
    steps: [
      {
        id: 1,
        name: 'İlk Sünnet',
        description: 'Sabah namazının 2 rekat sünneti',
        type: 'sunnet',
        rekatCount: 2,
        steps: createPrayerSteps(2, 'Sabah Namazı', 'sünnet')
      },
      {
        id: 2,
        name: 'Farz',
        description: 'Sabah namazının 2 rekat farzı',
        type: 'farz',
        rekatCount: 2,
        steps: createPrayerSteps(2, 'Sabah Namazı', 'farz')
      }
    ]
  },
  {
    id: 2,
    name: 'Öğle Namazı',
    description: 'Öğle namazı toplam 10 rekattır: 4 rekat ilk sünnet, 4 rekat farz, 2 rekat son sünnet',
    rekatCount: 10,
    time: 'Güneş tam tepedeyken (zeval vakti) başlar, ikindi vaktine kadar',
    imageUrl: ogleNamaziHero,
    timeImageUrl: ogleNamaziHero,
    steps: [
      {
        id: 1,
        name: 'İlk Sünnet',
        description: 'Öğle namazının 4 rekat ilk sünneti',
        type: 'sunnet',
        rekatCount: 4,
        steps: createPrayerSteps(4, 'Öğle Namazı', 'sünnet')
      },
      {
        id: 2,
        name: 'Farz',
        description: 'Öğle namazının 4 rekat farzı',
        type: 'farz',
        rekatCount: 4,
        steps: createPrayerSteps(4, 'Öğle Namazı', 'farz')
      },
      {
        id: 3,
        name: 'Son Sünnet',
        description: 'Öğle namazının 2 rekat son sünneti',
        type: 'sunnet',
        rekatCount: 2,
        steps: createPrayerSteps(2, 'Öğle Namazı', 'sünnet')
      }
    ]
  },
  {
    id: 3,
    name: 'İkindi Namazı',
    description: 'İkindi namazı toplam 8 rekattır: 4 rekat sünnet, 4 rekat farz',
    rekatCount: 8,
    time: 'Her şeyin gölgesi kendisinin iki katına ulaştığı zamandan güneş batımına kadar',
    imageUrl: ikindiNamaziHero,
    timeImageUrl: ikindiNamaziHero,
    steps: [
      {
        id: 1,
        name: 'Sünnet',
        description: 'İkindi namazının 4 rekat sünneti',
        type: 'sunnet',
        rekatCount: 4,
        steps: createPrayerSteps(4, 'İkindi Namazı', 'sünnet')
      },
      {
        id: 2,
        name: 'Farz',
        description: 'İkindi namazının 4 rekat farzı',
        type: 'farz',
        rekatCount: 4,
        steps: createPrayerSteps(4, 'İkindi Namazı', 'farz')
      }
    ]
  },
  {
    id: 4,
    name: 'Akşam Namazı',
    description: 'Akşam namazı toplam 5 rekattır: 3 rekat farz, 2 rekat sünnet',
    rekatCount: 5,
    time: 'Güneş battıktan sonra başlar, şafak sönene kadar',
    imageUrl: aksamNamaziHero,
    timeImageUrl: aksamNamaziHero,
    steps: [
      {
        id: 1,
        name: 'Farz',
        description: 'Akşam namazının 3 rekat farzı',
        type: 'farz',
        rekatCount: 3,
        steps: createPrayerSteps(3, 'Akşam Namazı', 'farz')
      },
      {
        id: 2,
        name: 'Sünnet',
        description: 'Akşam namazının 2 rekat sünneti',
        type: 'sunnet',
        rekatCount: 2,
        steps: createPrayerSteps(2, 'Akşam Namazı', 'sünnet')
      }
    ]
  },
  {
    id: 5,
    name: 'Yatsı Namazı',
    description: 'Yatsı namazı toplam 13 rekattır: 4 rekat ilk sünnet, 4 rekat farz, 2 rekat son sünnet, 3 rekat vitir',
    rekatCount: 13,
    time: 'Şafak söndükten sonra başlar, imsak vaktine kadar',
    imageUrl: yatsiNamaziHero,
    timeImageUrl: yatsiNamaziHero,
    steps: [
      {
        id: 1,
        name: 'İlk Sünnet',
        description: 'Yatsı namazının 4 rekat ilk sünneti',
        type: 'sunnet',
        rekatCount: 4,
        steps: createPrayerSteps(4, 'Yatsı Namazı', 'sünnet')
      },
      {
        id: 2,
        name: 'Farz',
        description: 'Yatsı namazının 4 rekat farzı',
        type: 'farz',
        rekatCount: 4,
        steps: createPrayerSteps(4, 'Yatsı Namazı', 'farz')
      },
      {
        id: 3,
        name: 'Son Sünnet',
        description: 'Yatsı namazının 2 rekat son sünneti',
        type: 'sunnet',
        rekatCount: 2,
        steps: createPrayerSteps(2, 'Yatsı Namazı', 'sünnet')
      },
      {
        id: 4,
        name: 'Vitir',
        description: 'Yatsı namazının 3 rekat vitir namazı',
        type: 'vacip',
        rekatCount: 3,
        steps: createVitrPrayerSteps()
      }
    ]
  }
];
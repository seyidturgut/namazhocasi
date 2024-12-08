export interface Prayer {
  id: string;
  name: string;
  timing: string;
  fard: PrayerUnit;
  sunnah?: {
    before?: PrayerUnit;
    after?: PrayerUnit;
  };
}

export interface PrayerUnit {
  rakats: number;
  steps: PrayerStep[];
}

export interface PrayerStep {
  id: number;
  name: string;
  description: string;
  arabicText?: string;
  turkishText?: string;
  imageUrl: string;
}

export interface Dua {
  id: string;
  name: string;
  arabicText: string;
  turkishText: string;
  transliteration: string;
  usage: string;
}
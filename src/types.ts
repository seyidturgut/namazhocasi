export interface PrayerAction {
  name: string;
  type: 'sura';
  link: string;
}

export interface PrayerSubStep {
  name: string;
  description: string;
  arabicText?: string;
  turkishText?: string;
  actions?: PrayerAction[];
}

export interface PrayerStep {
  id: number;
  name: string;
  description: string;
  subSteps?: PrayerSubStep[];
  arabicText?: string;
  turkishText?: string;
  imageUrl?: string;
  actions?: PrayerAction[];
}

export type NamazType = 'farz' | 'sunnet' | 'vacip';

export interface NamazStep {
  id: number;
  name: string;
  description: string;
  type: NamazType;
  rekatCount: number;
  steps: PrayerStep[];
}

export interface Prayer {
  id: number;
  name: string;
  description: string;
  rekatCount: number;
  time: string;
  imageUrl: string;
  steps: NamazStep[];
}

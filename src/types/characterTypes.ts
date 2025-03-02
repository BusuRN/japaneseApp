export type Data = {
  letter: string | null;
  isColumn?: boolean;
  eng?: string | null;
}[][];

export type KanjiCharacter = {
  id: string;
  kData: string;
  kAudio: string;
  // kvideo: require('./videos/1_00.mp4'),
  name: string;
  kstroke: string;
  kmeaning: string;
  kgrade: string;
  kunyomi_ja: string;
  kunyomi: string;
  onyomi_ja: string;
  onyomi: string;
  examples: string;
};

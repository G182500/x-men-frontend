export default interface IMutant {
  id: string;
  name: string;
  category: string;
  side: 'GOOD' | 'EVIL' | 'NEUTRAL';
  abilities: string[];
}

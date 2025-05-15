export default interface IMutant {
  id: string;
  name: string;
  category: string;
  side: "good" | "evil" | "neutral";
  abilities: string[];
}

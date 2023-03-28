export default interface CharactersInterface {
  id: string;
  title:string;
  name: string;
  description: string;
  series: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

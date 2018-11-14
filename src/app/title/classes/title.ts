export class Title {
  id: number;
  name: string;
  abbreviation: string;
  description: string;

  constructor(id?: number, name?: string, abbreviation?: string, description?: string) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.abbreviation = abbreviation ? abbreviation : '';
    this.description = description ? description : '';
  }
}

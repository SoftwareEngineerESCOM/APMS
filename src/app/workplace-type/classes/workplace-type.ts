export class WorkplaceType {
  id: number;
  name: string;
  abbreviation: string;
  description: string;

  constructor(id?: number, name?: string, abbreviation?: string, description?: string) {
    this.id = id;
    this.name = name;
    this.abbreviation = abbreviation;
    this.description = description;
  }
}

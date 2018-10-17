export class User {
  public id: number;
  public name: string;
  public role: string;

  constructor(id: number, name: string, role: string) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
}

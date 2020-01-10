export class Node {
  constructor(name?: string, id?: string) {
    this.id = id || "";
    this.name = name || "";
  }

  id!: string;
  name!: string;
}

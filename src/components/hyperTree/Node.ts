export class Node {
  constructor(name?: string, id?: string) {
    this.id = id || "";
    this.name = name || "";
  }

  id!: string;
  name!: string;
  code!: string;
  parentId!: string;
  index: number = 0;
  level: number = 0;
  show: boolean = true;
  showChildren: boolean = true;
}

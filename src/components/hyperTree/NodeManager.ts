import { Node } from "./Node";
import { NodeCodeGenerate } from "./NodeCodeGenerate";

export class NodeManager {
  private _nodeCodeGenerate: NodeCodeGenerate;

  constructor(nodeCodeGenerate: NodeCodeGenerate) {
    this._nodeCodeGenerate = nodeCodeGenerate;
  }

  public GenerateNode(
    node: Node,
    parentNode: Node | null,
    index: number
  ): Node {
    node.index = index;
    if (parentNode === null) {
      node.code = index.toString();
    } else {
      node.code = this._nodeCodeGenerate.MergeCode(
        parentNode.code,
        index.toString()
      );
    }

    node.level = node.code.split(".").length;
    return node;
  }
}

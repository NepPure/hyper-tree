import _ from "lodash";
import { Node } from "./Node";
import { NodeManager } from "./NodeManager";
import { NodeCodeGenerate } from "./NodeCodeGenerate";

export class TreeMockHelper {
  private _nodeManager: NodeManager;
  private _globalId: number = 1;

  constructor() {
    this._nodeManager = new NodeManager(new NodeCodeGenerate());
  }

  /**
   * 构造树
   * @param rootLength 根节点数量
   * @param length 每个节点下数量
   * @param level 层级深度
   */
  public CreateTree(rootLength: number, length: number, level: number): Node[] {
    if (level < 1) {
      return [];
    }

    let nodes: Node[] = [];
    for (let index = 0; index < rootLength; index++) {
      let curNode = this.CreateNode(index + 1, null);
      nodes.push(curNode);

      if (level > 1) {
        nodes = nodes.concat(
          this.CreateChildrenNode(curNode, length, level - 1)
        );
      }
    }

    return nodes;
  }

  private CreateChildrenNode(
    parentNode: Node,
    length: number,
    level: number
  ): Node[] {
    let nodes: Node[] = [];

    for (let index = 0; index < length; index++) {
      let curNode = this.CreateNode(index + 1, parentNode);
      nodes.push(curNode);
      if (level > 1) {
        nodes = nodes.concat(
          this.CreateChildrenNode(curNode, length, level - 1)
        );
      }
    }

    return nodes;
  }

  private CreateNode(index: number, parentNode: Node | null) {
    let id = this._globalId++;
    let node = new Node(`node-${id}`, id.toString());
    node = this._nodeManager.GenerateNode(node, parentNode, index);
    return node;
  }
}

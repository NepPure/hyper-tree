<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { Node } from "./Node";
import { TreeMockHelper } from "./TreeMockHelper";
import _ from "lodash";

Vue.use(VueVirtualScroller);

@Component
export default class HyperTree extends Vue {
  @Prop() private msg!: string;

  list: Node[] = [];
  rootLength: number = 3;
  length: number = 3;
  level: number = 3;
  selectNode: Node = new Node();
  $Spin!: any;

  constructor() {
    super();
  }

  mounted() {
    this.CreateTree();
  }

  get total() {
    return (
      this.rootLength *
      ((Math.pow(this.length, this.level) - this.length) / (this.length - 1) +
        1)
    );
  }

  get showNode() {
    return _.filter(this.list, node => node.show);
  }

  get selectNodeJson() {
    return JSON.stringify(this.selectNode);
  }

  nodeClick(node: Node) {
    this.$Spin.show();
    setTimeout(() => {
      this.selectNode = node;
      node.showChildren = !node.showChildren;
      _.each(this.list, m => {
        if (_.startsWith(m.code, node.code + ".")) {
          m.show = node.showChildren;
        }
      });
      this.$Spin.hide();
    }, 10);
  }

  CreateTree() {
    this.$Spin.show();
    setTimeout(() => {
      let treeMockHelper = new TreeMockHelper();
      this.list = treeMockHelper.CreateTree(
        this.rootLength,
        this.length,
        this.level
      );
      this.$Spin.hide();
    }, 10);
  }
}
</script>

<template src="./HyperTree.html"></template>

<style scoped>
.scroller {
  height: 600px;
}

.node {
  height: 20px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.node-icon {
  transition: all 0.2s ease-in-out;
}

.node:hover {
  background-color: #5cadff;
}
</style>

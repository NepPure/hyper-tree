<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { Node } from "./Node";
import { TreeMockHelper } from "./TreeMockHelper";

Vue.use(VueVirtualScroller);

@Component
export default class HyperTree extends Vue {
  @Prop() private msg!: string;

  list: Node[] = [];
  rootLength: number = 3;
  length: number = 3;
  level: number = 3;

  constructor() {
    super();
  }

  mounted() {
    this.CreateTree();
  }

  CreateTree() {
    let treeMockHelper = new TreeMockHelper();
    this.list = treeMockHelper.CreateTree(
      this.rootLength,
      this.length,
      this.level
    );
  }
}
</script>

<template src="./HyperTree.html"></template>

<style scoped>
.scroller {
  height: 600px;
}

.user {
  height: 20px;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>

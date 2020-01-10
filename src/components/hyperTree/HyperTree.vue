<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { Node } from "./Node";

Vue.use(VueVirtualScroller);

@Component
export default class HyperTree extends Vue {
  @Prop() private msg!: string;

  list: Node[] = [];

  constructor() {
    super();
    for (let index = 0; index < 100000; index++) {
      this.list.push(new Node(`name-${index}`, `id-${index}`));
    }
  }
}
</script>

<template src="./HyperTree.html"></template>

<style scoped>
.scroller {
  height: 200px;
}

.user {
  height: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>

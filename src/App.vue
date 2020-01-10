<template>
  <div id="app">
    <HyperTree :msg="123"></HyperTree>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HyperTree from "./components/hyperTree/HyperTree.vue";

@Component({
  components: {
    HyperTree
  }
})
export default class App extends Vue {}
</script>

<style></style>

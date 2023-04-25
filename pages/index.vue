<template>
  <div id="index">
    <Header />
    <Presentation />
    <Products />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    useHead({
      title: "Olivie - NATURAMedicatrix",
    });
  },
});
</script>

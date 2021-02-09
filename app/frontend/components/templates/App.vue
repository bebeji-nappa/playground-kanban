<template>
  <div>
    <h1 class="uk-heading-large">
      {{ hello }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "App",
  data() {
    return {
      hello: "Hello, world!",
    }
  },
})
</script>

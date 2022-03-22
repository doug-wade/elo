<template>
  <div>
    <EloHeader></EloHeader>
    <HelloWorld />
    <EloFooter></EloFooter>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import EloFooter from '@/components/EloFooter.vue'
import EloHeader from '@/components/EloHeader.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    EloFooter,
    EloHeader,
    HelloWorld,
  },
})
</script>

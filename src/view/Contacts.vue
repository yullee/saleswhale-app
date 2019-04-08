<template>
  <section>
    <container :title="title" :icon="icon" :create="false"/>
  </section>
</template>

<script>
import container from '@/controller/Container/Container.vue';

export default {
  components: {
    container,
  },
  data() {
    return {
      title: 'Contact',
      icon: 'icon-leads-small.svg',
    };
  },
};
</script>

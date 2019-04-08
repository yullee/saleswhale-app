<template>
  <section>
    <container :title="title" :icon="icon" :create="true" />
    <team-container />
  </section>
</template>

<script>
import container from '@/controller/Container/Container.vue';
import teamContainer from '@/controller/Team/TeamContent/TeamContainer.vue';

export default {
  components: {
    container,
    teamContainer,
  },
  data() {
    return {
      title: 'Teams',
      icon: 'icon-companies.svg',
    };
  },
};
</script>

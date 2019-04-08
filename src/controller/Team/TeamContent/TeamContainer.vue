<template>
  <section class="navigation-top">
    <tabs class="tabs">
      <tab name="All" :selected="true">
        <team-cards :contents="filtered" />
      </tab>
      <tab name="Favorites" :selected="false">
        <team-cards :contents="isFavorited" />
      </tab>
      <tab name="Archieved" :selected="false">
        <team-cards :contents="isArchived" />
      </tab>
    </tabs>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import tabs from '@/controller/Team/Tabs/Tabs.vue';
import tab from '@/components/UI/Tab/Tab.vue';
import teamCards from '@/controller/Team/TeamContent/TeamCards.vue';

export default {
  components: {
    tabs,
    tab,
    teamCards,
  },
  data() {
    return {
      title: 'NARWHAL',
    };
  },
  computed: {
    ...mapState({
      teams(state) {
        return state.teams;
      },
      active(state) {
        return state.active;
      },
      activities(state) {
        return state.activities;
      },
      filtered(state) {
        return state.filtered;
      },
    }),
    isArchived() {
      // find is_archived
      return this.teams.filter(team => team.is_archived);
    },
    isFavorited() {
      // find is_favorited
      return this.teams.filter(team => team.is_favorited);
    },
  },
};
</script>

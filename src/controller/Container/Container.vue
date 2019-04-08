<template>
  <section>
    <navigation-title :title="title" />
    <team-create v-show="create" :title="title" :icon="icon" />
    <spinner v-if="!isTeamLoaded && !isActivityLoaded" class="spinner" />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import navigationTitle from '@/controller/Container/Navigation/NavigationTitle.vue';
import teamCreate from '@/controller/Team/TeamContent/TeamCreate.vue';
import spinner from '@/components/UI/Spinner/Spinner.vue';

export default {
  components: {
    navigationTitle,
    teamCreate,
    spinner,
  },
  created() {
    this.$http.get('https://saleswhale-app.firebaseio.com/teams.json').then((res) => {
      let count = 1;
      const arr = [];
      // get a res data from Firebase and assign a hashedKey to data
      for (const key in res.data) {
        res.data[key].key = count++;
        res.data[key].hashedKey = key;
        arr.push(res.data[key]);
      }
      this.setTeams(arr); // set res.data with hashedKey to vuex data
      this.setFiltered(arr);
      this.isTeamLoaded = true; // track loading status to update spinner
    });

    this.$http.get('https://saleswhale-app.firebaseio.com/activities.json').then((res) => {
      this.setActivities(res.data);
      this.isActivityLoaded = true;
      this.setShow(this.isActivityLoaded);
    });

    this.$http.get('https://saleswhale-app.firebaseio.com/current_user.json').then((res) => {
      this.setUser(res.data);
    });
  },
  data() {
    return {
      isTeamLoaded: false,
      isActivityLoaded: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    create: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState({
      teams(state) {
        return state.teams;
      },
      activities(state) {
        return state.activities;
      },
    }),
  },
  methods: {
    ...mapActions({
      setTeams: 'setTeams',
      setActivities: 'setActivities',
      setUser: 'setUser',
      setShow: 'setShow',
      setFiltered: 'setFiltered',
    }),
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

section {
display: flex;
flex-direction: column;
flex: 1;
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .last-section {
    background: $white;
    margin: 30px;
  .team {
    display: flex;
    flex-direction: row;
    flex-flow: row-wrap;
    flex-wrap: wrap; // important
    justify-content: flex-start;
    .card {
      width: 300px;
      height: 200px;
      margin: 30px;
      background: $white;
      display: flex;
      flex-direction: row;
      // justify-content: space-around;
      flex-flow: row wrap;
      justify-content: flex-start;
    }
  }
  }
}
</style>

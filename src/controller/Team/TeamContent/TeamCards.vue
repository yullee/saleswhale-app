<template>
  <div class="contents" v-if="show">
    <div class="team-content">
      <div class="team-title">
        <typography class="info" xs="xs-auto" sm="sm-auto" bold="bold">
          {{ tabName }}
        </typography>
        <typography class="info" xs="xxs-auto" sm="xs-auto" grey="grey">
          {{ teamLength }}
        </typography>
      </div>
      <div class="team">
        <!-- pass the index of selected contents -->
        <team-card class="card" v-for="(content, i) in contents" :key="i" :value="content.id - 1" />
      </div>
    </div>
    <div class="activities-content">
      <div class="activity-title">
        <typography class="info" xs="xs-auto" sm="sm-auto" bold="bold">Activities</typography>
      </div>
      <div class="activities">
        <activity-card class="card"
          v-for="(activity, i) in activities"
          :key="i"
          :value="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import teamCard from '@/controller/Team/Cards/CardTeam.vue';
import activityCard from '@/controller/Team/Cards/CardActivity.vue';

export default {
  components: {
    teamCard,
    activityCard,
  },
  props: {
    contents: {
      type: Array,
      default() {
        return [];
      },
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
      show(state) {
        return state.show;
      },
      tab(state) {
        return state.tab;
      },
    }),
    tabName() {
      if (this.tab === 'All') return `${this.tab} Teams`;
      return this.tab;
    },
    teamLength() {
      // display the length
      return `Showing ${this.contents.length} out of ${this.teams.length} teams`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.contents {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  .team-content {
    background: $white;
    flex: 0.7;
    margin: 42px 0px 42px 42px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1), 0px 0px;
    .team-title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid $lightgrey;
      align-items: center;
      padding: 30px;
      margin-bottom: 14px;
    }
    .team {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0px 16px 16px 8px;
      .card{
        margin: 8px 7px 8px 14px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .activities-content {
    background: $white;
    margin: 42px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1), 0px 0px;
    flex: 0.3;
    .activity-title {
      display: flex;
      flex-direction: row;
      // height: 40px;
      border-bottom: 1px solid $lightgrey;
      align-items: center;
      padding: 30px;
    }
    .card{
      margin: 20px;
    }
  }
}

@media screen and (max-width: 700px){
  .contents{
    display: flex;
    .team-content {
      width: 100%;
      justify-content: center;
      margin: 42px 0px 0px 0px;
      flex-direction: column;
      flex: 1;
      .team {
        .card {
          margin: 3px;
        }
      }
    }
    .activities-content {
      width: 100%;
      margin: 42px 0px;
      justify-content: center;
      flex-direction: column;
      flex: 1;
    }
  }
}
</style>

<template>
  <div class="activity-card">
    <div class="avatar">
      <img :src="activities[value].person.avatar" alt="">
    </div>
    <div class="activity">
      <div>
        <typography class="info" xs="xxs-auto" sm="xs-auto" bold="bold"
          cardgrey="cardgrey">
          {{ activities[value].person.name }}
        </typography>
        <typography class="info" xs="xxs-auto" sm="xs-auto" cardgrey="cardgrey">
          <!-- bold certain words in a sentence -->
          <span v-html="detail"></span>
        </typography>
      </div>
      <div class="hours">
        <typography class="info" xs="xxs-auto" sm="xs-auto" grey="grey">
          {{ activities[value].created_at }}
        </typography>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState({
      // access to activities.json
      activities(state) {
        return state.activities;
      },
    }),
    detail() {
      // modify the activity detail string
      const str = this.activities[this.value].action.split('_')[0];
      if (str === 'increased') return this.activities[this.value].action.replace('_', ` <b>${this.activities[this.value].target}</b>'s `);
      if (str === 'added') return `${this.activities[this.value].action.replace('_', ' new ')} to <b>${this.activities[this.value].target}</b>`;
      return `${this.activities[this.value].action.replace('_', ' the ')} <b>${this.activities[this.value].target}</b>`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.activity-card {
  display: flex;
  flex-direction: row;
  .avatar img {
    width: 36px;
    border-radius: 18px;
    margin-right: 15px;
  }
  .activity {
    display: flex;
    flex-direction: column;
  }
}
</style>

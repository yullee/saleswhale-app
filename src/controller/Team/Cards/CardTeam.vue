<template>
  <div class="team-card">
    <div class="team-row" >
      <div class="team-about">
        <div class="team-img">
          <img :src="teams[value].image" alt="">
        </div>
        <div class="team-info">
          <typography xs="xs-auto" sm="sm-auto" bold="bold" cardgrey="cardgrey">
            {{ teams[value].name }}
          </typography>
          <typography class="info" xs="xxs-auto" sm="xs-auto" grey="grey">
            {{ createdDate }}
          </typography>
        </div>
      </div>
      <div class="favorite">
        <custom-icon class="button-icon" sm="sm"
          @click.native="updateFavorites(teams[value])"
          :icon-class="getFavoriteButton(value)"
        />
      </div>
    </div>
    <div class="description">
      <div>
        <typography xs="xxs-auto" sm="xs-auto" descolor="descolor">
          {{ descriptionEllip }}
        </typography>
      </div>
    </div>
    <div class="campaigns-leads">
      <custom-icon class="icon" icon-class="icon-conversations-small.svg" sm="sm" />
      <div class="text">
        <typography xs="xxs-auto" sm="xs-auto" descolor="descolor">
          {{ campaignsCount }}
        </typography>
      </div>
      <custom-icon class="icon" icon-class="icon-leads-small.svg" sm="sm" />
      <div class="text">
        <typography xs="xxs-auto" sm="xs-auto" descolor="descolor">
          {{ leadsCount }}
        </typography>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState({
      teams(state) {
        return state.teams;
      },
    }),
    campaignsCount() {
      return `${this.teams[this.value].campaigns_count.toLocaleString()} Campaigns`;
    },
    leadsCount() {
      return `${this.teams[this.value].leads_count.toLocaleString()} Leads`;
    },
    // truncate a string and replace it with ...
    descriptionEllip() {
      let str = this.teams[this.value].description;
      if (str.length > 77) str = `${str.trim().substring(0, 77)}...`;
      return str;
    },
    // differentiate archived and created
    createdDate() {
      if (this.teams[this.value].is_archived) return `Archived on ${this.teams[this.value].created_at}`;
      return `Created on ${this.teams[this.value].created_at}`;
    },
  },
  methods: {
    ...mapActions({
      setTeams: 'setTeams',
    }),
    // update favorites status
    updateFavorites(obj) {
      const firebaseRef = `https://saleswhale-app.firebaseio.com/teams/${obj.hashedKey}/is_favorited.json`;
      this.setTeams = this.teams.map((team) => {
        if (team.key === obj.key) {
          if (team.is_favorited) team.is_favorited = false;
          else team.is_favorited = true;
          this.$http.put(firebaseRef, team.is_favorited).then((res) => {
            if (res.status === 200) {
              if (team.is_favorited) this.notified(obj.key);
              else this.notifiedDeselect(obj.key);
            }
          });
        }
        return team;
      });
    },
    notified(key) {
      this.$notify({
        group: 'foo',
        title: 'Saved',
        text: `${this.teams[key - 1].name} is favorited.`,
      });
    },
    notifiedDeselect(key) {
      this.$notify({
        group: 'foo',
        title: 'Saved',
        text: `${this.teams[key - 1].name} is unfavorited.`,
      });
    },
    getFavoriteButton(value) {
      if (this.teams[value].is_favorited) return 'star-active.svg';
      return 'star-default.svg';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.team-card {
  display: flex;
  border: 1px solid $bordercolor;
  border-radius: 4px;
  flex-direction: column;
  .team-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; //important
    margin: 16px;
    .team-about {
      display: flex;
      flex-direction: row;
    }
    .team-info {
      display: flex;
      flex-direction: column; // important
    }
    .favorite {
      display: flex;
      align-self: flex-start; // stick to the top row
      cursor: pointer;
    }
    .team-img {
      img {
        margin-right: 9px;
        width: 36px;
        border-radius: 4px;
      }
    }
  }
  .description {
    div {
      margin: 0px 16px;
      display: block;
      width: 300px;
      height: 60px;
      max-width: 100%;
    }
  }
  .campaigns-leads {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid $lightgrey;
    padding: 20px 0px 20px 16px;
    .icon {
      margin-right: 6px;
    }
    .text {
      margin-right: 16px;
    }
  }
}
.team-card:hover {
  background: $cardbackground;
}
@media screen and (max-width: 800px) {
  .team-card {
    width: 100%;
  }
}
</style>

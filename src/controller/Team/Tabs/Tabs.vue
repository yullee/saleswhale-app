<template>
  <div class="tab-container">
    <div class="tabs">
      <ul class="tab-content">
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click.prevent="selectTab(tab)">
            <div :class="{ 'tab-name': tab.isActive }">{{ tab.name }}</div>
            <div :class="getTabbed(tab.isActive)"></div>
          </a>
        </li>
      </ul>
      <div class="search-content">
        <custom-icon class="button-icon" icon-class="icon-search.svg"></custom-icon>
        <input type="search" name="search" v-model="search"
          id="search-team" placeholder="Search team name..."
        >
      </div>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  components: {
  },
  created() {
    this.tabs = this.$children;
  },
  data() {
    return {
      tabs: [],
      search: '',
    };
  },
  computed: {
    ...mapState({
      filtered(state) {
        return state.filtered;
      },
      teams(state) {
        return state.teams;
      },
    }),
  },
  watch: {
    search: 'filterList',
  },
  methods: {
    ...mapActions({
      setTab: 'setTab',
      setFiltered: 'setFiltered',
    }),
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (tab.name === selectedTab.name);
        this.setTab(selectedTab.name);
      });
    },
    getTabbed(val) {
      if (val) return 'bar';
      return 'bar-deselect';
    },
    filterList() {
      if (!this.search) {
        this.setFiltered(this.teams);
      } else {
        this.setFiltered(
          this.teams.filter(team => team.name.toLowerCase().includes(this.search.toLowerCase())),
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.tab-container {
  display: flex;
  flex-direction: column;
  .tabs {
    display: flex;
    flex-direction: row;
    height: 40px;
    background: $white;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    justify-content: space-between;
    -webkit-box-shadow: 0 4px 6px -6px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 4px 6px -6px rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px -6px rgba(0, 0, 0, 0.1);
    .search-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 40px;
      input {
        border: none;
      }
      input:hover, input:focus {
        outline: none;
      }
      .button-icon {
        width: 16px;
        margin-right: 10px;
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: flex-end;
    }
    ul > li {
      display: inline-flex;
      flex-direction: row;
      margin: 0px 15px;
      text-decoration: none;
      .bar {
        height: 2px;
        display: flex;
        margin-top: 10px;
        background: $blue;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
      .bar-deselect {
        height: 12px;
        display: flex;
      }
      .tab-name {
        color: $blue;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
      }
    }
    ul > li:not(:first-child) {
      margin-right: 25px;
    }
    ul > li > a {
      text-decoration: none;
      color: #fff;
    }
  }
}
// 600px wide or less
@media screen and (max-width: 600px){
  .tab-container {
    display: flex;
    justify-content: center;
  .search-content {
      background: $white;
      margin-right: 0px;
      padding: 10px;
      flex-basis: 100%;
      z-index: 100;
      input {
        height: 20px;
      }
      input:hover, input:focus {
        outline: none;
      }
    }
  }
}
</style>

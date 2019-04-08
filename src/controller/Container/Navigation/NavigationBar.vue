<template>
  <div class="nav-left">
    <div>
      <router-link :to="link.link" v-for="(link) in links" :key="link.id" class="li">
        <custom-icon class="icons" :icon-class="link.icon" />
      </router-link>
    </div>
    <div>
      <router-link to="help" class="li">
        <custom-icon class="icons" md="md" icon-class="icon-help.svg" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          link: '/',
          icon: 'sw-logo-white.svg',
        },
        {
          id: 2,
          link: '/chat',
          icon: 'icon-campaign.svg',
        },
        {
          id: 3,
          link: '/team',
          icon: 'icon-teams.svg',
        },
        {
          id: 4,
          link: '/contacts',
          icon: 'icon-leads.svg',
        },
        {
          id: 5,
          link: '/reports',
          icon: 'icon-reports.svg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.nav-left {
  z-index: 2000;
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: $darkblue;
  box-shadow: inset -4px 0px 4px rgba(2, 15, 24, 0.569466), inset 0px 1px 3px rgba(0, 0, 0, 0.5);
  justify-content: space-between;
  .li {
    display: flex;
    flex-direction: column;
    padding: 3px;
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 60px;
    }
  }
}
</style>

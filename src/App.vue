<template>
  <div id="app">
    <div id="nav">
      <div class="col-1">
        <navigation-bar />
      </div>
      <div class="col-2">
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <notifications group="foo" position="bottom right" />
  </div>
</template>

<script>
import navigationBar from '@/controller/Container/Navigation/NavigationBar.vue';

export default {
  components: {
    navigationBar,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/color.scss';

@font-face {
  font-family: ProximaNovaRegular;
  src: url('assets/fonts/ProximaNovaRegular.otf');
}
html, body {
  all: unset;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f2f2f2;
  font-family: 'ProximaNovaRegular';
}
#nav {
  display: flex;
  height: 100vh;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      background: $blue;
      -webkit-transition: background-color 500ms linear;
      -ms-transition: background-color 500ms linear;
      transition: background-color 500ms linear;
    }
  }
  .col-1 {
    flex-direction: column;
    flex-grow: 0;
  }
  .col-2 {
    flex-direction: column;
    flex: 1;
    flex-grow: 5;
    overflow: auto;
    .component-fade-enter-active, .component-fade-leave-active {
      transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
      opacity: 0;
    }
  }
}
</style>

<template>
  <section class="navigation-top">
    <div class="divider">
      <div class="narwhal">
        <a href="https://saleswhale-app.firebaseapp.com/">
          <typography xs="xs-auto" sm="sm-auto"
            bold="bold" grey="grey"
          >
            {{ team }}
          </typography>
        </a>
      </div>
      <div class="link-title">
        <typography xs="xs-auto" sm="sm-auto">{{ title }}</typography>
      </div>
    </div>

    <div class="user-info">
      <custom-icon class="notification" smd="smd" icon-class="icon-mail.svg" />
      <div v-show="notifications" class="notifications-count">
        <typography xs="smallest-auto" sm="xxs-auto"
          white="white" bold="bold"
        >
          {{ this.user.notifications_count }}
        </typography>
      </div>

      <typography class="info" xs="xxs-auto" sm="xs-auto"
        bold="bold" grey="grey">Hello, {{ user.name }}
      </typography>
      <img class="info" :src="user.avatar" alt="" width="36px" />
      <custom-icon class="caret" icon-class="caret-down.svg" xs="xs" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      team: 'NARWHAL',
    };
  },
  computed: {
    ...mapState({
      user(state) {
        return state.user;
      },
    }),
    notifications() {
      if (this.user.notifications_count > 0) return true;
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.navigation-top {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  background: $white;
  color: $black;
  border-bottom: 1px solid $lightgrey;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  .divider {
    display: flex;
    flex-direction: row;
    .narwhal {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 41px;
      color: $darkgrey;
      border-right: 1px solid $lightgrey;
      height: 60px;
      a {
        text-decoration: none;
      }
    }
    .link-title {
      display: flex;
      align-items: center;
      margin: 0px 27px;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    .notification {
      margin-right: 22px;
      display: inline-flex;
    }
    .notifications-count {
      display: inline-block;
      transform: translate(-200%, -60%);
      width: 16px;
      height: 16px;
      line-height: 14px;
      border-radius: 50%;
      background: $blue;
      text-align: center;
      }
    .info {
      margin-right: 8px;
    }
    .caret {
      margin-right: 40px;
    }
    img {
      border-radius: 18px;
    }
  }
}
// 600px wide or less
@media screen and (max-width: 600px){
  .navigation-top {
    display: flex;
    max-height: 200px;
    justify-content: center;
      .user-info {
        padding: 10px 0px;
        display: flex;
        border-top: 1px solid $lightgrey;
        justify-items: center;
        .caret {
          margin-right: 10px;
        }
      }
    }
}
</style>

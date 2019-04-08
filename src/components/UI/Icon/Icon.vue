<template>
  <div class="icon-container">
    <img :src="require(`@/assets/img/${iconClass}`)" :class="[iconSize]" alt="" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    grey: {
      type: String,
      default: null,
    },
    xs: {
      type: String,
      default: null,
    },
    sm: {
      type: String,
      default: null,
    },
    smd: {
      type: String,
      default: null,
    },
    md: {
      type: String,
      default: null,
    },
    lg: {
      type: String,
      default: null,
    },
  },
  computed: {
    iconSize() {
      const {
        xs, sm, md, smd,
      } = this;
      if (xs) return 'xs';
      if (sm) return 'sm';
      if (smd) return 'smd';
      if (md) return 'md';
      return 'lg';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.icon-container {
  display: flex;
  justify-content: center;
  align-content: center;
  .xs {
    width: 10px;
    height: 10px;
  }
  .sm {
    width: 16px;
    height: 15px;
  }
  .smd {
    width: 22px;
    height: 22px;
  }
  .md {
    width: 26px;
    height: 26px;
  }
  .lg {
    width: 34px;
    height: 34px;
  }
}
</style>

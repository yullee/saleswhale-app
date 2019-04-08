<template>
  <div>
    <button
      :class="[buttonClass]"
      :style="{ width }"
      @click="click"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
const getDefaultClass = () => 'default-button';
const getXs = component => (component.xs ? component.xs : getDefaultClass(component));
const getSm = component => (component.sm ? component.sm : getXs(component));

export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    xs: {
      type: String,
      default: null,
    },
    sm: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: 'auto',
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  created() {
    this.setBreakPoint(window.innerWidth);
    window.addEventListener('resize', (e) => {
      const { innerWidth } = e.target;
      this.setBreakPoint(innerWidth);
    });
  },
  data() {
    return {
      breakpoint: window.innerWidth,
    };
  },
  computed: {
    buttonClass() {
      const component = this;
      switch (this.breakpoint) {
        case 'xs':
          return getXs(component);
        case 'sm':
          return getSm(component);
        default:
          return getDefaultClass(component);
      }
    },
  },
  methods: {
    setBreakPoint(innerWidth) {
      if (innerWidth < 600) this.breakpoint = 'xs';
      else this.breakpoint = 'sm';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

%base-button {
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 4px;
  font-weight: regular;
  background: $mint;
  padding: 0;
  width: 100%;
  white-space: nowrap;
  margin: 3px;
  cursor: pointer;
  border: none;
  outline: none;
}
.xs-button {
  @extend %base-button;
  height: 30px;
  font-size: 0.65rem;
}
.sm-button {
  @extend %base-button;
  height: 33px;
  font-size: 0.7rem;
}
.md-button {
  @extend %base-button;
  height: 36px;
  font-size: 0.75rem;
}
.lg-button {
  @extend %base-button;
  height: 39px;
  font-size: 0.8rem;
}
.default-button {
  @extend %base-button;
  height: 27px;
  font-size: 0.6rem;
}
.xs-button:hover, .sm-button:hover, .md-button:hover, .lg-button:hover, .default-button:hover {
  background: $minthover;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>

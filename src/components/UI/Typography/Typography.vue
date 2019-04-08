<template>
  <!-- auto resize on window size change -->
  <!-- set font weight and color -->
  <span :class="[typographyClass, typographyWeight, typographyColor]"
    :style="{ width: width }"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
const getDefaultClass = () => 'default-typography';
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
    bold: {
      type: String,
      default: null,
    },
    regular: {
      type: String,
      default: null,
    },
    grey: {
      type: String,
      default: null,
    },
    lightgrey: {
      type: String,
      default: null,
    },
    darkgrey: {
      type: String,
      default: null,
    },
    cardgrey: {
      type: String,
      default: null,
    },
    opacblack: {
      type: String,
      default: null,
    },
    white: {
      type: String,
      default: null,
    },
    descolor: {
      type: String,
      default: null,
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
    typographyClass() {
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
    typographyWeight() {
      const { bold } = this;
      if (bold) return 'bold';
      return 'regular';
    },
    typographyColor() {
      const {
        grey, opacgrey, cardgrey, darkgrey, opacblack, white, descolor,
      } = this;
      if (grey) return 'grey';
      if (darkgrey) return 'darkgrey';
      if (opacgrey) return 'opacgrey';
      if (cardgrey) return 'cardgrey';
      if (opacblack) return 'opacblack';
      if (descolor) return 'descolor';
      if (white) return 'white';
      return 'black';
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
@import '@/assets/scss/font-weight.scss';

%base-typography {
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  white-space: wrap;
}
.regular {
  font-weight: $regular;
}
.bold {
  font-weight: $bold;
}
.smallest-auto {
  @extend %base-typography;
  font-size: 0.7rem;
}
.xxs-auto {
  @extend %base-typography;
  font-size: 0.8rem;
}
.xs-auto {
  @extend %base-typography;
  font-size: 0.9rem;
}
.sm-auto {
  @extend %base-typography;
  font-size: 1.0rem;
}
.md-auto {
  @extend %base-typography;
  font-size: 1.3rem;
}
.lg-auto {
  @extend %base-typography;
  font-size: 1.5rem;
}
.default-typography {
  @extend %base-typography;
  font-size: 1.0rem;
}
.opacgrey {
  color: $icongrey;
}
.opacblack {
  color: $black;
  opacity: 0.5;
}
.cardgrey {
  color: $cardgrey;
}
.grey {
  color: $searchgrey;
}
.darkgrey {
  color: $darkgrey;
}
.black {
  color: $black;
}
.white {
  color: $white;
}
.descolor {
  color: $descolor;
}
</style>

import Vue from "vue";

const tools = {
  template: "#slider-tools",
};

const thumbs = {
  template: "#slider-thumbs",
};

const buttons = {
  template: "#slider-buttons",
};

const info = {
  template: "#slider-description",
  components: {
    tools
  }
};

const display = {
  template: "#slider-display",
  components: {
    thumbs,
    buttons
  },
};

new Vue ({
  el: "#slider-component",
  template: "#works-slider",
  components: {
    display,
    info
  },
});
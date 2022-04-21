import Vue from "vue";

const tools = {
  template: "#slider-tools",
};

const thumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array
  }
};

const buttons = {
  template: "#slider-buttons",
};

const info = {
  template: "#slider-description",
  components: {
    tools
  },
  props: {
    currentWork: Object
  }
};

const display = {
  template: "#slider-display",
  components: {
    thumbs,
    buttons
  },
  props: {
    works: Array,
    currentWork: Object
  }
};

new Vue ({
  el: "#slider-component",
  template: "#works-slider",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentWork: {}
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/portfolio/${item.photo}`);
        item.photo = requiredPic['default']; 

        return item;
      })
    },
    handleSlide(direction) {
      console.log(direction);
    }
  },
  created() {
    const data = require('../data/works.json')
    this.works = this.makeArrWithRequiredImages(data);
    this.currentWork = this.works[0];
  }
});
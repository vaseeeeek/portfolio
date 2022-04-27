import Vue from "vue";

const tools = {
  template: "#slider-tools",
  props: {
    tagsArray: Array
  }
};

const thumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array,
    currentWork: Object
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
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(',');
    }
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
    currentWork: Object,
    currentIndex: Number
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
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex (value) {
      this.makeInfiniteLoopForCurIndex(value);
    }
  },
  methods: {
    makeInfiniteLoopForCurIndex (value) {
      const amountWorks = this.works.length - 1;
      if (value > amountWorks) {
        this.currentIndex = 0
      }
      if (value < 0) {
        this.currentIndex = amountWorks
      }
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/portfolio/${item.photo}`);
        item.photo = requiredPic['default']; 

        return item;
      })
    },
    handleSlide(direction) {
      switch (direction) {
        case 'next' :
          this.currentIndex--;
          break
        case 'prev' :
          this.currentIndex++;
          break
      }
    }
  },
  created() {
    const data = require('../data/works.json');
    this.works = this.makeArrWithRequiredImages(data);
  }
});
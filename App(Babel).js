const ProgressRing = Vue.component('progress-ring', {
  props: {
    radius: Number,
    progress: Number,
    stroke: Number
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    
    return {
      normalizedRadius,
      circumference
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - this.progress / 100 * this.circumference;
    }
  },
  template: '#progress-ring-template'
});

  
// launch example with progress ring
new Vue({
  el: '#example',
  components: {
    'progress-ring': ProgressRing
  },
  data() {
    return { progress: 0, interval: null }
  },
  watch : {
    progress: function(val) {
      document.body.style.background = `hsl()`
    }
  },
  methods: {
    setProgress(value) {
      this.progress = value;
    },
    autoDemo(){
      this.progress = 0;
      clearInterval(this.interval);
      // emulating progress
      this.interval = setInterval(() => {
        this.progress += 10;
        if (this.progress >= 100) {
          this.progress = 100;
          clearInterval(this.interval);
        }
      }, 500);      
    }
  },
  mounted() {
    this.autoDemo();
  }
});


<template>
  <div class="num-box">
    <transition>
      <img 
        class="reduce" 
        @click="reduce"
        src="../../assets/images/reduce.png" 
        v-show="isBuy"
      >
    </transition>
    <span>{{ number }}</span>
    <img 
      class="add" 
      @click="add"
      src="../../assets/images/add.png" 
    >
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      number: 0,
      isBuy: false,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  components: {},
  methods: {
    add() {
      this.isBuy = true;
      this.number++;
      this.$emit('numberAdd', this.number);
    },
    reduce() {
      this.number--;
      if(this.number <=0 ) {
        this.isBuy = false;
      }
      this.$emit('numberReduce', this.number);
    }
  }
};
</script>
<style lang="scss" scoped>
.num-box {
  display: flex;
  position: relative;
  width: 100%;
  img {
    width: 35px;
    height: 35px;
    align-items: center;
    position: absolute;
    
  }
  .add {
    right: 20px;
  }
  .reduce {
    right: 100px;
  }
  span {
    position: absolute;
    right: 67px;
    bottom: -30px;
  }
  .v-enter {
    opacity: 0;
    right: 50px;
    transform: rotate(360deg);
  }
  .v-enter-active {
    transition: all .5s ease;
  }
}
</style>
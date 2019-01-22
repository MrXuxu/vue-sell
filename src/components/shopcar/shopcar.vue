<template>
  <div class="shopcar">
    <div class="car">
      <span class="number">{{ this.$store.getters.nums }}</span>
      <i class="iconfont icon-cart"></i>
    </div>
    <div class="price">
      <span>￥{{ this.$store.getters.tatolPrice }}</span>
      <span>另需配送费￥4元</span>
      <span v-if="20-this.$store.getters.tatolPrice>0">￥20元起送</span>
      <span v-if="20-this.$store.getters.tatolPrice<=0" class="pay" @click="dialog">去结算</span>
    </div>
    
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  components:{},
  methods:{
    dialog() {
      Dialog.alert({
        title: '支付',
        message: '您需要支付' + (this.$store.getters.tatolPrice + 4) +'元'
      }).then(() => {
        // on close
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.shopcar {
  position: absolute;
  bottom: 0;
  display: flex;
  height: 100px; width: 100%;
  align-items: center;
  background-color: #000;
  color: #fff;
  .car {
    position: relative;
    i {
      color: #fff;
      font-size: 70px;
      display: inline-block;
      padding: 10px;
      background-color: #00A0DC;
      border: 10px solid #000;
      border-radius: 50%;
      position: relative;
      bottom: 20px; left: 50px;
    }
    .number {
      position: absolute;
      display: inline-block;
      text-align: center;
      line-height: 30px;
      width: 30px; height: 30px;
      right: -6.2vw; top: -10px;
      z-index: 2;
      // padding: 15px;
      font-size: 18px;
      border-radius: 50%;
      color: #fff; background: red;
    }
  }
  .price {
    margin-left: 60px;
    width: 100%;
    height: 100%;
    line-height: 100px;
    // color: #333;
    font-size: 28px;
    span {
      &:first-of-type {
        font-weight: bold;
        
        margin-left: 10px;
        margin-right: 30px;
      }
      &:last-of-type {
        position: absolute;
        display: inline-block;
        // height: 100px;
        width: 180px;
        height: 100%;
        right: 0;
        padding-right: 20px;
        padding-left: 20px;
        background-color: #333;
        text-align: center;
      }
    }
    .pay {
      background-color: #00B43C !important;
    }
  }
}
</style>
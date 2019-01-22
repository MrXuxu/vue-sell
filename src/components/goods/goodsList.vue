<template>
  <div class="foods-wrapper">
    <div class="wrapper" ref="wrapper">
      <ul>
        <li v-for="(item, index) in goods" :key="index">
          <h1 class="title" :ref="item.name">{{ item.name }}</h1>
          <ul>
            <li v-for="(food, foodIndex) in item.foods" :key="foodIndex">
              <good-item :food="food"></good-item>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import NumBox from './numbox'
import GoodItem from './goodItem'
export default {
  props:{
    goods: {
      type: [Object, Array]
    },
    turnGood: [String]
  },
  data(){
    return {

    }
  },
  watch:{
    turnGood(n, o) {
      var element = this.$refs[n][0];
      this.scroll.scrollToElement(element, 300);
    }
  },
  computed:{},
  created(){

  },
  mounted(){
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        taps: true,
      });
    })
  },
  components:{
    NumBox,
    GoodItem,
  },
  methods:{}
}
</script>
<style lang="scss" scoped>
.foods-wrapper {
    flex: 1;
    .title {
      padding-left: 28px;
      height: 52px;
      line-height: 52px;
      border-left: 4px solid #d9dde1;
      font-size: 24px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: 18px 36px 18px;
      padding-bottom: 18px;
      &:not(:last-child) {
        border-bottom: 1px solid rgba(7, 17, 27, .1);
      }
      .food-img {
        img {
          width: 150px;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        font-size: 24px;
        width: 100%;
        .desc, .extra, .price {
          margin-top: 10px;
        }
        .price span {
          &:first-of-type {
            color: red;
          }
          &:last-of-type {
            margin-left: 20px;
            text-decoration: line-through;
          }
        }
        .num-box {
          position: relative;
          bottom: 30px;
        }
      }
    }
  }
  // better-scroll
.wrapper {
  width: 100%;
  height: 1000px;
  overflow: hidden;
  position: relative;
}

</style>
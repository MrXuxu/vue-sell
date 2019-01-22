<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <div class="wrapper" ref="wrapper">
          <ul>
            <li v-for="(item, index) in goods" :key="index" :class="['menu-item',{'bg':cIndex==index}]" ref="good">
              <span class="text" @click="turn(index)">
                <span v-if="item.type != -1" class="iconfont icon-tubiaozhizuomoban-"></span>
                <span ref="name">{{ item.name }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <goods-list :goods="goods" :turnGood="turnGood"></goods-list>
    </div>
    <shop-car></shop-car>
  </div>
</template>
<script>
import { getGoods } from '../../api/data'
import BScroll from 'better-scroll'
import GoodsList from './goodsList'
import ShopCar from '../shopcar/shopcar'

export default {
  name: 'goods',
  props:{},
  data(){
    return {
      goods: [],
      turnGood: '',
      cIndex: 0,
    }
  },
  watch:{},
  computed:{},
  created(){
    getGoods((res) => {
      this.goods = res.data.data
      // console.log(res.data.data)
    })
  },
  mounted(){
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        // taps: true,
      });
    })
  },
  methods:{
    turn(index) {
      var turnGood = this.$refs.name[index].innerText;
      this.turnGood = turnGood;
      this.cIndex = index;
      // var element = this.$refs.good[index];
      // console.log(element);

    }
  },
  components:{
    GoodsList,
    ShopCar,
  }
}
</script>
<style lang="scss" scoped>
.goods{
  display: flex;
  // overflow: hidden;
  position: absolute;
  top: 45.6vw;
  bottom: 46px;
  width: 100%;
  .menu-wrapper {
    flex: 0 0 160px;
    // width: 80px;
    height: 1000px;
    overflow: hidden;
    background: #f3f5f7;
    .menu-item {
      display: table;
      padding: 0 24px;
      height: 108px; 
      width: 112px;
      line-height: 28px;
      // background-color: #fff;
      .text {
        display: table-cell;
        width: 112px;
        vertical-align: middle;
        font-size: 24px;
        text-align: center;
        .iconfont {
          font-size: 30px;
          color: #FF6B01;
        }
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
.bg {
  background: #fff;
}
</style>
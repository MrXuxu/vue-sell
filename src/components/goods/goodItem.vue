<template>
  <div class="food-item">
    <div class="food-img">
      <img :src="food.icon" alt>
    </div>
    <div class="content">
      <h2 class="name">{{ food.name }}</h2>
      <p class="desc">{{ food.description }}</p>
      <div class="extra">
        <span>月售{{ food.sellCount }}份</span>
        <span>好评率{{ food.rating }}%</span>
      </div>
      <div class="price">
        <span>￥{{ food.price }}</span>
        <span v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
      </div>
      <num-box @numberAdd="AddItem" @numberReduce="ReduceItem"></num-box>
    </div>
  </div>
</template>

<script>
import NumBox from "./numbox";
export default {
  props: {
    food: Object
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  components: {
    NumBox
  },
  methods: {
    AddItem(number) {
      var goodItem = {
        name: this.food.name,
        price: this.food.price,
        num: number
      };
      this.$store.commit('addList', goodItem);
    },
    ReduceItem(number) {
      // console.log(number);
      var goodItem = {
        name: this.food.name,
        price: this.food.price,
        num: number
      };
      this.$store.commit('reduceList', goodItem);
      // console.log(goodItem)
    }
  }
};
</script>
<style lang="scss" scoped>
.food-item {
  display: flex;
  margin: 18px 36px 18px;
  padding-bottom: 18px;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
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
    .desc,
    .extra,
    .price {
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
</style>
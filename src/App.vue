<template>
  <div id="app">
    <v-header :seller="seller" :TIsShade="TIsShade" :FIsShade="FIsShade"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods" tag="div">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" tag="div">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" tag="div">商家</router-link>
      </div>
    </div>
    <v-shade :seller="seller" v-if="$store.state.isShade"></v-shade>
    <keep-alive include="goods">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>
<script>
import { getSeller } from './api/data'
import VHeader from 'components/header/header'
import VShade from './components/shade/shade'

export default {
  data() {
    return {
      seller: {},

    }
  },
  created() {
    var _this = this;
    getSeller(function(res) {
      _this.seller = res.data.data;
      // console.log(_this.seller);
    })
  },
  methods: {
    TIsShade() {
      console.log(1);
      this.isShade = true;
    },
    FIsShade() {
      this.isShade = false;
    }
  },
  components: {
    VHeader,
    VShade,
  }  
}
</script>

<style lang="scss">
@import './assets/style/global';
#app {
  .tab {
    display: flex;
    height: 80px; line-height: 80px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    .tab-item {
      flex: 1;
      text-align: center;
      // router-link 
      & > div {
        font-size: 28px;
        color: rgb(77, 85, 93);
        &.active {
          color: $bg;
        }
      }
    }
  }
}
</style>

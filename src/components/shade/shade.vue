<template>
  <div class="shade">
    <div class="name">
      <p class="title">{{ seller.name }}</p>
      <p class="star">
        <span class="iconfont icon-shoucangxuanzhong"></span>
        <span class="iconfont icon-shoucangxuanzhong"></span>
        <span class="iconfont icon-shoucangxuanzhong"></span>
        <span class="iconfont icon-shoucangxuanzhong"></span>
        <span class="iconfont icon-shoucang"></span>
      </p>
    </div>
    <div class="msg">
      <fieldset>
        <legend>优惠信息</legend>
        <p v-for="(item, index) in supports" :key="index">
          {{ item }}
        </p>
      </fieldset>
    </div>
    <div class="public">
      <fieldset>
        <legend>商家公告</legend>
        {{ seller.bulletin }}
      </fieldset>
    </div>
    <span class="iconfont icon-shanchu" @click="fisShade"></span>
  </div>
</template>

<script>
export default {
  props:{
    seller: {
      type: Object
    }
  },
  data(){
    return {
      supports: [],
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){
    this.handleSupports();
  },
  components:{},
  methods:{
    fisShade() {
      this.$store.commit('changeIsshade')
    },
    handleSupports() {
      var supports = [];
      if(this.seller) {
        this.seller.supports.forEach(item => {
          supports.push(item.description);
        })
        this.supports = supports;
      }

    }
  },
  
}
</script>
<style lang="scss" scoped>
.shade{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(7, 17, 27, .8);
  color: #fff;
  z-index: 999;
  .title {
    margin-top: 100px;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
  }
  .star {
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-top: 30px;
    text-align: center;
    .iconfont {
      font-size: 5.333vw;
    }
  }
  .msg {
    margin-top: 50px;
    margin-bottom: 40px;
  }
  .name {
    .icon-shoucangxuanzhong {
      color: #FF9900;
    }
  }
  .icon-shanchu {
    font-size: 12.333vw;
  }
}
fieldset {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.148);
  width: 600px;
  font-size: 25px;
  legend {
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
    font-size: 30px;
  }
}
.icon-shanchu {
  position: absolute;
  bottom: 50px;
}
</style>
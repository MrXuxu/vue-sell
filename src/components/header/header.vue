<template>
  <div class="header" @click="tisShade">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand">品牌</span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }} 分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="iconfont icon-manjianyouhui"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
    </div>
    <div class="support-count" @click="tisShade">
      {{ supportLength }} 个 >
    </div>
    <div class="bulletin-wrapper" @click="tisShade">
      <p class="notice">公告</p>
      <p class="notice-title">{{ bulletin }}</p>
      
      <p>></p>
    </div>
    <div class="bg">
      <img :src="seller.avatar">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      supportLength: '',
      bulletin: '',
    }
  },
  watch: {
    seller(newVal) {
      this.supportLength = newVal.supports.length;
      this.bulletin = newVal.bulletin;
      // this.bulletin = newVal.bulletin.substr(0, 22) ;
    }
  },
  computed: {
  },
  created() {
    // console.log(this.seller);
  },
  mounted() {
    this.move();
  },
  components: {
    
  },
  methods: {
    move() {
      var timer = setInterval(() => {
        var start = this.bulletin.substring(0, 1);
        var end = this.bulletin.substring(1);
        this.bulletin = end + start;
      }, 400);
    },
    tisShade() {
      this.$store.commit('changeIsshade');
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  // background-color: #ccc;
  color: #fff; font-size: 28px;
  position: relative;
  background: rgba(7, 17, 27, .5);
  overflow: hidden;
  .content-wrapper {
    padding: 40px;
    display: flex;
    // margin-left: 20px;
    .content {
      margin-left: 30px;
    }
    .brand {
      display: inline-block;
      padding: 2px;
      background-color: red;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.082);
      color: #fff;
    }
    .name {
      font-weight: bold;
      font-size: 30px;
    }
    .description {
      margin: 10px 0;
    }
  } 
}
.icon-manjianyouhui {
  color: red;
  font-size: 30px;
}
.avatar {
  img {
    width: 128px; height: 128px;
  }
}
.support-count {
  position: absolute;
  padding: 5px 10px;
  border-radius: 15px;
  right: 20px;
  bottom: 50px;
  height: 24px; line-height: 24px;
  background-color: rgba(0, 0, 0, .2);
}
.bulletin-wrapper {
  display: flex;
  align-items: center;
  height: 45px; 
  line-height: 45px;

  padding-left: 20px;
  box-sizing: content-box;
  // overflow: hidden;
  background-color: rgba(7, 17, 27, .2);
  .notice {
    padding: 1px 2px;
    background-color: #fff;
    color: #000;
  }
  .notice-title {
    margin-left: 10px;
    white-space: nowrap;
    width: 81.333vw;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.bg {
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
  z-index: -1;
  filter: blur(10px);
  
  img {
    width: 100%;
    height: 100%;
  }
}
</style>


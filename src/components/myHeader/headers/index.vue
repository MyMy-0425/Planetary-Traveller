<template>
  <div class="w">
    <h1>
      <router-link to="/home" style="font-size:0"><img class="logo" src="./assets/logo.webp" alt="" />未来跨行星商城系统</router-link>
    </h1>
    <div class="searchAndElse">
      <div class="search">
        <input v-model="searchInput" type="text" class="searchinput" :placeholder="searchPH" />
        <button @click="toSearch">搜索</button>
        <ul>
          <li v-for="(d, i) in searchRelate" :key="i">
            <a href="#">{{ d }}</a>
          </li>
        </ul>
        <div @click="tocar" class="shopcar">
          我的购物车
          <!-- <div class="shopcar-num">{{shopcarnum}}</div> -->
        </div>
      </div>
      <div class="nav">
        <ul>
          <li v-for="(d, i) in searchNav" :key="i"><a href="#">{{d}}</a></li>
        </ul>
      </div>
    </div>
    <div class="treasure">
      <a href="#"><img src="./assets/searchright.png" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "headers",
  methods:{
    toSearch(){
      const tem = this.searchInput == '' ? '飞船' : this.searchInput
      this.$store.dispatch('search/seaBreads', tem)
      // this.$bus.$emit('keywordF', tem)
      this.$router.push({
        name:'search',
      })
    },
    tocar(){
      this.$router.push('/shopcar')
    }
  },
  data() {
    return {
      searchPH: "行星跃迁引擎",
      searchRelate: [
        "超压缩氧气发生器",
        "飞船纳米涂料",
        "重力场发生装置",
        "伽玛光速炮",
        "R367机器人情感核心",
        "亚光速光帆",
      ],
      searchNav: [
        "秒杀",
        "优惠卷",
        "PLUS会员",
        "超新星闪购",
        "星际拍卖",
        "未来家电",
        "星际8分钟超市",
        "跨星系营养支持",
        "星际好物",
      ],
      shopcarnum:0,
      searchInput:""
    };
  },
};
</script>

<style scoped>
.w {
  height: 150px;
  /* background-color: rgb(202, 194, 194); */
  display: flex;
  align-items: center;
}
.logo {
  width: 150px;
  height: 130px;
  margin-left: 15px;
}
.searchAndElse {
  width: 850px;
  height: 100%;
}
.treasure {
  flex: 1;
  padding: 10px;
}
.treasure img {
  width: 100%;
}
.search {
  position: relative;
  height: 90px;
  width: 100%;
}
.searchinput {
  width: 500px;
  height: 35px;
  border: 2px solid #35a3a3;
  position: absolute;
  left: 115px;
  top: 30px;
  padding: 0 10px;
}
.searchinput:focus {
  outline: none;
}
.searchinput::placeholder {
  color: rgb(177, 177, 177);
}
.search button {
  position: absolute;
  height: 35px;
  left: 610px;
  width: 75px;
  color: white;
  background-color: #35a3a3;;
  border: none;
  top: 30px;
}
.search button:hover {
  background-color: #267c88;
}
.search ul {
  position: absolute;
  top: 70px;
  left: 120px;
}
.search ul li {
  margin-right: 10px;
  display: inline-block;
}
.search ul li:first-of-type a {
  color: #35a375;
}
.shopcar {
  position: relative;
  color: #35a375;
  width: 125px;
  height: 35px;
  border: 1px solid #c9e6da;
  line-height: 30px;
  text-align: center;
  position: absolute;
  left: 710px;
  top: 30px;
  cursor: pointer;
}
.shopcar:hover {
  border-color: #35a375;
}
.shopcar .shopcar-num {
  position: absolute;
  background-color: rgb(245, 75, 75);
  color: white;
  height: 14px;
  line-height: 14px;
  padding: 0 3px;
  border-radius: 7px 7px 7px 0;
  left: 90px;
  top: 0;
}
.nav {
  width: 100%;
  height: 60px;
  position: relative;
}
.nav ul {
  position: absolute;
  bottom: 15px;
  left: 70px;
}

.nav li {
  display: inline-block;
  font-size: 15px;
  margin-right: 15px;
}
.nav li a {
  color: rgb(0, 0, 0);
}
.nav li a:hover {
  color: #35a375;
}
</style>
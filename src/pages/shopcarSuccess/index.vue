<template>
  <div class="h">
    <div class="w">
      <div v-show="good">
        <div class="ts">✔ 商品已成功加入购物车！</div>
        <div style="display:flex">
          <img class="immg" :src="img" alt="">
          <div style="position: relative;">
            <span class="hhh">{{good.title}}</span>
            <br>
            <span>数量：{{good.num}}</span>
            <button @click="goodDetail" class="btn">查看商品详情</button>
            <button @click="toshopcar" class="btn">前往购物车 > </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopcarSuccess",
  data() {
    return {
      good: JSON.parse(sessionStorage.getItem("carInfo")) || [],
      img:""
    };
  },
  mounted(){
    let p = this.good.img.slice(9,-4)
    // console.log(p)
    this.img = require(`../search/images/${p}.png`)
  },
  beforeDestroy(){
    sessionStorage.removeItem('carInfo')
  },
  methods:{
    goodDetail(){
        this.$router.replace({
            name:'detail',
            query:{
                goodsId: JSON.parse(sessionStorage.getItem('carInfo')).id
            }
        })
    },
    toshopcar(){
        this.$router.replace({
            name:'shopcar'
        })
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.name == "detail") {
      window.scrollTo(0, 0);
      next();
    } else {
      next("/home");
    }
  },
};
</script>

<style scoped>
.h {
  padding: 20px 0;
  border-top: 2px solid #35a3a3;
}
.ts {
  color: #4ec7b7;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
}
.hhh{
    display: inline-block;
    font-size: 14px;
    color: black;
    width: 750px;
}
.w{
    display: flex;
    justify-content: center;
}
.immg{
    margin-right: 10px;
    width:100px;
    height:100px;
    background-color: white;
    border: 1px solid rgb(201, 201, 201);
    border-radius: 5px;
}
.btn{
    position: absolute;
    padding: 5px 10px;
    bottom: 7px;
    right: 10px;
    color: white;
    border: none;
    background-color: #35a3a3;
    border: 1px solid #35a3a3;
}
.btn:last-child:hover{
    background:#198585
}
.btn:first-of-type{
    right: 125px;
    color: #35a3a3;
    background-color: white;
    border: 1px solid black;
}
.btn:first-of-type:hover{
    background-color: rgb(243, 243, 243);
}
</style>
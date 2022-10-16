<template>
  <div class="h">
    <div class="w">
      <div class="ts">
        <div class="a">✔ </div> 恭喜您，支付成功啦！
      </div>
      <div>
        <button class="btn" @click="ck">查看订单</button>
        <button class="btn" @click="jixu">继续购物</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "paysuccess",
  methods:{
    ck(){
        this.$router.replace('order')
    },
    jixu(){
        this.$router.replace('home')
    }
  }
};
</script>

<style scoped>
.h {
  border-top: 2px solid #35a3a3;
  padding: 40px 0;
}
.w {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
}
.ts {
  display: flex;
  align-items: center;
  color: black;
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 10px;
}
.a {
  display: inline-block;
  color: white;
  background-color: #4ec7b7;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  margin-right: 20px;
}
.btn{
    background-color: #E1251b;
    border: none;
    width: 100px;
    height: 30px;
    font-size: 16px;
    color: white;
    margin-top: 20px;
}
.btn:first-of-type{
    margin-right: 10px;
}
.btn:last-of-type{
    background-color: rgb(240, 240, 240);
    color: black;
}
.btn:first-of-type:hover{
    background-color: #b41209;
}
.btn:last-of-type:hover{
    background-color: rgb(207, 207, 207);
}
</style>
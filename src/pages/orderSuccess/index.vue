<template>
  <div class="h">
    <div class="w">
      <div class="ts">✔ 订单提交成功！请您及时付款，以便为您尽快发货~</div>
      <div style="text-align: center;">请在十分钟内完成支付，超时订单将会被取消<span style="color:red">（这个后端功能并没有实现......）</span><br> 订单编号：{{this.$route.query.orderID}}</div>
      <div class="erweima"><span>假装有个二维码<br>请直接点我已支付</span></div>
      <div><button class="btn" @click="yudao">遇到问题</button><button @click="pay" class="btn">我已成功支付</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderSuccess",
  methods:{
    yudao(){
        alert('应该不会遇到什么问题......遇到了也没客服解决')
    },
    async pay(){
        const t = await this.$api.pay(this.$route.query.orderID)
        if(t.code == '200'){
            console.log(t)
            this.$router.replace('paysuccess')
        }else if (t.code == '201'){
            alert(t.msg)
            this.$router.replace('/login')
        }else{
            alert(t.msg)
            this.$router.replace('/home')
        }

    }
  }
};
</script>

<style scoped>
.h {
  border-top: 2px solid #35a3a3;
  padding: 20px 0;
}
.w{
    width: 490px;
    min-height: 200px;
    background-color: rgb(245, 245, 245);
    box-shadow: 0 0 5px 0 rgb(196, 196, 196);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ts {
  color: #4ec7b7;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
}
.erweima{
    width: 200px;
    height: 200px;
    background-color: white;
    margin: 20px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 14px;
}
.btn{
    width: 120px;
    height: 35px;
    border: none;
}
.btn:first-of-type{
    background-color: rgb(197, 197, 197);
    color: white;
    margin-right: 20px;
}
.btn:first-of-type:hover{
    background-color: rgb(167, 167, 167);
}
.btn:last-of-type{
    background-color:#4dbdbd;
    color: white;
}
.btn:last-of-type:hover{
    background-color:#1f9797;
}
</style>
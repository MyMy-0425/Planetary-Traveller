<template>
  <div class="h">
    <div class="w">
      <div class="th">请核对您的订单信息<span style="font-size:12px;color:red">（注：写累了，来个复古风格的吧）</span></div>
      <div class="tb0">
        <ul class="allll">
          <li style="padding:10px">
            <div class="hhh">收件人信息<span style="color:red">（注：没有写收件人和地址的添加、修改功能）</span></div>
            <div class="diyilie">
              <span style="padding-right:10px ">姓名：<span style="color:#35a3a3">{{username}}</span> </span>
              <span>地址：<span style="color:#35a3a3">{{planet}}</span></span>
            </div>
          </li>
          <li style="padding:0px 10px;">
            <div class="hhh">送货清单</div>
            <div class="tb">
              <ul class="ggdg">
                <li v-for="(d) in goods" :key="d.id">
                  <div class="t1" style="display:flex;align-items: center;justify-content: left;">
                    <img class="imgshow" :src="d.goodInfo.img" alt="">
                    <span class="imgtitle">{{d.goodInfo.title}}</span>
                  </div>
                  <span class="t2">单价：￥{{d.goodInfo.price}}</span>
                  <div class="t3">
                    数量：{{d.goodNum}}
                  </div>
                  <span class="t4">小计：￥{{(+d.goodNum * +d.goodInfo.price.replace(/,/g,"")).toLocaleString()}}</span>
                </li>
              </ul>
            </div>
          </li>
          <li style="padding:0px 10px;height:35px;display:flex;align-items: center;justify-content: right">
            <div>送至：<span style="color:#35a3a3">{{planet}}</span></div>
            <div style="flex:1"></div>
            <div>总计：<span style="color:#35a3a3">{{yuan}}</span></div>
            <button @click="tijiao" class="jiesuan">提交订单</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "conOrder",
  data() {
    return {
      username: sessionStorage.getItem("username"),
      goods: JSON.parse(localStorage.getItem("order")),
      planet: "地球",
    };
  },
  beforeDestroy() {
    localStorage.removeItem("order");
  },
  computed:{
    yuan(){
        const tem = this.goods.reduce((a,b)=>{
            return a + +b.goodInfo.price.replace(/,/g, '') * +b.goodNum
        },0)
        return '￥' + tem.toLocaleString()
    }
  },
  methods:{
    async tijiao(){
      const t = await this.$api.inputOrder(this.yuan)
      console.log(t)
      if (t.code == "200") {
        this.$router.push({
          name:'orderSuccess',
          query:{
            orderID:t.orderid
          }
        })
      } else {
        alert(t.msg);
        sessionStorage.removeItem("username");
        this.$router.replace("/login");
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    if(from.name != 'shopcar'){
      next('/home')
    }
    else{
      next()
    }
  }
};
</script>

<style scoped>
.diyilie {
  border-bottom: 1px solid rgb(163, 163, 163);
  padding-bottom: 10px;
}
.ggdg li:last-of-type {
  border-bottom: 1px solid rgb(163, 163, 163);
}
.hhh {
  font-weight: 500;
  color: black;
  padding: 2px 0;
}
.h {
  border-top: 2px solid #35a3a3;
  padding: 10px 0 10px 0;
}
.allll {
  border: 1px solid rgb(163, 163, 163);
  border-radius: 5px;
  padding: 0 5px;
}
.th {
  color: black;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 5px;
}
.w {
  width: 850px;
}
.t0 {
  width: 35px;
}
.t1 {
  width: 370px;
}
.t2 {
  width: 150px;
}
.t3 {
  width: 150px;
}
.t4 {
  width: 150px;
}
.t5 {
  width: 100px;
}
.imgshow {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.tb li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.imgtitle {
  width: 200px;
}
.tb {
  /* border: 1px solid rgb(175, 175, 175); */
  border-top: none;
}
.jiesuan {
  height: calc(100%);
  border: none;
  background-color: #e1251b;
  color: white;
  width: 100px;
  font-size: 16px;
  margin-left: 20px;
}
.jiesuan:hover {
  background-color: #c91e15;
}
</style>
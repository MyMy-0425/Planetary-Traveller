<template>
  <div class="h">
    <div class="w">
      <div class="c0">
        <div v-for="(d,i) in li0" :key="i">
          <div class="hh1"><span style="color:green">· </span> {{d.h}}</div>
          <ul>
            <li v-for="(dd,ii) in d.b" :key="ii" class="hh1b"><a href="#">{{dd}}</a></li>
          </ul>
        </div>
      </div>
      <div class="c1">
        <div class="c1h0">
          我的订单
        </div>
        <div class="c1h1">
          <span class="t0">商品</span>
          <span class="t1">订单详情</span>
          <span class="t2">收货人</span>
          <span class="t3">金额</span>
          <span class="t4">状态</span>
          <span class="t5">操作</span>
        </div>
        <div class="ordershow" v-for="(d,i) in allorder.order" :key="d.id">
          <div class="oh">
            {{d.timer}}&emsp;订单编号：{{d.id}}
          </div>
          <div class="ob">
            <div class="obgood">
              <ul>
                <li class="yilie" v-for="(dd,ii) in d.goodsIDS.split(',')" :key="ii">
                  <div class="goodsbbb">
                    <img class="imgs" :src="findgood(dd).img" alt="">
                    <span class="spp">{{findgood(dd).title}}</span>
                    <span class="numss">×{{d.goodsNum.split(',')[ii]}}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="t2 pdl"><span>{{d.username}}</span></div>
            <div class="t3 pdl"><span>{{d.money}}</span></div>
            <div class="t4 pdl"><span>{{d.isPay == 1?'已支付':'未支付'}}</span></div>
            <div class="t5 pdl"><span><a href="#">评价</a> | <a href="#">晒单</a></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      li0: [
        {
          h: "订单中心",
          b: [
            "我的订单",
            "团购订单",
            "本地生活订单",
            "我的预售",
            "评价晒单",
            "取消订单记录",
          ],
        },
        {
          h: "关注中心",
          b: [
            "关注的商品",
            "关注的店铺",
            "关注的专辑",
            "关注的品牌",
            "关注的活动",
            "浏览历史",
          ],
        },
        {
          h: "特色业务",
          b: [
            "我的营业厅",
            "星际通信",
            "定期送",
            "星际代下单",
            "我的回收单",
            "星际加油站",
          ],
        },
      ],
      allorder: [],
    };
  },
  methods: {
    findgood(i) {
      return this.allorder.goods.find((e) => {
        return e.id == i;
      });
    },

    je(d) {
      console.log(d);
    },

    async geto() {
      const t = await this.$api.getOrder();
      if (t.code == "201") {
        alert(t.msg);
        this.$router.replace("login");
      } else if (t.code == "200") {
        console.log(t.data);
        this.allorder = t.data;
        if (this.allorder.order.length != 0) {
          this.allorder.order = this.allorder.order.reverse();
          this.allorder.goods.forEach((e) => {
            const goodiii = e.img.slice(9, -4);
            e.img = require(`../search/images/${goodiii}.png`);
          });
        }
      }
    },
  },
  mounted() {
    this.geto();
  },
};
</script>

<style scoped>
.h {
  border-top: 2px solid #35a3a3;
}
.w {
  display: flex;
}
.c0 {
  width: 240px;
  margin-right: 20px;
}
.hh1 {
  padding: 10px 0 5px 0;
  color: black;
  font-weight: 600;
}
.hh1b {
  padding: 5px 0;
  text-align: center;
  border-bottom: 1px solid rgb(233, 233, 233);
}
.c1 {
  flex: 1;
}
.c1h0 {
  padding: 10px 10px;
  background-color: #f1f1f1;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  margin-bottom: 20px;
}
.c1h1 {
  padding: 10px 0px;
  background-color: #f1f1f1;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  text-align: center;
  margin-bottom: 15px;
}
.t0 {
  width: 50px;
}
.t1 {
  width: 500px;
}
.t2 {
  width: 70px;
}
.t3 {
  width: 120px;
}
.t4 {
  width: 70px;
}
.t5 {
  width: 120px;
  flex: 1;
}
.ordershow {
  display: flex;
  flex-direction: column;
}
.oh {
  padding: 10px 10px;
  background-color: #f1f1f1;
  font-weight: 600;
  border-radius: 5px 5px 0 0;
}
.ob {
  display: flex;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-bottom: none;
  margin-bottom: 10px;
  align-items: stretch;
}
.obgood {
  width: 550px;
}
.goodsbbb {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
}
.imgs {
  width: 60px;
  height: 60px;
  margin-left: 10px;
}
.spp {
  padding: 0 10px;
  flex: 1;
}
.pdl {
  border-left: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  justify-content: center;
}
.numss {
  width: 60px;
}
</style>
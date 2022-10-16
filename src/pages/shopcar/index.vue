<template>
  <div class="h">
    <div class="w">
      <div class="all">全部商品</div>
      <div class="th">
        <span class="t0">全部</span>
        <span class="t1">商品</span>
        <span class="t2">单价（元）</span>
        <span class="t3">数量</span>
        <span class="t4">小计（元）</span>
        <span class="t5">操作</span>
      </div>
      <div class="tb">
        <ul>
          <li v-for="(d,i) in allgoods" :key="d.goodInfo.goodsId">
            <input :checked="d.ischeck" class="t0" type="checkbox" style="cursor: pointer;" @change="changeXz(d)">
            <div class="t1" style="display:flex;align-items: center;justify-content: center;">
              <img class="imgshow" :src="d.goodInfo.img" alt="">
              <span class="imgtitle">{{d.goodInfo.title}}</span>
            </div>
            <span class="t2">{{d.goodInfo.price}}</span>
            <div class="t3">
              <button class="bbbbb" @click="changeggn(d,-1)">-</button>
              <input @input="yanz(d)" class="numn" type="text" v-model="d.goodNum" readonly="readonly">
              <button class="bbbbb" @click="changeggn(d,+1)">+</button>
            </div>
            <span class="t4">{{(+d.goodNum * +d.goodInfo.price.replace(/,/g,"")).toLocaleString()}}</span>
            <a class="t5" href="#" @click.prevent="del(d)">从购物车移除</a>
          </li>
        </ul>
      </div>
      <div class="tf">
        <input :checked="allccc" @change="cj" type="checkbox" style="cursor:pointer">
        <span style="margin-left:5px">全选</span>
        <a style="margin-left:20px" href="#">移除所选商品</a>
        <div style="flex:1"></div>
        <span>已选择 {{allxuanz}} 件商品，</span>
        <span>总价（不含运费）：{{allprice}}</span>
        <button @click="zz" class="jiesuan">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopcar",
  data() {
    return {
      allgoods: [],
      allxuanz: 0,
      allprice: 0,
      timer1: {},
      timer2: {},
      timer3: null,
    };
  },
  computed: {
    allccc() {
      let tem = true;
      this.allgoods.forEach((e) => {
        if (!e.ischeck) {
          tem = false;
        }
      });
      return tem;
    },
  },
  methods: {
    async del(d) {
      const t = await this.$api.delShopCar(d.goodsId);
      if (t.code == "200") {
        console.log(t);
        this.allgoods = this.allgoods.filter(e=>{
          return e.goodsId != d.goodsId
        })
      } else {
        alert(t.msg);
        sessionStorage.removeItem("username");
        this.$router.replace("/login");
      }
    },
    changeggn(d, a) {
      if (a == -1) {
        if (d.goodNum <= 1) {
          return;
        }

        d.goodNum = d.goodNum - 1 < 1 ? d.goodNum : d.goodNum - 1;
      } else {
        if (d.goodNum >= 999) {
          return;
        }
        d.goodNum = d.goodNum + 1 > 999 ? d.goodNum : d.goodNum + 1;
      }

      if (this.timer1[d.goodsId]) {
        clearTimeout(this.timer1[d.goodsId]);
      }

      this.timer1[d.goodsId] = setTimeout(async () => {
        this.timer1[d.goodsId] = null;
        console.log({ goodsId: d.goodsId, goodNum: d.goodNum });

        const t = await this.$api.changeGoodNum({
          goodsId: d.goodsId,
          goodNum: d.goodNum,
        });
        if (t.code != "200") {
          alert(t.msg);
          sessionStorage.removeItem("username");
          this.$router.replace("/login");
        } else {
          console.log(t);
        }
      }, 1000);
    },
    zz() {
      localStorage.setItem(
        "order",
        JSON.stringify(
          this.allgoods.filter((e) => {
            return e.ischeck == 1;
          })
        )
      );
      this.$router.push("/conOrder");
    },

    changeXz(d) {
      if (d.ischeck == 1) {
        d.ischeck = 0;
      } else {
        d.ischeck = 1;
      }
      if (this.timer2[d.goodsId]) {
        clearTimeout(this.timer2[d.goodsId]);
      }

      this.timer2[d.goodsId] = setTimeout(async () => {
        this.timer2[d.goodsId] = null;
        console.log({ goodsId: d.goodsId, ischeck: d.ischeck });

        const t = await this.$api.changeGoodischeck({
          goodsId: d.goodsId,
          ischeck: d.ischeck,
        });
        if (t.code != "200") {
          alert(t.msg);
          sessionStorage.removeItem("username");
          this.$router.replace("/login");
        } else {
          console.log(t);
        }
      }, 1000);
    },

    async getCar() {
      let tem = await this.$api.getShopCar();
      if (tem.code == "201") {
        alert(tem.msg);
        sessionStorage.removeItem("username");
        this.$router.replace("/login");
      } else if (tem.code == "200") {
        this.allgoods = tem.data;
        this.chuli();
      }
    },
    cj() {
      if (this.allccc == true) {
        this.allgoods.forEach((e) => {
          e.ischeck = false;
        });

        if (this.timer3) {
          clearTimeout(this.timer3);
        }

        this.timer3 = setTimeout(async () => {
          this.timer3 = null;
          const t = await this.$api.changeGoodischeckAll(false);
          if (t.code != "200") {
            alert(t.msg);
            sessionStorage.removeItem("username");
            this.$router.replace("/login");
          } else {
            console.log(t);
          }
        }, 500);
      } else {
        this.allgoods.forEach((e) => {
          e.ischeck = true;
        });
        if (this.timer3) {
          clearTimeout(this.timer3);
        }

        this.timer3 = setTimeout(async () => {
          this.timer3 = null;
          const t = await this.$api.changeGoodischeckAll(true);
          if (t.code != "200") {
            alert(t.msg);
            sessionStorage.removeItem("username");
            this.$router.replace("/login");
          } else {
            console.log(t);
          }
        }, 500);
      }
    },
    chuli() {
      this.allgoods.forEach((e) => {
        this.timer1[e.goodsId] = null;
        this.timer2[e.goodsId] = null;
        const tem = e.goodInfo.img;
        e.goodInfo.img = tem.slice(9, -4);
        e.goodInfo.img = require(`../search/images/${e.goodInfo.img}.png`);
      });
    },
    yanz(d) {
      d.goodNum = d.goodNum.toString().replace(/[^\d]/g, "");
      if (+d.goodNum < 1) {
        d.goodNum = 1;
      }
      if (+d.goodNum > 999) {
        console.log(0);
        d.goodNum = 999;
      }
    },
  },
  mounted() {
    this.getCar();
  },
  watch: {
    allgoods: {
      deep: true,
      immediate: true,
      handler() {
        let temxuanz = 0;
        let temprice = 0;
        this.allgoods.forEach((e) => {
          if (e.ischeck) {
            temxuanz++;
            temprice += +e.goodNum * +e.goodInfo.price.replace(/,/g, "");
          }
        });
        this.allxuanz = temxuanz;
        this.allprice = temprice.toLocaleString();
      },
    },
  },
};
</script>

<style scoped>
.h {
  border-top: 2px solid #35a3a3;
  padding-bottom: 30px;
}
.all {
  font-weight: 600;
  font-size: 14px;
  color: black;
  padding: 10px 0;
}
.th {
  display: flex;
  padding: 10px 5px;
  background-color: rgb(249, 249, 249);
  justify-content: space-around;
  border: 1px solid rgb(175, 175, 175);
}
.th span {
  text-align: center;
}
.t0 {
  width: 35px;
}
.t1 {
  width: 450px;
}
.t2 {
  width: 200px;
}
.t3 {
  width: 170px;
}
.t4 {
  width: 170px;
}
.t5 {
  width: 170px;
}
.imgshow {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.tb li {
  display: flex;
  align-items: center;
  text-align: center;
}
.imgtitle {
  width: 200px;
}
.tb {
  border: 1px solid rgb(175, 175, 175);
  border-top: none;
}
.tf {
  display: flex;
  height: 50px;
  align-items: center;
  border: 1px solid rgb(175, 175, 175);
  padding: 0 0px 0 10px;
  border-top: none;
}
.jiesuan {
  height: calc(100%);
  border: none;
  background-color: #e1251b;
  color: white;
  width: 100px;
  font-size: 20px;
  margin-left: 20px;
}
.jiesuan:hover {
  background-color: #c91e15;
}
.numn {
  width: 30px;
  height: 30px;
  text-align: center;
  border: 1px solid rgb(175, 175, 175);
  border-right: none;
  border-left: none;
}
.bbbbb {
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid rgb(175, 175, 175);
}
.bbbbb:hover {
  background-color: rgb(242, 242, 242);
}
</style>
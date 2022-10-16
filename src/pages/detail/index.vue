<template>
  <div class="h">
    <div class="w" v-if="good">
      <div class="c0">
        <img @mousemove="mo($event)" @mouseenter="isShowMask = true" @mouseleave="isShowMask = false" class="show" :src="img" alt="">
        <div class="mask" ref="mask" v-show="isShowMask"></div>
        <div class="twoimg" v-show="isShowMask" :style="{ backgroundImage: `url(${img})`,backgroundPositionX:`${-weizhi.lleft*2}px`,backgroundPositionY:`${-weizhi.ttop*2}px` }"></div>
      </div>
      <div class="c1">
        <span class="hhh">{{good.title}}</span>
        <span style="padding-bottom:10px">{{good.title}}</span>
        <div class="c1r3">
          <div class="price">
            <span class="letter">价格</span>
            <span class="priceshow">￥{{good.price}}</span>
            <a class="jjtz" href="#">降价通知</a>
          </div>
          <div class="chuxiao">
            <span class="letter1">促销</span>
            <span class="cx"> <span class="jjg">加价购</span> 满9999.00元另加100.00元，可获得激光钥匙扣一个；或满59999.00元另加1000.00元，可获得全息眼镜一副；或满199999.00元另加10000.00元，可获得星系通行卡一张！</span>
          </div>
          <div class="chuxiao">
            <span class="letter1">增值服务</span>
            <span class="cx"><a href="#" class="blueb"><i>♻ </i>高速回收，极速到账</a></span>
          </div>
          <div class="chuxiao">
            <span class="letter1">配送至</span>
            <span class="cx">
              <div class="aaaaa" style="position: relative;display:inline-block" @mouseover="trueShowPlanet" @mouseleave="falseShowPlanet">
                <a href="#" class="dizhi">🌐 {{planet}}
                  <div class="cover" v-show="isShowPlanet">
                  </div>
                </a>
                <div class="showPlanetPanel" v-show="isShowPlanet">
                  <div style="width:200px">
                    <ul class="panel">
                      <li v-for="(d, i) in planets" :key="i" @click.prevent="changeChoice(d)" :class="{ currPlanet: d.isChoice == true }">
                        <a href="#">{{ d.name }}</a>
                      </li>
                    </ul>
                  </div>
                  <div style="width:200px;padding:0 5px">
                    <span style="display: block; padding: 2px 0px 2px 5px">其他星系：</span>
                    <ul class="panel" style="padding: 0px">
                      <li v-for="(d, i) in galaxy" :key="i" @click.prevent="changeChoice(d)" :class="{ currPlanet: d.isChoice == true }">
                        <a href="#">{{ d.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br>
              23:00前下单，太阳系内预计明天中午12:00前送达，其他星系预计两天内送达。如果遇到射线爆发，您的订单配送时间可能延长，请耐心等待
            </span>
          </div>
          <div class="chuxiao">
            <span class="letter1">服务支持</span>
            <span class="cx"><a href="#" class="bbblue">365天原厂维修</a> | <a href="#" class="bbblue">免举证退换货</a></span>
          </div>
        </div>
        <div class="shopcar">
          <input v-model="num" class="numb" type="text">
          <div style="font-size: 0px;">
            <button @click="num = +num + 1" style="border-bottom: none;" class="jiajian">+</button>
            <br>
            <button @click="num = +num - 1" class="jiajian">-</button>
          </div>
          <button @click="jiarugouwuc($event)" class="jiarugwc">加入购物车</button>
        </div>
        <div style="color:rgb(165, 165, 165)">
          温馨提示 · 7天无理由退货（跨星系不支持）· 此商品不可使用优惠券
        </div>
      </div>

    </div>
    <div class="w" v-else>
      <nothingthere class="nnno"></nothingthere>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "detail",
  computed: {
    ...mapState(["allgoods"]),
  },
  data() {
    return {
      img: "",
      id: -1,
      good: {},
      num: 1,
      isShowPlanet: false,
      planet: "地球",
      weizhi: {
        lleft: 0,
        ttop: 0,
      },
      isShowMask: false,
      planets: [
        { name: "地球", isChoice: true },
        { name: "火星", isChoice: false },
        { name: "月球", isChoice: false },
        { name: "木星", isChoice: false },
        { name: "土星", isChoice: false },
        { name: "冥王星", isChoice: false },
        { name: "海王星", isChoice: false },
        { name: "金星", isChoice: false },
        { name: "水星", isChoice: false },
        { name: "土卫二", isChoice: false },
        { name: "土卫六", isChoice: false },
        { name: "木卫二", isChoice: false },
        { name: "人造星一号", isChoice: false },
        { name: "人造星二号", isChoice: false },
      ],
      galaxy: [
        { name: "半人马座星系", isChoice: false },
        { name: "仙女座大星系", isChoice: false },
        { name: "开普勒星系", isChoice: false },
      ],
    };
  },
  methods: {
    trueShowPlanet() {
      this.isShowPlanet = true;
    },
    falseShowPlanet() {
      this.isShowPlanet = false;
    },
    changeChoice(d) {
      this.planets.forEach((e) => {
        e.isChoice = false;
      });
      this.galaxy.forEach((e) => {
        e.isChoice = false;
      });
      d.isChoice = true;
      this.planet = d.name;
    },
    mo(e) {
      this.weizhi.lleft = e.layerX - 100;
      this.weizhi.ttop = e.layerY - 100;
    },
    async apiAGood() {
      this.good = await this.$api.getAGood(this.$route.query.goodsId);
      this.id = this.$route.query.goodsId;
      if (this.good) {
        const tem = this.good.img.slice(9, -4);
        this.img = require(`../search/images/${tem}.png`);
      }
    },
    async jiarugouwuc(e){
      e.target.disabled = true
      let tem = await this.$api.putInShopCar(this.good.id, this.num, this.planet)
      console.log(tem)
      if (tem.code == '201'){
        alert(tem.msg)
        this.$router.push('/login')
        e.target.disabled = false
      }
      else if(tem.code == '202'){
        alert(tem.msg)
        this.$router.push('/home')
        e.target.disabled = false
      }
      else if(tem.code == '200'){
        e.target.disabled = false
        this.good.num = this.num
        sessionStorage.setItem('carInfo',JSON.stringify(this.good))
        this.$router.push('/shopcarSuccess')
        // sessionStorage.setItem('carInfo',JSON.stringify(this.good))
      }
    }
  },
  mounted() {
    this.apiAGood();
  },
  beforeRouteEnter(to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  watch: {
    num() {
      this.num = this.num.toString().replace(/[^\d]/g, "");
      if (this.num < 1) {
        this.num = 1;
      }
      if (this.num > 999) {
        this.num = 999;
      }
      // this.$refs.mask.style.left = e.layerX - 100 + "px";
      // this.$refs.mask.style.top = e.layerY - 100 + "px";
    },
    weizhi: {
      deep: true,
      handler() {
        if (this.weizhi.lleft < 0) {
          this.weizhi.lleft = 0;
        } else if (this.weizhi.lleft > 200) {
          this.weizhi.lleft = 200;
        }
        if (this.weizhi.ttop < 0) {
          this.weizhi.ttop = 0;
        } else if (this.weizhi.ttop > 200) {
          this.weizhi.ttop = 200;
        }
        this.$refs.mask.style.left = this.weizhi.lleft + "px";
        this.$refs.mask.style.top = this.weizhi.ttop + "px";
      },
    },
  },
};
</script>

<style scoped>
.h {
  border-top: 2px solid #35a3a3;
}
.w {
  display: flex;
  padding: 20px 0;
}
.showCate {
  display: block;
  padding: 10px 0;
}
.show {
  width: 400px;
  height: 400px;
  border: 1px solid rgb(192, 192, 192);
  /* padding: 20px; */
}
.c0 {
  margin-right: 50px;
  position: relative;
}
.c1 {
  display: flex;
  flex-direction: column;
}
.hhh {
  font-size: 14px;
  font-weight: 600;
  color: black;
  padding-bottom: 10px;
}
.c1r3 {
  background-color: #f7f7f7;
  padding: 10px 10px 5px 10px;
  border-radius: 5px;
  box-shadow: 0 0 7px 0 #c7c7c7;
  margin-bottom: 13px;
}
.price {
  margin-bottom: 10px;
}
.priceshow {
  color: #df515a;
  font-size: 30px;
  font-weight: 700;
}
.letter {
  display: inline-block;
  text-align-last: justify;
  margin-right: 10px;
  width: 50px;
  color: black;
}
.letter1 {
  display: inline-block;
  text-align-last: justify;
  width: 50px;
  color: black;
  vertical-align: top;
  margin-right: 20px;
}
.cx {
  display: inline-block;
  width: 650px;
  line-height: 19px;
}
.jjtz {
  display: inline-block;
  width: 75px;
  vertical-align: middle;
  text-align: center;
  color: #005aa0;
}
.blueb {
  color: #005aa0;
  border: 1px solid #005aa0;
  padding: 0 5px;
  border-radius: 10px;
}
.bbblue {
  color: #005aa0;
}
.jjg {
  padding: 2px 10px;
  background-color: #df515a;
  color: white;
}
.chuxiao {
  padding-bottom: 10px;
}
.dizhi {
  position: relative;
  padding: 0 10px 0 5px;
  display: inline-block;
  margin-bottom: 5px;
}
.aaaaa:hover .dizhi {
  outline: 1px solid black;
  outline-offset: -1px;
  position: relative;
  background-color: white;
}
.showPlanetPanel {
  outline: 1px solid black;
  outline-offset: -1px;
  position: absolute;
  left: -0px;
  top: 17.5px;
  width: 400px;
  background-color: white;
  display: flex;
  padding: 10px 5px;
  line-height: normal;
  z-index: 1;
}
.panel {
  display: flex;
  flex-wrap: wrap;
}
.showPlanetPanel div:first-of-type .panel {
  border-right: 1px solid black;
}

.showPlanetPanel div:last-of-type .panel {
  padding-top: 10px;
}

.panel > li {
  padding: 2px 5px;
}
.panel > li:hover {
  background-color: rgb(219, 219, 219);
}
.currPlanet {
  background: #35a375 !important;
}
.currPlanet a {
  color: white;
}
.cover {
  background-color: white;
  height: 2px;
  bottom: 0;
  left: 1px;
  position: absolute;
  width: calc(100% - 2px);
  z-index: 5555;
}
.numb {
  width: 35px;
  height: 35px;
  text-align: center;
  border: none;
  border: 1px solid rgb(153, 153, 153);
  border-right: none;
}
.shopcar {
  display: flex;
  margin-bottom: 10px;
}
.jiajian {
  font-size: 12px;
  width: 17.5px;
  height: 17.5px;
  border: none;
  border: 1px solid rgb(153, 153, 153);
}
.jiarugwc {
  background-color: #df515a;
  border: none;
  color: white;
  padding: 0 10px;
  margin-left: 10px;
}
.jiarugwc:hover {
  background-color: #f8626c;
}
.mask {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: rgba(189, 255, 246, 0.5);
  top: 0;
  left: 0;
  pointer-events: none;
}
.twoimg {
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  top: 0;
  right: -430px;
  z-index: 100;
  background-size: 800px 800px;
  background-repeat: no-repeat;
  border: 1px solid rgb(192, 192, 192);
}
.nnno{
  margin: 0 auto;
  font-size: 72px !important;
  line-height: 442px !important;
}
</style>
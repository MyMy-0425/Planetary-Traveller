<template>
  <div class="shortcut">
    <div class="w">
      <div class="fl" @mouseover="trueShowPlanet" @mouseleave="falseShowPlanet">
        <a href="#">🌐 {{ planet }}</a>
        <div class="cover" v-show="isShowPlanet"></div>
        <div class="showPlanetPanel" v-show="isShowPlanet">
          <div>
            <ul class="panel">
              <li v-for="(d, i) in planets" :key="i" @click.prevent="changeChoice(d)" :class="{ currPlanet: d.isChoice == true }">
                <a href="#">{{ d.name }}</a>
              </li>
            </ul>
          </div>
          <div>
            <span style="display: block; padding: 10px 0 5px 0">其他星系：</span>
            <ul class="panel" style="padding: 0px">
              <li v-for="(d, i) in galaxy" :key="i" @click.prevent="changeChoice(d)" :class="{ currPlanet: d.isChoice == true }">
                <a href="#">{{ d.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="fr">
        <ul class="right">
          <li v-if="!$store.state.user.username">
            <router-link to="/login">您好，请登录</router-link>
            <router-link class="style-green" :to="{name:'register'}">免费注册</router-link>
            <!-- <a href="#" class="style-green">免费注册</a> -->
          </li>
          <li v-else>
            您好，
            <span class="style-green" style="margin-right:10px">{{this.$store.state.user.username}}</span>
            <a href="#" @click="outlogin" style="margin-right:10px">退出登录</a>
          </li>
          <li>|</li>
          <li>
            <router-link to='/order' href="#">我的订单</router-link>
          </li>
          <li>|</li>
          <li class="zankai" @mouseover="isShowShop = true" @mouseleave="isShowShop = false">
            <a href="#">我的星际商城 ▽</a>
            <div class="cover" v-show="isShowShop"></div>
            <div class="showElsePanel" v-show="isShowShop">
              <ul style="border-bottom: 1px solid black; padding-bottom: 5px">
                <li style="display: inline-block; width: 50%; padding: 2px 5px" v-for="(d, i) in showShop" :key="i">
                  <a href="#">{{ d }}</a>
                </li>
              </ul>
              <ul style="padding-top: 5px">
                <li style="display: inline-block; width: 50%; padding: 2px 5px" v-for="(d, i) in showShop2" :key="i">
                  <a href="#">{{ d }}</a>
                </li>
              </ul>
            </div>
          </li>
          <li>|</li>
          <li>
            <a href="#">行星会员</a>
          </li>
          <li>|</li>
          <li class="zankai" @mouseover="isShowNav = true" @mouseleave="isShowNav = false">
            <a href="#" @click.prevent="($evnet)={}">网站导航 ▽</a>
            <div class="cover" v-show="isShowNav"></div>
            <div class="showElsePanel2" v-show="isShowNav">
              <div style="display: inline-block;width: 310px;border-right:1px solid black">
                <span style="
                    font-weight: 700;
                    display: inline-block;
                    padding: 0 5px;
                  ">特色主题</span>
                <ul style="padding-top: 5px; padding-bottom: 5px">
                  <li style="display: inline-block; width: 75px; padding: 2px 5px" v-for="(d, i) in shownav1" :key="i">
                    <a href="#">{{ d }}</a>
                  </li>
                </ul>
              </div>
              <div style="display: inline-block;width: 250px;margin-left:20px;border-right:1px solid black">
                <span style="
                    font-weight: 700;
                    display: inline-block;
                    padding: 0 5px;
                  ">行业频道</span>
                <ul style="padding-top: 5px; padding-bottom: 5px">
                  <li style="display: inline-block; width: 75px; padding: 2px 5px" v-for="(d, i) in shownav2" :key="i">
                    <a href="#">{{ d }}</a>
                  </li>
                </ul>
              </div>

              <div style="display: inline-block;width: 250px;margin-left:20px;border-right:1px solid black">
                <span style="
                    font-weight: 700;
                    display: inline-block;
                    padding: 0 5px;
                  ">生活服务</span>
                <ul style="padding-top: 5px; padding-bottom: 5px">
                  <li style="display: inline-block; width: 75px; padding: 2px 5px" v-for="(d, i) in shownav3" :key="i">
                    <a href="#">{{ d }}</a>
                  </li>
                </ul>
              </div>

              <div style="display: inline-block;width: 300px;margin-left:20px">
                <span style="
                    font-weight: 700;
                    display: inline-block;
                    padding: 0 5px;
                  ">更多精选</span>
                <ul style="padding-top: 5px; padding-bottom: 5px">
                  <li style="display: inline-block; width: 100px; padding: 2px 5px" v-for="(d, i) in shownav4" :key="i">
                    <a href="#">{{ d }}</a>
                  </li>
                </ul>
              </div>

            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shortcut",
  data() {
    return {
      planet: "地球",
      isShowPlanet: false,
      isShowShop: false,
      isShowNav: false,
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
      showShop: [
        "待处理订单",
        "我的问答",
        "降价商品",
        "返修退换货",
        "我的关注",
      ],
      showShop2: ["帮助中心", "售后服务", "在线客服", "意见建议"],
      shownav1: [
        "新品首发",
        "星际金融",
        "全球售",
        "国际站",
        "星际会员",
        "台湾售",
        "俄语站",
        "装机大师",
        "港澳售",
        "优惠券",
        "秒杀",
        "闪购",
        "印尼站",
        "陪伴计划",
        "出海招商",
        "拍拍二手",
        "买什么",
      ],
      shownav2: [
        "手机",
        "智能数码",
        "电脑办公",
        "家用电器",
        "星际小家",
        "星际服饰",
        "星际生鲜",
        "家装城",
        "母婴食品",
        "农资频道",
        "整机",
        "图书",
        "劳动防护",
      ],
      shownav3: [
        "星际众筹",
        "白条",
        "星际金融",
        "星际小金库",
        "理财",
        "话费",
        "水电煤",
        "彩票",
        "旅行",
        "飞船票",
        "酒店",
        "电影票",
        "星际到家",
        "游戏",
        "拍拍回收",
      ],
      shownav4: [
        "合作招商",
        "星际通信",
        "星际E卡",
        "企业采购",
        "服务市场",
        "办公",
        "生活馆",
        "校园加盟",
        "星际社区",
        "装机大师",
        "知识产权维权",
        "关于我们",
        "星际安联保险",
        "星际数科保险",
      ],
    };
  },
  methods: {
    async outlogin() {
      console.log(await this.$api.outlogin());
      window.location.reload();
    },
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
  },
};
</script>

<style scoped>
.fl {
  padding: 0 10px;
  position: relative;
}
.fl:hover {
  background: white;
  outline: 1px solid black;
  outline-offset: -1px;
}
.w {
  line-height: 30px;
}
.shortcut {
  width: 100%;
  height: 30px;
  background: #e3e4e5;
}
.shortcut .right > li {
  display: inline-block;
}

.shortcut .right > li > a {
  padding: 0 10px;
  /* border-right: 1px solid black; */
}

.shortcut .right > li:first-of-type a:first-of-type {
  padding: 0;
  border-right: none;
}

.showPlanetPanel {
  outline: 1px solid black;
  outline-offset: -1px;
  position: absolute;
  left: -0px;
  top: 30px;
  width: 175px;
  background-color: white;
  padding: 10px 5px;
  line-height: normal;
  z-index: 1;
}
.panel {
  display: flex;
  flex-wrap: wrap;
}
.showPlanetPanel div:first-of-type .panel {
  padding-bottom: 10px;
  border-bottom: 1px solid black;
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
.cover {
  position: absolute;
  left: 1px;
  top: 29px;
  width: calc(100% - 2px);
  background-color: white;
  height: 2px;
  line-height: normal;
  z-index: 2;
}
.currPlanet {
  background: #35a375 !important;
}
.currPlanet a {
  color: white;
}
.showElsePanel {
  outline: 1px solid black;
  outline-offset: -1px;
  position: absolute;
  left: -0px;
  top: 30px;
  width: 175px;
  background-color: white;
  padding: 10px 5px;
  padding-bottom: 5px;
  line-height: normal;
  z-index: 1;
}
.right li {
  position: relative;
}
.right .zankai:hover {
  background: white;
  outline: 1px solid black;
  outline-offset: -1px;
}
.showElsePanel2 {
  outline: 1px solid black;
  outline-offset: -1px;
  position: absolute;
  right: -0px;
  top: 30px;
  width: 1180px;
  background-color: white;
  padding: 10px 5px;
  padding-bottom: 5px;
  line-height: normal;
  z-index: 1;
}
</style>
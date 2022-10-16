<template>
  <div class="fs">
    <div class="w">
      <div class="nav">
        <ul style="padding:10px 0">
          <li v-for="(d,i) in navs" :key="i" @mouseover="()=>{isShowNavs = true;currNav=i}" @mouseleave="()=>{isShowNavs = false;currNav=-1}" :class="{navAct:currNav==i}">
            <a href="#" v-for="(dd, ii) in d" :key='ii'>{{dd}}<span v-if="d.length > 1 && ii != d.length-1"> / </span></a>
            <div v-if="isShowNavs && currNav == i" class="ShowNavsPanel">
              <div style="text-align:center;line-height:450px;font-size:72px" v-if="currNav > 3">暂无内容！😢</div>

              <div v-else class="NavRow" v-for="(ddd,iii) in navsDetail[i].f" :key="iii">
                <a class="NavsAA" href="#">{{ddd}} ></a>
                <a class="NavsAA2" href="#" v-for="(dddd,iiii) in navsDetail[i].data[iii]" :key="iiii">{{dddd}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="subject">
        <ul class="imgUL">
          <li v-for="(d,i) in subjectImg" :key="i" :class="{act:d.isAct==true}">
            <a href="#">
              <img :src="require('./images/' + d.p)" alt="">
            </a>
          </li>
        </ul>
        <!-- 大轮播图 -->
        <div class="pre" @click="preImg">
          < </div>
            <div class="next" @click="nextImg"> > </div>
            <ul class="dot">
              <li v-for="(d,i) in subjectImg" :key="i" :class="{dotAct:d.isAct==true}" @click="dotClick(i)"></li>
            </ul>
        </div>
        <div class="submain">
          <div class="submainC0" :class="{submainAct:currR == 0}">
            <a href="#">
              <div class="submainC01"></div>
            </a>
            <a href="#">
              <div class="submainC02"></div>
            </a>
            <a href="#">
              <div class="submainC03"></div>
            </a>
          </div>
          <div class="submainC1" :class="{submainAct:currR == 1}">
            <a href="#">
              <div class="submainC04"></div>
            </a>
            <a href="#">
              <div class="submainC05"></div>
            </a>
            <a href="#">
              <div class="submainC06"></div>
            </a>
          </div>
          <div class="submainC2" :class="{submainAct:currR == 2}">
            <a href="#">
              <div class="submainC07"></div>
            </a>
            <a href="#">
              <div class="submainC08"></div>
            </a>
            <a href="#">
              <div class="submainC09"></div>
            </a>
          </div>
          <div class="pre" @click="preImgR">
            < </div>
              <div class="next" @click="nextImgR"> > </div>
          </div>
          <div class="fsright">
            <div class="r0">
              <a href="#">
                <div class="r0c0" style="display:inline-block"></div>
              </a>
              <div class="r0c1" style="width:100px;display:inline-block;text-align:center">
                <span>Hi~欢迎逛星际！</span>
                <br>
                <a href="#">登录</a><span> | </span><a href="#">注册</a>
              </div>
              <div>
                <div class="r0b"><a href="#">新人福利</a></div>
                <div class="r0b"><a href="#">PLUS会员</a></div>
              </div>
            </div>
            <div class="r1">
              <div class="r1r0">
                <h3 style="color:black" class="fl">星际快报</h3>
                <a href="#" class="fr">更多 ></a>
              </div>
              <ul>
                <li><span>热议</span><a href="#">你的飞船里，还差...</a></li>
                <li><span>热议</span><a href="#">新行星，你可以这样...</a></li>
                <li><span>最新</span><a href="#">最便宜的引擎来了...</a></li>
                <li><span>最新</span><a href="#">电磁炮+亚光速，你...</a></li>
              </ul>
            </div>
            <div class="r2">
              <ul>
                <li v-for="(d,i) in RData" :key="i">
                  <a href="#"><img class="RdataImg" :src="require(`./images/r/${i}.png`)" alt=""></a>
                  <br>
                  <a href="#">{{d}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

</template>

<script>
export default {
  name: "home",
  data() {
    return {
      navs: [
        ["星际电器"],
        ["通讯器", "运营商", "数码"],
        ["电脑", "办公"],
        ["飞船", "组装部件", "引擎"],
        ["离子防护服", "电磁枪", "星球装备"],
        ["食品", "饮料", "生鲜", "星际特产"],
        ["医疗器械", "身躯改造"],
        ["艺术", "礼品", "农业相关"],
        ["星际图书", "星际教育"],
        ["飞船票", "酒店", "星际旅游"],
        ["安装", "飞船维修", "飞船保养"],
        ["飞船运输", "保险"],
        ["星际工业"],
      ],
      navsDetail: [
        {
          f: ["纳米显示屏", "全自动洁衣机"],
          data: [
            ["全纳米材质", "50w超清画质", "全息投影显示屏", "显示屏配件"],
            ["30秒洁衣", "伽马射线除菌", "衣物材质合成"],
          ],
        },
        {
          f: ["跨星系即时通讯器", "星际数码", "星际运营商"],
          data: [
            [
              "恒星Pro19",
              "全息通讯器",
              "感知反馈通讯器",
              "视觉通讯",
              "以旧换新",
            ],
            [
              "行星扫描仪",
              "全息监视场",
              "三维成像相机",
              "五亿T存储卡",
              "脑神经耳麦",
            ],
            ["贝塔通信", "地球电信", "火星快通", "深空即达"],
          ],
        },
        {
          f: ["量子电脑", "无线办公"],
          data: [
            [
              "1024^1024运算核心",
              "一体机",
              "飞船镶嵌平板",
              "个人星球服务器",
              "贾维斯个人管家",
              "智慧电脑配件",
            ],
            ["会议场景生成器", "全物种语言实时翻译", "仿古笔记本&钢笔"],
          ],
        },
        {
          f: ["个人飞船", "最新部件", "超空间引擎"],
          data: [
            ["全新亚当号", "亚光速", "深空号", "自循环"],
            ["五十立方拓展仓","连接桥","光板","物质外监测","机械手300米","小型逃生仓"],
            ['跃迁引擎',"无工质引擎","四环压缩","电场转引力波","可行驶距离1000光年"]
          ],
        },
      ],
      subjectImg: [
        { p: "1.webp", isAct: true },
        { p: "2.webp", isAct: false },
        { p: "3.webp", isAct: false },
        { p: "4.webp", isAct: false },
        { p: "5.webp", isAct: false },
      ],
      subjectImgCurr: 0,
      RData: [
        "企业购",
        "话费",
        "礼品卡",
        "游戏",
        "穿梭票",
        "白条",
        "众筹",
        "加油卡",
        "酒店",
        "飞船票",
        "投影票",
        "飞船城",
      ],
      currR: 0,
      isShowNavs: false,
      currNav: -1,
    };
  },
  methods: {
    preImg() {
      this.subjectImgCurr -= 1;
      if (this.subjectImgCurr < 0) {
        this.subjectImgCurr += this.subjectImg.length;
      }
      this.subjectImg.forEach((e) => {
        e.isAct = false;
      });
      this.subjectImg[this.subjectImgCurr].isAct = true;
    },
    nextImg() {
      this.subjectImgCurr += 1;
      if (this.subjectImgCurr >= this.subjectImg.length) {
        this.subjectImgCurr -= this.subjectImg.length;
      }
      this.subjectImg.forEach((e) => {
        e.isAct = false;
      });
      this.subjectImg[this.subjectImgCurr].isAct = true;
    },
    dotClick(i) {
      this.subjectImg.forEach((e) => {
        e.isAct = false;
      });
      this.subjectImgCurr = i;
      this.subjectImg[this.subjectImgCurr].isAct = true;
    },
    preImgR() {
      this.currR -= 1;
      if (this.currR < 0) {
        this.currR += 3;
      }
    },
    nextImgR() {
      this.currR += 1;
      if (this.currR >= 3) {
        this.currR -= 3;
      }
    },
  },
};
</script>



<style scoped>
.fs {
  background-color: #ececec;
}

.w {
  height: 500px;
  padding: 10px 0;
  display: flex;
}

.fs .nav {
  position: relative;
  width: 190px;
  height: 100%;
  background-color: #fff;
  margin-right: 10px;
}

.fs .subject {
  width: 590px;
  height: 100%;
  background-color: rgb(230, 230, 230);
  margin-right: 10px;
}

.fs .submain {
  width: 190px;
  height: 100%;
  /* background-color: rgb(211, 241, 241); */
  margin-right: 10px;
}
.fsright {
  width: 190px;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.nav ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.nav ul li {
  padding: 0px 10px;
  height: calc(100% / 13);
  line-height: 35.4px;
}

.nav ul .navAct {
  background-color: #dddddd;
}
.subject {
  position: relative;
}

.subject .imgUL {
  position: relative;
}

.subject .imgUL li {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: 0.3s;
}

.subject .imgUL .act {
  opacity: 1;
  z-index: 1;
}
.pre,
.next {
  position: absolute !important;
  color: rgb(189, 189, 189);
  width: 30px !important;
  height: 50px !important;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 5 !important;
}
.pre {
  left: 0;
  top: 50%;
  border-radius: 0 15px 15px 0;
}
.next {
  right: 0;
  top: 50%;
  border-radius: 15px 0px 0px 15px;
}
.pre:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}
.dot {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.dot li {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}
.dot .dotAct {
  background-color: rgba(255, 255, 255, 1);
  outline: 3px solid rgba(255, 255, 255, 0.3);
}
.dot li:hover {
  background-color: rgba(255, 255, 255, 1);
  outline: 3px solid rgba(255, 255, 255, 0.3);
}
.fsright {
  padding: 10px;
}
.fsright .r0 {
  position: relative;
  width: 100%;
  height: 100px;
  /* background-color: rgb(240, 240, 240); */
  border-bottom: 1px solid rgb(221, 221, 221);
}
.r0c0 {
  width: 40px;
  height: 40px;
  background-image: url("./images/renxiang.webp");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 10px;
  left: 10px;
}
.r0c1 {
  position: absolute;
  top: 12px;
  left: 60px;
}
.r0b {
  display: inline-block;
  width: 75px;
  background-color: rgb(110, 209, 204);
  color: white;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin: 0 5px;
  margin-top: 60px;
  border-radius: 10px;
  cursor: pointer;
}
.r0b a {
  color: white;
}
.r0b:last-of-type {
  background-color: rgb(72, 75, 75);
}
.r0b:last-of-type a {
  color: rgb(250, 196, 49);
}
.r0b:hover {
  background-color: rgb(90, 179, 174);
}
.r1r0 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  padding-bottom: 5px;
}
.r1 li {
  margin-bottom: 5px;
}
.r1 li span {
  display: inline-block;
  width: 35px;
  text-align: center;
  background-color: rgb(248, 232, 223);
  color: rgb(243, 43, 43);
  margin-right: 5px;
}
.r1 {
  padding: 0 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(221, 221, 221);
}
.r2 {
  padding: 5px 0;
}
.r2 ul {
  display: flex;
  flex-wrap: wrap;
}
.r2 ul li {
  width: 33%;
  text-align: center;
  margin-top: 10px;
}
.r2 ul li:nth-of-type(-n + 3) {
  margin-top: 0px;
}
.r2 ul li a img {
  width: 30px;
}
.submain {
  position: relative;
}
.submain div div {
  width: 100%;
  height: calc(460px / 3);
  background-color: rgb(212, 212, 212);
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-size: contain;
}
.submainC01 {
  background-image: url(./images/r1/8.webp);
}
.submainC02 {
  background-image: url(./images/r1/0.webp);
}
.submainC03 {
  background-image: url(./images/r1/1.webp);
}
.submainC04 {
  background-image: url(./images/r1/3.webp);
}
.submainC05 {
  background-image: url(./images/r1/4.webp);
}
.submainC06 {
  background-image: url(./images/r1/5.webp);
}
.submainC07 {
  background-image: url(./images/r1/6.webp);
}
.submainC08 {
  background-image: url(./images/r1/7.webp);
}
.submainC09 {
  background-image: url(./images/r1/2.webp);
}
.submainC0,
.submainC1,
.submainC2 {
  position: absolute;
  width: 100%;
  opacity: 0;
  z-index: 0;
  transition: 0.3s;
}
.submain .submainAct {
  opacity: 1;
}
.RdataImg:hover {
  opacity: 0.7;
}
.ShowNavsPanel {
  position: absolute;
  width: 800px;
  height: 480px;
  background-color: rgb(255, 255, 255);
  top: 0;
  left: 190px;
  z-index: 10;
  box-shadow: 0px 0px 10px 0 rgb(165, 165, 165);
}
.NavRow {
  padding: 10px 10px;
  height: 35px;
  line-height: 35px;
}
.NavRow a {
  display: inline-block;
}
.NavsAA {
  width: 120px;
  text-align: right;
  font-weight: 700;
  margin-right: 20px;
}
.NavsAA2 {
  padding-left: 10px;
}
</style>
<template>
  <div class="all">
    <div class="w">
      <div style="width: 100%;display: flex;justify-content: space-around;margin-bottom: 20px;">
        <div class="fourshow">
          <span class="show four"></span>
          <span>品类齐全，轻松购物</span>
        </div>
        <div class="fourshow">
          <span class="show one"></span>
          <span>多仓直发，极速配送</span>
        </div>
        <div class="fourshow">
          <span class="show two"></span>
          <span>正品发货，精致服务</span>
        </div>
        <div class="fourshow">
          <span class="show three"></span>
          <span>天天低价，畅选无忧</span>
        </div>
      </div>
      <div style="display: flex;border-bottom:1px solid rgb(179, 179, 179);padding-bottom:20px">
        <div v-for="(d, i) in footerData1" :key="i" class="footerItem">
          <ul>
            <li v-for="(dd,ii) in d" :key="ii" :class="{footerjiacu:ii==0}" style="padding-bottom:5px">
              <a href="#">{{dd}}</a>
            </li>
          </ul>
        </div>
        <div class="declare fr">
          <span style="text-align: center;font-size:14px;font-weight:600;padding:10px 0">行星商城覆盖星域</span>
          <span>已向银河系16星系提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。</span>
          <a style="text-align: right" href="#">查看详情>></a>
        </div>
      </div>
      <div>
        <ul class="copyright">
          <li v-for="(d,i) in footerData2" :key="i"><a href="#">{{d}}</a></li>
        </ul>
      </div>
      <div class="footerfooter">
        <div class="Fshow Fone"></div>
        <div class="Fshow Ftwo"></div>
        <div class="Fshow Fthree"></div>
        <div class="Fshow Ffour"></div>
        <div class="Fshow Ffive"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerData1: [
        ["购物指南", "会员介绍", "生活旅行", "常见问题", "大家电", "联系客服"],
        [
          "配送方式",
          "上门自提",
          "211限时达",
          "配送服务查询",
          "配送费收费标准",
          "海外配送",
        ],
        ["支付方式", "货到付款", "在线支付", "分期付款", "公司转账"],
        [
          "售后服务",
          "售后政策",
          "价格保护",
          "退款说明",
          "返修/退换货",
          "取消订单",
        ],
        [
          "特色服务",
          "夺宝岛",
          "DIY装机",
          "延保服务",
          "星际E卡",
          "星际通信",
          "人马座智能",
        ],
      ],
      footerData2: [
        "关于我们",
        "联系我们",
        " 联系客服",
        " 合作招商",
        " 商家帮助",
        " 营销中心",
        " 手机星际",
        " 友情链接",
        " 销售联盟",
        " 星际社区",
        " 风险监测",
        " 隐私政策",
        " 星际公益",
        "English Site",
        "Media & IR"
      ],
    };
  },
};
</script>

<style scoped>
.all {
  background-color: #ececec;
  border-top: 1px solid rgb(153, 153, 153);
  padding: 20px 0;
}
.fourshow {
  width: 225px;
  height: 45px;
  font-size: 18px;
  line-height: 45px;
  font-weight: 700;
  color: black;
  display: flex;
}
.fourshow > .show {
  background-image: url(./images/footerAll.png);
  width: 40px;
  height: 45px;
  /* background-position: 0px -190px; */
  margin-right: 5px;
}
.fourshow .one {
  background-position: -40px -190px;
}
.fourshow .two {
  background-position: -80px -190px;
}
.fourshow .three {
  background-position: -122px -190px;
}
.fourshow .four {
  background-position: 0px -190px;
}
.footerItem {
  width: 200px;
}
.footerjiacu {
  font-size: 14px;
  font-weight: 600;
}
.footerjiacu a {
  cursor: text;
}
.footerjiacu a:hover {
  color: #666;
}
.declare {
  display: flex;
  flex-direction: column;
  width: 200px;
}
.copyright{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.copyright>li{
  margin: 20px 0;
  padding: 0px 12px;
  border-right: 1px solid rgb(153, 153, 153);
}
.footerfooter{
  display: flex;
  justify-content: center;
}
.Fshow{
  background-image:  url(./images/footerAll.png);
  width: 120px;
  height: 30px;
  margin-right: 5px;
}
.Fone{
  background-position: -190px -150px;
}
.Ftwo{
  background-position: -190px -110px;
}
.Fthree{
  background-position: -190px -73px;
}
.Ffour{
  background-position: -190px -35px;
}
.Ffive{
  background-position: -190px -0px;
}

</style>
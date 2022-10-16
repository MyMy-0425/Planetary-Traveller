<template>
  <div>
    <div class="h">
      <div class="w">
        <router-link to="/home"><img class="logo" src="./images/logo.webp" alt=""></router-link>
        <span>欢迎登录！</span>
        <div style="flex:1"></div>
        <span style="font-size: 16px;" class="fr">没有账号？<router-link class="login" to="/register">立即注册></router-link></span>
      </div>
    </div>
    <div class="main">
      <div class="w1">
        <div class="loginPanel fr">
          <div class="lh">
            ! 该系统登录功能仅用于测试，无其它作用。
          </div>
          <div class="lb">
            <div class="lbr0">
              <a href="#" @click.prevent="isSaoma=true" :class="{act:isSaoma}">扫码登录</a><span style="position: relative;top:-2px;color:rgb(230, 230, 230);">|</span><a href="#" :class="{act:!isSaoma}"
                @click.prevent="isSaoma=false">账户登录</a>
            </div>
            <div v-show="isSaoma" class="saoma">
              <nothingthere class="nn"></nothingthere>
            </div>
            <form action="#" @submit.prevent="login">
              <div v-show="!isSaoma" class="lbr1">
                <input type="text" :class="{redInput:cw0}" v-model.lazy="username" maxlength="20" placeholder="用户名">
                <div class="tip one" v-show="cw0">{{tips0[tipcurr0]}}</div>
                <input maxlength="20" type="password" :class="{redInput:cw1}" v-model.lazy="password" placeholder="密码">
                <div class="tip two" v-show="cw1">{{tips1[tipcurr1]}}</div>
                <a href="#" class="heng">忘记密码</a>
                <button class="loginBtn">登录</button>
              </div>
            </form>
            <div v-show="!isSaoma">
              <div class="dw" :class="{dwred:cw0}"></div>
              <div class="dw" :class="{dwred:cw1}"></div>
            </div>
          </div>
          <div class="lf">
            <div>
              <a href="#">
                <div class="qq"></div>
              </a>
              <a href="#"> QQ</a>
            </div>
            <span class="shu">|</span>
            <div>
              <a href="#">
                <div class="wx"></div>
              </a>
              <a href="#"> 微信</a>
            </div>
            <div style="flex:1"></div>
            <router-link to="/register" class="rrr heng">立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        <ul class="copyright">
          <li v-for="(d,i) in footerData2" :key="i"><a href="#">{{d}}</a></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      isSaoma: false,
      footerData2: [
        "关于我们",
        "联系我们",
        " 人才招聘",
        " 合作招商",
        " 商家入驻",
        " 广告服务",
        " 手机星际",
        " 友情链接",
        " 销售联盟",
        " 星际社区",
        " 星际公益",
        "English Site",
        "Media & IR",
      ],
      tipcurr0: 0,
      tipcurr1: 0,
      tips0: ["请输入用户名！", "账号错误！", "用户名不包含特殊字符","   "],
      tips1: ["请输入密码！", "用户名或密码错误！", "密码不包含特殊字符！"],
      cw0: false,
      cw1: false,
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      let tem = true;
      if (this.username.length <= 0) {
        this.cw0 = true;
        this.tipcurr0 = 0;
        tem = false;
      } else {
        if (!/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(this.username)) {
          this.cw0 = true;
          this.tipcurr0 = 2;
          tem = false;
        } else {
          this.cw0 = false;
        }
      }

      if (this.password.length <= 0) {
        this.cw1 = true;
        this.tipcurr1 = 0;
        tem = false;
      } else {
        if (!/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(this.password)) {
          this.cw1 = true;
          this.tipcurr1 = 2;
          tem = false;
        } else {
          this.cw1 = false;
        }
      }
      if (tem) {
        this.loginMethod();
      }
    },
    async loginMethod() {
      const tem = await this.$api.login(this.username, this.password)
      console.log(tem)
      if (tem.code == '200'){
        this.$store.dispatch('user/actUsername', tem.username)
        this.$router.push('/home')
        sessionStorage.setItem("username", tem.username);
      }
      else if(tem.code == '201'){
        this.cw1 = true;
        this.cw0 = true;
        this.tipcurr1 = 1;
        this.tipcurr0 = 3
      }
    },
    autoLogin() {
      this.$api.autologin()
    },
  },
  beforeRouteEnter (to, from, next) {
    if(sessionStorage.getItem('username')){
      next(from.path)
    }
    next()
  },
};
</script>

<style scoped>
.w {
  height: 135px;
  width: 1000px;
  padding: 5px 0;
  /* background-color: rgb(214, 214, 214); */
  display: flex;
}
.logo {
  width: 150px;
  height: 120px;
}
.h .w span {
  font-size: 22px;
  line-height: 190px;
  margin-left: 20px;
  color: black;
}
.login {
  font-size: 16px;
  color: #35a3a3;
}
.login:hover {
  color: #279797;
  text-decoration: underline;
}
.h {
  width: 100%;
  box-shadow: 0 0 10px 0 rgb(170, 170, 170);
  z-index: 99999;
}
.main {
  overflow: hidden;
  width: 100%;
  min-height: 200px;
  background-color: #35a3a3;
}
.w1 {
  overflow: hidden;
  width: 1000px;
  min-height: 200px;
  margin: 0 auto;
  /* background-color: rgb(238, 195, 195); */
}
.loginPanel {
  width: 350px;
  height: 390px;
  background-color: rgb(255, 255, 255);
  margin: 20px 0 50px 0;
}
.lh {
  background-color: #d9edf5;
  text-align: center;
  padding: 10px 0;
  color: rgb(255, 0, 0);
}
.lbr0 {
  width: 100%;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.lbr0 a {
  position: relative;
  display: inline-block;
  width: 49.5%;
  text-align: center;
  font-size: 20px;
  padding: 10px 0;
}
.lbr0 .act {
  color: #35a3a3;
  font-weight: 600;
}
.lb {
  position: relative;
}
.lbr1 {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 30px 20px;
  border-bottom: 1px solid rgb(230, 230, 230);
  position: relative;
}
.lbr1 input {
  height: 40px;
  border-radius: 0px;
  border: 1px solid rgb(160, 160, 160);
  margin-bottom: 20px;
  padding: 0 10px;
  margin-left: 40px;
}
.lbr1 input::placeholder {
  color: rgb(177, 177, 177);
}
.lbr1 a {
  text-align: right;
  padding-bottom: 20px;
}
.loginBtn {
  height: 40px;
  font-size: 20px;
  font-weight: 500;
  background-color: #3cb1c0;
  border: none;
  color: white;
  text-indent: 25px;
  letter-spacing: 25px;
}

.dw {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #e0e0e0;
  left: 20px;
  top: 131px;
  background-image: url(./images/pwd-icons-new.png);
  background-size: 125px;
  border: 1px solid rgb(160, 160, 160);
  border-right-width: 0px;
}
.dw:first-of-type {
  left: 20px;
  top: 71px;
}
.dw:last-of-type {
  background-position: -50px 0;
}
.lf {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.rrr {
  font-size: 14px;
}
.shu {
  margin: 0 10px;
  color: #e6e6e6;
}
.qq,
.wx {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-image: url(./images/QQ-weixin.png);
  background-repeat: no-repeat;
}
.wx {
  background-position: -20px 0;
}
.heng:hover {
  text-decoration: underline;
}
.copyright {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.copyright > li {
  margin: 20px 0;
  padding: 0px 12px;
  border-right: 1px solid rgb(153, 153, 153);
}
.copyright > li:last-of-type {
  border: none;
}
.saoma {
  height: 249px;
}
.saoma .nn {
  line-height: 249px;
  font-size: 24px;
}
.tip {
  position: absolute;
  top: 0;
  color: red;
}
.one {
  top: 60px;
}
.two {
  top: 120px;
}
.lbr1 .redInput {
  border: 1px solid rgb(255, 0, 0);
}
.dwred {
  border-color: rgb(255, 0, 0);
}
</style>
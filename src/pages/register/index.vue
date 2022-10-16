<template>
  <div>
    <div class="h">
      <div class="fixed" v-if="!tyks">
        <div class="panel">
          <h1>用户注册协议</h1>
          <div class="content">
            欢迎注册为<span class="gaoliangG">【跨行星未来商城】</span>的用户，您需要完成我们的注册流程，并且同意以下协议。请您务必仔细阅读、理解协议中的内容再点击同意。<span class="gaoliangG">【注意】</span>如果您不同意以下全部协议或者条款，请您停止注册，谢谢合作。
            <br><br>
            1. 本系统仅为技术测试，系统中的一切信息<span class="gaoliangR">不具有真实性</span>；
            <br><br>
            2. 本系统不会展示您上传的任何信息；
            <br><br>
            3. 您的注册信息仅用于测试，<span class="gaoliangR">请不要使用任何常用的账号和密码。</span>
            <br><br>
            4. 本系统<span class="gaoliangR">不会保障您注册数据的安全性</span>；
            <br><br>
            5. 所有注册数据将在<span class="gaoliangR">半小时后删除</span>，请勿输入重要数据。
          </div>
          <button class="contentTY" @click="tyks=true;tongyi=true">同意并继续</button>
        </div>
      </div>
      <div class="w">
        <router-link to="/home"><img class="logo" src="./images/logo.webp" alt=""></router-link>
        <span>欢迎注册！</span>
        <div style="flex:1"></div>
        <span style="font-size: 16px;" class="fr">已有账号？<router-link class="login" to="/login">请登录></router-link></span>
      </div>
    </div>
    <div class="w">
      <div class="main">
        <div class="r0">
          <div ref="cg" class="r0c0 juzhong" :class="{wcg:zzcg}">
            <div class="yuanquan">1</div>
            <span :class="{curr:!zzcg}">填写账号信息</span>
          </div>
          <div class="r0c1 juzhong" :class="{wcg:!zzcg}">
            <div class="yuanquan">2</div>
            <span :class="{curr:zzcg}">注册成功</span>
          </div>
          <div class="arrows">
            · · · · · · · · · · · · · >
          </div>
        </div>
        <form @submit.prevent="submit">
          <div class="r1">
            <div class="myinput">
              <span>账号：</span><input ref="a" v-model.lazy="userInfor.username" class="ii " type="text" maxlength="20" placeholder="请输入您的账号..."><span class="tips"
                :class="{tipsShow:this.userInforJudge.username}">{{ts0}}</span>
            </div>
            <div class="myinput">
              <span>邮箱：</span><input ref="b" maxlength="30" v-model.lazy="userInfor.email" placeholder="请输入您的邮箱..." class="ii" type="text"><span class="tips" :class="{tipsShow:this.userInforJudge.email}">{{ts1}}</span>
            </div>
            <div class="myinput">
              <span>密码：</span><input ref="c" v-model.lazy="userInfor.password" placeholder="请输入您的密码..." class="ii" type="password"><span maxlength="20" class="tips"
                :class="{tipsShow:this.userInforJudge.password}">{{ts2}}</span>
            </div>
            <div class="myinput">
              <span>密码确认：</span><input ref="d" v-model.lazy="userInfor.confirmPassword" placeholder="请确认您的密码..." class="ii" type="password"><span maxlength="20" class="tips"
                :class="{tipsShow:this.userInforJudge.confirmPassword}">{{ts3}}</span>
            </div>
            <div class="ccc">
              <input type="checkbox" v-model="tongyi" style="margin-right:5px">
              同意<a href="#" @click.prevent="tyks=false" style="color: #35a3a3;text-decoration: underline;">用户注册协议</a>
              <div class="tyshow" :class="{tyshowO:tongyiShow}">请同意用户协议！</div>
            </div>
            <div class="myinput">
              <button class="submit" type="submit">确认</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      userInfor: {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      },
      userInforJudge: {
        username: true,
        password: true,
        confirmPassword: true,
        email: true,
      },
      ts0: "提示：账号字符长度在6~15之间，不能有特殊符号",
      ts1: "提示：请输入正确的邮箱",
      ts2: "提示：密码长度在6~20之间，不能有特殊符号",
      ts3: "提示：两次密码不相同！",
      tongyi: false,
      tongyiShow: false,
      timer: null,
      timer2: null,
      tyks: false,
      zzcg: false,
    };
  },
  methods: {
    submit() {
      let tem = true;
      if (this.timer2) {
        return;
      } else {
        this.timer2 = setTimeout(() => {
          this.timer2 = null;
        }, 500);
      }

      let { username, password, confirmPassword, email } = this.userInfor;

      if (
        username.length >= 6 &&
        username.length <= 15 &&
        /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(username)
      ) {
        this.userInforJudge.username = true;
        this.$refs.a.className = "ii";
        this.$refs.a.classList.add("iiGreen");
      } else {
        this.ts0 = "提示：账号字符长度在6~15之间，不能有特殊符号";
        this.userInforJudge.username = false;
        this.$refs.a.className = "ii";
        this.$refs.a.classList.add("iiRed");
        tem = false;
      }

      const reg_email = /^\w+@\w+\.\w+$/;
      if (reg_email.test(email)) {
        this.userInforJudge.email = true;
        this.$refs.b.className = "ii";
        this.$refs.b.classList.add("iiGreen");
      } else {
        this.userInforJudge.email = false;
        this.$refs.b.className = "ii";
        this.$refs.b.classList.add("iiRed");
        tem = false;
      }

      if (
        password.length >= 6 &&
        password.length <= 20 &&
        /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(password)
      ) {
        this.userInforJudge.password = true;
        this.$refs.c.className = "ii";
        this.$refs.c.classList.add("iiGreen");
      } else {
        this.userInforJudge.password = false;
        this.$refs.c.className = "ii";
        this.$refs.c.classList.add("iiRed");
        tem = false;
      }

      if (password != confirmPassword || confirmPassword == "") {
        this.userInforJudge.confirmPassword = false;
        this.$refs.d.className = "ii";
        this.$refs.d.classList.add("iiRed");
        tem = false;
      } else {
        this.userInforJudge.confirmPassword = true;
        this.$refs.d.className = "ii";
        this.$refs.d.classList.add("iiGreen");
      }

      if (!this.tongyi) {
        tem = false;
        this.tongyiShow = true;
        if (!this.timer) {
          this.timer = setTimeout(() => {
            this.tongyiShow = false;
            this.timer = null;
          }, 2000);
        }
      }
      if (tem) {
        this.axiosUser();
      }
    },
    axiosUser() {
      const tem = {
        username: this.userInfor.username,
        password: this.userInfor.password,
        email: this.userInfor.email,
      };
      axios
        .post("/api/userregister", tem)
        .then((res) => {
          console.log(res.data);
          if (res.data.code == "200") {
            this.zzcg = true;
            alert("注册成功！");
            setTimeout(() => {
              this.$router.replace("/login");
            }, 1000);
          } else {
            this.userInforJudge.username = false;
            this.$refs.a.className = "ii";
            this.$refs.a.classList.add("iiRed");
            this.ts0 = "提示：" + res.data.msg;
          }
        });
    },
  },
  beforeRouteEnter (to, from, next) {
    if(sessionStorage.getItem('username')){
      next(from.path)
    }
    next()
  }
};
</script>

<style scoped>
.w {
  height: 135px;
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
  margin-bottom: 50px;
}
.main {
  /* background-color: rgb(221, 221, 221); */
  width: 400px;
  min-height: 100px;
  margin: 0 auto;
}
.r0 {
  display: flex;
  justify-content: center;
}
.r0 .curr {
  color: #35a3a3;
}
.yuanquan {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #35a3a3;
  border-radius: 50%;
  color: white;
  margin-bottom: 10px;
}
.wcg {
  color: #999;
}
.wcg .yuanquan {
  background-color: transparent;
  color: #ccc;
  outline: 2px solid #ccc;
  outline-offset: -2px;
}
.r0 {
  position: relative;
  left: -3px;
}
.juzhong {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 120px;
  /* background-color: rgb(228, 182, 182); */
}
.juzhong:first-of-type {
  margin-right: 200px;
}
.arrows {
  top: 25px;
  left: 110px;
  position: absolute;
  font-size: 26px;
  color: #ccc;
}
.r1 {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.myinput {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
  padding-bottom: 10px;
}
.myinput span {
  width: 90%;
  text-align: left;
}
.myinput input {
  width: 90%;
  height: 35px;
  margin-top: 5px;
}
.ccc {
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: -5px;
  display: flex;
  position: relative;
}
.ii {
  padding: 0 10px;
}
.iiGreen {
  border: 2px solid rgb(36, 189, 36);
  border-radius: 2px;
}
.iiRed {
  border: 2px solid #e2231a;
  border-radius: 2px;
}

.ii:focus {
  outline: none;
}
.tips {
  font-size: 12px;
  color: #e2231a;
}
.submit {
  margin-top: 10px;
  width: 90%;
  height: 40px;
  border: none;
  background-color: #35a3a3;
  color: white;
  margin-bottom: 50px;
}
.tipsShow {
  color: white;
}
.tyshow {
  position: absolute;
  left: 135px;
  width: 120px;
  height: 30px;
  top: -10px;
  background-color: rgb(109, 109, 109);
  line-height: 30px;
  text-align: center;
  color: white;
  border-radius: 5px;
  opacity: 0;
  transition: 0.5s;
}
.tyshow::after {
  content: "";
  position: absolute;
  left: -20px;
  top: 12px;
  border: 10px solid rgb(109, 109, 109);
  border-width: 6px 10px;
  border-color: transparent rgb(109, 109, 109) transparent transparent;
}
.tyshowO {
  opacity: 1;
}
.fixed {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.panel {
  width: 450px;
  height: 520px;
  background-color: white;
  text-align: center;
  color: black;
  padding-top: 20px;
  border-radius: 10px;
}
.content {
  text-align: left;
  padding: 20px 50px;
}
.gaoliangG {
  color: #002fff;
}
.gaoliangR {
  color: rgb(255, 0, 0);
}
.contentTY {
  margin-top: 75px;
  width: 300px;
  height: 45px;
  color: white;
  background-color: #e2231a;
  border: none;
  font-size: 20px;
}
</style>
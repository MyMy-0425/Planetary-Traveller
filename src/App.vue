<template>
  <div>
    <myHeader v-if="!$route.meta.isRegister && !$route.meta.islogin"></myHeader>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isRegister && !$route.meta.islogin"></Footer>
  </div>
</template>

<script>
import myHeader from "./components/myHeader";
import Footer from "./components/footer";

export default {
    name: "App",
    components: {
        myHeader,
        Footer,
    },
    data() {
        return {
            goodsAll: [],
            goodsMoni: [],
        };
    },
    beforeMount() {
        this.autol();
    },
    methods: {
        async autol() {
            try {
                let tem = await this.$api.autologin();
                if (tem.code == "200") {
                    this.$store.dispatch("user/actUsername", tem.username);
                    sessionStorage.setItem("username", tem.username);
                    if (
                        this.$router.currentRoute.path == "/login" ||
                        this.$router.currentRoute.path == "/register"
                    ) {
                        this.$router.replace("/home");
                    }
                } else {
                    sessionStorage.removeItem("username");
                }
                // console.log('自动登录')
            } catch (error) {
                console.log(error.message)
            }
        },
        alldata() {
            const a = [];
            for (let index = 0; index < 50; index++) {
                let tem = {
                    id: 10,
                    price: "999,999,999",
                    img: "./images/test.png",
                    title: "测试商品",
                    personNum: 999,
                    attr: {
                        id: [],
                    },
                };
                tem.id = +index + 10;
                tem.title += (+index + 10).toString();
                a.push(tem);
            }
            this.goodsMoni = a;
            this.goodsAll.splice(10, 0, ...this.goodsMoni);
            this.$store.state.allgoods = this.goodsAll;
            console.log('数据加载')
        },
        async apiGoods(){
            this.goodsAll = await this.$api.getGoods()
            this.alldata();
        }
    },
};
</script>

<style>
</style>

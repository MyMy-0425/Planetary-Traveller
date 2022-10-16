<template>
  <div class="h">
    <div class="w">
      <div class="detail">
        <!-- 面包屑 -->
        <div class="detailr0">
          <span style="display:inline-block;padding:2px 0;width:75px;margin-bottom:10px">全部结果：</span>
          <ul class="bread">
            <li @click="delBread(d)" v-for="(d,i) in breads" :key="i">{{d}}</li>
          </ul>
        </div>
        <div class="detailr1">
          <div class="dr1r mark">
            <div class="dh"><span>品牌</span></div>
            <div class="db">
              <ul class="dul">
                <li @click="$store.dispatch('search/markBreads',d) " v-for="(d,i) in marks" :key="i">{{d}}</li>
              </ul>
            </div>
          </div>
          <div class="dr1r" v-for="(d,i) in detailsElse" :key="i">
            <div class="dh">{{d.name}}</div>
            <div class="db">
              <ul class="dul">
                <li @click="$store.dispatch('search/addEBreads', {d:dd, index:i})" v-for="(dd,ii) in d.data" :key="ii">{{dd}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 展示商品 -->
      <div class="showgoods">
        <div class="goodsnav">
          <a v-for="(d, i) in navs" :key="i" @click.prevent="changeOrder(d,i)" href="#" :class="{act:navscurr == i}">{{d}}<i v-if="order && navscurr == i"> ↑</i><i v-if="!order && navscurr == i"> ↓</i></a>
        </div>
        <div class="goodsdetail">
          <ul>
            <li v-for="(d) in goodsShow" :key="d.id">
              <div class="goodsCell">
                <router-link style="display:block;height:226.79px;width:226.79px" :to="{name:'detail', query:{goodsId:d.id} }"><img class="goodsimg" :src="require(`${d.img}`)" alt=""></router-link>
                <div class="price">￥{{d.price}}</div>
                <div class="description">
                  <router-link :to="{name:'detail', query:{goodsId:d.id} }" :title="d.title">{{d.title}}</router-link>
                </div>
                <div class="evaluation">已有<span>{{d.personNum}}</span>人评价</div>
                <div class="handle">
                  <a href="#">加入购物车</a>
                  <a href="#">收藏</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 分页器 -->
      <div class="pagination">
        <a href="#" @click.prevent="pagecurr=1">首页</a>
        <a href="#" @click.prevent="pagecurr = pagecurr - 1 >= 1?pagecurr - 1:pagecurr">上一页</a>
        <a href="#" @click.prevent="changecurrpage(showcurr-2)" :class="{pageAct:pagecurr==showcurr-2}">{{showcurr-2}}</a>
        <a href="#" @click.prevent="changecurrpage(showcurr-1)" :class="{pageAct:pagecurr==showcurr-1}" v-if="allpage > 1">{{showcurr-1}}</a>
        <a href="#" @click.prevent="changecurrpage(showcurr)" :class="{pageAct:pagecurr==showcurr}" v-if="allpage > 2">{{showcurr}}</a>
        <a href="#" @click.prevent="changecurrpage(showcurr+1)" :class="{pageAct:pagecurr==showcurr+1}" v-if="allpage > 3">{{showcurr+1}}</a>
        <a href="#" @click.prevent="changecurrpage(showcurr+2)" :class="{pageAct:pagecurr==showcurr+2}" v-if="allpage > 4">{{showcurr+2}}</a>
        <a href="#" @click.prevent="pagecurr = pagecurr + 1 <= allpage?pagecurr + 1:pagecurr">下一页</a>
        <a style="position: relative;" href="#" @click.prevent="pagecurr=allpage">末页<span class="ap">共 {{allpage}} 页</span></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                breads: this.$store.state.search.breads || [],
                marks: [
                    "深空",
                    "缔造者",
                    "NOMAN-SKY",
                    "多弗洛伊号",
                    "小宇飞船",
                    "大米科技",
                ],
                detailsElse: [
                    {
                        name: "航程",
                        data: ["100光年", "100~500光年", "500~2000光年", "2000光年以上"],
                    },
                    {
                        name: "引擎类型",
                        data: ["二环引擎", "三环引擎", "冲击引擎", "跃迁引擎", "四环融合"],
                    },
                    {
                        name: "外协装置",
                        data: ["机械手", "伽玛光帆", "纳米隐身", "全景感知"],
                    },
                    {
                        name: "攻击模块",
                        data: ["追梭光弹", "死光", "引力射线", "水滴", "二向箔"],
                    },
                    {
                        name: "即时通讯距离",
                        data: [
                            "小于1光年",
                            "1~3光年",
                            "3~10光年",
                            "10~100光年",
                            "大于100光年",
                        ],
                    },
                    {
                        name: "可容纳人数",
                        data: [
                            "1人",
                            "1~3人",
                            "3~10人",
                            "10~100人",
                            "100~1000人",
                            "1000人以上",
                        ],
                    },
                ],
                order: false,
                showcurr: -1,
                navs: ["综合", "销量", "新品", "价格", "评价"],
                navscurr: 0,
                pagecurr: 1,
                goodsAll:[],
                goodsShow: [],
                goodsfuhe: [],
                goodsMoni: [],
                keywordMy: "",
                idattrs: {
                    深空: 0,
                    缔造者: 1,
                    "NOMAN-SKY": 2,
                    多弗洛伊号: 3,
                    小宇飞船: 4,
                    大米科技: 5,
                    "100光年": 6,
                    "100~500光年": 7,
                    "500~2000光年": 8,
                    "2000光年以上": 9,
                    二环引擎: 10,
                    三环引擎: 11,
                    冲击引擎: 12,
                    跃迁引擎: 13,
                    四环融合: 14,
                    机械手: 15,
                    伽玛光帆: 16,
                    纳米隐身: 17,
                    全景感知: 18,
                    追梭光弹: 19,
                    死光: 20,
                    引力射线: 21,
                    水滴: 22,
                    二向箔: 23,
                    小于1光年: 24,
                    "1~3光年": 25,
                    "3~10光年": 26,
                    "10~100光年": 27,
                    大于100光年: 28,
                    "1人": 29,
                    "1~3人": 30,
                    "3~10人": 31,
                    "10~100人": 32,
                    "100~1000人": 33,
                    "1000人以上": 34,
                },
                breadid: [],
                ischushihua: false,
            };
        },
        methods: {
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
                // console.log('数据加载')
            },
            delBread(d) {
                this.$store.dispatch("search/delBreads", d);
            },
            changeOrder(d, i) {
                if (i == this.navscurr) {
                    this.order = !this.order;
                    if (this.navscurr == 0 || this.navscurr == 3) {
                    this.goodsfuhe.reverse();
                    }
                } else {
                    this.navscurr = i;
                    this.order = false;
                    if (this.navscurr == 3) {
                    this.goodsfuhe.sort((a, b) => {
                        return -(a.price.replace(/,/g, "") - b.price.replace(/,/g, ""));
                    });
                    }

                    if (this.navscurr == 0) {
                    this.goodsfuhe.sort((a, b) => {
                        return +a.id - +b.id;
                    });
                    }
                }
            },
            changecurrpage(i) {
                this.pagecurr = i;
            },
            moniData() {
                // this.goodsAll = this.$store.state.allgoods;
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
                this.$store.state.search.allgoods = this.goodsAll;
                this.goodsfuhe = this.goodsAll;
                this.goodsShow = this.goodsfuhe.slice(
                    (this.pagecurr - 1) * 5,
                    this.pagecurr * 5
                );
                if (this.pagecurr <= 3) {
                    this.showcurr = 3;
                } else if (this.pagecurr >= this.allpage - 2) {
                    this.showcurr = this.allpage - 2;
                } else {
                    this.showcurr = this.pagecurr;
                }
            },
            kkk() {
                this.breads = this.$store.state.search.breads;
                this.breads = this.$store.state.search.breads;
                let bbb = this.$store.state.search.b;
                this.breadid = [];
                this.breads.forEach((e) => {
                    if (this.idattrs[e] || this.idattrs[e] == 0) {
                        this.breadid.push(this.idattrs[e]);
                    }
                });
                const tem = [];
                this.goodsAll.forEach((e) => {
                    let dui = true;
                    if (bbb != "飞船" && bbb != "") {
                        if (e.title.indexOf(bbb) == -1) {
                        dui = false;
                        }
                    }
                    this.breadid.forEach((r) => {
                        if (e.attr.id.indexOf(r) == -1) {
                        dui = false;
                        }
                    });
                    if (dui) {
                        tem.push(e);
                    }
                });
                this.goodsfuhe = tem;
                if (this.navscurr == 3) {
                    this.goodsfuhe.sort((a, b) => {
                        let t = a.price.replace(/,/g, "") - b.price.replace(/,/g, "");
                        return this.order ? t : -t;
                    });
                }
                if (this.navscurr == 0) {
                    this.goodsfuhe.sort((a, b) => {
                        let t = +a.id - +b.id;
                        return this.order ? -t : t;
                    });
                }
                this.pagecurr = 1;
                this.goodsShow = this.goodsfuhe.slice(
                    (this.pagecurr - 1) * 5,
                    this.pagecurr * 5
                );
                if (this.pagecurr <= 3) {
                    this.showcurr = 3;
                } else if (this.pagecurr >= this.allpage - 2) {
                    this.showcurr = this.allpage - 2;
                } else {
                    this.showcurr = this.pagecurr;
                }
                // if (this.breads.indexOf(tem) == -1){
                //   this.breads.push(tem)
                // }
            },
            chushihua() {
                // console.log("search页加载");
                this.moniData();
                this.kkk();
            },
            async apiGoods(){
                try {
                    this.goodsAll = await this.$api.getGoods()
                    this.alldata();
                    this.chushihua();
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
        mounted() {
            this.apiGoods()
        },

        computed: {
            allpage() {
                return Math.ceil(this.goodsfuhe.length / 5) > 0
                ? Math.ceil(this.goodsfuhe.length / 5)
                : 1;
            },
        },
        watch: {
            pagecurr: {
                immediate: true,
                handler(a, b) {
                    if (this.pagecurr > this.allpage) {
                        if (b) {
                            this.pagecurr = b;
                        }
                        return;
                    }
                    this.goodsShow = this.goodsfuhe.slice(
                        (this.pagecurr - 1) * 5,
                        this.pagecurr * 5
                    );
                    if (this.pagecurr <= 3) {
                        this.showcurr = 3;
                    } else if (this.pagecurr >= this.allpage - 2) {
                        this.showcurr = this.allpage - 2;
                    } else {
                        this.showcurr = this.pagecurr;
                    }
                },
            },
            "$store.state.search.breads": {
                deep: true,
                immediate:true,
                handler() {
                    this.breads = this.$store.state.search.breads;
                    let bbb = this.$store.state.search.b;
                    this.breadid = [];
                    this.breads.forEach((e) => {
                        if (this.idattrs[e] || this.idattrs[e] == 0) {
                            this.breadid.push(this.idattrs[e]);
                        }
                    });
                    const tem = [];
                    this.goodsAll.forEach((e) => {
                        let dui = true;
                        if (bbb != "飞船" && bbb != "") {
                            if (e.title.indexOf(bbb) == -1) {
                            dui = false;
                            }
                        }

                        this.breadid.forEach((r) => {
                            if (e.attr.id.indexOf(r) == -1) {
                            dui = false;
                            }
                        });
                        if (dui) {
                            tem.push(e);
                        }
                    });
                    this.goodsfuhe = tem;
                    if (this.navscurr == 3) {
                        this.goodsfuhe.sort((a, b) => {
                            let t = a.price.replace(/,/g, "") - b.price.replace(/,/g, "");
                            return this.order ? t : -t;
                        });
                    }
                    if (this.navscurr == 0) {
                        this.goodsfuhe.sort((a, b) => {
                            let t = +a.id - +b.id;
                            return this.order ? -t : t;
                        });
                    }
                    this.pagecurr = 1;
                    this.goodsShow = this.goodsfuhe.slice(
                        (this.pagecurr - 1) * 5,
                        this.pagecurr * 5
                    );
                    if (this.pagecurr <= 3) {
                        this.showcurr = 3;
                    } else if (this.pagecurr >= this.allpage - 2) {
                        this.showcurr = this.allpage - 2;
                    } else {
                        this.showcurr = this.pagecurr;
                    }
                },
            },
            goodsfuhe: {
                deep: true,
                handler() {
                    this.pagecurr = 1;
                    this.goodsShow = this.goodsfuhe.slice(
                    (this.pagecurr - 1) * 5,
                    this.pagecurr * 5
                    );
                    if (this.pagecurr <= 3) {
                        this.showcurr = 3;
                    } else if (this.pagecurr >= this.allpage - 2) {
                        this.showcurr = this.allpage - 2;
                    } else {
                        this.showcurr = this.pagecurr;
                    }
                },
            },
        },
    };
</script>

<style scoped>
.h {
  border-top: 2px solid #35a3a3;
  padding: 20px 0 10px 0;
}
.bread {
  display: inline-block;
  flex: 1;
}
.bread li {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  background-color: #f1f1f1;
  outline: 1px solid rgb(170, 170, 170);
  padding: 2px 25px 2px 7px;
  pointer-events: none;
  margin-bottom: 10px;
  color: #000;
}
.bread li::after {
  content: "X";
  position: absolute;
  right: 5px;
  top: 2.5px;
  cursor: pointer;
  pointer-events: auto;
}
.bread li:hover::after {
  color: #35a3a3;
}
.detailr0 {
  display: flex;
}
.detailr1 {
  min-height: 100px;
  /* background-color: #f1f1f1; */
  border: 3px solid #f1f1f1;
  border-bottom-width: 0px;
}
.dh {
  padding: 5px 0;
  width: 100px;
  text-align: right;
  background-color: #f1f1f1;
  padding-right: 10px;
  color: #000;
}
.dr1r {
  display: flex;
  color: #666;
  border-bottom: 3px solid #f1f1f1;
}
.dul {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}
.dul li {
  padding: 5px 10px;
  cursor: pointer;
}
.dul li:hover {
  color: #35a3a3;
}
.mark ul {
  color: #e1251b;
  font-weight: 600;
}
.mark ul li:hover {
  color: #ff534a;
}
.mark ul li {
  padding: 20px 20px;
}
.mark .dh {
  display: flex;
  justify-content: right;
  align-items: center;
}
.showgoods {
  margin-top: 10px;
  border: 3px solid #f1f1f1;
  padding-bottom: 5px;
  height: 420px;
}
.goodsnav {
  display: flex;
  border-bottom: 3px solid #f1f1f1;
}
.goodsnav a {
  padding: 10px 10px;
}
.goodsnav .act {
  background-color: #e1251b;
  color: white;
}
.goodsdetail ul {
  display: flex;
  flex-wrap: wrap;
}
.goodsdetail ul li {
  width: 20%;
  /* background-color: rgb(226, 222, 222); */
}
.goodsimg {
  width: 100%;
  padding: 5px;
  transition: 0.3s;
}
.goodsimg:hover {
  transform: scale(1.05);
}
.goodsCell {
  width: 100%;
  padding: 5px;
}
.price {
  color: #c81623;
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 2px;
}
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 20px;
  height: 40px;
}
.evaluation {
  padding: 9px 0;
  font-size: 13px;
  color: rgb(153, 153, 153);
  font-weight: 500;
}
.evaluation span {
  color: #3574c7;
}
.handle {
  display: flex;
  justify-content: space-around;
}
.handle a {
  padding: 3px 0px;
  width: 100px;
  text-align: center;
  border: 1px solid #e1251b;
  color: #e1251b;
}
.handle a:first-of-type:hover {
  color: white;
  background-color: #e1251b;
}
.handle a:last-of-type {
  color: rgb(153, 153, 153);
  border-color: rgb(153, 153, 153);
}
.handle a:last-of-type:hover {
  color: white;
  background-color: rgb(153, 153, 153);
}
.pagination {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.pagination a {
  padding: 5px 10px;
  background-color: #ececec;
  color: black;
  margin-right: 10px;
  border-radius: 20px;
}
.pagination .pageAct {
  background-color: #35a3a3;
  color: white;
}
.ap {
  position: absolute;
  top: 5px;
  width: 50px;
  right: -60px;
}
</style>
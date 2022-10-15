<template>
  <div class="home">
    <div class="page flex-col">
      <div class="box_1 flex-col">
        <!-- 顶部 -->
        <div class="box_3 flex-col">
          <div class="box_4 flex-row">
            <img
              class="label_4"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps6vtig2patz41reobsrcs1ihxs3sslagt2b03a05e-96a5-4241-a007-45ccac98a892"
            />
            <input type="text" placeholder=" 搜索咨询师 / 话题" />
          </div>
          <div class="box_5 flex-row justify-between"></div>
        </div>

        <!-- 心理咨询及其他板块 -->
        <div class="box_6 flex-row justify-between">
          <a href="#" class="box_7 flex-col">
            <div class="text-group_1 flex-col justify-between">
              <span class="text_3" @click="zixun">心理咨询</span>
              <span class="text_4">新人专享99元3小时</span>
            </div>
            <div class="text-wrapper_1 flex-col">
              <span class="text_5">立即领取</span>
            </div>
          </a>
          <div class="box_8 flex-col justify-between">
            <a href="#" class="box_9 flex-row">
              <div class="text-wrapper_2" @click="ceshi">
                <span class="text_6">心理</span>
                <span class="text_7">测试</span>
              </div>
              <img
                class="image_1"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/psfkxyszi33awc0o1sp8xfbqrklx911ardda1d6254d-c6aa-4d1f-92f3-bceaa3cf4210"
              />
            </a>
            <a href="#" class="box_10 flex-row justify-between">
              <div class="group_4 flex-col">
                <div class="text-wrapper_3" @click="ketang">
                  <span class="text_8">心理</span>
                  <span class="text_9">课堂</span>
                </div>
              </div>
              <a href="#" class="text-wrapper_4 flex-col" @click="dianhua">
                <span class="text_10">倾诉热线</span>
              </a>
            </a>
          </div>
        </div>

        <!-- 心理咨询 -->
        <div class="box_11 flex-row">
          <span class="text_11">心理咨询</span>
          <div class="group_5 flex-row">
            <div class="image-text_1 flex-row justify-between">
              <span class="text-group_2" @click="zixun">更多</span>
              <img
                class="image_2"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/psycbk04jehd950kkf8tnwxpn9y50pws0d5b32c81d-8dae-41ff-9d05-79a4978fd6f6"
              />
            </div>
          </div>
        </div>
        <div class="box_12 flex-col"></div>
      </div>

      <!-- 心理医生板块 -->
      <div class="box_13 flex-col">
        <div v-for="(item, index) in result1" :key="index" @click="chitchat">
          <a href="#" class="box_14 flex-row">
            <img
              class="image_3"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps31b4tx8t0dmzj510n499ukdytuwd1j1r781672e21-8f05-4e9a-8c4d-84341861a7c6"
            />
            <div class="section_1 flex-col">
              <span class="text_12">{{ item.cname }}</span>
              <div class="text-wrapper_5 flex-col">
                <span class="text_13">{{ item.label }}</span>
              </div>
              <span class="text_14">咨询次数：</span>
            </div>
            <div class="section_2 flex-col justify-between">
              <div class="text-wrapper_8 flex-row">
                <span class="text_17">{{ item.nomber }}</span>
                <span class="text_18">好评率：</span>
                <span class="text_19">{{ item.favorable_rate }}%</span>
              </div>
            </div>
            <div class="image-wrapper_1 flex-col">
              <a href="#">
                <img
                  class="label_5"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps7hbyx3m7tyilrhj3vzdokm8bmmjmd5geo75453dd2-561f-4996-b95e-1a956fc0119a"
              /></a>
            </div>
          </a>
          <div class="text-wrapper_9 flex-row">
            <span class="text_20">￥</span>
            <span class="text_21">{{ item.c_Prince }}</span>
            <span class="text_22">起</span>
          </div>
          <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psx137cz7tg21b93dznuiabkq9mqaixmoq8e4b6ed7-23b1-4118-9a69-b8fe78af045f"
          />
        </div>
      </div>
      <!-- 心理测试板块 -->
      <div class="box_18 flex-col">
        <div class="block_2 flex-row">
          <span class="text_45">心理测试</span>
          <div class="block_3 flex-row">
            <div class="image-text_2 flex-row justify-between">
              <a href="#" class="text-group_3" @click="ceshi">更多</a>
              <img
                class="image_9"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8c4ippiw3qs703nr0zea5xnrvw5llo7fe2f853f9-5a1e-478b-9f3e-9e887a21dd72"
              />
            </div>
          </div>
        </div>
        <div class="block_4 flex-row"><div class="box_19 flex-col"></div></div>
      </div>
      <div class="box_20 flex-col">
        <!-- 心理健康测试板块 -->
        <a href="#" class="section_4 flex-col">
          <div class="text-wrapper_20 flex-col">
            <span class="text_46" @click="ceshi">每日一测</span>
          </div>
        </a>

        <!-- 测试题 -->
        <a href="#" class="section_5 flex-row" v-for="(item,index) in result2" :key="index" @click="ceshi">
          <img
            class="image_10"
            referrerpolicy="no-referrer"
            :src="item.img"
          />
          <div class="text-wrapper_21 flex-col justify-between">
            <span class="text_47">{{item.test}}</span>
            <span class="text_48">{{item.content}}人已测</span>
          </div>
          <div class="text-wrapper_22 flex-col">
            <a href="#" class="text_49">去测试</a>
          </div>
        </a>
        <div class="section_6 flex-col"></div>
      </div>
      <!-- 电台板块 -->
      <div class="box_21 flex-col">
        <div class="block_5 flex-row">
          <span class="text_59">心灵电台</span>
          <div class="box_22 flex-row">
            <div class="image-text_3 flex-row justify-between">
              <a href="#" class="text-group_4"  @click="diantai">更多</a>
              <img
                class="image_14"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/psfqbcdyt8lbd4r1u8t3n7vka5zp3y8ve353ad9a598-9a88-4b5c-9f3d-b68395a17dc0"
              />
            </div>
          </div>
        </div>
        <div class="block_6 flex-row"><div class="box_23 flex-col"></div></div>
      </div>

      <!-- 情感阅读板块 -->
      <div class="box_24 flex-col">
        <div class="group_8 flex-row">
          <span class="text_60">情感阅读</span>
          <div class="box_25 flex-row">
            <div class="image-text_4 flex-row justify-between">
              <a href="#" class="text-group_5">更多</a>
              <img
                class="image_15"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8zsonqrc4n6rcp1r3zx1vjs2w1yze80p69fa16a7-7b3d-4af4-8513-b8d4022b9772"
              />
            </div>
          </div>
        </div>
        <div class="group_9 flex-row"><div class="box_26 flex-col"></div></div>
      </div>

      <!-- 情感阅读文章吧 -->
      <div class="box_27 flex-col">
        <a href="#" class="group_10 flex-row justify-between">
          <div class="text-group_6 flex-col justify-between">
            <span class="text_61">婚恋系列：晕轮效应中的罗森塔尔效应</span>
            <span class="text_62">晕轮效应又叫光环效应</span>
          </div>
          <img
            class="image_16"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps7754cclfz2jgdhty2s6ltcnfvaupn543b7526d1-1199-4944-b59f-c27a50296d9e"
          />
        </a>
        <a href="#" class="group_11 flex-row">
          <div class="image-text_5 flex-row justify-between">
            <img
              class="label_7"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psd1fffx950gic9tlpwkm8hb2upjqbfmzyve0b27274-5b28-4ac2-ac0a-3a47daaa5060"
            />
            <span class="text-group_7">马友琳</span>
          </div>
          <span class="text_63">744浏览</span>
          <span class="text_64">1点赞</span>
        </a>
        <div class="group_12 flex-col"></div>
        <a href="#" class="group_13 flex-row justify-between">
          <div class="text-group_8 flex-col justify-between">
            <span class="text_65"
              >丈夫出轨回归了，可为什么总是得不到原配的原谅</span
            >
            <span class="text_66">社会心理咨询师</span>
          </div>
          <img
            class="image_17"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psdivuvtn3yy6wisk362be8sg7nwgcdadc819edb4e-2c43-4012-b331-6bbcc93889ba"
          />
        </a>
        <a href="#" class="group_14 flex-row">
          <div class="image-text_6 flex-row justify-between">
            <img
              class="label_8"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psrk18c2vdbl2sspow2xp4sqzqm3uj2lc808efc52-bc5a-41ee-bf02-c8905c23dcbd"
            />
            <span class="text-group_9">刘诗默</span>
          </div>
          <span class="text_67">473浏览</span>
          <span class="text_68">1点赞</span>
        </a>
        <div class="group_15 flex-col"></div>
        <a href="#" class="group_16 flex-row justify-between">
          <div class="text-wrapper_29 flex-col justify-between">
            <span class="text_69">3个技巧，助你“社恐”变“社牛”</span>
            <span class="text_70">社会心理咨询师</span>
          </div>
          <img
            class="image_18"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psr9w87uv86d7287ivhvc12lui4ssxfix8bdf51df-a9d7-4bb1-a45f-a0e5fceb4873"
          />
        </a>
        <a href="#" class="group_17 flex-row">
          <div class="image-text_7 flex-row justify-between">
            <img
              class="label_9"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/pst7ujdavy69ggntcvuuimq0g9gabqqxsee102463-b703-4a56-bdf6-3e179e554e4d"
            />
            <span class="text-group_10">张现立</span>
          </div>
          <span class="text_71">387浏览</span>
          <span class="text_72">1点赞</span>
        </a>
      </div>

      <!-- 心灵电台 -->
      <div class="box_29 flex-col"  @click="diantai">
        <div class="group_18 flex-col">
          <div class="text-wrapper_30 flex-col">
            <span class="text_73">每日推荐</span>
          </div>
        </div>

        <div class="group_19 flex-row justify-between">
          <div class="image-text_13 flex-row justify-between">
            <img
              class="label_15"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/pso5wzhnb22j8y14qyhx2wm9qr1vbkry5e8ae75e8d-32d0-45c1-b531-18636a66c722"
            />
            <a href="#" class="text-group_16">轻音乐：来一场自由放松的乡...</a>
          </div>
          <div class="image-text_14 flex-row justify-between">
            <span class="text-group_17">6100</span>
            <img
              class="thumbnail_1"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psf527biqxs5moxe1hmuxsj85xffald9of8758d84f-4e4f-49bd-84c8-87d3cddebcd0"
            />
          </div>
        </div>

        <div class="group_20 flex-row justify-between">
          <div class="image-text_15 flex-row justify-between">
            <img
              class="label_16"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps92z5fnzjrkgs1ylyjxpa1aklaml28kz7534970e2-2492-4f03-bb12-e1da138809ef"
            />
            <a href="#" class="text-group_18">轻音乐：梦中的浪漫钢琴曲</a>
          </div>
          <div class="image-text_16 flex-row justify-between">
            <span class="text-group_19">5080</span>
            <img
              class="thumbnail_2"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps4uj77o1m0ps4kl0rdaclhxhalqdqn1tu9e5008ac0-e66a-4c27-b59f-77fd48ee6410"
            />
          </div>
        </div>

        <div class="group_21 flex-row justify-between">
          <div class="image-text_17 flex-row justify-between">
            <img
              class="label_17"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps306kevirv1b05w848u7vxuhgo9fy90mnj788c8e65-6a16-4411-b6ad-9bb071a57dee"
            />
            <a href="#" class="text-group_20">轻音乐：—段放松的旅行</a>
          </div>
          <div class="image-text_18 flex-row justify-between">
            <span class="text-group_21">4733</span>
            <img
              class="thumbnail_3"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps0idj4hq8nz2ogaki7sjtdlhad351wibb3ff859f-1b42-413f-9e29-6aff0bfac09a"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { yishengListAPI , ceshiListAPI} from "@/api/cart";
import { Toast } from 'vant';
export default {
  data() {
    return {
      result1: [],
      result2: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 获取心理医生列表的接口
    async getBanners() {
      const result = await yishengListAPI();
      console.log(1111, result);
      this.result1 = result;
    },
    // 测试
    async getCeshi() {
      const result1 = await ceshiListAPI();
      console.log(1111, result1);
      this.result2 = result1.retData;
    },
    chitchat(){
      // console.log(123123);
      this.$router.push(`/Alert`);
    },
    zixun(){
      this.$router.push(`/Consult`);
    },
    ceshi(){
      this.$router.push(`/Ceshi`);
    },
    ketang(){
      Toast('此功能暂未开放');
    },
    dianhua(){
      Toast('此功能暂未开放');
    },
    diantai(){
        Toast('此功能暂未开放');
    }
  },
  created() {
    this.getBanners();
    this.getCeshi()
  },
  mounted() {},
  components: {},
};
</script>
<style src="./common.css" />
<style lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 20rem;
  height: 114.614rem;
  overflow: hidden;
  .box_1 {
    width: 20rem;
    /* height: 20.907rem; */
    .box_2 {
      width: 18.4rem;
      height: 1.28rem;
      margin: 0.774rem 0 0 0.907rem;
      .text_1 {
        width: 1.787rem;
        height: 0.534rem;
        overflow-wrap: break-word;
        color: rgba(34, 34, 34, 1);
        font-size: 0.746rem;
        font-family: ArialMT;
        text-align: left;
        white-space: nowrap;
        line-height: 1.467rem;
        margin-top: 0.374rem;
      }
      .label_1 {
        width: 1.28rem;
        height: 1.28rem;
        margin-left: 12.64rem;
      }
      .label_2 {
        width: 1.28rem;
        height: 1.28rem;
        margin-left: 0.027rem;
      }
      .label_3 {
        width: 1.28rem;
        height: 1.28rem;
        margin-left: 0.107rem;
      }
    }
    .box_3 {
      width: 20rem;
      height: 6.934rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps5l0e6n9u8mcu147prn3rod9gsd1n9q0i7d16ddc1-f840-4ca9-b57d-1cd61f9b9aa4)
        100% no-repeat;
      background-size: 100% 100%;
      margin-top: 0.294rem;
      .box_4 {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 28px;
        width: 18.134rem;
        height: 1.494rem;
        margin: 0.454rem 0 0 0.934rem;
        .label_4 {
          width: 1.28rem;
          height: 1.28rem;
          margin: 0.134rem 0 0 0.214rem;
        }
        .text_2 {
          width: 5.174rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(0, 0, 0, 1);
          font-size: 0.693rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.28rem;
          margin: 0.4rem 11.307rem 0 0.16rem;
        }
      }
      .box_5 {
        width: 1.387rem;
        height: 0.214rem;
        margin: 4.507rem 0 0.267rem 9.307rem;
        .group_1 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 50%;
          width: 0.214rem;
          height: 0.214rem;
        }
        .group_2 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 4px;
          width: 0.427rem;
          height: 0.214rem;
          margin-left: 0.267rem;
        }
        .group_3 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 50%;
          width: 0.214rem;
          height: 0.214rem;
          margin-left: 0.267rem;
        }
      }
    }
    .box_6 {
      width: 18.934rem;
      height: 7.867rem;
      margin: 0.8rem 0 0 0.534rem;
      .box_7 {
        background-color: rgba(44, 148, 235, 0.6);
        border-radius: 20px;
        width: 9.12rem;
        height: 7.84rem;
        .text-group_1 {
          width: 5.227rem;
          height: 2.374rem;
          margin: 1.28rem 0 0 1.254rem;
          .text_3 {
            width: 5.227rem;
            height: 1.28rem;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.333rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
          }
          .text_4 {
            width: 4.667rem;
            height: 0.534rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.533rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: 0.56rem 0 0 0.027rem;
          }
        }
        .text-wrapper_1 {
          background-color: rgba(39, 145, 241, 1);
          border-radius: 22px;
          height: 1.174rem;
          width: 4.48rem;
          margin: 2.134rem 0 0.88rem 1.254rem;
          .text_5 {
            width: 2.747rem;
            height: 0.667rem;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 0.693rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 0.667rem;
            margin: 0.24rem 0 0 0.8rem;
          }
        }
      }
      .box_8 {
        width: 9.28rem;
        height: 7.867rem;
        .box_9 {
          background-color: rgba(254, 87, 95, 0.6);
          border-radius: 20px;
          width: 9.28rem;
          height: 2.934rem;
          .text-wrapper_2 {
            width: 4.214rem;
            height: 0.987rem;
            overflow-wrap: break-word;
            font-size: 0;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: 0.987rem 0 0 0.934rem;
            .text_6 {
              width: 4.214rem;
              height: 0.987rem;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 1.066rem;
              font-family: PingFangSC-Bold;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
            .text_7 {
              width: 4.214rem;
              height: 0.987rem;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 1.066rem;
              font-family: PingFangSC-Bold;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
          }
          .image_1 {
            width: 1.6rem;
            height: 1.6rem;
            margin: 0.694rem 0.854rem 0 1.68rem;
          }
        }
        .box_10 {
          width: 9.28rem;
          height: 4.4rem;
          margin-top: 0.534rem;
          .group_4 {
            background-color: rgba(36, 184, 222, 0.6);
            border-radius: 20px;
            height: 4.4rem;
            width: 4.374rem;
            .text-wrapper_3 {
              width: 3.547rem;
              height: 0.854rem;
              overflow-wrap: break-word;
              font-size: 0;
              font-family: PingFangSC-Bold;
              text-align: center;
              white-space: nowrap;
              line-height: 1.174rem;
              margin: 1.654rem 0 0 0.374rem;
              .text_8 {
                width: 3.547rem;
                height: 0.854rem;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 0.906rem;
                font-family: PingFangSC-Bold;
                text-align: left;
                white-space: nowrap;
                line-height: 1.174rem;
              }
              .text_9 {
                width: 3.547rem;
                height: 0.854rem;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 0.906rem;
                font-family: PingFangSC-Bold;
                text-align: left;
                white-space: nowrap;
                line-height: 1.174rem;
              }
            }
          }
          .text-wrapper_4 {
            background-color: rgba(253, 114, 39, 0.6);
            border-radius: 20px;
            height: 4.4rem;
            width: 4.374rem;
            .text_10 {
              width: 3.574rem;
              height: 0.854rem;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 0.906rem;
              font-family: PingFangSC-Bold;
              text-align: center;
              white-space: nowrap;
              line-height: 1.174rem;
              margin: 1.654rem 0 0 0.534rem;
            }
          }
        }
      }
    }
    .box_11 {
      width: 18.214rem;
      height: 1.147rem;
      margin: 1.147rem 0 0 0.934rem;
      .text_11 {
        width: 3.974rem;
        height: 0.96rem;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 1.013rem;
        font-family: PingFangSC-Bold;
        text-align: center;
        white-space: nowrap;
        line-height: 1.174rem;
      }
      .group_5 {
        border-radius: 16px;
        width: 2.56rem;
        height: 1.254rem;
        border: 2px solid rgba(204, 204, 204, 1);
        margin: -0.054rem -0.054rem 0 11.734rem;
        .image-text_1 {
          width: 1.734rem;
          height: 0.64rem;
          margin: 0.294rem 0 0 0.454rem;
          .text-group_2 {
            width: 1.254rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 0.614rem;
            padding-right: 1.5rem;
          }
          .image_2 {
            width: 0.374rem;
            height: 0.64rem;
          }
        }
      }
    }
    .box_12 {
      background-color: rgba(79, 151, 215, 1);
      width: 3.947rem;
      height: 0.107rem;
      margin: 0 0 0.56rem 0.96rem;
    }
  }
  .box_13 {
    overflow: hidden;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    width: 19.467rem;
    height: 19.147rem;
    justify-content: flex-center;
    margin: -0.027rem 0 0 0.267rem;
    .box_14 {
      width: 17.92rem;
      height: 3.68rem;
      margin: 0.8rem 0 0 0.56rem;
      .image_3 {
        width: 3.68rem;
        height: 3.68rem;
      }
      .section_1 {
        width: 2.454rem;
        height: 3.067rem;
        margin: 0.08rem 0 0 0.774rem;
        .text_12 {
          width: 2.347rem;
          height: 0.774rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 0.8rem;
          margin-left: 0.054rem;
        }
        .text-wrapper_5 {
          height: 0.8rem;
          margin-top: 0.454rem;
          width: 2.454rem;
          .text_13 {
            width: 2.107rem;
            height: 0.534rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.533rem;
            font-family: PingFangSC-Heavy;
            text-align: center;
            white-space: nowrap;
            line-height: 0.8rem;
            margin: 0.134rem 0 0 0.16rem;
          }
        }
        .text_14 {
          width: 2.08rem;
          height: 0.534rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Heavy;
          text-align: center;
          white-space: nowrap;
          line-height: 0.8rem;
          margin: 0.507rem 0 0 0.054rem;
        }
      }
      .section_2 {
        width: 7.28rem;
        height: 1.867rem;
        margin: 1.307rem 0 0 -0.054rem;
        .block_1 {
          width: 6.96rem;
          height: 0.8rem;
          margin-left: 0.32rem;
          .text-wrapper_6 {
            background-color: rgba(237, 237, 237, 1);
            height: 0.8rem;
            width: 2.454rem;
            .text_15 {
              width: 2.107rem;
              height: 0.534rem;
              overflow-wrap: break-word;
              font-size: 0.533rem;
              font-family: PingFangSC-Heavy;
              text-align: center;
              white-space: nowrap;
              line-height: 0.8rem;
              margin: 0.134rem 0 0 0.16rem;
            }
          }
          .text-wrapper_7 {
            background-color: rgba(237, 237, 237, 1);
            height: 0.8rem;
            width: 4.267rem;
            .text_16 {
              width: 3.707rem;
              height: 0.534rem;
              overflow-wrap: break-word;
              font-size: 0.533rem;
              font-family: PingFangSC-Heavy;
              text-align: center;
              white-space: nowrap;
              line-height: 0.8rem;
              margin: 0.134rem 0 0 0.267rem;
            }
          }
        }
        .text-wrapper_8 {
          width: 6.64rem;
          height: 0.587rem;
          margin-top: 0.48rem;
          .text_17 {
            width: 3.494rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(77, 77, 77, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 2.5rem;
            margin-top: 0.027rem;
          }
          .text_18 {
            width: 1.574rem;
            height: 0.534rem;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 0.533rem;
            font-family: PingFangSC-Heavy;
            text-align: center;
            white-space: nowrap;
            line-height: 2.5rem;
            margin: 0.054rem 0 0 0.694rem;
          }
          .text_19 {
            width: 2.614rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(77, 77, 77, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 2.6rem;
            margin-left: 1.267rem;
          }
        }
      }
      .image-wrapper_1 {
        background-color: rgba(39, 145, 241, 1);
        border-radius: 50%;
        height: 1.334rem;
        width: 1.334rem;
        margin: 1.174rem 0 0 2.454rem;
        .label_5 {
          width: 0.747rem;
          height: 0.587rem;
          margin: 0.374rem 0 0 0.294rem;
        }
      }
    }
    .text-wrapper_9 {
      width: 2.72rem;
      height: 0.667rem;
      margin: 0.24rem 0 0 5.04rem;
      .text_20 {
        width: 0.48rem;
        height: 0.587rem;
        overflow-wrap: break-word;
        color: rgba(234, 95, 95, 1);
        font-size: 0.8rem;
        font-family: PingFangSC-Heavy;
        text-align: left;
        white-space: nowrap;
        line-height: 0.934rem;
      }
      .text_21 {
        width: 1.387rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(234, 95, 95, 1);
        font-size: 0.8rem;
        font-family: PingFangSC-Heavy;
        text-align: center;
        white-space: nowrap;
        line-height: 0.934rem;
        margin-left: 0.027rem;
      }
      .text_22 {
        width: 0.614rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Heavy;
        text-align: center;
        white-space: nowrap;
        line-height: 0.934rem;
        margin: 0.054rem 0 0 0.214rem;
      }
    }
    .image_4 {
      width: 18.107rem;
      height: 0.054rem;
      margin: 1.04rem 0 0 0.694rem;
    }
    .box_15 {
      width: 17.92rem;
      height: 3.68rem;
      margin: 0.8rem 0 0 0.56rem;
      .image_5 {
        width: 3.68rem;
        height: 3.68rem;
      }
      .group_6 {
        width: 9.04rem;
        height: 3.094rem;
        margin: 0.08rem 0 0 0.774rem;
        .text_23 {
          width: 2.347rem;
          height: 0.747rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 0.8rem;
          margin-left: 0.054rem;
        }
        .section_3 {
          width: 8.827rem;
          height: 0.8rem;
          margin-top: 0.48rem;
          .text-wrapper_10 {
            background-color: rgba(237, 237, 237, 1);
            height: 0.8rem;
            width: 2.454rem;
            .text_24 {
              width: 2.134rem;
              height: 0.534rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.533rem;
              font-family: PingFangSC-Heavy;
              text-align: center;
              white-space: nowrap;
              line-height: 0.8rem;
              margin: 0.134rem 0 0 0.16rem;
            }
          }
          .text-wrapper_11 {
            background-color: rgba(237, 237, 237, 1);
            height: 0.8rem;
            margin-left: 0.267rem;
            width: 2.454rem;
            .text_25 {
              width: 2.08rem;
              height: 0.534rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.533rem;
              font-family: PingFangSC-Heavy;
              text-align: center;
              white-space: nowrap;
              line-height: 0.8rem;
              margin: 0.134rem 0 0 0.187rem;
            }
          }
          .text-wrapper_12 {
            background-color: rgba(237, 237, 237, 1);
            height: 0.8rem;
            margin-left: 0.267rem;
            width: 3.387rem;
            .text_26 {
              width: 3.174rem;
              height: 0.534rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.533rem;
              font-family: PingFangSC-Heavy;
              text-align: center;
              white-space: nowrap;
              line-height: 0.8rem;
              margin: 0.134rem 0 0 0.107rem;
            }
          }
        }
        .text-wrapper_13 {
          width: 8.987rem;
          height: 0.587rem;
          margin: 0.48rem 0 0 0.054rem;
          .text_27 {
            width: 2.08rem;
            height: 0.534rem;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 0.533rem;
            font-family: PingFangSC-Heavy;
            text-align: center;
            white-space: nowrap;
            line-height: 0.8rem;
            margin-top: 0.027rem;
          }
          .text_28 {
            width: 1.494rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(77, 77, 77, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 0.8rem;
            margin: 0.027rem 0 0 0.267rem;
          }
          .text_29 {
            width: 1.574rem;
            height: 0.534rem;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 0.533rem;
            font-family: PingFangSC-Heavy;
            text-align: center;
            white-space: nowrap;
            line-height: 0.8rem;
            margin: 0.054rem 0 0 0.694rem;
          }
          .text_30 {
            width: 2.614rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(77, 77, 77, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 0.8rem;
            margin-left: 0.267rem;
          }
        }
      }
      .image_6 {
        width: 1.334rem;
        height: 1.334rem;
        margin: 1.174rem 0 0 3.094rem;
      }
    }
    .text-wrapper_14 {
      width: 2.72rem;
      height: 0.667rem;
      margin: 0.24rem 0 0 5.04rem;
      .text_31 {
        width: 0.48rem;
        height: 0.587rem;
        overflow-wrap: break-word;
        color: rgba(234, 95, 95, 1);
        font-size: 0.8rem;
        font-family: PingFangSC-Heavy;
        text-align: left;
        white-space: nowrap;
        line-height: 0.934rem;
      }
      .text_32 {
        width: 1.387rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(234, 95, 95, 1);
        font-size: 0.8rem;
        font-family: PingFangSC-Heavy;
        text-align: center;
        white-space: nowrap;
        line-height: 0.934rem;
        margin-left: 0.027rem;
      }
      .text_33 {
        width: 0.614rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Heavy;
        text-align: center;
        white-space: nowrap;
        line-height: 0.934rem;
        margin: 0.054rem 0 0 0.214rem;
      }
    }
    .image_7 {
      width: 18.107rem;
      height: 0.054rem;
      margin: 1.04rem 0 0 0.694rem;
    }
    .box_16 {
      width: 17.92rem;
      height: 3.68rem;
      margin: 0.8rem 0 0 0.56rem;
      .image_8 {
        width: 3.68rem;
        height: 3.68rem;
      }
      .box_17 {
        width: 9.04rem;
        height: 3.094rem;
        margin: 0.08rem 0 0 0.774rem;
        .text_34 {
          width: 2.32rem;
          height: 0.747rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 0.8rem;
          margin-left: 0.054rem;
        }
        .group_7 {
          width: 7.76rem;
          height: 0.8rem;
          margin-top: 0.48rem;
          .text-wrapper_15 {
            background-color: rgba(237, 237, 237, 1);
            height: 0.8rem;
            width: 2.454rem;
            .text_35 {
              width: 2.107rem;
              height: 0.534rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.533rem;
              font-family: PingFangSC-Heavy;
              text-align: center;
              white-space: nowrap;
              line-height: 0.8rem;
              margin: 0.134rem 0 0 0.16rem;
            }
          }
          .text-wrapper_16 {
            background-color: rgba(237, 237, 237, 1);
            height: 0.8rem;
            margin-left: 0.267rem;
            width: 2.454rem;
            .text_36 {
              width: 2.107rem;
              height: 0.534rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.533rem;
              font-family: PingFangSC-Heavy;
              text-align: center;
              white-space: nowrap;
              line-height: 0.8rem;
              margin: 0.134rem 0 0 0.16rem;
            }
          }
          .text-wrapper_17 {
            background-color: rgba(237, 237, 237, 1);
            height: 0.8rem;
            margin-left: 0.267rem;
            width: 2.32rem;
            .text_37 {
              width: 2.107rem;
              height: 0.534rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.533rem;
              font-family: PingFangSC-Heavy;
              text-align: center;
              white-space: nowrap;
              line-height: 0.8rem;
              margin: 0.134rem 0 0 0.107rem;
            }
          }
        }
        .text-wrapper_18 {
          width: 8.987rem;
          height: 0.587rem;
          margin: 0.48rem 0 0 0.054rem;
          .text_38 {
            width: 2.08rem;
            height: 0.534rem;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 0.533rem;
            font-family: PingFangSC-Heavy;
            text-align: center;
            white-space: nowrap;
            line-height: 0.8rem;
            margin-top: 0.027rem;
          }
          .text_39 {
            width: 1.494rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(77, 77, 77, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 0.8rem;
            margin: 0.027rem 0 0 0.267rem;
          }
          .text_40 {
            width: 1.574rem;
            height: 0.534rem;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 0.533rem;
            font-family: PingFangSC-Heavy;
            text-align: center;
            white-space: nowrap;
            line-height: 0.8rem;
            margin: 0.054rem 0 0 0.694rem;
          }
          .text_41 {
            width: 2.614rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(77, 77, 77, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 0.8rem;
            margin-left: 0.267rem;
          }
        }
      }
      .image-wrapper_2 {
        background-color: rgba(39, 145, 241, 1);
        border-radius: 50%;
        height: 1.334rem;
        width: 1.334rem;
        margin: 1.174rem 0 0 3.094rem;
        .label_6 {
          width: 0.747rem;
          height: 0.587rem;
          margin: 0.374rem 0 0 0.294rem;
        }
      }
    }
    .text-wrapper_19 {
      width: 2.72rem;
      height: 0.667rem;
      margin: 0.24rem 0 0.8rem 5.04rem;
      .text_42 {
        width: 0.48rem;
        height: 0.587rem;
        overflow-wrap: break-word;
        color: rgba(234, 95, 95, 1);
        font-size: 0.8rem;
        font-family: PingFangSC-Heavy;
        text-align: left;
        white-space: nowrap;
        line-height: 0.934rem;
      }
      .text_43 {
        width: 1.414rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(234, 95, 95, 1);
        font-size: 0.8rem;
        font-family: PingFangSC-Heavy;
        text-align: center;
        white-space: nowrap;
        line-height: 0.934rem;
      }
      .text_44 {
        width: 0.614rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Heavy;
        text-align: center;
        white-space: nowrap;
        line-height: 0.934rem;
        margin: 0.054rem 0 0 0.214rem;
      }
    }
  }
  .box_18 {
    width: 20rem;
    height: 2.987rem;
    .block_2 {
      width: 18.214rem;
      height: 1.147rem;
      margin: 1.174rem 0 0 0.934rem;
      .text_45 {
        width: 4rem;
        height: 0.96rem;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 1.013rem;
        font-family: PingFangSC-Bold;
        text-align: center;
        white-space: nowrap;
        line-height: 1.174rem;
      }
      .block_3 {
        border-radius: 16px;
        width: 2.56rem;
        height: 1.254rem;
        border: 2px solid rgba(204, 204, 204, 1);
        margin: -0.054rem -0.054rem 0 11.707rem;
        .image-text_2 {
          width: 1.68rem;
          height: 0.64rem;
          margin: 0.294rem 0 0 0.454rem;
          .text-group_3 {
            width: 1.254rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 0.614rem;
            padding-right: 1.5rem;
          }
          .image_9 {
            width: 0.32rem;
            height: 0.614rem;
          }
        }
      }
    }
    .block_4 {
      width: 4rem;
      height: 0.107rem;
      margin: 0 0 0.56rem 0.934rem;
      .box_19 {
        background-color: rgba(79, 151, 215, 1);
        width: 4rem;
        height: 0.107rem;
      }
    }
  }
  .box_20 {
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    width: 19.467rem;
    height: 25.92rem;
    margin: -0.027rem 0 0 0.267rem;
    .section_4 {
      height: 7.734rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psqxwpjjmab5fcdj2c82xwgjm1cg0ixysoa6130ec9-29d4-418a-b489-05049c05cc5f)
        100% no-repeat;
      background-size: 100% 100%;
      width: 19.467rem;
      .text-wrapper_20 {
        background-color: rgba(253, 180, 65, 1);
        border-radius: 0px 10px 0px 20px;
        height: 1.04rem;
        margin-left: 16.267rem;
        width: 3.2rem;
        .text_46 {
          width: 2.32rem;
          height: 0.587rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Heavy;
          text-align: center;
          white-space: nowrap;
          line-height: 0.934rem;
          margin: 0.24rem 0 0 0.454rem;
        }
      }
    }
    .section_5 {
      padding-top: 1rem;
      width: 18.48rem;
      height: 2.614rem;
      margin: 0.774rem 0 0 0.454rem;
      .image_10 {
        width: 3.574rem;
        height: 2.614rem;
      }
      .text-wrapper_21 {
        width: 10.694rem;
        height: 2.08rem;
        margin: 0.294rem 0 0 0.614rem;
        .text_47 {
          width: 10.694rem;
          height: 0.774rem;
          overflow-wrap: break-word;
          color: rgba(77, 77, 77, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
        }
        .text_48 {
          width: 4.187rem;
          height: 0.56rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Heavy;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.747rem;
        }
      }
      .text-wrapper_22 {
        background-color: rgba(253, 180, 65, 1);
        border-radius: 22px;
        height: 1.28rem;
        width: 3.2rem;
        margin: 0.667rem 0 0 0.4rem;
        .text_49 {
          width: 1.734rem;
          height: 0.56rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.334rem;
          margin: 0rem 0 0 0.747rem;
        }
      }
    }
    .section_6 {
      width: 14.267rem;
      height: 0.054rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pslp3ah3s9tzr0bcylznw5gwd96920jp5b6c2ebc-c1a8-4efe-ab65-77b7af6cd3aa) -0.027rem
        0rem no-repeat;
      background-size: 14.294rem 0.08rem;
      margin: 1.04rem 0 0 4.64rem;
    }
    .section_7 {
      width: 18.48rem;
      height: 2.614rem;
      margin: 0.96rem 0 0 0.454rem;
      .image_11 {
        width: 3.574rem;
        height: 2.614rem;
      }
      .text-wrapper_23 {
        width: 6.347rem;
        height: 2.08rem;
        margin: 0.294rem 0 0 0.614rem;
        .text_50 {
          width: 6.347rem;
          height: 0.747rem;
          overflow-wrap: break-word;
          color: rgba(77, 77, 77, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
        }
        .text_51 {
          width: 3.12rem;
          height: 0.56rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Heavy;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.774rem;
        }
      }
      .text-wrapper_24 {
        background-color: rgba(253, 180, 65, 1);
        border-radius: 22px;
        height: 1.28rem;
        width: 3.2rem;
        margin: 0.667rem 0 0 4.747rem;
        .text_52 {
          width: 1.734rem;
          height: 0.56rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.334rem;
          margin: 0.4rem 0 0 0.747rem;
        }
      }
    }
    .section_8 {
      width: 14.267rem;
      height: 0.054rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps53yhwerspwd7oh1gz0tl0vaem7260e8o7cea9230-18d1-4c31-8561-017558544158) -0.027rem -0.027rem
        no-repeat;
      background-size: 14.294rem 0.08rem;
      margin: 1.067rem 0 0 4.64rem;
    }
    .section_9 {
      width: 18.48rem;
      height: 2.614rem;
      margin: 0.934rem 0 0 0.454rem;
      .image_12 {
        width: 3.574rem;
        height: 2.614rem;
      }
      .text-wrapper_25 {
        width: 6.747rem;
        height: 2.08rem;
        margin: 0.294rem 0 0 0.614rem;
        .text_53 {
          width: 6.72rem;
          height: 0.774rem;
          overflow-wrap: break-word;
          color: rgba(77, 77, 77, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-left: 0.027rem;
        }
        .text_54 {
          width: 4.187rem;
          height: 0.56rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Heavy;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.747rem;
        }
      }
      .text-wrapper_26 {
        background-color: rgba(253, 180, 65, 1);
        border-radius: 22px;
        height: 1.28rem;
        width: 3.2rem;
        margin: 0.667rem 0 0 4.347rem;
        .text_55 {
          width: 1.734rem;
          height: 0.56rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.334rem;
          margin: 0.4rem 0 0 0.747rem;
        }
      }
    }
    .section_10 {
      width: 14.267rem;
      height: 0.054rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pswhjrxsy7hcw1z3cqdxwhxfrtegfo6498eff9ed-532b-4d66-a774-3757a57108d3) -0.027rem
        0rem no-repeat;
      background-size: 14.294rem 0.08rem;
      margin: 1.04rem 0 0 4.64rem;
    }
    .section_11 {
      width: 18.48rem;
      height: 2.614rem;
      margin: 0.96rem 0 0.8rem 0.454rem;
      .image_13 {
        width: 3.574rem;
        height: 2.614rem;
      }
      .text-wrapper_27 {
        width: 6.374rem;
        height: 2.08rem;
        margin: 0.294rem 0 0 0.614rem;
        .text_56 {
          width: 6.374rem;
          height: 0.774rem;
          overflow-wrap: break-word;
          color: rgba(77, 77, 77, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
        }
        .text_57 {
          width: 4.16rem;
          height: 0.56rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Heavy;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 0.747rem 0 0 0.027rem;
        }
      }
      .text-wrapper_28 {
        background-color: rgba(253, 180, 65, 1);
        border-radius: 22px;
        height: 1.28rem;
        width: 3.2rem;
        margin: 0.667rem 0 0 4.72rem;
        .text_58 {
          width: 1.734rem;
          height: 0.56rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.334rem;
          margin: 0.4rem 0 0 0.747rem;
        }
      }
    }
  }
  .box_21 {
    width: 20rem;
    height: 2.987rem;
    .block_5 {
      width: 18.214rem;
      height: 1.147rem;
      margin: 1.147rem 0 0 0.934rem;
      .text_59 {
        width: 4rem;
        height: 0.96rem;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 1.013rem;
        font-family: PingFangSC-Bold;
        text-align: center;
        white-space: nowrap;
        line-height: 1.174rem;
      }
      .box_22 {
        border-radius: 16px;
        width: 2.56rem;
        height: 1.254rem;
        border: 2px solid rgba(204, 204, 204, 1);
        margin: -0.054rem -0.054rem 0 11.707rem;
        .image-text_3 {
          width: 1.68rem;
          height: 0.64rem;
          margin: 0.294rem 0 0 0.454rem;
          .text-group_4 {
            width: 1.254rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 0.614rem;
            margin-right: 0.3rem;
          }
          .image_14 {
            width: 0.32rem;
            height: 0.614rem;
          }
        }
      }
    }
    .block_6 {
      width: 3.894rem;
      height: 0.107rem;
      margin: 0 0 0.587rem 0.987rem;
      .box_23 {
        background-color: rgba(79, 151, 215, 1);
        width: 3.894rem;
        height: 0.107rem;
      }
    }
  }
  .box_24 {
    width: 20rem;
    height: 3.04rem;
    margin-top: 16.454rem;
    .group_8 {
      width: 18.214rem;
      height: 1.147rem;
      margin: 1.2rem 0 0 0.934rem;
      .text_60 {
        width: 4rem;
        height: 0.96rem;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 1.013rem;
        font-family: PingFangSC-Bold;
        text-align: center;
        white-space: nowrap;
        line-height: 1.174rem;
      }
      .box_25 {
        border-radius: 16px;
        width: 2.56rem;
        height: 1.254rem;
        border: 2px solid rgba(204, 204, 204, 1);
        margin: -0.054rem -0.054rem 0 11.707rem;
        .image-text_4 {
          width: 1.68rem;
          height: 0.64rem;
          margin: 0.294rem 0 0 0.454rem;
          .text-group_5 {
            width: 1.254rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 1.334rem;
            margin-top: 0.027rem;
          }
          .image_15 {
            width: 0.32rem;
            height: 0.614rem;
          }
        }
      }
    }
    .group_9 {
      width: 4.027rem;
      height: 0.107rem;
      margin: 0 0 0.587rem 0.934rem;
      .box_26 {
        background-color: rgba(79, 151, 215, 1);
        width: 4.027rem;
        height: 0.107rem;
      }
    }
  }
  .box_27 {
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    width: 19.52rem;
    height: 22.88rem;
    margin: -0.027rem 0 0 0.24rem;
    .group_10 {
      width: 18.32rem;
      height: 3.707rem;
      margin: 0.48rem 0 0 0.667rem;
      .text-group_6 {
        width: 12.747rem;
        height: 3.6rem;
        .text_61 {
          width: 12.747rem;
          height: 1.947rem;
          overflow-wrap: break-word;
          color: rgba(77, 77, 77, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          line-height: 1.2rem;
        }
        .text_62 {
          width: 6.854rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.693rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin: 0.987rem 0 0 0.027rem;
        }
      }
      .image_16 {
        width: 4.48rem;
        height: 3.627rem;
        margin-top: 0.08rem;
      }
    }
    .group_11 {
      width: 18.374rem;
      height: 0.747rem;
      margin: 0.96rem 0 0 0.667rem;
      .image-text_5 {
        width: 2.934rem;
        height: 0.747rem;
        .label_7 {
          width: 0.747rem;
          height: 0.747rem;
        }
        .text-group_7 {
          width: 1.867rem;
          height: 0.614rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.64rem;
          font-family: Adobe Heiti Std R;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.054rem;
        }
      }
      .text_63 {
        width: 2.374rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(102, 102, 102, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Bold;
        text-align: left;
        white-space: nowrap;
        line-height: 1.2rem;
        margin: 0.08rem 0 0 9.36rem;
      }
      .text_64 {
        width: 1.6rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(102, 102, 102, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Bold;
        text-align: left;
        white-space: nowrap;
        line-height: 1.2rem;
        margin: 0.08rem 0 0 2.107rem;
      }
    }
    .group_12 {
      width: 18.32rem;
      height: 0.054rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps82qwjhpsmujwzcwsvran1i9vfi96guvnacafbb9a1-a8c7-4450-a2c5-2c0fd313f487) -0.027rem -0.027rem
        no-repeat;
      background-size: 18.347rem 0.08rem;
      margin: 1.067rem 0 0 0.667rem;
    }
    .group_13 {
      width: 18.32rem;
      height: 3.707rem;
      margin: 1.654rem 0 0 0.667rem;
      .text-group_8 {
        width: 12.747rem;
        height: 3.494rem;
        .text_65 {
          width: 12.747rem;
          height: 1.947rem;
          overflow-wrap: break-word;
          color: rgba(77, 77, 77, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          line-height: 1.2rem;
        }
        .text_66 {
          width: 4.8rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.693rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.88rem;
        }
      }
      .image_17 {
        width: 4.48rem;
        height: 3.627rem;
        margin-top: 0.08rem;
      }
    }
    .group_14 {
      width: 18.374rem;
      height: 0.747rem;
      margin: 0.907rem 0 0 0.667rem;
      .image-text_6 {
        width: 2.934rem;
        height: 0.747rem;
        .label_8 {
          width: 0.747rem;
          height: 0.747rem;
        }
        .text-group_9 {
          width: 1.894rem;
          height: 0.614rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.64rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.107rem;
        }
      }
      .text_67 {
        width: 2.4rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(102, 102, 102, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Bold;
        text-align: left;
        white-space: nowrap;
        line-height: 1.2rem;
        margin: 0.107rem 0 0 9.334rem;
      }
      .text_68 {
        width: 1.6rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(102, 102, 102, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Bold;
        text-align: left;
        white-space: nowrap;
        line-height: 1.2rem;
        margin: 0.107rem 0 0 2.107rem;
      }
    }
    .group_15 {
      width: 18.32rem;
      height: 0.054rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps9skanthmg5staztujqlh5bqppcl0e5y4h145a265b-36b5-4442-8e3c-6f67eb74773b) -0.027rem -0.027rem
        no-repeat;
      background-size: 18.347rem 0.08rem;
      margin: 1.094rem 0 0 0.667rem;
    }
    .group_16 {
      width: 18.32rem;
      height: 3.707rem;
      margin: 1.627rem 0 0 0.667rem;
      .text-wrapper_29 {
        width: 11.067rem;
        height: 3.494rem;
        .text_69 {
          width: 11.067rem;
          height: 0.827rem;
          overflow-wrap: break-word;
          color: rgba(77, 77, 77, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
        }
        .text_70 {
          width: 4.8rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.693rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 2rem;
        }
      }
      .image_18 {
        width: 4.48rem;
        height: 3.627rem;
        margin-top: 0.08rem;
      }
    }
    .group_17 {
      width: 18.374rem;
      height: 0.747rem;
      margin: 0.934rem 0 0.694rem 0.667rem;
      .image-text_7 {
        width: 2.907rem;
        height: 0.747rem;
        .label_9 {
          width: 0.747rem;
          height: 0.747rem;
        }
        .text-group_10 {
          width: 1.867rem;
          height: 0.614rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.64rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.08rem;
        }
      }
      .text_71 {
        width: 2.374rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(102, 102, 102, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Bold;
        text-align: left;
        white-space: nowrap;
        line-height: 1.2rem;
        margin: 0.054rem 0 0 9.387rem;
      }
      .text_72 {
        width: 1.6rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(102, 102, 102, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Bold;
        text-align: left;
        white-space: nowrap;
        line-height: 1.2rem;
        margin: 0.054rem 0 0 2.107rem;
      }
    }
  }
  .box_28 {
    width: 20rem;
    height: 2.4rem;
    margin-bottom: 0.027rem;
    .section_12 {
      width: 16.907rem;
      height: 1.84rem;
      margin: 0.214rem 0 0 1.094rem;
      .image-text_8 {
        width: 1.174rem;
        height: 1.84rem;
        .label_10 {
          width: 1.174rem;
          height: 1.174rem;
        }
        .text-group_11 {
          width: 1.014rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(56, 134, 199, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin: 0.16rem 0 0 0.107rem;
        }
      }
      .image-text_9 {
        width: 1.174rem;
        height: 1.84rem;
        margin-left: 2.774rem;
        .label_11 {
          width: 1.174rem;
          height: 1.174rem;
        }
        .text-group_12 {
          width: 1.04rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin: 0.16rem 0 0 0.134rem;
        }
      }
      .image-text_10 {
        width: 1.174rem;
        height: 1.814rem;
        margin: 0.027rem 0 0 2.747rem;
        .label_12 {
          width: 1.174rem;
          height: 1.174rem;
        }
        .text-group_13 {
          width: 1.014rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin: 0.134rem 0 0 0.054rem;
        }
      }
      .image-text_11 {
        width: 1.174rem;
        height: 1.814rem;
        margin: 0.027rem 0 0 2.774rem;
        .label_13 {
          width: 1.174rem;
          height: 1.174rem;
        }
        .text-group_14 {
          width: 1.04rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin: 0.134rem 0 0 0.027rem;
        }
      }
      .image-text_12 {
        width: 1.174rem;
        height: 1.84rem;
        margin-left: 2.747rem;
        .label_14 {
          width: 1.174rem;
          height: 1.174rem;
        }
        .text-group_15 {
          width: 1.014rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.16rem;
        }
      }
    }
  }
  .box_29 {
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    position: absolute;
    left: 0.24rem;
    top: 71.867rem;
    width: 19.52rem;
    height: 14.48rem;
    .group_18 {
      height: 7.734rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps0ischclj1gqnxftswvogry1tugk370md3f39327c-6ea4-47a4-aeb1-d166c4afeac8)
        100% no-repeat;
      background-size: 100% 100%;
      width: 19.52rem;
      .text-wrapper_30 {
        background-color: rgba(253, 180, 65, 1);
        border-radius: 0px 10px 0px 20px;
        height: 1.04rem;
        width: 3.2rem;
        margin: -0.027rem 0 0 16.294rem;
        .text_73 {
          width: 2.32rem;
          height: 0.587rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.586rem;
          font-family: PingFangSC-Heavy;
          text-align: center;
          white-space: nowrap;
          line-height: 0.934rem;
          margin: 0.24rem 0 0 0.454rem;
        }
      }
    }
    .group_19 {
      width: 16.854rem;
      height: 0.907rem;
      margin: 1.147rem 0 0 1.334rem;
      .image-text_13 {
        width: 12.374rem;
        height: 0.907rem;
        .label_15 {
          width: 0.907rem;
          height: 0.907rem;
        }
        .text-group_16 {
          width: 10.96rem;
          height: 0.774rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.8rem;
          font-family: PingFangSC;
          text-align: center;
          white-space: nowrap;
          line-height: 0.934rem;
          margin-top: 0.08rem;
        }
      }
      .image-text_14 {
        width: 2.134rem;
        height: 0.534rem;
        margin-top: 0.187rem;
        .text-group_17 {
          width: 1.387rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.64rem;
          font-family: PingFangSC;
          text-align: center;
          white-space: nowrap;
          line-height: 0.934rem;
          margin-top: 0.027rem;
        }
        .thumbnail_1 {
          width: 0.534rem;
          height: 0.534rem;
        }
      }
    }
    .group_20 {
      width: 16.854rem;
      height: 0.907rem;
      margin: 1.067rem 0 0 1.334rem;
      .image-text_15 {
        width: 10.907rem;
        height: 0.907rem;
        .label_16 {
          width: 0.907rem;
          height: 0.907rem;
        }
        .text-group_18 {
          width: 9.494rem;
          height: 0.774rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.8rem;
          font-family: PingFangSC;
          text-align: center;
          white-space: nowrap;
          line-height: 0.934rem;
          margin-top: 0.054rem;
        }
      }
      .image-text_16 {
        width: 2.267rem;
        height: 0.507rem;
        margin-top: 0.187rem;
        .text-group_19 {
          width: 1.494rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.64rem;
          font-family: PingFangSC;
          text-align: center;
          white-space: nowrap;
          line-height: 0.934rem;
        }
        .thumbnail_2 {
          width: 0.534rem;
          height: 0.427rem;
          margin-top: 0.027rem;
        }
      }
    }
    .group_21 {
      width: 16.854rem;
      height: 0.907rem;
      margin: 1.04rem 0 0.774rem 1.334rem;
      .image-text_17 {
        width: 10.187rem;
        height: 0.907rem;
        .label_17 {
          width: 0.907rem;
          height: 0.907rem;
        }
        .text-group_20 {
          width: 8.747rem;
          height: 0.747rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.8rem;
          font-family: PingFangSC;
          text-align: left;
          white-space: nowrap;
          line-height: 0.934rem;
          margin-top: 0.054rem;
        }
      }
      .image-text_18 {
        width: 2.214rem;
        height: 0.507rem;
        margin-top: 0.134rem;
        .text-group_21 {
          width: 1.494rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.64rem;
          font-family: PingFangSC;
          text-align: left;
          white-space: nowrap;
          line-height: 0.934rem;
        }
        .thumbnail_3 {
          width: 0.534rem;
          height: 0.427rem;
          margin-top: 0.027rem;
        }
      }
    }
  }
}
</style>
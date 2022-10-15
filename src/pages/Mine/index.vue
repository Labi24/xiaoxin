<template>
  <div class="page flex-col">
    <div class="box_1 flex-col">
      <div class="group_4 flex-row">
        <img
          class="image_1"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps5h17vgpo393gjkjew34nwubnfxb8fg0pnd315a67d-4944-4038-a058-b507aeb8b6d7"
        />
        <div class="block_2 flex-col justify-between">
          <span class="text_1" v-if="hasLogin">欢迎登陆，{{ name }}</span
          ><span class="text_1" v-else>未登录</span>
          <div class="text-wrapper_1 flex-col" v-if="!hasLogin">
            <span class="text_2" @click="toLogin">点击登录/注册</span>
          </div>
        </div>
        <img
          class="label_1"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/pss31wy6tq19wi0e7i60fbqavmlmpjnifba73a18d-1f38-4e55-adf3-18e43090f44f"
        />
      </div>
      <div class="group_5 flex-row">
        <div class="text-group_16 flex-col justify-between">
          <span class="text_3">{{ watchNum }}</span>
          <span class="text_4">我的关注</span>
        </div>
        <img
          class="image_2"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psl1vglsf355cptdsw8ltzj7f2idnygdyn3cb12280-2de2-4bcd-822b-bdf2a47613d5"
        />
        <div class="text-group_17 flex-col justify-between">
          <span class="text_5">{{ num }}</span>
          <span class="text_6">我的动态</span>
        </div>
        <img
          class="image_3"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/pstou4aovj95h9e90cxdql2re9ri6a641525feaee1-b873-4fa8-bc44-53faf46832d2"
        />
        <div class="text-group_18 flex-col justify-between">
          <span class="text_7">0</span> <span class="text_8">我的粉丝</span>
        </div>
        <img
          class="image_4"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psisq0iekt2mhzejjuuo2fmspix2mgj8ode84863b-b874-4be5-8cbe-2c882cac991c"
        />
        <div class="text-group_19 flex-col justify-between">
          <span class="text_9">0</span> <span class="text_10">测试记录</span>
        </div>
      </div>
    </div>
    <div class="block_3 flex-col">
      <div class="section_4 flex-row">
        <div class="box_10 flex-col justify-between">
          <div class="image-text_12 flex-row justify-between">
            <span class="text-group_7">会员中心</span>
            <img
              class="label_4"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps4y43751em63py3cddv6nakpu4c7ulbhnbfdca21b5-0e64-4d01-b3f9-7728abee9896"
            />
          </div>
          <span class="text_15">您当前不是会员，开通立享会员特权</span>
        </div>
        <div class="box_4 flex-row">
          <span class="text_16">开通会员</span>
          <div class="image-wrapper_1 flex-col">
            <img
              class="thumbnail_1"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psekfavrlsqg4zbx56lvrpm4pgxgu9iyl1e625281-b0be-4b0c-bed3-3c3e1991f9d0"
            />
          </div>
        </div>
      </div>
      <div class="box_8 flex-col"></div>
      <div class="group_6 flex-row justify-between">
        <div class="image-text_13 flex-col justify-between">
          <img
            class="label_12"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psgneay4qe3lvj4sajnd7koo3tksai60pa7f360cf-6bf4-4139-989f-d1d0063092a5"
          />
          <span class="text-group_14">首页</span>
        </div>
        <div class="image-text_14 flex-col justify-between">
          <img
            class="label_16"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps80ro2u9xrebnjx7yjalxaiqxpyamhpqye2053949-820b-4196-8ef9-0750385169a7"
          />
          <span class="text_17">问答</span>
        </div>
        <div class="image-text_15 flex-col justify-between">
          <img
            class="label_17"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psbnv4yfpsjufv0yhfqyifb129du1b0d7y9940a9ab-8a29-4426-ad7a-d88d0c607949"
          />
          <span class="text_18">咨询</span>
        </div>
        <div class="image-text_16 flex-col justify-between">
          <img
            class="label_18"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psc7tcrq9qwassaetwgjdpeaddgyre7yad978300-fce2-42ab-ba65-9f549065bb92"
          />
          <span class="text_19">消息</span>
        </div>
        <div class="image-text_17 flex-col justify-between">
          <img
            class="label_13"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps1kj59kbz27hesjn7031somg79il5d09i913495b2-5655-4f4f-9c10-2b5ef5fe3c43"
          />
          <span class="text-group_15">我的</span>
        </div>
      </div>
      <div class="label_2 flex-col">
        <div class="box_11 flex-row justify-between">
          <div class="image-text_18 flex-col justify-between">
            <img
              class="image_5"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psb17023m5l533ogctthrmcn1o8ycd3def24f79a-2fc8-409c-93db-bc8279ca5548"
            />
            <div class="text-group_5">
              <span class="text_11">我的</span>
              <span class="text_12">订单</span>
            </div>
          </div>
          <div class="image-text_19 flex-col justify-between">
            <img
              class="image_6"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psan8kcj4ia6bk6muf8yosyerjjxdz1198b2f4fa6f9-7774-487f-81a1-3f3f4abb319a"
            />
            <span class="text_13">预约课程</span>
          </div>
          <div class="image-text_20 flex-col justify-between">
            <img
              class="image_7"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/pssk8zpy3semlmmu216h0epbddelcamabga13d9021-e05a-45fe-916c-47ddd13d45eb"
            />
            <span class="text_14">建议反馈</span>
          </div>
          <div class="image-text_21 flex-col justify-between">
            <img
              class="label_3"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psw1vrukei03nr5k0tqfsxze45o8rm7bbc736a6821-6194-40fa-b3a0-17b22a4201b3"
            />
            <span class="text-group_6">心理百科</span>
          </div>
        </div>
      </div>
    </div>
    <div class="box_9 flex-row">
      <span class="text_20">19:07</span>
      <img
        class="label_14"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps2p5ow3qduzrcr7ll80fgmd6sd8w7kfkfx0ac516a8-0c3b-43dd-ab5a-26fc7687b623"
      />
      <img
        class="label_15"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psakgcvmsdvybqbkw9ui58nyig44i88xm0a127678-82c0-4eae-940e-c27777df9c4f"
      />
      <img
        class="image_12"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psaoymupnayonap7pmmzlbo5jn5sak41ed068b2c6b-63be-41f0-a4db-cbd5a28b907b"
      />
    </div>
    <div class="box_5 flex-col">
      <div class="block_4 flex-row justify-between">
        <div class="image-text_22 flex-row justify-between">
          <img
            class="label_5"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psgw4xtt2xx4enjfm56mrvohia2n57aer4b930fd1-173d-4f69-8a30-d520d0cb35e4"
          />
          <span class="text-group_8">帮助中心</span>
        </div>
        <img
          class="label_6"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps6f5q3y4s78t0gev15ejthya0whj4afgy7g31cfe87b-bb9f-4dae-8793-a41ab2331623"
        />
      </div>
      <img
        class="image_8"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psfyre5ascr2okctd589rc698v0bom7j20b7dc674-dce1-41d3-abb1-c25bd39cc288"
      />
      <div class="block_5 flex-row justify-between">
        <div class="image-text_23 flex-row justify-between">
          <img
            class="label_7"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps2tl0l0dy53wxt9ssowjhrbb3dsuqikb934c7506-c8cd-4e0d-8cc9-17bd02f6d26c"
          />
          <span class="text-group_9">隐私安全</span>
        </div>
        <img
          class="image_9"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psw63ud7tn8a9l5pgcrlywn92sfuq6uedd5a56956-5e33-4f85-85ea-908075d80be5"
        />
      </div>
      <div class="section_7 flex-col"></div>
      <div class="block_6 flex-row justify-between">
        <div class="image-text_24 flex-row justify-between">
          <img
            class="label_8"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psei23nmd3bsdu9e9df2romc0k7evjdc0dwt2e26a47e-b857-41e8-a775-444e8894a8c0"
          />
          <span class="text-group_10">关于我们</span>
        </div>
        <div class="box_6 flex-col"></div>
      </div>
      <div class="section_9 flex-col"></div>
      <div class="block_7 flex-row justify-between">
        <div class="image-text_25 flex-row justify-between">
          <img
            class="label_9"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/pszyltcjvw0bnxh188f07opbwh4nvfg1gb97a4e94-017d-46c4-8387-29f8967ae6cd"
          />
          <span class="text-group_11">专家入驻</span>
        </div>
        <div class="group_3 flex-col"></div>
      </div>
      <div class="section_11 flex-col"></div>
      <div class="block_8 flex-row justify-between">
        <div class="image-text_26 flex-row justify-between">
          <img
            class="label_10"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psunn6au8icyrpto7qg52pwcivm3e7m33sk1a34d2bf-b7f6-426c-a78e-95aa640e8df6"
          />
          <span class="text-group_12">红包卡券</span>
        </div>
        <div class="box_7 flex-col"></div>
      </div>
      <img
        class="image_10"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/pszcr4j440apmez3pqex4zs5evgda7p9x4uec480da1-5ae9-478d-9024-180f51c041bd"
      />
      <div class="block_9 flex-row justify-between">
        <div class="image-text_27 flex-row justify-between">
          <img
            class="label_11"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psowfvvbl2g29iktfe8anp1btkeqlxciabb0cba0bb-f1a7-4c6f-84de-8cece4189433"
          />
          <span class="text-group_13">倾诉记录</span>
        </div>
        <img
          class="image_11"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psb420dvkxqoff379sq5iuzb6jvpfbfh3afa5125e7-7862-44f6-bb6a-4c9f48eeec4a"
        />
      </div>
    </div>
  </div>
</template>
<script>
//引入获取token值
import { getToken } from "../../util/auth";
//
import {
  queryAllFansById,
  queryCountOfAllDynamicById,
  queryCountOfAllUserOfConcernByUid,
} from "../../api/wang";
export default {
  data() {
    return {
      //是否登陆
      hasLogin: "",
      //用户名字
      name: "",
      //动态的数量
      num: "",
      //关注的数量
      watchNum: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    //点击后跳转至登陆页面
    toLogin() {
      //   console.log(this.$route.path);
      this.$router.push("/login");
    },
    //获取用户信息
    async userList() {
      // console.log(11111222);
      let result = await queryAllFansById(this.hasLogin);
      console.log(result);
      this.name = result[0].name;
      // console.log(this.name);
    },
    //获取动态的数量
    async getNum() {
      let result = await queryCountOfAllDynamicById(this.hasLogin);
      console.log(result);
      this.num = result.retData;
    },
    //获取关注的数量
    async getWatchNum() {
      let result = await queryCountOfAllUserOfConcernByUid(this.hasLogin);
      // console.log(result, 111111);
      this.watchNum = result;
    },
  },
  created() {
    if (getToken()) {
      //   console.log(11111);
      this.hasLogin = getToken();
      console.log(this.hasLogin);
      this.userList();
      this.getNum();
      this.getWatchNum();
    }
  },
  mounted() {},
  components: {},
};
</script>
<style src="./common.css" />
<style lang="less" scoped>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100%;
  height: 42.054rem;
  overflow: hidden;
  .box_1 {
    height: 11.307rem;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps691lcyqlk02vckbwypm3ab5bjey2v0wrm97da1b6e-c542-4991-8a14-cbb1beeecc01) -1.774rem -1rem
      no-repeat;
    margin-top: 1.44rem;
    width: 100%;
    .group_4 {
      width: 17.36rem;
      height: 4.56rem;
      margin: 1.307rem auto 0;
      .image_1 {
        width: 3.574rem;
        height: 3.574rem;
        margin-top: 0.987rem;
      }
      .block_2 {
        width: 4.32rem;
        height: 2.454rem;
        margin: 1.334rem 0 0 0.747rem;
        .text_1 {
          width: 3.28rem;
          height: 1.067rem;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 1.12rem;
          font-family: PingFangSC-Medium;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-left: 0.027rem;
        }
        .text-wrapper_1 {
          background-color: rgba(64, 188, 248, 1);
          border-radius: 20px;
          height: 1.367rem;
          margin-top: 0.32rem;
          width: 5.52rem;
          .text_2 {
            width: 3.787rem;
            height: 0.587rem;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 0.586rem;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: 0.144rem 0.3rem 0.267rem;
          }
        }
      }
      .label_1 {
        width: 1.28rem;
        height: 1.28rem;
        margin-left: 7.44rem;
      }
    }
    .group_5 {
      width: 16.347rem;
      height: 2.054rem;
      margin: 1.414rem auto 0;
      .text-group_16 {
        width: 2.507rem;
        height: 1.92rem;
        .text_3 {
          width: 0.614rem;
          height: 0.88rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 1.173rem;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-left: 0.987rem;
        }
        .text_4 {
          width: 2.507rem;
          height: 0.614rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.64rem;
          font-family: PingFangSC-Light;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.427rem;
        }
      }
      .image_2 {
        width: 0.054rem;
        height: 0.8rem;
        margin: 1.254rem 0 0 1.014rem;
      }
      .text-group_17 {
        width: 2.507rem;
        height: 1.92rem;
        margin-left: 1.014rem;
        .text_5 {
          width: 0.614rem;
          height: 0.88rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 1.173rem;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-left: 0.987rem;
        }
        .text_6 {
          width: 2.507rem;
          height: 0.614rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.64rem;
          font-family: PingFangSC-Light;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.427rem;
        }
      }
      .image_3 {
        width: 0.054rem;
        height: 0.8rem;
        margin: 1.254rem 0 0 1.04rem;
      }
      .text-group_18 {
        width: 2.507rem;
        height: 1.92rem;
        margin-left: 1.014rem;
        .text_7 {
          width: 0.614rem;
          height: 0.88rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 1.173rem;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-left: 0.987rem;
        }
        .text_8 {
          width: 2.507rem;
          height: 0.614rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.64rem;
          font-family: PingFangSC-Light;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.427rem;
        }
      }
      .image_4 {
        width: 0.054rem;
        height: 0.8rem;
        margin: 1.254rem 0 0 1.067rem;
      }
      .text-group_19 {
        width: 2.507rem;
        height: 1.92rem;
        margin-left: 1.014rem;
        .text_9 {
          width: 0.614rem;
          height: 0.88rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 1.173rem;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-left: 0.987rem;
        }
        .text_10 {
          width: 2.507rem;
          height: 0.614rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.64rem;
          font-family: PingFangSC-Light;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.427rem;
        }
      }
    }
  }
  .block_3 {
    position: absolute;
    left: 0;
    top: 12.747rem;
    width: 100%;
    height: 29.334rem;
    .section_4 {
      background-color: rgba(50, 47, 44, 1);
      border-radius: 10px;
      width: 18.507rem;
      height: 3.68rem;
      margin: 5.76rem auto 0;
      .box_10 {
        width: 10.267rem;
        height: 2.48rem;
        margin: 0.614rem 0 0 0.8rem;
        .image-text_12 {
          width: 4.854rem;
          height: 1.174rem;
          margin-left: 0.054rem;
          .text-group_7 {
            width: 3.574rem;
            height: 0.854rem;
            overflow-wrap: break-word;
            color: rgba(247, 185, 111, 1);
            font-size: 0.906rem;
            font-family: PingFangSC-Medium;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
            margin-top: 0.16rem;
          }
          .label_4 {
            width: 1.174rem;
            height: 1.174rem;
          }
        }
        .text_15 {
          width: 10.267rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 0.64rem;
          font-family: PingFangSC-Medium;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.64rem;
        }
      }
      .box_4 {
        background-color: rgba(255, 191, 111, 1);
        border-radius: 29px;
        width: 5.494rem;
        height: 1.6rem;
        margin: 0.667rem 1.147rem 0 0.8rem;
        .text_16 {
          width: 2.934rem;
          height: 0.694rem;
          overflow-wrap: break-word;
          color: rgba(137, 70, 0, 1);
          font-size: 0.746rem;
          font-family: PingFangSC-Medium;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 0.224rem 0 0 0.774rem;
        }
        .image-wrapper_1 {
          background-color: rgba(144, 78, 0, 1);
          border-radius: 50%;
          height: 0.854rem;
          width: 0.854rem;
          margin: 0.374rem 0.614rem 0 0.32rem;
          .thumbnail_1 {
            width: 0.374rem;
            height: 0.374rem;
            margin: 0.267rem 0 0 0.294rem;
          }
        }
      }
    }
    .box_8 {
      background-color: rgba(255, 255, 255, 1);
      width: 11.174rem;
      height: 2.347rem;
      margin: 5.547rem 0 0 8.827rem;
    }
    .group_6 {
      width: 16.667rem;
      height: 1.734rem;
      margin: 9.894rem 0 0.374rem 1.147rem;
      .image-text_13 {
        width: 1.014rem;
        height: 1.707rem;
        margin-top: 0.027rem;
        .label_12 {
          width: 0.88rem;
          height: 0.907rem;
          margin-left: 0.027rem;
        }
        .text-group_14 {
          width: 1.014rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.294rem;
        }
      }
      .image-text_14 {
        width: 1.067rem;
        height: 1.734rem;
        margin-left: 2.934rem;
        .label_16 {
          width: 0.96rem;
          height: 0.96rem;
        }
        .text_17 {
          width: 1.04rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin: 0.267rem 0 0 0.027rem;
        }
      }
      .image-text_15 {
        width: 1.014rem;
        height: 1.654rem;
        margin: 0.08rem 0 0 2.8rem;
        .label_17 {
          width: 0.934rem;
          height: 0.827rem;
          margin-left: 0.054rem;
        }
        .text_18 {
          width: 1.014rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.32rem;
        }
      }
      .image-text_16 {
        width: 1.04rem;
        height: 1.707rem;
        margin: 0.027rem 0 0 2.907rem;
        .label_18 {
          width: 0.987rem;
          height: 0.934rem;
          margin-left: 0.054rem;
        }
        .text_19 {
          width: 1.04rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(102, 102, 102, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.267rem;
        }
      }
      .image-text_17 {
        width: 1.04rem;
        height: 1.734rem;
        margin-left: 2.854rem;
        .label_13 {
          width: 0.934rem;
          height: 0.934rem;
          margin-left: 0.107rem;
        }
        .text-group_15 {
          width: 1.014rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          color: rgba(56, 134, 199, 1);
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.294rem;
        }
      }
    }
    .label_2 {
      height: 5.84rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psikii4jupqdd100rmqfj9g016vws2h6ezpaa3f54cb2-35ee-45c9-9441-08eccb037bec)
        100% no-repeat;
      background-size: 100% 100%;
      width: 19.014rem;
      position: absolute;
      left: 2.353rem;
      top: -0.853rem;
      .box_11 {
        width: 15.067rem;
        height: 2.427rem;
        margin: 1.627rem 0 0 1.974rem;
        .image-text_18 {
          width: 2.72rem;
          height: 2.427rem;
          .image_5 {
            width: 1.334rem;
            height: 1.334rem;
            margin-left: 0.72rem;
          }
          .text-group_5 {
            width: 2.72rem;
            height: 0.667rem;
            overflow-wrap: break-word;
            font-size: 0;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
            margin-top: 0.427rem;
            .text_11 {
              width: 2.72rem;
              height: 0.667rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.693rem;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
            .text_12 {
              width: 2.72rem;
              height: 0.667rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.693rem;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
          }
        }
        .image-text_19 {
          width: 2.72rem;
          height: 2.427rem;
          margin-left: 1.44rem;
          .image_6 {
            width: 1.334rem;
            height: 1.334rem;
            margin-left: 0.694rem;
          }
          .text_13 {
            width: 2.72rem;
            height: 0.667rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.693rem;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
            margin-top: 0.427rem;
          }
        }
        .image-text_20 {
          width: 2.72rem;
          height: 2.427rem;
          margin-left: 1.36rem;
          .image_7 {
            width: 1.334rem;
            height: 1.334rem;
            margin-left: 0.72rem;
          }
          .text_14 {
            width: 2.72rem;
            height: 0.667rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.693rem;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
            margin-top: 0.427rem;
          }
        }
        .image-text_21 {
          width: 2.72rem;
          height: 2.4rem;
          margin: 0.027rem 0 0 1.387rem;
          .label_3 {
            width: 1.28rem;
            height: 1.28rem;
            margin-left: 0.747rem;
          }
          .text-group_6 {
            width: 2.72rem;
            height: 0.667rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.693rem;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
            margin-top: 0.454rem;
          }
        }
      }
    }
  }
  .box_9 {
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.32rem;
    .text_20 {
      width: 1.787rem;
      height: 0.534rem;
      overflow-wrap: break-word;
      color: rgba(34, 34, 34, 1);
      font-size: 0.746rem;
      font-family: ArialMT;
      text-align: left;
      white-space: nowrap;
      line-height: 1.467rem;
      margin: 0.674rem 0 0 0.774rem;
    }
    .label_14 {
      width: 0.747rem;
      height: 0.614rem;
      margin: 1.12rem 0 0 12.907rem;
    }
    .label_15 {
      width: 0.64rem;
      height: 0.64rem;
      margin: 1.12rem 0 0 0.614rem;
    }
    .image_12 {
      width: 1.014rem;
      height: 0.534rem;
      margin: 1.174rem 0.96rem 0 0.56rem;
    }
  }
  .box_5 {
    box-shadow: 0px 1px 4px 0px rgba(220, 199, 195, 0.28);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    position: absolute;
    left: 2.354rem;
    top: 23.227rem;
    width: 18.507rem;
    height: 15.36rem;
    .block_4 {
      width: 17.014rem;
      height: 1.014rem;
      margin: 0.774rem 0 0 0.934rem;
      .image-text_22 {
        width: 4.24rem;
        height: 1.014rem;
        .label_5 {
          width: 1.014rem;
          height: 1.014rem;
        }
        .text-group_8 {
          width: 2.72rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.693rem;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.214rem;
        }
      }
      .label_6 {
        width: 0.64rem;
        height: 0.64rem;
        margin-top: 0.187rem;
      }
    }
    .image_8 {
      width: 18.507rem;
      height: 0.027rem;
      margin-top: 0.747rem;
    }
    .block_5 {
      width: 16.827rem;
      height: 1.014rem;
      margin: 0.827rem 0 0 0.934rem;
      .image-text_23 {
        width: 4.214rem;
        height: 1.014rem;
        .label_7 {
          width: 1.014rem;
          height: 1.014rem;
        }
        .text-group_9 {
          width: 2.694rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.693rem;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.187rem;
        }
      }
      .image_9 {
        width: 0.32rem;
        height: 0.614rem;
        margin-top: 0.16rem;
      }
    }
    .section_7 {
      width: 18.507rem;
      height: 0.027rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps9l3a823hnfb877v1gcc0unzdyd479xs8c5a3b47a-5596-4d8f-ad4d-7bd6ef093af8)
        0rem -0.027rem no-repeat;
      background-size: 18.534rem 0.054rem;
      margin-top: 0.747rem;
    }
    .block_6 {
      width: 16.854rem;
      height: 1.014rem;
      margin: 0.8rem 0 0 0.907rem;
      .image-text_24 {
        width: 4.24rem;
        height: 1.014rem;
        .label_8 {
          width: 1.014rem;
          height: 1.014rem;
        }
        .text-group_10 {
          width: 2.694rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.693rem;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.16rem;
        }
      }
      .box_6 {
        width: 0.32rem;
        height: 0.614rem;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps0ycnewxp4ecp7tupojjecwpydzuyvgdpqdce6363f-5bb8-4643-8a5d-0213f75c6082)
          0rem -0.027rem no-repeat;
        background-size: 0.347rem 0.64rem;
        margin-top: 0.187rem;
      }
    }
    .section_9 {
      width: 18.507rem;
      height: 0.027rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psqsq6n2txc3gr5u5wee5twi83r6pz6rxgg3fcad270-3712-4b27-931d-042547a63049)
        0rem -0.027rem no-repeat;
      background-size: 18.534rem 0.054rem;
      margin-top: 0.72rem;
    }
    .block_7 {
      width: 16.854rem;
      height: 1.014rem;
      margin: 0.88rem 0 0 0.907rem;
      .image-text_25 {
        width: 4.32rem;
        height: 1.014rem;
        .label_9 {
          width: 1.014rem;
          height: 1.014rem;
        }
        .text-group_11 {
          width: 2.747rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.693rem;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.107rem;
        }
      }
      .group_3 {
        width: 0.32rem;
        height: 0.614rem;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psc6up77pktkc9thlvwmqhzs7v8og7bufh5e1b3c36d-91b5-41f1-8057-b3d4d182541a)
          0rem -0.027rem no-repeat;
        background-size: 0.347rem 0.64rem;
        margin-top: 0.107rem;
      }
    }
    .section_11 {
      width: 18.507rem;
      height: 0.027rem;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psc6s02a4yx07ex17aby808u4eua0dleoooe114533f-dcdd-4210-a056-d80d8e8fe6a6)
        0rem -0.027rem no-repeat;
      background-size: 18.534rem 0.054rem;
      margin-top: 0.64rem;
    }
    .block_8 {
      width: 16.854rem;
      height: 1.014rem;
      margin: 0.854rem 0 0 0.907rem;
      .image-text_26 {
        width: 4.267rem;
        height: 1.014rem;
        .label_10 {
          width: 1.014rem;
          height: 1.014rem;
        }
        .text-group_12 {
          width: 2.72rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.693rem;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.16rem;
        }
      }
      .box_7 {
        width: 0.32rem;
        height: 0.614rem;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psolmubxzxxbok48i0oyk5zt8r6mlwtkr9432a1466-b2f2-47a4-9d8d-cd5fa20f1696)
          0rem -0.027rem no-repeat;
        background-size: 0.347rem 0.64rem;
        margin-top: 0.134rem;
      }
    }
    .image_10 {
      width: 18.507rem;
      height: 0.027rem;
      margin-top: 0.667rem;
    }
    .block_9 {
      width: 16.854rem;
      height: 1.014rem;
      margin: 0.88rem 0 0.614rem 0.907rem;
      .image-text_27 {
        width: 4.294rem;
        height: 1.014rem;
        .label_11 {
          width: 1.014rem;
          height: 1.014rem;
        }
        .text-group_13 {
          width: 2.747rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 0.693rem;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.134rem;
        }
      }
      .image_11 {
        width: 0.32rem;
        height: 0.614rem;
        margin-top: 0.107rem;
      }
    }
  }
}
</style>

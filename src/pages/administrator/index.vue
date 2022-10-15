<template>
  <div class="login">
    <div class="page flex-col justify-between">
      <div class="section_1 flex-row"></div>
      <div class="block_1 flex-col">
        <img
          class="image_2"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psnt5ztg82z9pfg6et223pyhpfeo9giy7ca5d3522a-e106-45cf-9a4c-2734773f0c7f"
          @click="backMine"
        />
        <div class="section_2 flex-col">
          <div class="box_3 flex-row">
            <img
              class="image_5"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psk8qnjlb1n7w50llobln91wk4gm4z5t207a8db2b-1e6a-4fe3-8e25-9befdf9d4d7b"
            />
            <span class="text_4">密码</span>
            <div class="image-text_2 flex-row justify-between">
              <div class="text-group_1">
                <span class="text_2"></span> <span class="text_3">账号</span>
              </div>
            </div>
            <img
              class="image_3"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps2u043zs31f7jtdgq1121tsrjguq5wte6n93503a4b-42e7-4483-aab7-f545e2069afd"
            />
            <input
              class="text_6"
              placeholder="请输入密码"
              selectionStart="0"
              v-model="password"
            />
            <input
              class="text_5"
              placeholder="请输入账号"
              selectionStart="0"
              v-model="username"
            />
          </div>
          <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psuxngl4kg7dcnbu9dqkmhhj7hpfq312xpd5707a32-7554-4db9-bf17-d731d62fa208"
          />
          <div class="text-wrapper_3 flex-col">
            <span class="text_12" @click="login">登录/注册</span>
          </div>
          <a href="#" class="text_13" @click="toLogin">手机验证码登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { queryUserByLoginActAndPwd } from "../../api/wang";
import { setToken } from "../../util/auth";
export default {
  data() {
    return {
      //用于储存账户
      username: null,
      //用于储存密码
      password: null,
    };
  },
  computed: {},
  watch: {},

  methods: {
    async login() {
      if (!this.username) {
        Toast("请输入账号");
      } else if (!this.password) {
        Toast("请输出密码");
      } else {
        console.log(this.username, this.password);
        let result = await queryUserByLoginActAndPwd(
          this.username,
          this.password
        );
        console.log(result);
        if (result.code == 1) {
          Toast("登陆成功");
          setToken(result.retData.id);
          this.$router.push("/home");
        } else {
          Toast("登陆失败");
        }
      }
    },
    toLogin() {
      this.$router.push("/login");
    },
    backMine() {
      this.$router.push("/mine");
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style src="./common.css" />
<style lang="less">
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100%;
  height: 43.307rem;
  overflow: hidden;
  .section_1 {
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    width: 100%;
    height: 2.347rem;
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
      margin: 1.147rem 0 0 0.774rem;
    }
    .image-wrapper_2 {
      background-color: rgba(22, 208, 255, 0.15);
      height: 1.334rem;
      border: 1px dashed rgba(54, 153, 255, 1);
      width: 1.334rem;
      margin: 0.747rem 0 0 13.92rem;
      .label_2 {
        width: 0.64rem;
        height: 0.64rem;
        margin: 0.347rem 0 0 0.347rem;
      }
    }
    .image-wrapper_3 {
      background-color: rgba(22, 208, 255, 0.15);
      height: 1.334rem;
      border: 1px dashed rgba(54, 153, 255, 1);
      width: 1.334rem;
      margin: 0.747rem 0.8rem 0 0.054rem;
      .image_1 {
        width: 1.014rem;
        height: 0.534rem;
        margin: 0.4rem 0 0 0.16rem;
      }
    }
    .image-wrapper_4 {
      background-color: rgba(22, 208, 255, 0.15);
      height: 1.334rem;
      border: 1px dashed rgba(54, 153, 255, 1);
      width: 1.334rem;
      position: absolute;
      left: 15.174rem;
      top: 0.747rem;
      .label_1 {
        width: 0.747rem;
        height: 0.614rem;
        margin: 0.347rem 0 0 0.294rem;
      }
    }
  }
  .block_1 {
    width: 100%;
    height: 40.96rem;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps1chkz08creze9plv59lmbrz9yfuuzrnrpa7b75f01-1290-49e3-931b-0b2a8fd4c53e)
      100% no-repeat;
    background-size: 100% 100%;
    .image_2 {
      width: 0.48rem;
      height: 0.96rem;
      margin: 0.827rem 0 0 0.774rem;
    }
    .section_2 {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      width: 80%;
      height: 19.147rem;
      margin: 3.174rem auto 16.854rem;
      .box_3 {
        width: 17.094rem;
        height: 4.587rem;
        margin: 4.187rem 0 0 0.694rem;
        .image_5 {
          width: 17.094rem;
          height: 0.054rem;
          margin-top: 1.387rem;
        }
        .text_4 {
          width: 2.027rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.693rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 3.92rem 0 0 -16.907rem;
        }
        .image-text_2 {
          width: 1.92rem;
          height: 0.507rem;
          margin: 0.134rem 0 0 -2.027rem;
          .text-group_1 {
            width: 1.2rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            font-size: 0;
            font-family: PingFangSC-Bold;
            text-align: center;
            white-space: nowrap;
            line-height: 1.174rem;
            .text_2 {
              width: 1.2rem;
              height: 0.507rem;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 0.8rem;
              font-family: PingFangSC-Bold;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
            .text_3 {
              width: 1.2rem;
              height: 0.507rem;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 0.64rem;
              font-family: PingFangSC-Bold;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
          }
          .thumbnail_1 {
            width: 0.374rem;
            height: 0.267rem;
            margin-top: 0.107rem;
          }
        }
        .image_3 {
          width: 0.054rem;
          height: 4.587rem;
          margin-left: 0.667rem;
          margin-top: 0.25rem;
        }
        .text_6 {
          width: 5.107rem;
          height: 0.967rem;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 0.693rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 3.92rem 0 0 0.56rem;
          text-align: left; /*placeholder文字居左*/
        }
        .text_5 {
          width: 5.134rem;
          height: 0.967rem;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 0.693rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 0.027rem 0 0 -5.107rem;
          text-align: left; /*placeholder文字居左*/
        }
        .text_7 {
          width: 3.414rem;
          height: 0.667rem;
          overflow-wrap: break-word;
          color: rgba(69, 92, 203, 1);
          font-size: 0.693rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 0.027rem 0.027rem 0 3.134rem;
        }
      }
      .image_4 {
        width: 17.094rem;
        height: 0.054rem;
        margin: 0.694rem 0 0 0.694rem;
      }
      .box_4 {
        width: 11.574rem;
        height: 0.667rem;
        margin: 0.907rem 0 0 0.88rem;
        .section_4 {
          border-radius: 50%;
          width: 0.667rem;
          height: 0.667rem;
          border: 1px solid rgba(102, 102, 102, 1);
        }
        .text-wrapper_2 {
          width: 10.56rem;
          height: 0.614rem;
          overflow-wrap: break-word;
          font-size: 0;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin-top: 0.027rem;
          .text_8 {
            width: 10.56rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
          }
          .text_9 {
            width: 10.56rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(105, 130, 249, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
          }
          .text_10 {
            width: 10.56rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
          }
          .text_11 {
            width: 10.56rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(105, 130, 249, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Bold;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
          }
        }
      }
      .text-wrapper_3 {
        background-color: rgba(105, 130, 249, 1);
        border-radius: 40px;
        height: 2.134rem;
        width: 17.12rem;
        margin: 2.134rem 0 0 0.854rem;
        .text_12 {
          width: 3.547rem;
          height: 0.747rem;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 0.8rem;
          font-family: PingFangSC-Bold;
          text-align: center;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 0.667rem 0 0 6.8rem;
        }
      }
      .text_13 {
        width: 3.787rem;
        height: 0.614rem;
        overflow-wrap: break-word;
        color: rgba(105, 130, 249, 1);
        font-size: 0.64rem;
        font-family: PingFangSC-Bold;
        text-align: center;
        white-space: nowrap;
        line-height: 1.174rem;
        margin: 1.227rem 0 1.947rem 0.907rem;
      }
    }
  }
}
</style>

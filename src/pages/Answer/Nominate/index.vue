<template>
  <div class="page flex-col">
    <div class="group_2 flex-col justify-end">
      <div class="group_3 flex-col">
        <div
          class="block_1 flex-col"
          v-for="item in result1"
          :key="item.latest_ID"
        >
          <div class="block_2 flex-row justify-between">
            <img
              class="single-avatar_1"
              referrerpolicy="no-referrer"
              :src="item.img"
            />
            <div class="image-text_1 flex-row justify-between">
              <span class="text-group_1">{{item.user_NAME}}</span>
              <img
                class="icon_1"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps6rbeot4sfjttkrsh4mf8q0m3r38v21ljab8eb59a-e240-4e72-808b-c620c036612b"
              />
            </div>
          </div>
          <div class="text-wrapper_1 flex-row">
            <span class="text_2">{{item.topic}}</span>
          </div>
          <div class="text-wrapper_2 flex-row">
            <span class="text_3"
              >{{item.dynamic_details}}</span
            >
          </div>
          <div class="block_3 flex-row">
            <span class="text_4">{{item.label}}</span>
            <img
              class="icon_2"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps84cjghii4lfelcji3ebtwr0v49yfbg4h3q58befbeb-cf73-409d-bea9-914d4183dbc8"
            />
            <span class="text_5">{{item.fabulous}}</span>
            <img
              class="icon_3"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psvbdivs3z8p55yw26izcu7qulvddgukbkf17aed57-947f-43a8-973d-07457f20d7c3"
            />
            <span class="text_6">{{item.comment}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { zixunListAPI } from "@/api/cart";
export default {
  data() {
    return {
      result1: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 获取心理医生列表的接口
    async getBanners() {
      const result = await zixunListAPI();
      console.log(1111, result);
      this.result1 = result;
    },
    chitchat() {
      // console.log(123123);
      this.$router.push(`/Alert`);
    },
  },
  created() {
    this.getBanners();
  },
  mounted() {},
  components: {},
};
</script>
<style src="./common.css" />
<style scoped lang="less">
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 20rem;
  height: 50.774rem;
  overflow: hidden;

  .group_2 {
    background-color: rgba(235, 235, 235, 1);
    position: relative;
    width: 20rem;
    height: 46.187rem;
    margin-top: -5rem;
    .group_3 {
      width: 20rem;
      height: 41.28rem;
      margin-top: 1.92rem;
      .block_1 {
        background-color: rgba(255, 255, 255, 1);
        height: 9.707rem;
        width: 20rem;
        .block_2 {
          width: 7.84rem;
          height: 2.347rem;
          margin: 0.747rem 0 0 1.494rem;
          .single-avatar_1 {
            width: 2.347rem;
            height: 2.347rem;
          }
          .image-text_1 {
            width: 4.96rem;
            height: 0.614rem;
            margin-top: 0.294rem;
            .text-group_1 {
              width: 4.374rem;
              height: 0.614rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
            .icon_1 {
              width: 0.48rem;
              height: 0.48rem;
              margin-top: 0.08rem;
              margin-left: 1rem;
            }
          }
        }
        .text-wrapper_1 {
          width: 4.107rem;
          height: 0.72rem;
          margin: 0.907rem 0 0 1.307rem;
          .text_2 {
            width: 4.107rem;
            height: 0.72rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.746rem;
            font-family: PingFangSC-Medium;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
          }
        }
        .text-wrapper_2 {
          width: 17.12rem;
          height: 1.574rem;
          margin: 1.04rem 0 0 1.307rem;
          .text_3 {
            width: 17.12rem;
            height: 1.574rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            text-align: left;
            line-height: 0.96rem;
          }
        }
        .block_3 {
          width: 17.414rem;
          height: 0.64rem;
          margin: 0.774rem 0 0.96rem 1.307rem;
          .text_4 {
            width: 3.334rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(225, 131, 51, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Medium;
            text-align: left;
            white-space: nowrap;
            line-height: 1.2rem;
            margin-top: 0.5rem;
          }
          .icon_2 {
            width: 0.64rem;
            height: 0.64rem;
            margin-left: 9.814rem;
          }
          .text_5 {
            width: 0.374rem;
            height: 0.48rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.64rem;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: -0.24rem 0 0 0.454rem;
          }
          .icon_3 {
            width: 0.64rem;
            height: 0.64rem;
            margin-left: 1.36rem;
          }
          .text_6 {
            width: 0.347rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.64rem;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: -0.24rem 0 0 0.454rem;
          }
        }
      }
      .block_4 {
        background-color: rgba(255, 255, 255, 1);
        width: 20rem;
        height: 9.707rem;
        margin-top: 0.8rem;
        .box_1 {
          width: 7.84rem;
          height: 2.347rem;
          margin: 0.747rem 0 0 1.494rem;
          .single-avatar_2 {
            width: 2.347rem;
            height: 2.347rem;
          }
          .image-text_2 {
            width: 5.014rem;
            height: 0.614rem;
            margin-top: 0.294rem;
            .text-group_2 {
              width: 4.427rem;
              height: 0.614rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
            .thumbnail_1 {
              width: 0.48rem;
              height: 0.48rem;
              margin-top: 0.08rem;
            }
          }
        }
        .text_7 {
          width: 12.56rem;
          height: 0.72rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.746rem;
          font-family: PingFangSC-Medium;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 0.907rem 0 0 1.414rem;
        }
        .text-wrapper_3 {
          width: 17.387rem;
          height: 1.574rem;
          overflow-wrap: break-word;
          font-size: 0;
          text-align: justifyLeft;
          line-height: 0.96rem;
          margin: 0.987rem 0 0 1.307rem;
          .text_8 {
            width: 17.387rem;
            height: 1.574rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            text-align: left;
            line-height: 0.96rem;
          }
          .text_9 {
            width: 17.387rem;
            height: 1.574rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            text-align: left;
            line-height: 0.96rem;
          }
          .text_10 {
            width: 17.387rem;
            height: 1.574rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            text-align: left;
            line-height: 0.96rem;
          }
        }
        .box_2 {
          width: 17.414rem;
          height: 0.64rem;
          margin: 0.774rem 0 1.014rem 1.307rem;
          .text_11 {
            width: 3.334rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(225, 131, 51, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Medium;
            text-align: left;
            white-space: nowrap;
            line-height: 1.2rem;
          }
          .icon_4 {
            width: 0.64rem;
            height: 0.64rem;
            margin-left: 9.814rem;
          }
          .text_12 {
            width: 0.374rem;
            height: 0.48rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.64rem;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: 0.107rem 0 0 0.454rem;
          }
          .icon_5 {
            width: 0.64rem;
            height: 0.64rem;
            margin-left: 1.36rem;
          }
          .text_13 {
            width: 0.347rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.64rem;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: 0.107rem 0 0 0.454rem;
          }
        }
      }
      .block_5 {
        background-color: rgba(255, 255, 255, 1);
        width: 20rem;
        height: 9.707rem;
        margin-top: 0.8rem;
        .section_1 {
          width: 7.84rem;
          height: 2.347rem;
          margin: 0.774rem 0 0 1.52rem;
          .single-avatar_3 {
            width: 2.347rem;
            height: 2.347rem;
          }
          .image-text_3 {
            width: 5.014rem;
            height: 0.614rem;
            margin-top: 0.294rem;
            .text-group_3 {
              width: 4.427rem;
              height: 0.614rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
            .icon_6 {
              width: 0.48rem;
              height: 0.48rem;
              margin-top: 0.08rem;
            }
          }
        }
        .text_14 {
          width: 9.68rem;
          height: 0.774rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.746rem;
          font-family: PingFangSC-Medium;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 0.907rem 0 0 1.36rem;
        }
        .text-wrapper_4 {
          width: 17.6rem;
          height: 1.6rem;
          overflow-wrap: break-word;
          font-size: 0;
          text-align: justifyLeft;
          line-height: 0.96rem;
          margin: 0.934rem 0 0 1.334rem;
          .text_15 {
            width: 17.6rem;
            height: 1.6rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            text-align: left;
            line-height: 0.96rem;
          }
          .text_16 {
            width: 17.6rem;
            height: 1.6rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            text-align: left;
            line-height: 0.96rem;
          }
          .text_17 {
            width: 17.6rem;
            height: 1.6rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            text-align: left;
            line-height: 0.96rem;
          }
          .text_18 {
            width: 17.6rem;
            height: 1.6rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            text-align: left;
            line-height: 0.96rem;
          }
          .text_19 {
            width: 17.6rem;
            height: 1.6rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.64rem;
            text-align: left;
            line-height: 0.96rem;
          }
        }
        .section_2 {
          width: 17.414rem;
          height: 0.64rem;
          margin: 0.88rem 0 0.854rem 1.334rem;
          .text_20 {
            width: 3.334rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(225, 131, 51, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Medium;
            text-align: left;
            white-space: nowrap;
            line-height: 1.2rem;
            margin-top: 0.027rem;
          }
          .icon_7 {
            width: 0.614rem;
            height: 0.56rem;
            margin: 0.027rem 0 0 9.814rem;
          }
          .text_21 {
            width: 0.374rem;
            height: 0.48rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.64rem;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: 0.107rem 0 0 0.48rem;
          }
          .icon_8 {
            width: 0.64rem;
            height: 0.614rem;
            margin-left: 1.36rem;
          }
          .text_22 {
            width: 0.347rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.64rem;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: 0.107rem 0 0 0.454rem;
          }
        }
      }
      .block_6 {
        background-color: rgba(255, 255, 255, 1);
        width: 20rem;
        height: 9.707rem;
        margin-top: 0.854rem;
        .block_7 {
          width: 7.84rem;
          height: 2.347rem;
          margin: 0.614rem 0 0 1.52rem;
          .single-avatar_4 {
            width: 2.347rem;
            height: 2.347rem;
          }
          .image-text_4 {
            width: 5.04rem;
            height: 0.614rem;
            margin-top: 0.294rem;
            .text-group_4 {
              width: 4.454rem;
              height: 0.614rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              white-space: nowrap;
              line-height: 1.174rem;
            }
            .icon_9 {
              width: 0.48rem;
              height: 0.48rem;
              margin-top: 0.08rem;
            }
          }
        }
        .text_23 {
          width: 18.48rem;
          height: 0.774rem;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 0.746rem;
          font-family: PingFangSC-Medium;
          text-align: left;
          white-space: nowrap;
          line-height: 1.174rem;
          margin: 0.907rem 0 0 1.387rem;
        }
        .block_8 {
          position: relative;
          width: 17.627rem;
          height: 3.36rem;
          margin: 0.934rem 0 0.774rem 1.36rem;
          .text-wrapper_5 {
            width: 17.627rem;
            height: 1.6rem;
            overflow-wrap: break-word;
            font-size: 0;
            text-align: justifyLeft;
            line-height: 0.96rem;
            .text_24 {
              width: 17.627rem;
              height: 1.6rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              line-height: 0.96rem;
            }
            .text_25 {
              width: 17.627rem;
              height: 1.6rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              line-height: 0.96rem;
            }
            .text_26 {
              width: 17.627rem;
              height: 1.6rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              line-height: 0.96rem;
            }
            .text_27 {
              width: 17.627rem;
              height: 1.6rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              line-height: 0.96rem;
            }
            .text_28 {
              width: 17.627rem;
              height: 1.6rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              line-height: 0.96rem;
            }
            .text_29 {
              width: 17.627rem;
              height: 1.6rem;
              overflow-wrap: break-word;
              color: rgba(102, 102, 102, 1);
              font-size: 0.64rem;
              text-align: left;
              line-height: 0.96rem;
            }
          }
          .text_30 {
            width: 3.334rem;
            height: 0.614rem;
            overflow-wrap: break-word;
            color: rgba(225, 131, 51, 1);
            font-size: 0.64rem;
            font-family: PingFangSC-Medium;
            text-align: left;
            white-space: nowrap;
            line-height: 1.2rem;
            margin: 2.507rem 0 0 -17.6rem;
          }
          .icon_10 {
            width: 0.614rem;
            height: 0.56rem;
            margin: 2.507rem 0 0 9.76rem;
          }
          .text_31 {
            width: 0.374rem;
            height: 0.48rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.64rem;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: 2.587rem 0 0 0.48rem;
          }
          .text_32 {
            width: 0.347rem;
            height: 0.507rem;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 0.64rem;
            text-align: left;
            white-space: nowrap;
            line-height: 1.174rem;
            margin: 2.587rem 0.24rem 0 2.454rem;
          }
          .image-wrapper_1 {
            box-shadow: 0px 5px 10px 0px rgba(24, 77, 109, 0.28);
            background-color: rgba(29, 161, 243, 1);
            border-radius: 50%;
            height: 2.88rem;
            width: 2.88rem;
            position: absolute;
            left: 14.48rem;
            top: 0.48rem;
            .image_2 {
              width: 1.334rem;
              height: 1.334rem;
              margin: 0.8rem 0 0 0.8rem;
            }
          }
        }
      }
    }
    .tab-bar_1 {
      background-color: rgba(255, 255, 255, 1);
      width: 20rem;
      height: 2.347rem;
      margin-top: 0.64rem;
      justify-content: flex-center;
      box-sizing: border-box;
      .tab-bar-item_1 {
        width: 1.014rem;
        height: 1.68rem;
        margin: 0.294rem 0 0 1.654rem;
        .icon_11 {
          width: 0.88rem;
          height: 0.907rem;
          margin-left: 0.027rem;
        }
        .text_33 {
          width: 1.014rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.267rem;
        }
        .van-tabbar-item__icon {
          margin-bottom: 0;
        }
        .van-tabbar-item__text {
          padding-top: 0.267rem;
        }
      }
      .tab-bar-item_2 {
        width: 1.04rem;
        height: 1.707rem;
        margin: 0.267rem 0 0 2.96rem;
        .icon_12 {
          width: 0.907rem;
          height: 0.907rem;
        }
        .text_34 {
          width: 1.04rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.294rem;
        }
        .van-tabbar-item__icon {
          margin-bottom: 0;
        }
        .van-tabbar-item__text {
          padding-top: 0.294rem;
        }
      }
      .tab-bar-item_3 {
        width: 1.014rem;
        height: 1.654rem;
        margin: 0.32rem 0 0 2.8rem;
        .icon_13 {
          width: 0.934rem;
          height: 0.827rem;
          margin-left: 0.054rem;
        }
        .text_35 {
          width: 1.014rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.32rem;
        }
        .van-tabbar-item__icon {
          margin-bottom: 0;
        }
        .van-tabbar-item__text {
          padding-top: 0.32rem;
        }
      }
      .tab-bar-item_4 {
        width: 1.04rem;
        height: 1.707rem;
        margin: 0.267rem 0 0 2.907rem;
        .icon_14 {
          width: 0.987rem;
          height: 0.934rem;
          margin-left: 0.054rem;
        }
        .text_36 {
          width: 1.04rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.267rem;
        }
        .van-tabbar-item__icon {
          margin-bottom: 0;
        }
        .van-tabbar-item__text {
          padding-top: 0.267rem;
        }
      }
      .tab-bar-item_5 {
        width: 1.067rem;
        height: 1.734rem;
        margin: 0.24rem 1.654rem 0 2.854rem;
        .icon_15 {
          width: 0.987rem;
          height: 0.96rem;
          margin-left: 0.08rem;
        }
        .text_37 {
          width: 1.014rem;
          height: 0.507rem;
          overflow-wrap: break-word;
          font-size: 0.533rem;
          font-family: PingFangSC-Bold;
          text-align: left;
          white-space: nowrap;
          line-height: 1.2rem;
          margin-top: 0.267rem;
        }
        .van-tabbar-item__icon {
          margin-bottom: 0;
        }
        .van-tabbar-item__text {
          padding-top: 0.267rem;
        }
      }
    }
    .group_4 {
      box-shadow: 0px 0px 7px 0px rgba(8, 59, 90, 0.1);
      background-color: rgba(255, 255, 255, 1);
      position: absolute;
      left: 0;
      top: -0.426rem;
      width: 20rem;
      height: 1.867rem;
    }
    .nav-bar_1 {
      background-color: rgba(255, 255, 255, 1);
      position: absolute;
      left: 0;
      top: -0.426rem;
      width: 20rem;
      height: 2.347rem;
      .image_3 {
        width: 2.134rem;
        height: 1.067rem;
        margin-top: 0.667rem;
      }
      .tabs_1 {
        height: 0.96rem;
        width: 8.747rem;
        margin: 0.72rem 5.654rem 0 2.8rem;
        .text-wrapper_6 {
          width: 8.747rem;
          height: 0.96rem;
          .text_38 {
            width: 1.547rem;
            height: 0.747rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.8rem;
            font-family: PingFangSC-Light;
            text-align: center;
            white-space: nowrap;
            line-height: 1.2rem;
            margin-top: 0.134rem;
          }
          .text_39 {
            width: 1.947rem;
            height: 0.96rem;
            overflow-wrap: break-word;
            color: rgba(39, 145, 241, 1);
            font-size: 1.013rem;
            font-family: PingFangSC-Semibold;
            text-align: center;
            white-space: nowrap;
            line-height: 1.2rem;
            margin-left: 1.84rem;
          }
          .text_40 {
            width: 1.547rem;
            height: 0.8rem;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 0.8rem;
            font-family: PingFangSC-Light;
            text-align: center;
            white-space: nowrap;
            line-height: 1.2rem;
            margin: 0.107rem 0 0 1.867rem;
          }
        }
        .van-tab {
          flex: auto;
          font-size: 30.389599999999998px;
        }
        .van-tabs__wrap {
          height: 0.96rem;
        }
        .van-tabs__nav {
          padding-left: 0;
          padding-right: 0;
        }
        .van-tab--active {
          font-size: 30.389599999999998px;
        }
        .van-tab {
          flex: auto;
          font-size: 30.389599999999998px;
        }
        .van-tabs__wrap {
          height: 0.96rem;
        }
        .van-tabs__nav {
          padding-left: 0;
          padding-right: 0;
        }
        .van-tab--active {
          font-size: 30.389599999999998px;
        }
      }
      .van-nav-bar__content {
        height: 100%;
      }
      .van-nav-bar__title {
        line-height: 0.96rem;
      }
      .van-nav-bar__left {
        padding: 0 0 0 0.667rem;
        align-items: start;
      }
    }
  }
}
</style>

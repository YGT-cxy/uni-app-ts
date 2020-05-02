<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { apiUserLogin } from '@/api/user'

  declare module 'vue/types/vue' {
    interface Vue {
      $mp: any
    }
  }

  @Component({
    mpType: 'app'
  } as any)

  export default class GetOfferApp extends Vue {
    public onLaunch() {
      console.log('App Launch')
      // 获取当前设备的系统信息，判断是否为iphoneX
      this.$store.dispatch('system/is_iphonex')
      this.wxUserLogin()
    }
    public onShow() {
      console.log('App Show')
    }
    public onHide() {
      console.log('App Hide')
    }
    private wxUserLogin(): void {
      uni.login({
        provider: 'weixin',
        success: ({ code }) => {
          if (code) {
            apiUserLogin(code).then((res: any) => {
              console.log(res)
            })
          }
        }
      })
    }

  }
</script>

<style lang="less">
  @import "./lib/colorui/main.css";
  @import "./lib/colorui/icon.css";
  @import "./lib/colorui/animation.css";
  /*每个页面公共css */
</style>

<template>
  <view class="index">
    <view>首页</view>
    <view>
      minins的变量: {{ mininsValue }}
    </view>
  </view>
</template>

<script lang="ts">
  import { Component, Watch } from 'vue-property-decorator'
  import Minins from '@/utils/minins'

  @Component
  export default class PageIndex extends Minins {
    private mounted() {
      console.log(wx)
    }
  }
</script>

<style lang="less">
  .index {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200rpx;
    background: red;
  }
</style>

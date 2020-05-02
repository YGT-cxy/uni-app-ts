// mixins.ts
import { Vue, Component } from 'vue-property-decorator'

declare module 'vue/types/vue' {
  interface Vue {
    value: string
  }
}

@Component
export default class MyMixins extends Vue {
  public mininsValue: string = '我是minins里面的变量'
}

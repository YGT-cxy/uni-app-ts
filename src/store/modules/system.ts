/** 定义state的数据类型 */
interface State {
  /** 是否为苹果异形屏，有底部小黑条，有的话，需要设置底部腾出34px的高度 */
  iphoneX: boolean
}

const state: State = {
  iphoneX: false
}

// mutations
const mutations = {
  // 判断当前设备是否为苹果异形屏，有底部小黑条 X
  SET_IPHONEX: (states: any, flag: boolean) => {
    states.iphoneX = flag
  }
}

// actions
const actions = {
  /**
   * 判断当前设备是否为苹果异形屏，有底部小黑条
   */
  is_iphonex({ commit }: any): void {
    // 获取当前设备的系统信息
    const systemInfo = uni.getSystemInfoSync()
    const systemInfoModel = systemInfo.model!
    // iPhone12,1
    const flag: boolean = /iPhone X|iPhone12/g.test(systemInfoModel)
    commit('SET_IPHONEX', flag)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

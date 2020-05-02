// import flyio from 'flyio'
// tslint:disable-next-line: no-var-requires
const Fly = require('flyio/dist/npm/wx')

const flyio = new Fly()

// console.log(flyio)

// 设置超时
flyio.config.timeout = 5000

// 设置请求基地址
flyio.config.baseURL = ''

// 添加请求拦截器
flyio.interceptors.request.use( async (request: any): Promise<any> => {
  // console.log(request)

  return request
})

// 添加响应拦截器
flyio.interceptors.response.use( (response: any): any => {

    // 返回成功的响应
    return response
  }, (err: any) => {
    return err
  }
)

export default flyio

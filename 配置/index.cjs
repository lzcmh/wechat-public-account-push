/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd0fad8b96e8989de',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'eca420325e92a2e7cdd30f615629dbc3',

  PROVINCE: '福建',
  CITY: '厦门',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'L',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4TxR6U18IfQsUa68NOlZ9rnXueE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'k0eu3lji2YBx77anwfRQh1TMGPpjdA5PKzB8aiQ-EDE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '5-'1,
      festivals: [
       
        
       
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '04-035',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-04-05' },
        
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG


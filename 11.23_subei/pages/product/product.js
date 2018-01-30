const app = getApp()

Page({
    data: {
        productIcon: [
            {
                path:'../../icon/img/project/wisdom1.jpg',
                project: '小程序定制开发'
            },
            {
                path: '../../icon/img/project/wisdom2.jpg',
                project: '微信定制开发'
            },
            {
                path: '../../icon/img/project/wisdom3.jpg',
                project: '微信公众号营销'
            },
            {
                path: '../../icon/img/project/wisdom4.jpg',
                project: '响应是网站开发'
            },
            {
                path: '../../icon/img/project/wisdom5.jpg',
                project: '企业官网定制'
            },
            {
                path: '../../icon/img/project/wisdom6.jpg',
                project: '电商系统定制'
            },
        ]
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
    },
    getUserInfo: function (e) {
    },
    phoneCall: function () {
        wx.makePhoneCall({
            phoneNumber: '18088882832' //仅为示例，并非真实的电话号码
        })
    }
})

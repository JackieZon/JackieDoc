//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        logo: '../../icon/img/subei-icon.png',
        productIcon: ['../../icon/img/backstage.png', '../../icon/img/app.png', '../../icon/img/wechat.png', '../../icon/img/applets.png'],
        tabs: [
            {
                name: '物联网整体解决方案提供商',
                info: ''
            },
            {
                name: '行业',
                info: '智慧工厂/智慧农业/智能公交/新零售方案/智能仓储/智慧物流解决方案'
            },
            {
                name: '成功案例',
                info: '欧司朗、松下、康佳、科士达、科陆'
            }
        ],
        stv: {
            windowWidth: 0,
            lineWidth: 0,
            offset: 0,
            tStart: false
        },
        activeTab: 0
    },
    onLoad: function (options) {
        try {
            let { tabs } = this.data;
            var res = wx.getSystemInfoSync()
            this.windowWidth = res.windowWidth;
            this.data.stv.lineWidth = this.windowWidth / this.data.tabs.length;
            this.data.stv.windowWidth = res.windowWidth;
            this.setData({ stv: this.data.stv })
            this.tabsCount = tabs.length;
        } catch (e) {
        }
    },
    handlerStart(e) {
        let { clientX, clientY } = e.touches[0];
        this.startX = clientX;
        this.tapStartX = clientX;
        this.tapStartY = clientY;
        this.data.stv.tStart = true;
        this.tapStartTime = e.timeStamp;
        this.setData({ stv: this.data.stv })
    },
    handlerMove(e) {
        let { clientX, clientY } = e.touches[0];
        let { stv } = this.data;
        let offsetX = this.startX - clientX;
        this.startX = clientX;
        stv.offset += offsetX;
        if (stv.offset <= 0) {
            stv.offset = 0;
        } else if (stv.offset >= stv.windowWidth * (this.tabsCount - 1)) {
            stv.offset = stv.windowWidth * (this.tabsCount - 1);
        }
        this.setData({ stv: stv });
    },
    handlerCancel(e) {

    },
    handlerEnd(e) {
        let { clientX, clientY } = e.changedTouches[0];
        let endTime = e.timeStamp;
        let { tabs, stv, activeTab } = this.data;
        let { offset, windowWidth } = stv;
        //快速滑动
        if (endTime - this.tapStartTime <= 300) {
            //向左
            if (Math.abs(this.tapStartY - clientY) < 50) {
                if (this.tapStartX - clientX > 5) {
                    if (activeTab < this.tabsCount - 1) {
                        this.setData({ activeTab: ++activeTab })
                    }
                } else {
                    if (activeTab > 0) {
                        this.setData({ activeTab: --activeTab })
                    }
                }
                stv.offset = stv.windowWidth * activeTab;
            } else {
                //快速滑动 但是Y距离大于50 所以用户是左右滚动
                let page = Math.round(offset / windowWidth);
                if (activeTab != page) {
                    this.setData({ activeTab: page })
                }
                stv.offset = stv.windowWidth * page;
            }
        } else {
            let page = Math.round(offset / windowWidth);
            if (activeTab != page) {
                this.setData({ activeTab: page })
            }
            stv.offset = stv.windowWidth * page;
        }
        stv.tStart = false;
        this.setData({ stv: this.data.stv })
    },
    _updateSelectedPage(page) {
        let { tabs, stv, activeTab } = this.data;
        activeTab = page;
        this.setData({ activeTab: activeTab })
        stv.offset = stv.windowWidth * activeTab;
        this.setData({ stv: this.data.stv })
    },
    handlerTabTap(e) {
        this._updateSelectedPage(e.currentTarget.dataset.index);
    },
    phoneCall: function () {
        wx.makePhoneCall({
            phoneNumber: '18088882832' //仅为示例，并非真实的电话号码
        })
    }
})


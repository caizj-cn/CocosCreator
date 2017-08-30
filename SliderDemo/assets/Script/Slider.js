cc.Class({
    extends: cc.Component,

    properties: {
        // 进度条背景
        Backgroud: {
            default: null,
            type: cc.Sprite
        },

        // 进度变化
        Progress: {
            default: null,
            type: cc.Sprite
        },

        // 拖动按钮
        Slider: {
            default: null,
            type: cc.Slider
        }
    },

    callback: function(event){
        var percent = event.detail.progress;
        var width = this.Backgroud.node.width * percent;
        this.Progress.node.width = width;

        console.log(width);
        console.log(percent);
    },

    onLoad: function () {
        this.Slider.node.on('slide', this.callback, this);
    },
});

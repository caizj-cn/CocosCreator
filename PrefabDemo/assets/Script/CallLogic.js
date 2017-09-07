cc.Class({
    extends: cc.Component,

    properties: {
        btnLogin: {
            default: null,
            type: cc.Button
        },

        prefabLogin: {
            default: null,
            type: cc.Prefab
        }
    },

    toLogin: function(){
        if(this.prefabLogin != null){
            var scene = cc.director.getScene();
            var node = cc.instantiate(this.prefabLogin);
            var winSize = cc.director.getWinSize();
            
            node.parent = scene;
            node.setPosition(winSize.width / 2, winSize.height / 2);
        }
    },

    // use this for initialization
    onLoad: function () {
        if(this.btnLogin != null){
            this.btnLogin.node.on('click', this.toLogin, this);
        }
    },

    // called every frame
    update: function (dt) {

    },
});

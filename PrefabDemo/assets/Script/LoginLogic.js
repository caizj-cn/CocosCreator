cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        btnLogin: {
            default: null,
            type: cc.Button
        },

        btnClose: {
            default: null,
            type: cc.Button
        }
    },

    toLogin: function(){
        if(this.node != null){
            this.node.removeFromParent(false);
        }
    },

    // use this for initialization
    onLoad: function () {
        if(this.btnLogin != null){
            this.btnLogin.node.on('click', this.toLogin, this);
        }

        if(this.btnClose != null){
            this.btnClose.node.on('click', this.toLogin, this);
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

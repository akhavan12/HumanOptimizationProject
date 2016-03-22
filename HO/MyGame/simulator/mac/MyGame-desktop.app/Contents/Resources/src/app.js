var INITIALIZED = false;
var HelloWorldLayer = cc.Layer.extend({
    sprite1:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Human Optimization", "Arial", 38);
        // // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        // this.background=cc.Sprite.create("res/bkg.jpg")
        // this.background.attr({
        //     x:size.width,
        //     y:size.height
        // });
        // this.addChild(this.background,1);

        this.sprite1 = cc.Sprite.create("res/logo.jpg");
        this.sprite1.attr({
            x: size.width/2,
            y: size.height/2
        });
        this.addChild(this.sprite1, 0);

        // if(cc.sys.capabilities.hasOwnProperty('mouse'))
        // {
        //     cc.eventManager.addListener(
        //     {
        //         event: cc.EventListener.MOUSE,

        //         onMouseDown: function(event)
        //         {
        //             if(event.getButton()==cc.EventMouse.BUTTON_LEFT)
        //             {
        //                 cc.log("left mouse button pressed at" + event.getLocationX());
        //             }
        //         }
        //     },this);
        // }

        var menuItem1 = new cc.MenuItemFont("Play",play);
        //var menuItem4 = new cc.MenuItemImage()
        var menuItem2 = new cc.MenuItemFont("Settings", settings);
        var menuItem3 = new cc.MenuItemFont("Exit", exit);

        menuItem1.setPosition(cc.p(size.width/2,(size.height/4)*3));
        menuItem2.setPosition(cc.p(size.width/2,(size.height/8)*2));
        menuItem3.setPosition(cc.p(size.width/2,(size.height/8)*1));

        var menu=new cc.Menu(menuItem1,menuItem2,menuItem3);
        menu.setPosition(cc.p(0,0));

        this.addChild(menu);


        return true;
    }
});

var play =function()
{
    var scene=new HelloWorldScene1();
    //var scene=new GameScene();
    cc.director.pushScene(new cc.TransitionFade(3.0,scene));
}

var exit =function()
{
    cc.log("let's exit")
}

var settings =function()
{
    cc.log("let's settings")
}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(INITIALIZED==false){
            INITIALIZED=true;
            var layer = new HelloWorldLayer();
            this.addChild(layer);
        }
    }
});


INITIALIZED1=false;


var HelloWorldLayer1 = cc.Layer.extend({
    sprite:null,
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

        // add "HelloWorld" splash screen"
        // this.background=cc.Sprite.create("res/bkg.jpg")
        // this.background.attr({
        //     x:size.width,
        //     y:size.height
        // });
        // this.addChild(this.background,1);

        //this.sprite = cc.rect(size.width/2,size.height/2,10,10);
        this.sprite = cc.Sprite.create("res/depot.png");
        this.sprite.attr({
            x: size.width/2,
            y: size.height/2,
        });
        this.sprite.setScale(0.05,0.05);
        this.addChild(this.sprite,0);

        var mySprite1 = new cc.Sprite(res.HelloWorld_png);
        //mySprite1.setAnchorPoint(cc.p(0.5,1));
        mySprite1.setPosition(cc.p(size.width/2,size.height/5*4));
        mySprite1.setScale(0.1,0.1);
        this.addChild(mySprite1,-1);


        var mySprite2 = new cc.Sprite(res.HelloWorld_png);
        mySprite2.setPosition(cc.p(size.width/4,size.height/2));
        mySprite2.setScale(0.1,0.1);
        this.addChild(mySprite2,-1);

        var mySprite3 = new cc.Sprite(res.HelloWorld_png);
        mySprite3.setPosition(cc.p(size.width/4*3,size.height/2));
        mySprite3.setScale(0.1,0.1);
        this.addChild(mySprite3,-1);

        //var square = new cc.Sprite(res.inimigo_png);

        // this.mySprite1=cc.Sprite.create("res/profit_png");
        // this.mySprite1.attr({
        //     x: size.width/2,
        //     y: size.height/10,
        // });
        // this.mySprite1.setScale(0.05,0.05);
        // this.addChild(this.mySprite1,-1);


        // var red_button=new cc.Sprite(res.Sprite_png);
        // red_button.setPosition(cc.p(50,size.height-70));
        // red_button.setAnchorPoint(cc.p(0.5,0.5));
        // this.addChild(red_button,-1);

        // if(cc.sys.capabilities.hasOwnProperty('mouse'))
        // {
        //     cc.eventManager.addListener(
        //     {
        //         event:cc.EventListener.MOUSE,

        //         onMouseDown:function(event)
        //         {
        //             if(event.getButton()==cc.EventMouse.BUTTON_LEFT)
        //             {
        //                 cc.log("left mouse button pressed at" + event.getLocationX());
        //             }
        //         }

        //         onMouseMove: function(event)
        //         {
        //             cc.log("mouse moved"+event.getLocationX());
        //         }
        //     },this);
        // }

        // var eventListener = cc.EventListener.create({//event listener
        //     event: cc.EventListener.TOUCH_ONE_BY_ONE, //one click
        //     swallowTouches: true, //is onTouch return true, stop event propagation
        //     onTouchBegan: this.onTouchBegan, //callbacks
        //     onTouchMoved: this.onTouchMoved});

        // this.addSquares();//add enemies square
        // // this.addTexts(); //add texts

        // cc.eventManager.addListener(eventListener, Objs.Square);//start the event listener

        // // for(var i = 0; i < 4; i++)
        // //     Objs.EnemiesDirection[i] = this.generateDirection();//generate a random movement direction

        // this.scheduleUpdate();//runs update() every frame
        
        var menuItem1 = new cc.MenuItemFont("Back",pop);
        //var menuItem4 = new cc.MenuItemImage()
        menuItem1.setPosition(cc.p(50,size.height-30));

        var menu=new cc.Menu(menuItem1);
        menu.setPosition(cc.p(0,0));
        
        this.addChild(menu,-2);

        return true;
    },

    // update: function(dt){//update callback, run every frame
    //     if(!isAlive)//if is not running, stop
    //         return;
    //     timePlayed += dt; //add dt to game time
    //     Objs.gameTime.setString(timePlayed.toFixed(3));//update game time label

    //     var size = cc.director.getWinSize();//get win size

    //     for(var i = 0; i < 4; i++){//move the enemies
    //         var pos = Objs.Enemies[i].getPosition();

    //         if((pos.x <= 0) || (pos.x >= size.width))//the enemy position will be relative with his direction rect
    //             Objs.EnemiesDirection[i] = cc.p(Objs.EnemiesDirection[i].x * -1, Objs.EnemiesDirection[i].y)
    //         if((pos.y <= 0) || (pos.y >= size.height))
    //             Objs.EnemiesDirection[i] = cc.p(Objs.EnemiesDirection[i].x, Objs.EnemiesDirection[i].y * -1)
    //         Objs.Enemies[i].setPosition(cc.pAdd(Objs.EnemiesDirection[i], pos));

    //     }
    //     //this.checkCollision();//check collisionss
    // },

    // checkCollision: function(){
    //     //create a rect to represent our green square
    //     var rectHero = cc.rect(Objs.Square.getPositionX() - Objs.Square.getContentSize().width/2*Objs.Square.getScaleX(),
    //             Objs.Square.getPositionY() - Objs.Square.getContentSize().height/2*Objs.Square.getScaleY(),
    //             Objs.Square.getContentSize().width*Objs.Square.getScaleX(),
    //             Objs.Square.getContentSize().height*Objs.Square.getScaleY());

    //     for(var i =0; i < 4; i++){
    //         //create a rect for each enemy
    //         var rectEnemy = cc.rect(Objs.Enemies[i].getPositionX() - Objs.Enemies[i].getContentSize().width/2*Objs.Enemies[i].getScaleX(),
    //                 Objs.Enemies[i].getPositionY() - Objs.Enemies[i].getContentSize().height/2*Objs.Enemies[i].getScaleY(),
    //                 Objs.Enemies[i].getContentSize().width*Objs.Enemies[i].getScaleX(),
    //                 Objs.Enemies[i].getContentSize().height*Objs.Enemies[i].getScaleY());
    //         if(cc.rectIntersectsRect(rectHero, rectEnemy)) {//check collision
    //             gameOver();//if ok, gameover
    //             return;
    //         }
    //     }

    // },


    // addTexts: function(){//add the texts to the screen
    //     var bestTime = localStorage.getItem("bestTime");//load the best time from localStorage
    //     Objs.Title = cc.LabelTTF.create("Slide & Survive", res.TitleFont, 40);
    //     Objs.Title.setPosition(cc.p(400, 350));
    //     this.addChild(Objs.Title);

    //     Objs.gameTime = cc.LabelTTF.create("0.000", res.TitleFont, 20);
    //     Objs.gameTime.setPosition(cc.p(50, 10));
    //     this.addChild(Objs.gameTime);

    //     Objs.gameTimeInfo = cc.LabelTTF.create("Time: ", res.TitleFont, 26);
    //     Objs.gameTimeInfo.setPosition(cc.p(200, 225));
    //     this.addChild(Objs.gameTimeInfo);

    //     Objs.gameTimeTotal = cc.LabelTTF.create("0.000", res.TitleFont, 26);
    //     Objs.gameTimeTotal.setPosition(cc.p(300, 225));
    //     this.addChild(Objs.gameTimeTotal);

    //     Objs.gameBestInfo = cc.LabelTTF.create("Best time: ", res.TitleFont, 26);
    //     Objs.gameBestInfo.setPosition(cc.p(540, 225));
    //     this.addChild(Objs.gameBestInfo);

    //     //check if there is a bestTime, if not set the default as 0
    //     Objs.gameBestValue = cc.LabelTTF.create(bestTime ? parseFloat(bestTime).toFixed(3) : "0.000", res.TitleFont, 26);
    //     Objs.gameBestValue.setPosition(cc.p(650, 225));
    //     this.addChild(Objs.gameBestValue);

    //     Objs.gameInfo1 = cc.LabelTTF.create("Move the green square avoiding contact with the red ones!",
    //         res.TitleFont, 20);
    //     Objs.gameInfo1.setPosition(cc.p(400, 310));
    //     this.addChild(Objs.gameInfo1);

    //     Objs.gameInfo2 = cc.LabelTTF.create("Are you able to do it???",
    //         res.TitleFont, 20);
    //     Objs.gameInfo2.setPosition(cc.p(440, 290));
    //     this.addChild(Objs.gameInfo2);

    //     var useSound = localStorage.getItem("Sound");
    //     if(useSound == 1) {
    //         cc.audioEngine.playMusic(res.Music, true);
    //     } else {
    //         if(useSound != 0) {
    //             localStorage.setItem("Sound", 1);
    //             useSound = 1;
    //         }
    //     }
    //     Objs.soundInfo = cc.MenuItemFont.create(useSound == 1 ? "Disable sound" : "Enable Sound", this.SoundClicked, this);
    //     Objs.soundInfo.setFontSize(20);

    //     var Menu = cc.Menu.create(Objs.soundInfo);
    //     Menu.setPosition(680, 20);
    //     this.addChild(Menu);

    // },

    // SoundClicked: function(){
    //     var enabled = localStorage.getItem("Sound");
    //     if(enabled == 1){
    //         cc.audioEngine.stopMusic(true);
    //         localStorage.setItem("Sound", 0);
    //         Objs.soundInfo.setString("Enable sound");
    //     } else {
    //         cc.audioEngine.playMusic(res.Music, true);
    //         localStorage.setItem("Sound", 1);
    //         Objs.soundInfo.setString("Disable sound");
    //     }

    // },


    //     var En = Objs.Enemies;
    //     for(var i = 0; i < 4; i++) {
    //         En[i] = cc.Sprite.create("res/Enemy.png");
    //         this.addChild(En[i]);
    //     }
    //     En[0].setPosition(cc.p(100, 100));

    //     En[1].setPosition(cc.p(700, 100));
    //     En[1].setScaleX(1.7);
    //     En[1].setScaleY(0.4);

    //     En[2].setPosition(cc.p(700, 350));
    //     En[2].setScaleX(0.4);
    //     En[2].setScaleY(1.5);

    //     En[3].setPosition(cc.p(100, 350));
    //     En[3].setScale(0.8);

    //     Objs.Enemies = En;

    // },

    // generateDirection: function(){//generate a random direction
    //     var i = Math.floor((Math.random() * 3));
    //     var v = 7;
    //     switch (i){
    //         case 0:
    //             return cc.p(v, v);
    //         case 1:
    //             return cc.p(-v, v);
    //         case 2:
    //             return cc.p(-v, -v);
    //         case 3:
    //             return cc.p(v, -v);
    //     }
    //     return cc.p(0, 0);
    // }

});

var pop =function()
{
    INITIALIZED1=false;
    cc.director.popScene();
};


var HelloWorldScene1 = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if(INITIALIZED1==false)
        {
            INITIALIZED1=true;

            var layer = new HelloWorldLayer1();
            this.addChild(layer);
        }
    }
});

// HelloWorldLayer1.create=function(){
//     var sg=new HelloWorldLayer1();
//     if(sg && sg.init(cc.c4b(255,255,255,255))){
//         return sg;
//     }
//     return null;
// };

// HelloWorldLayer1.scene=function() {
//     var scene = cc.Scene.create();
//     var layer = HelloWorldLayer1.create();
//     scen
// }



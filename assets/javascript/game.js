var starWarsRPG = {
    characters: {
        han: {
            name: "Han Solo",
            stats: [
                hp = 200,
                ap = 5,
                cap = 10
            ],
            pic: "assets/images/han.png",
        },
        luke: {
            name: "Luke Skywalker",
            stats: [
                hp = 125,
                ap = 7,
                cap = 8
            ],
            pic: "assets/images/luke.png",
        },
        vader: {
            name: "Darth Vader",
            stats: [
                hp = 250,
                ap = 3,
                cap = 8
            ],
            pic: "assets/images/vaderThumbsUp.jpg",
        },
        emperor: {
            name: "Emperor Palpatine",
            stats: [
                hp = 100,
                ap = 9,
                cap = 12
            ],
            pic: "assets/images/emperor.png",
        },
        userCharacter: {
            name: "",
            stats: [
                hp = 1,
                ap = 1,
                cap = 1
            ],
            pic: "assets/images/vaderThumbsUp.jpg",
        },
    },
};


// placeholder vars to store current game stats for each character and the chosen character
var hanPH;
var lukePH;
var vaderPH;
var emperorPH;
var user;

// enemy array to keep track of which characters are where
var enemies = [];

// keeps track of which fight is next (3 total fights)
var fightCount = 1;

// current fight stat trackers
var uHP;
var uAP;
var uAPBase;
var dHP;
var dCAP;

$(document).ready(function() {

    // render section headings
    $("#user").append("<h2>Your Character</h2>");
    $("#enemies").append("<h2>Enemies</h2>");
    $("#defender").append("<h2>Current Defender</h2>");


    $("#newGameButton").click( function() {
        // BEGINNING OF RESET SECTION
        // 
        // 

        // clear all divs and render headings
        $("#chooseCharacter").empty();
        $("#user").empty().append("<h2>Your Character</h2>");
        $("#enemies").empty().append("<h2>Enemies</h2>");
        $("#defender").empty().append("<h2>Current Defender</h2>");


        // reset fightCount
        fightCount = 1;

        // create han's image, give it attributes, render it in chooseCharacter div
            var hanImg = $("<img>");
            hanImg.attr("src", starWarsRPG.characters.han.pic);
            hanImg.attr("id", "han");
            hanImg.attr("hp", starWarsRPG.characters.han.stats[0]);
            hanImg.attr("ap", starWarsRPG.characters.han.stats[1]);
            hanImg.attr("cap", starWarsRPG.characters.han.stats[2]);
            hanImg.addClass("col-sm-3 char");

            hanPH = hanImg;

            $("#chooseCharacter").append(hanPH);

        // create luke's image, give it attributes, render it in chooseCharacter div
            var lukeImg = $("<img>");
            lukeImg.attr("src", starWarsRPG.characters.luke.pic);
            lukeImg.attr("id", "luke");
            lukeImg.attr("hp", starWarsRPG.characters.luke.stats[0]);
            lukeImg.attr("ap", starWarsRPG.characters.luke.stats[1]);
            lukeImg.attr("cap", starWarsRPG.characters.luke.stats[2]);
            lukeImg.addClass("col-sm-3 char");

            lukePH = lukeImg;

            $("#chooseCharacter").append(lukePH);

        // create vader's image, give it attributes, render it in chooseCharacter div
            var vaderImg = $("<img>");
            vaderImg.attr("src", starWarsRPG.characters.vader.pic);
            vaderImg.attr("id", "vader");
            vaderImg.attr("hp", starWarsRPG.characters.vader.stats[0]);
            vaderImg.attr("ap", starWarsRPG.characters.vader.stats[1]);
            vaderImg.attr("cap", starWarsRPG.characters.vader.stats[2]);
            vaderImg.addClass("col-sm-3 char");

            vaderPH = vaderImg;

            $("#chooseCharacter").append(vaderPH);


        // create emperor's image, give it attributes, render it in chooseCharacter div
            var emperorImg = $("<img>");
            emperorImg.attr("src", starWarsRPG.characters.emperor.pic);
            emperorImg.attr("id", "emperor");
            emperorImg.attr("hp", starWarsRPG.characters.emperor.stats[0]);
            emperorImg.attr("ap", starWarsRPG.characters.emperor.stats[1]);
            emperorImg.attr("cap", starWarsRPG.characters.emperor.stats[2]);
            emperorImg.addClass("col-sm-3 char");

            emperorPH = emperorImg;

            $("#chooseCharacter").append(emperorPH);

            // populate enemies array
            enemies = [starWarsRPG.characters.han.name, starWarsRPG.characters.luke.name, starWarsRPG.characters.vader.name, starWarsRPG.characters.emperor.name]; 

        // when user clicks on a character choice, it moves to "Your Character" section, others move to "Enemies" section, enemies are given enemy class
        $(".char").click( function() {

            console.log("choose character click is working");

            // clear chooseCharacter div
            $("#chooseCharacter").empty();

            // put clicked character in #user div and user variable, remove from enemies array, put others in #enemies div, give them enemy class
            $("#user").append(this);

            // HAN SOLO SECTION - will contain everything from picking han through the end of the game
            // 
            // 
            if (this.id == "han") {

                // set user hp and attack power variables to han's base stats to be carried through the game
                uHP = starWarsRPG.characters.han.stats[0];
                uAP = starWarsRPG.characters.han.stats[1];
                uAPBase = starWarsRPG.characters.han.stats[1];

                // store han in the user var
                user = "Han Solo";

                // store others in enemies array, give their images the class enemy, place them in the #enemies div
                enemies = ["Luke Skywalker", "Darth Vader", "Emperor Palpatine"];

                $(lukePH).addClass("enemy");
                $(vaderPH).addClass("enemy");
                $(emperorPH).addClass("enemy");

                $("#enemies").append(lukePH);
                $("#enemies").append(vaderPH);
                $("#enemies").append(emperorPH);


                $(".enemy").click( function() {
                    // move chosen enemy to #defender div, remove them from #enemies div, give them class of defender
                    $("#defender").append(this);
                    $("#enemies").remove(this);
                    $(this).addClass("defender");

                    if (this.id == "luke") {
                        // set dHP and dCAP equal to Luke's corresponding stats
                        dHP = starWarsRPG.characters.luke.stats[0];
                        dCAP = starWarsRPG.characters.luke.stats[2];
                        // code for attacking Luke
                        $("#attack").click( function() {
                            // general flow of an attack:
                            //      subtract uAP from dHP and increase uAP
                            dHP -= uAP;
                            uAP += uAPBase;
                            console.log("dHP: " + dHP + " and uAP: " + uAP);
                            //      check if defender is dead (is dHP <= 0 ?)
                            if (dHP <= 0) {    // if defender is dead:
                                $("#defender").empty(); // remove luke from defender div
                                $("#message").html("<h2>You Defeated Luke! Click another opponent to start the next battle.");

                                // Luke is dead; now user chooses vader or the emperor






                            } else {   // if defender is not dead: 
                                uHP -= dCAP;    // subtract defender cap from user hp
                                // check if user character is dead
                                if (uHP <= 0) {  // if user character is dead
                                    $("#message").html("You Have Died! Click New Game to Try Again");
                                } // if neither the player nor the defender is dead, nothing happens until user clicks attack 
                                  // again and then this process runs again to determine if the fight is over or not

                            }

                        });
                    } else if (this.id == "vader") {

                    } else {

                    };
                });


            } else if (this.id == "luke") {

                user = "Luke Skywalker";

                enemies = ["Han Solo", "Darth Vader", "Emperor Palpatine"];

                $(hanPH).addClass("enemy");
                $(vaderPH).addClass("enemy");
                $(emperorPH).addClass("enemy");

                $("#enemies").append(hanPH);
                $("#enemies").append(vaderPH);
                $("#enemies").append(emperorPH);


            } else if (this.id == "vader") {

                user = "Darth Vader";

                enemies = ["Han Solo", "Luke Skywalker", "Emperor Palpatine"];

                $(hanPH).addClass("enemy");
                $(lukePH).addClass("enemy");
                $(emperorPH).addClass("enemy");

                $("#enemies").append(hanPH);
                $("#enemies").append(lukePH);
                $("#enemies").append(emperorPH);


            } else {

                user = "Emperor Palpatine";

                enemies = ["Han Solo", "Luke Skywalker", "Darth Vader"];

                $(hanPH).addClass("enemy");
                $(lukePH).addClass("enemy");
                $(vaderPH).addClass("enemy");

                $("#enemies").append(hanPH);
                $("#enemies").append(lukePH);
                $("#enemies").append(vaderPH);


            };

        }); 
    });

});



// scrapped code

    // I'm giving up on the looping to create character icons for now so that I can complete the assignment in time 

    // fill character choice div
    // for (var i = 0; i < Object.keys(starWarsRPG.characters).length - 1; i++) {
    //     console.log("is the loop running?"); 
    //     // it is

    //     // create character image and give it attributes
    //     var charImg = $("<img>");
    //     charImg.attr("src", "assets/images/vaderThumbsUp.jpg");
    //     charImg.attr("id", "character" + i);
    //     charImg.addClass("col-lg-3");

    // }

    //     $("#chooseCharacter").append(charImg);
    // }
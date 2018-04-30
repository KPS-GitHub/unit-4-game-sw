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

// enemy array and defender var to keep track of which enemies are where
var enemies = [];
var defender;

// keeps track of how many fights are left
// once it reaches 0, the user has won the game
var fightCount = 3;

var fight = false;

// stat trackers
//   user stats
var uHP;
var uAP;
var uAPBase;
//  current defender stats
var dHP;
var dCAP;


$(document).ready(function() {

    //  ------ FIRST MAJOR SECTION ------
    // THIS SECTION ALLOWS THE GAME TO BE PLAYED DIRECTLY FROM THE PAGE LOADING
    //      MUCH OF THIS CODE WILL BE REPEATED WITHIN THE $("#newGameButton").click( function() {} WHERE
    //      THE GAME WILL BE ABLE TO BE RESET WITH THE NEW GAME BUTTON AND PLAYED AGAIN INFINITE TIMES
    // 
    // FOR THE SAKE OF GOOD CODING, I WILL COME BACK AND CONSOLIDATE REPEATED CODE INTO FUNCTIONS SO THAT THE CODE ISN'T SO LONG AND IS MORE ORGANIZED
    // I WILL ALSO ATTEMPT TO INCLUDE ALL OF THE FUNCTIONS IN THE GAME OBJECT TO FURTHER ORGANIZE AND CONSOLIDATE

    // render starting instructions
    $("#instructions").html("<p>Choose Your Character</p>");

    // render section headings
    $("#user").append("<h2>Your Character</h2>");
    $("#enemies").append("<h2>Enemies</h2>");
    $("#defender").append("<h2>Current Defender</h2>");

    // create and render character images
        // create han's image, give it id and classes, render it in chooseCharacter div

//         <figure class="figure">
//          <img src="..." class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
//          <figcaption class="figure-caption">A caption for the above image.</figcaption>
//         </figure>
            var hanImg = $("<img>");
            hanImg.attr("src", starWarsRPG.characters.han.pic);
            hanImg.attr("id", "han");
            hanImg.addClass("char");

            hanPH = hanImg;

            $("#chooseCharacter").append(hanPH);

        // create luke's image, give it id and classes, render it in chooseCharacter div
            var lukeImg = $("<img>");
            lukeImg.attr("src", starWarsRPG.characters.luke.pic);
            lukeImg.attr("id", "luke");
            lukeImg.addClass("char");

            lukePH = lukeImg;

            $("#chooseCharacter").append(lukePH);

        // create vader's image, give it id and classes, render it in chooseCharacter div
            var vaderImg = $("<img>");
            vaderImg.attr("src", starWarsRPG.characters.vader.pic);
            vaderImg.attr("id", "vader");
            vaderImg.addClass("char");

            vaderPH = vaderImg;

            $("#chooseCharacter").append(vaderPH);


        // create emperor's image, give it id and classes, render it in chooseCharacter div
            var emperorImg = $("<img>");
            emperorImg.attr("src", starWarsRPG.characters.emperor.pic);
            emperorImg.attr("id", "emperor");
            emperorImg.addClass("char");

            emperorPH = emperorImg;

            $("#chooseCharacter").append(emperorPH);

    // when user clicks on a character choice, it moves to "Your Character" section, others move to "Enemies" section, enemies are given enemy class
    $(".char").click( function() {

        // render instructions for next step
        $("#instructions").html("<p>Now Choose Your First Opponent from the Enemies List</p>");

        // clear chooseCharacter div
        $("#chooseCharacter").empty();

        // put clicked character in #user div and user variable, remove from enemies array, put others in #enemies div, give them enemy class
        $("#user").append(this);

        if (this.id == "han") {

            // set user hp and attack power variables to han's base stats to be carried through the game
            uHP = starWarsRPG.characters.han.stats[0];
            uAP = starWarsRPG.characters.han.stats[1];
            uAPBase = starWarsRPG.characters.han.stats[1];

            $(lukePH).addClass("enemy");
            $(vaderPH).addClass("enemy");
            $(emperorPH).addClass("enemy");

            $("#enemies").append(lukePH);
            $("#enemies").append(vaderPH);
            $("#enemies").append(emperorPH);


        } else if (this.id == "luke") {
            // set user hp and attack power variables to luke's base stats to be carried through the game
            uHP = starWarsRPG.characters.luke.stats[0];
            uAP = starWarsRPG.characters.luke.stats[1];
            uAPBase = starWarsRPG.characters.luke.stats[1];

            $(hanPH).addClass("enemy");
            $(vaderPH).addClass("enemy");
            $(emperorPH).addClass("enemy");

            $("#enemies").append(hanPH);
            $("#enemies").append(vaderPH);
            $("#enemies").append(emperorPH);


        } else if (this.id == "vader") {
            // set user hp and attack power variables to vader's base stats to be carried through the game
            uHP = starWarsRPG.characters.vader.stats[0];
            uAP = starWarsRPG.characters.vader.stats[1];
            uAPBase = starWarsRPG.characters.vader.stats[1];

            $(hanPH).addClass("enemy");
            $(lukePH).addClass("enemy");
            $(emperorPH).addClass("enemy");

            $("#enemies").append(hanPH);
            $("#enemies").append(lukePH);
            $("#enemies").append(emperorPH);


        } else {
            // set user hp and attack power variables to emperor's base stats to be carried through the game
            uHP = starWarsRPG.characters.emperor.stats[0];
            uAP = starWarsRPG.characters.emperor.stats[1];
            uAPBase = starWarsRPG.characters.emperor.stats[1];

            $(hanPH).addClass("enemy");
            $(lukePH).addClass("enemy");
            $(vaderPH).addClass("enemy");

            $("#enemies").append(hanPH);
            $("#enemies").append(lukePH);
            $("#enemies").append(vaderPH);


        };

        $(".enemy").on("click", function() {           

            // if (fight) {
            //     $(".enemy").off("click");
            // }
                // render fight instructions
                $("#instructions").html("<p>Click Attack to Attack Your Opponent</p>");
                $("#instructions").append("<p>Be Careful! Your Opponent Will Strike Back After Each Attack!</p>");
                    // move chosen enemy to #defender div, remove them from #enemies div, give them class of defender
                    $(this).remove(); 
                    $("#defender").append(this);
                    $(this).addClass("defender");
                    // remove col-sm-3 class so that defender image isn't squeezed into 1/4 of available div space
                    $(this).removeClass("col-sm-3");

                    fight = true;

                    if (this.id == "han") {
                        defender = "Han Solo";
                        // set dHP and dCAP equal to Luke's corresponding stats
                        dHP = starWarsRPG.characters.han.stats[0];
                        dCAP = starWarsRPG.characters.han.stats[2];
                    } else if (this.id == "luke") {
                        defender = "Luke Skywalker";
                        // set dHP and dCAP equal to Luke's corresponding stats
                        dHP = starWarsRPG.characters.luke.stats[0];
                        dCAP = starWarsRPG.characters.luke.stats[2];
                    } else if (this.id == "vader") {
                        defender = "Darth Vader";
                        // set dHP and dCAP equal to Luke's corresponding stats
                        dHP = starWarsRPG.characters.vader.stats[0];
                        dCAP = starWarsRPG.characters.vader.stats[2];
                    } else {
                        defender = "Emperor Palpatine";
                        // set dHP and dCAP equal to Luke's corresponding stats
                        dHP = starWarsRPG.characters.emperor.stats[0];
                        dCAP = starWarsRPG.characters.emperor.stats[2];
                    };

                    $("#attack").on("click",  function() {
                        // general flow of an attack:
                        // reduce defender HP by user AP
                        dHP -= uAP;
                        // increase uAP by uAPBase
                        uAP += uAPBase;
                        console.log("dHP: " + dHP);
                        console.log("uHP: " + uHP + " and uAP: " + uAP);
                        // check if defender is dead (is dHP <= 0 ?)
                        if (dHP <= 0) {    // if defender is dead:

                            fight = false;

                            // render update in #instructions div
                            $("#instructions").html("<p>You Defeated Your Opponent!</p>");

                            // turn off attack button functionality until next defender is chosen
                            //  -ensures that clicking attack with no defender present does not mess with any counters (uAP, fightCount, etc.)
                            $("#attack").off("click");

                            $("#defender").empty(); // empty #defender div
                            $("#defender").append("<h2>Current Defender</h2>"); // render #defender div heading again
                            fightCount -= 1; // subtract one from fightCount
                            console.log("fightCount: " + fightCount);
                            if (fightCount == 0) {   // user has completed all fights and has won the game
                                $("#message").html("<h2>YOU WON! Click New Game to play again.</h2>");
                                // kill all click functionality except for the new game button (attack is already turned off at this point)
                                $(".char").off("click");
                                $(".enemy").off("click");
                            } else {  // user has completed this fight, but there are still enemies to fight
                                $("#message").html("<h2>You Defeated " + defender + "! Click another opponent to start the next battle.</h2>");
                            }

                        } else {   // if defender is not dead: 
                            uHP -= dCAP;    // subtract defender cap from user hp
                            console.log("dHP: " + dHP);
                            console.log("uHP: " + uHP + " and uAP: " + uAP);
                            // check if user character is dead
                            if (uHP <= 0) {  // if user character is dead

                                fight = false;

                            // render update in #instructions div
                            $("#instructions").html("<p>Your Opponent Has Defeated You</p>");
                            $("#message").html("<h2>You Have Died! Click New Game to Try Again</h2>");
                            } // if neither the player nor the defender is dead, nothing happens until user clicks attack 
                            // again and then this process runs again to determine if the fight is over or not

                        }

                    });
            });
    }); 


    //  ------ SECOND MAJOR SECTION ------
    // THIS SECTION CONTAINS NEARLY IDENTICAL CODE AS THE FIRST MAJOR SECTION, BUT IT IS NOW WITHIN THE 
    // CLICK FUNCTIONALITY OF THE NEW GAME BUTTON SO THAT THE GAME CAN BE RESET AND PLAYED OVER AND OVER
    // 
    // FOR THE SAKE OF GOOD CODING, I WILL COME BACK AND CONSOLIDATE REPEATED CODE INTO FUNCTIONS SO THAT THE CODE ISN'T SO LONG AND IS MORE ORGANIZED
    // I WILL ALSO ATTEMPT TO INCLUDE ALL OF THE FUNCTIONS IN THE GAME OBJECT TO FURTHER ORGANIZE AND CONSOLIDATE
            
    $("#newGameButton").click( function() {

        // clear all divs and render headings
        $("#chooseCharacter").empty();
        $("#userImg").empty();
        $("#user").empty().append("<h2>Your Character</h2>");
        $("#enemies").empty().append("<h2>Enemies</h2>");
        $("#defender").empty().append("<h2>Current Defender</h2>");
        // render starting instructions
        $("#instructions").html("<p>Choose Your Character</p>");
        // clear #message div
        $("#message").empty();


        // reset fightCount
        fightCount = 3;

        // create han's image, give it id and classes, render it in chooseCharacter div
            var hanImg = $("<img>");
            hanImg.attr("src", starWarsRPG.characters.han.pic);
            hanImg.attr("id", "han");
            hanImg.addClass("char");

            hanPH = hanImg;

            $("#chooseCharacter").append(hanPH);

        // create luke's image, give it id and classes, render it in chooseCharacter div
            var lukeImg = $("<img>");
            lukeImg.attr("src", starWarsRPG.characters.luke.pic);
            lukeImg.attr("id", "luke");
            lukeImg.addClass("char");

            lukePH = lukeImg;

            $("#chooseCharacter").append(lukePH);

        // create vader's image, give it id and classes, render it in chooseCharacter div
            var vaderImg = $("<img>");
            vaderImg.attr("src", starWarsRPG.characters.vader.pic);
            vaderImg.attr("id", "vader");
            vaderImg.addClass("char");

            vaderPH = vaderImg;

            $("#chooseCharacter").append(vaderPH);


        // create emperor's image, give it id and classes, render it in chooseCharacter div
            var emperorImg = $("<img>");
            emperorImg.attr("src", starWarsRPG.characters.emperor.pic);
            emperorImg.attr("id", "emperor");
            emperorImg.addClass("char");

            emperorPH = emperorImg;

            $("#chooseCharacter").append(emperorPH);

        // when user clicks on a character choice, it moves to "Your Character" section, others move to "Enemies" section, enemies are given enemy class
        $(".char").click( function() {

            // render instructions for next step
            $("#instructions").html("<p>Now Choose Your First Opponent from the Enemies List</p>");

            // clear chooseCharacter div
            $("#chooseCharacter").empty();

            // put clicked character in #user div and user variable, remove from enemies array, put others in #enemies div, give them enemy class
            $("#user").append(this);

            if (this.id == "han") {

                // set user hp and attack power variables to han's base stats to be carried through the game
                uHP = starWarsRPG.characters.han.stats[0];
                uAP = starWarsRPG.characters.han.stats[1];
                uAPBase = starWarsRPG.characters.han.stats[1];

                $(lukePH).addClass("enemy");
                $(vaderPH).addClass("enemy");
                $(emperorPH).addClass("enemy");

                $("#enemies").append(lukePH);
                $("#enemies").append(vaderPH);
                $("#enemies").append(emperorPH);


            } else if (this.id == "luke") {
                // set user hp and attack power variables to luke's base stats to be carried through the game
                uHP = starWarsRPG.characters.luke.stats[0];
                uAP = starWarsRPG.characters.luke.stats[1];
                uAPBase = starWarsRPG.characters.luke.stats[1];

                $(hanPH).addClass("enemy");
                $(vaderPH).addClass("enemy");
                $(emperorPH).addClass("enemy");

                $("#enemies").append(hanPH);
                $("#enemies").append(vaderPH);
                $("#enemies").append(emperorPH);


            } else if (this.id == "vader") {
                // set user hp and attack power variables to vader's base stats to be carried through the game
                uHP = starWarsRPG.characters.vader.stats[0];
                uAP = starWarsRPG.characters.vader.stats[1];
                uAPBase = starWarsRPG.characters.vader.stats[1];

                $(hanPH).addClass("enemy");
                $(lukePH).addClass("enemy");
                $(emperorPH).addClass("enemy");

                $("#enemies").append(hanPH);
                $("#enemies").append(lukePH);
                $("#enemies").append(emperorPH);


            } else {
                // set user hp and attack power variables to emperor's base stats to be carried through the game
                uHP = starWarsRPG.characters.emperor.stats[0];
                uAP = starWarsRPG.characters.emperor.stats[1];
                uAPBase = starWarsRPG.characters.emperor.stats[1];

                $(hanPH).addClass("enemy");
                $(lukePH).addClass("enemy");
                $(vaderPH).addClass("enemy");

                $("#enemies").append(hanPH);
                $("#enemies").append(lukePH);
                $("#enemies").append(vaderPH);


            };


                $(".enemy").on("click", function() {

                    // if (fight) {
                    //     $(".enemy").off("click");
                    // }

                    // render fight instructions
                    $("#instructions").html("<p>Click Attack to Attack Your Opponent</p>");
                    $("#instructions").append("<p>Be Careful! Your Opponent Will Strike Back After Each Attack!</p>");

                    // move chosen enemy to #defender div, remove them from #enemies div, give them class of defender
                    $(this).remove(); 
                    $("#defender").append(this);
                    $(this).addClass("defender");
                    // remove col-sm-3 class so that defender image isn't squeezed into 1/4 of available div space
                    $(this).removeClass("col-sm-3");

                    fight = true;

                    if (this.id == "han") {
                        defender = "Han Solo";
                        // set dHP and dCAP equal to Luke's corresponding stats
                        dHP = starWarsRPG.characters.han.stats[0];
                        dCAP = starWarsRPG.characters.han.stats[2];
                    } else if (this.id == "luke") {
                        defender = "Luke Skywalker";
                        // set dHP and dCAP equal to Luke's corresponding stats
                        dHP = starWarsRPG.characters.luke.stats[0];
                        dCAP = starWarsRPG.characters.luke.stats[2];
                    } else if (this.id == "vader") {
                        defender = "Darth Vader";
                        // set dHP and dCAP equal to Luke's corresponding stats
                        dHP = starWarsRPG.characters.vader.stats[0];
                        dCAP = starWarsRPG.characters.vader.stats[2];
                    } else {
                        defender = "Emperor Palpatine";
                        // set dHP and dCAP equal to Luke's corresponding stats
                        dHP = starWarsRPG.characters.emperor.stats[0];
                        dCAP = starWarsRPG.characters.emperor.stats[2];
                    };

                    $("#attack").on("click",  function() {
                        // general flow of an attack:
                        // reduce defender HP by user AP
                        dHP -= uAP;
                        // increase uAP by uAPBase
                        uAP += uAPBase;
                        console.log("dHP: " + dHP);
                        console.log("uHP: " + uHP + " and uAP: " + uAP);
                        // check if defender is dead (is dHP <= 0 ?)
                        if (dHP <= 0) {    // if defender is dead:

                            fight = false;

                            // render update in #instructions div
                            $("#instructions").html("<p>You Defeated Your Opponent!</p>");

                            // turn off attack button functionality until next defender is chosen
                            //  -ensures that clicking attack with no defender present does not mess with any counters (uAP, fightCount, etc.)
                            $("#attack").off("click");

                            $("#defender").empty(); // empty #defender div
                            $("#defender").append("<h2>Current Defender</h2>"); // render #defender div heading again
                            fightCount -= 1; // subtract one from fightCount
                            console.log("fightCount: " + fightCount);
                            if (fightCount == 0) {   // user has completed all fights and has won the game
                                $("#message").html("<h2>YOU WON! Click New Game to play again.</h2>");
                            } else {  // user has completed this fight, but there are still enemies to fight
                                $("#message").html("<h2>You Defeated " + defender + "! Click another opponent to start the next battle.</h2>");
                            }

                        } else {   // if defender is not dead: 
                            uHP -= dCAP;    // subtract defender cap from user hp
                            console.log("dHP: " + dHP);
                            console.log("uHP: " + uHP + " and uAP: " + uAP);
                            // check if user character is dead
                            if (uHP <= 0) {  // if user character is dead

                                fight = false; 
                                
                                // render update in #instructions div
                                $("#instructions").html("<p>Your Opponent Has Defeated You</p>");
                                // render game over message
                                $("#message").html("<h2>You Have Died! Click New Game to Try Again</h2>");
                            } // if neither the player nor the defender is dead, nothing happens until user clicks attack 
                            // again and then this process runs again to determine if the fight is over or not

                        }

                    });
                });
        }); 
    });

});


// TO DO - MAKE GAME OBJECT AND GAME ADAPTABLE TO ANY OBJECT OF THE SAME STRUCTURE 
//      Will be a lot of work (functions to change every instance of gameObject in js, change game object to have generic properties, etc.)

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
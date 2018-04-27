var starWarsRPG = {
    characters: {
        han: {
            name: "Han Solo",
            stats: [
                hp = 200,
                ap = 5,
                cap = 10
            ],
            pic: "assets/images/vaderThumbsUp.jpg",
        },
        luke: {
            name: "Luke Skywalker",
            stats: [
                hp = 125,
                ap = 7,
                cap = 8
            ],
            pic: "assets/images/vaderThumbsUp.jpg",
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
            pic: "assets/images/vaderThumbsUp.jpg",
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

            $("#chooseCharacter").append(hanImg);

        // create luke's image, give it attributes, render it in chooseCharacter div
            var lukeImg = $("<img>");
            lukeImg.attr("src", starWarsRPG.characters.luke.pic);
            lukeImg.attr("id", "luke");
            lukeImg.attr("hp", starWarsRPG.characters.luke.stats[0]);
            lukeImg.attr("ap", starWarsRPG.characters.luke.stats[1]);
            lukeImg.attr("cap", starWarsRPG.characters.luke.stats[2]);
            lukeImg.addClass("col-sm-3 char");

            lukePH = lukeImg;

            $("#chooseCharacter").append(lukeImg);

        // create vader's image, give it attributes, render it in chooseCharacter div
            var vaderImg = $("<img>");
            vaderImg.attr("src", starWarsRPG.characters.vader.pic);
            vaderImg.attr("id", "vader");
            vaderImg.attr("hp", starWarsRPG.characters.vader.stats[0]);
            vaderImg.attr("ap", starWarsRPG.characters.vader.stats[1]);
            vaderImg.attr("cap", starWarsRPG.characters.vader.stats[2]);
            vaderImg.addClass("col-sm-3 char");

            vaderPH = vaderImg;

            $("#chooseCharacter").append(vaderImg);


        // create emperor's image, give it attributes, render it in chooseCharacter div
            var emperorImg = $("<img>");
            emperorImg.attr("src", starWarsRPG.characters.emperor.pic);
            emperorImg.attr("id", "emperor");
            emperorImg.attr("hp", starWarsRPG.characters.emperor.stats[0]);
            emperorImg.attr("ap", starWarsRPG.characters.emperor.stats[1]);
            emperorImg.attr("cap", starWarsRPG.characters.emperor.stats[2]);
            emperorImg.addClass("col-sm-3 char");

            emperorPH = emperorImg;

            $("#chooseCharacter").append(emperorImg);

            // populate enemies array
            enemies = [starWarsRPG.characters.han.name, starWarsRPG.characters.luke.name, starWarsRPG.characters.vader.name, starWarsRPG.characters.emperor.name];

            // 
            // 
            // 
            // end of reset section


            // BEGINNING OF CHOOSE CHARACTER SECTION
            // 
            // 
            // 

        // when user clicks on a character choice, it moves to "Your Character" section and others move to "Enemies" section
        $(".char").click( function() {

            console.log("click is working");

            // clear chooseCharacter div
            $("#chooseCharacter").empty();

            // put clicked character in #user div and user variable, remove from enemies array, put others in #enemies div
            $("#user").append(this);

            if (this.id == "han") {
                user = "Han Solo";
                enemies = ["Luke Skywalker", "Darth Vader", "Emperor Palpatine"];
                $("#enemies").append(lukePH);
                $("#enemies").append(vaderPH);
                $("#enemies").append(emperorPH);
            } else if (this.id == "luke") {
                user = "Luke Skywalker";
                enemies = ["Han Solo", "Darth Vader", "Emperor Palpatine"];
                $("#enemies").append(hanPH);
                $("#enemies").append(vaderPH);
                $("#enemies").append(emperorPH);
            } else if (this.id == "vader") {
                user = "Darth Vader";
                enemies = ["Han Solo", "Luke Skywalker", "Emperor Palpatine"];
                $("#enemies").append(hanPH);
                $("#enemies").append(lukePH);
                $("#enemies").append(emperorPH);
            } else if (this.id == "emperor") {
                user = "Emperor Palpatine";
                enemies = ["Han Solo", "Luke Skywalker", "Darth Vader"];
                $("#enemies").append(hanPH);
                $("#enemies").append(lukePH);
                $("#enemies").append(vaderPH);
            }

                // 
                // 
                // 
                // end of choose character section
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
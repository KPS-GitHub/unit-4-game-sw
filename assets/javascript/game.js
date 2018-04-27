var starWarsRPG = {
    characters: {
        han: {
            stats: [
                hp = 200,
                ap = 5,
                cap = 10
            ],
            pic: "../vaderThumbsUp.jpg",
        },
        luke: {
            stats: [
                hp = 125,
                ap = 7,
                cap = 8
            ],
            pic: "../vaderThumbsUp.jpg",
        },
        vader: {
            stats: [
                hp = 250,
                ap = 3,
                cap = 8
            ],
            pic: "../vaderThumbsUp.jpg",
        },
        emperor: {
            stats: [
                hp = 100,
                ap = 9,
                cap = 12
            ],
            pic: "../vaderThumbsUp.jpg",
        },
        userCharacter: {
            stats: [
                hp = 1,
                ap = 1,
                cap = 1
            ],
            pic: "../vaderThumbsUp.jpg",
        },
    },
};

// 
// functions: {
//     newGame

//     },
//     chooseCharacter: function() {

//     },
//     chooseEnemy: function() {

//     },
//     attack: function() {

//     }


    // events: {
    //     newGame: $("body").on("click", "#newGameButton", starWarsRPG.functions.newGame()),
    // },

$(document).ready(function() {

    $("#newGameButton").click( function() {
        // clear character choices div
        $("#chooseCharacter").empty();

        // create han's image and give it attributes
            var hanImg = $("<img>");
            hanImg.attr("src", "assets/images/vaderThumbsUp.jpg");
            hanImg.attr("id", "han");
            hanImg.addClass("col-sm-3");

        
        
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



        //     $("#chooseCharacter").append(charImg);
        // }

        // 
    });

});
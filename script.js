var allGoodBacks = ["dispzoolandergood", "billy", "itpedia", "ponasenkov", "number", "optimus", "damn"];
var allBadBacks = ["dispzoolanderbad", "kizaru", "obama", "denchik", "falling"];
function gameStart() {
    var randGoodBack = allGoodBacks[Math.floor(Math.random() * allGoodBacks.length)];
    var randBadBack = allBadBacks[Math.floor(Math.random() * allBadBacks.length)];
    for (i=0; i < allGoodBacks.length; i++) {
        document.querySelector(".dice_1").classList.remove(allGoodBacks[i]);
    }
    for (i=0; i < allBadBacks.length; i++) {
        document.querySelector(".dice_1").classList.remove(allBadBacks[i]);
    }
    for (i=0; i < allGoodBacks.length; i++) {
        document.querySelector(".dice_2").classList.remove(allGoodBacks[i]);
    }
    for (i=0; i < allBadBacks.length; i++) {
        document.querySelector(".dice_2").classList.remove(allBadBacks[i]);
    }
    document.querySelector("aside.player1_table").classList.remove("player__win_count");
    document.querySelector("aside.player2_table").classList.remove("player__win_count");
    document.querySelector(".player1_images").classList.remove("dispflex");
    document.querySelector(".player2_images").classList.remove("dispflex");
    document.querySelector(".player_1").classList.remove("player1Translate");
    document.querySelector(".player_2").classList.remove("player2Translate");
    document.querySelector(".player_1 .player__name").innerText ="Player 1 ";
    document.querySelector(".player_2 .player__name").innerText ="Player 2 ";
    document.querySelector("h1").classList.add("dnone");
    document.querySelector("h2").classList.remove("h2Player1");
    document.querySelector("h2").classList.remove("h2Player2");
    document.querySelector("h2").classList.remove("h2Draw");
    document.querySelector(".player_1 .player__name").classList.remove("player_win");
    document.querySelector(".player_2 .player__name").classList.remove("player_win");
    document.querySelector("body").classList.add("button_active");
    document.querySelector(".player_1 .dice").classList.remove("dice__1_win");
    document.querySelector(".player_2 .dice").classList.remove("dice__2_win");
    var allActives = document.querySelectorAll(".active");
    for (var i = 0; i < allActives.length; i++) {
        document.querySelectorAll(".active")[0].classList.remove("active");
    }
    document.querySelector("h2").classList.remove("opacity");
    var randPlayer1 = (Math.floor(Math.random()*6));
    var randPlayer2 = (Math.floor(Math.random()*6));
    document.querySelector(".player_1 .dice").classList.toggle("go_round");
    document.querySelector(".player_2 .dice").classList.toggle("go_round");
    document.querySelector("div.player_1 .dice").children[randPlayer1].classList.toggle("active");
    document.querySelector("div.player_2 .dice").children[randPlayer2].classList.toggle("active");
    if (randPlayer1 > randPlayer2) {
        document.querySelector(".player_1 .player__name").classList.add("player_win");
        document.querySelector("h2").innerText = "Player 1 wins!";
        document.querySelector("h2").classList.add("h2Player1");
        document.querySelector(".player_1 .player__name").innerText ="🥳Player 1 ";
        document.querySelector(".player_2 .player__name").innerText ="Player 2 😒";
        document.querySelector(".player1_table").innerHTML = parseInt(document.querySelector(".player1_table").innerHTML, 10) + 1;
        document.querySelector("aside.player1_table").classList.add("player__win_count");
        document.querySelector(".dice_1").classList.add(randGoodBack);
        document.querySelector(".dice_2").classList.add(randBadBack);
        if (parseInt(document.querySelector(".player1_table").innerHTML, 10) > parseInt(document.querySelector(".player2_table").innerHTML, 10)+3) {
            document.querySelector(".player1_images").classList.add("dispflex");
        }
        setTimeout(delayWin1, 1500);
        function delayWin1() {
            document.querySelector(".player_1").classList.add("player1Translate");
            document.querySelector(".player_1 .dice").classList.add("dice__1_win");
        }
        
    } else if (randPlayer1 == randPlayer2) {
        document.querySelector(".player_1 .player__name").classList.add("player_win");
        document.querySelector(".player_2 .player__name").classList.add("player_win");
        document.querySelector("h2").innerText = "Draw!";
        document.querySelector("h2").classList.add("h2Draw");
        document.querySelector(".player_1 .player__name").innerText ="🤡Player 1 ";
        document.querySelector(".player_2 .player__name").innerText ="Player 2 🤡";
        document.querySelector(".player1_table").innerHTML = parseInt(document.querySelector(".player1_table").innerHTML, 10) + 1;
        document.querySelector(".player2_table").innerHTML = parseInt(document.querySelector(".player2_table").innerHTML, 10) + 1;
        document.querySelector("aside.player1_table").classList.add("player__win_count");
        document.querySelector("aside.player2_table").classList.add("player__win_count");
        document.querySelector(".dice_2").classList.add(randGoodBack);
        document.querySelector(".dice_1").classList.add(randGoodBack);
        setTimeout(delayWinDraw, 1500);
        function delayWinDraw() {
            document.querySelector(".player_1").classList.add("player1Translate");
            document.querySelector(".player_2").classList.add("player2Translate");
            document.querySelector(".player_1 .dice").classList.add("dice__1_win");
            document.querySelector(".player_2 .dice").classList.add("dice__2_win");
        }
       
    }   
    else {
        document.querySelector(".player_2 .player__name").classList.add("player_win");
        document.querySelector("h2").innerText = "Player 2 wins!";
        document.querySelector("h2").classList.add("h2Player2");
        document.querySelector(".player_1 .player__name").innerText ="😒Player 1 ";
        document.querySelector(".player_2 .player__name").innerText ="Player 2 🥳";
        document.querySelector(".player2_table").innerHTML = parseInt(document.querySelector(".player2_table").innerHTML, 10) + 1;
        document.querySelector("aside.player2_table").classList.add("player__win_count");
        document.querySelector(".dice_2").classList.add(randGoodBack);
        document.querySelector(".dice_1").classList.add(randBadBack);
        if (parseInt(document.querySelector(".player2_table").innerHTML, 10) > parseInt(document.querySelector(".player1_table").innerHTML, 10) + 3) {
            document.querySelector(".player2_images").classList.add("dispflex");
        }
        
        setTimeout(delayWin2, 1500);
        function delayWin2() {
            document.querySelector(".player_2").classList.add("player2Translate");
            document.querySelector(".player_2 .dice").classList.add("dice__2_win");
        }
        
    }
    document.querySelector("h2").classList.add("opacity");
    
}




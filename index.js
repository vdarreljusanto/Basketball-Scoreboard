let homeScoreEl =document.getElementById("homescore")
let homeScore = 0

function homeplusone(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeplustwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeplusthree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreEl =document.getElementById("guestscore")
let guestScore = 0

function guestplusone(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestplustwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestplusthree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newgame(){
    homeScore = 0
    guestScore = 0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
}

let hometeamfouls = document.getElementById("homefouls")
let homeFouls = 0

function homeplusfouls(){
    homeFouls += 1
    hometeamfouls.textContent = "Team Fouls: " + homeFouls
}

function homeminusfouls(){
    homeFouls -= 1
    hometeamfouls.textContent = "Team Fouls: " + homeFouls
}


let guestteamfouls = document.getElementById("guestfouls")
let guestFouls = 0

function guestplusfouls(){
    guestFouls += 1
    guestteamfouls.textContent = "Team Fouls: " + guestFouls
}

function guestminusfouls(){
    guestFouls -= 1
    guestteamfouls.textContent = "Team Fouls: " + guestFouls
}

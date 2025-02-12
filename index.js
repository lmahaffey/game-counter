let homeScore=document.getElementById("home-score")
let guestScore=document.getElementById("guest-score")


function calculate(team,points){
    let currentTeam=team=='home'? homeScore:guestScore;
    let score=parseInt(currentTeam.textContent)
    score+=points;
    currentTeam.textContent=score;
    

    if(parseInt(homeScore.textContent)>parseInt(guestScore.textContent)){
        guestScore.style.color='green';
        homeScore.style.color='rgb(222, 64, 90)';
    }

    else if(parseInt(homeScore.textContent)<parseInt(guestScore.textContent))
{
    homeScore.style.color='green';
        guestScore.style.color='rgb(222, 64, 90)';
}
  else{
    guestScore.style.color='rgb(222, 64, 90)';
    homeScore.style.color='rgb(222, 64, 90)';
  }
}

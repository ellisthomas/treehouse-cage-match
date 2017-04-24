$(document).ready(function(){


// var response;

// 	$.ajax({
// 	  url: "https://teamtreehouse.com/ellisthomas.json"
// 	}).done((data) => {
// 	  response = data;
// 	  console.log(response);

// 	}).fail((error) => {
// 	  console.log(error);
// 	});

// 		$.ajax({
// 	  url: "https://teamtreehouse.com/dwaynepate.json"
// 	}).done((data1) => {
// 	  response = data1;
// 	  console.log(response);

// 	}).fail((error1) => {
// 	  console.log(error1);
// 	});

let players = [];

$("#btn").on("click", function() {
	let user1 = $("#player1").val();
	let user2 = $("#player2").val();

	// alert("you clicked me");


	const writeToDom = (players) => {
		let domString = "";
		for(let i = 0; i < players.length; i++) {
		domString += `<div class="row">`;
		domString += `<div class="col-md-6">`;
		domString += `<a href="#" class="thumbnail">`;
		domString += `<img class="pic" src="${players[i].gravatar_url}">`;
		domString += `<p>${players[i].name}</p>`;
		domString += `<p class="points"> Total Points: ${players[i].points.total}</p>`;
		domString += `</a>`;
		domString += `</div></div>`;
		}
		$("#container").append(domString);
	};


	const pointsArray = [];
	let winner = "";

	const theWinnerIs = (players) => {
		pointString = "";
		for(let i = 0; i < players.length; i++) {
			pointString = players[i].points.total;
			pointsArray.push(pointString);
		}
		if(pointsArray[0] > pointsArray[1]) {
			$("#winner").val("winner " + (players[0].name));
			winner = 0;
		} else {
			$("#winner").val("winner " + (players[1].name));
			winner = 1;
		}
		winnerbagdges(players, winner);
	};


	const winnerBadgesArray = [];
        winnerBadgesStrings = "";
        winnerBadges = "";
        const winnerbagdges = (players, winner) => {
            for (let i = 0; i < players[winner].badges.length; i++) {
                winnerBadges = players[winner].badges[i].icon_url;
                winnerBadgesArray.push(winnerBadges);
            }
            for (let j = 0; j < winnerBadgesArray.length; j++) {
                winnerBadgesStrings += `<div>`;
                winnerBadgesStrings += `<img class="badgeImage col-md-4" src="${winnerBadgesArray[j]}"`;
                winnerBadgesStrings += `</div>`;
            }
            $("#badges").append(winnerBadgesStrings);
        };
	


	const loadPlayer1JSON = () => {
		return new Promise((resolve, reject) => {
			// $.ajax("https://teamtreehouse.com/ellisthomas.json")
			$.ajax("https://teamtreehouse.com/"+user1+".json")
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};

	const loadPlayer2JSON = () => {
		return new Promise((resolve, reject) => {
			// $.ajax("https://teamtreehouse.com/dwaynepate.json")
			$.ajax("https://teamtreehouse.com/"+user2+".json")
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};

	Promise.all([loadPlayer1JSON(), loadPlayer2JSON()])
		.then((results) => {
		// console.log("results", results);
			results.forEach((ajaxCalls) => {
					players.push(ajaxCalls);
					console.log(players);
			});
			writeToDom(players);
			theWinnerIs(players);
		});


		$(".animation").on("click",function(){
		$(".image").animate({height: "0px"});
		$(".image").animate({width: "0px"});
        $(".image").animate({height: "250px"});        
        $(".image").animate({width: "250px"});        
        $(".image").animate({width: "0px"});
		$(".image").animate({height: "0px"});
        $(".image").animate({width: "250px"});        
        $(".image").animate({height: "250px"}); 


        $(".badgeImage").animate({height: "+=50px"});
		$(".badgeImage").animate({width: "+=50px"});
        $(".badgeImage").animate({height: "-=50px"});        
        $(".badgeImage").animate({width: "-=50px"});               
	});
		
});








































});  //closing for document.ready
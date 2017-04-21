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

	// 	$.ajax({
	//   url: "https://teamtreehouse.com/dwaynepate.json"
	// }).done((data1) => {
	//   response = data1;
	//   console.log(response);

	// }).fail((error1) => {
	//   console.log(error1);
	// });

let players = [];

$("#btn").on("click", function() {
	let user1 = $("#player1").val();
	let user2 = $("#player2").val();

	// alert("you clicked me");


	const writeToDom = function(){
		let domString = "";
		domString += `<div class="row">`;
		domString += `<div class="col-sm-4">`;
		domString += `<a href="#" class="thumbnail">`;
		domString += `<img src="..." alt="...">`;
		domString += `</a>`;
		domString += `</div>`;
	};


	const loadEllisJSON = () => {
		return new Promise((resolve, reject) => {
			$.ajax("https://teamtreehouse.com/ellisthomas.json")
			// $.ajax("https://teamtreehouse.com/"+user1+".json")
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};

	const loadDwayneJSON = () => {
		return new Promise((resolve, reject) => {
			$.ajax("https://teamtreehouse.com/dwaynepate.json")
			// $.ajax("https://teamtreehouse.com/"+user2+".json")
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};

	Promise.all([loadEllisJSON(), loadDwayneJSON()])
		.then((results) => {
		// console.log("results", results);
			results.forEach((ajaxCalls) => {
					players.push(ajaxCalls);
					console.log(players);
			});
			// writeToDom();
		});

});








































});  //closing for document.ready
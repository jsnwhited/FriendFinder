module.exports = function(app, profiles) {
	app.get("/api/friends", function(req, res) {
		//return JSON object of all profiles
		res.json(profiles);
	});

	app.post("/api/friends", function(req, res) {

		//convert scores from strings to ints
		var newProfile = req.body;
		newProfile.scores.forEach(function(value, index, array) {
			array[index] = parseInt(value);
		});

		

		var bestMatch = "";
		var bestScore = 100;
		
		for (var i = 0; i < profiles.length; i++) {
			var scoreDiff = 0;
			for (var j = 0; j < 10; j++) {
				scoreDiff += Math.abs(newProfile.scores[j] - profiles[i].scores[j]);
			}

			if (scoreDiff <= bestScore) {
				bestScore = scoreDiff;
				bestMatch = profiles[i];
			}
		}
		
		profiles.push(newProfile);

		res.json(bestMatch);
	});
};
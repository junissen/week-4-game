

$(document).ready(function(){

	var game_variables = {
		random_number : "",
		crystal_values : [],
		user_score: 0,
		wins: 0, 
		losses: 0,

		random_number_generator: function(min,max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			new_number = Math.floor(Math.random() * (max-min)) + min;
			this.random_number = new_number;

			if ($('#computer_number').length ===0) {
				var computer_number = $('<div>');
				$('.random_number').append(computer_number);
				computer_number.css('display', 'inline-block');
				computer_number.attr('id', 'computer_number');
				computer_number.val(this.random_number);
				computer_number.text(this.random_number);
			}

			else {
				$('#computer_number').val(this.random_number);
				$('#computer_number').text(this.random_number);
			}

		},

		crystal_number_generator: function(min,max) {

			for (var i = 1; i < 5; i ++) {
				min = Math.ceil(min);
				max = Math.floor(max);
				new_number = Math.floor(Math.random() * (max-min)) + min;
				this.crystal_values.push(new_number);
			}

			$('#crystal_1').val(this.crystal_values[0]);
			$('#crystal_2').val(this.crystal_values[1]);
			$('#crystal_3').val(this.crystal_values[2]);
			$('#crystal_4').val(this.crystal_values[3]);

			console.log('Crystal 1: ', this.crystal_values[0]);
			console.log('Crystal 2: ', this.crystal_values[1]);
			console.log('Crystal 3: ', this.crystal_values[2]);
			console.log('Crystal 4: ', this.crystal_values[3]);

		}


	};

	// Random number generator for computer number and crystal values

	game_variables.random_number_generator(19,121);
	game_variables.crystal_number_generator(1, 13);

	// Win and loss tracker

	var win_number = $('<div>');
	$('#wins').append(win_number);
	win_number.css('display', 'inline-block');
	win_number.attr('id', 'win_number');
	win_number.text(game_variables.wins);

	var loss_number = $('<div>');
	$('#losses').append(loss_number);
	loss_number.css('display', 'inline-block');
	loss_number.attr('id', 'loss_number');
	loss_number.text(game_variables.losses);

	// User score begin
	var user_score = $('<div>');
	$('.user_score').append(user_score);
	user_score.css('display', 'inline-block');
	user_score.attr('id', 'user_score');
	user_score.text(game_variables.user_score);

	var alert = $('<div>');
	alert.attr('role', 'alert');
	alert.attr('id', 'game_alert');

	$('.crystal').on('click', function() {

		game_variables.user_score += parseInt($(this).val());

		$('#user_score').text(game_variables.user_score);
		$('#user_score').val(game_variables.user_score);

		if (parseInt(game_variables.user_score) === parseInt(game_variables.random_number)) {
			if ($('#game_alert').length === 0) {
				alert.attr('class', 'alert alert-success');
				alert.html('<h3> You win! </h3>');
				$('#alert').append(alert);
			}

			else if ($('#game_alert').hasClass('alert alert-danger')) {
				alert.removeClass('alert alert-danger');
				alert.addClass('alert alert-success');
				alert.html('<h3> You win! </h3>');
				$('#alert').append(alert);
			}

			else {
				alert.attr('class', 'alert alert-success');
				alert.html('<h3> You win! </h3>');
				$('#alert').append(alert);
			}

			game_variables.wins += 1;
			game_variables.user_score = 0;
			game_variables.crystal_values = [];
			$('#user_score').text(game_variables.user_score);
			$('#win_number').html('<h4>' + game_variables.wins + '</h4>');
			game_variables.random_number_generator(19,121);
			game_variables.crystal_number_generator(1, 13);
		}

		if (parseInt(game_variables.user_score) > parseInt(game_variables.random_number)) {

			if ($('#game_alert').length === 0) {
				alert.attr('class', 'alert alert-danger');
				alert.html('<h3> You lose </h3>');
				$('#alert').append(alert);
			}

			if ($('#game_alert').hasClass('alert alert-success')) {
				alert.removeClass('alert alert-success');
				alert.addClass('alert alert-danger');
				alert.html('<h3> You lose </h3>');
				$('#alert').append(alert);
			}

			else {
				alert.attr('class', 'alert alert-danger');
				alert.html('<h3> You lose </h3>');
				$('#alert').append(alert);
			}

			game_variables.losses += 1;
			game_variables.user_score = 0;
			game_variables.crystal_values = [];
			$('#user_score').text(game_variables.user_score);
			$('#loss_number').html('<h4>' + game_variables.losses + '</h4>');
			game_variables.random_number_generator(19,121);
			game_variables.crystal_number_generator(1, 13);
		}

	});

	

});



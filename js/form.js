$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		var form_url = $(this).attr("action"); //récupérer l'URL du formulaire
  		var form_method = $(this).attr("method"); //récupérer la méthode GET/POST du formulaire
  		var form_data = $(this).serialize(); //Encoder les éléments du formulaire pour la soumission
  
		$.ajax({
			url : form_url,
			type: form_method,
			data : form_data
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('bg-danger');
			$(formMessages).addClass('bg-success');

			// Set the message text.
			$(formMessages).text('Votre message a bien été envoyé.');

			// Clear the form.
			$('#name, #email, #message').val('');			
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('bg-success');
			$(formMessages).addClass('bg-danger');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text("Oops! Une erreur s'est produite, votre message n'a pas été envoyé.");
			}
		});

	});

});
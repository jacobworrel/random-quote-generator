$(document).ready(function() {
	$("#get-quote").on("click", function() {
		$.ajax({
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
    type: 'GET',
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
			$('#quote').text(data.quoteText);
			var tweet = '<a href="https://twitter.com/intent/tweet?text=' + data.quoteText + ' - ' + data.quoteAuthor + '"><i class="fa fa-twitter fa-fw fa-3x text-center"</i></a>';
			$('#twitter-btn').html(tweet);
			if (data.quoteAuthor === '') {
				$('#author').text(' - Anonymous');
				$('#twitter-btn').html('<a href="https://twitter.com/intent/tweet?text=' + data.quoteText + ' - Anonymous' + '"><i class="fa fa-twitter fa-fw fa-3x text-center"</i></a>');
			}
			else {
				$('#author').text(' - ' + data.quoteAuthor);
			}
		}
		});
	});
});

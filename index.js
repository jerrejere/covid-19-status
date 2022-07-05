const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f05868062msh8d5b131431edda5p14e716jsn4e745ec58bc5',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/countries', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
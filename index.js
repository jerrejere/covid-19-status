var myForm = document.getElementById('myForm')

myForm.addEventListener('submit',function(e){ 

    e.preventDefault()

    var country = document.getElementById('country').value
alert(country) 



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '957b1df485mshcc07ded3acb036cp1f5fa0jsnc27cef59dfa0',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`, options)
	.then(response => response.json())
	.then(data => { 
		console.log(data.data.covid19Stats[0]);
		

        document.getElementById('death').innerHTML = data.data.covid19Stats[0].deaths ?? 0
        document.getElementById('confirmed').innerHTML = data.data.covid19Stats[0].confirmed ?? 0 
        document.getElementById('recovered').innerHTML = data.data.covid19Stats[0].recovered ?? 0

		
    })
	
})

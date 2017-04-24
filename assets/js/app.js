// sanity check
console.log("app.js linked.");

var work = [
	{
		"link": "http://teacher-archives.herokuapp.com/";
	},
	{
		"link": "http://doge-meetings.herokuapp.com/";
	},
	{
		"link": "http://vagabond-irk.herokuapp.com/";
	},
	{
		"link": "https://desolate-wave-59412.herokuapp.com/";
	}];


// goal: loop over the array above to change the work links on the DOM

for (var i = 0; i < work.length; i++) {
	$("img").attr("src", work.link[i]);
}

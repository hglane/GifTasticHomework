$(document).ready(function() {
    
    createBtn();
     })

     function createBtn() {
      var topics = [
       "Atlanta Braves",
       "St. Louis Cardinals",
       "Boston Red Sox",
       "Chicago Cubs",
       "Chicago White Sox",
       "Miami Marlins",
       "Los Angeles Dodgers",
       "New York Yankees"
     ];
     
       for (var i = 0; i < topics.length; i++) {
         var btn = $("<button>" + topics[i] + "</button>");
         btn.addClass("jsonData");
         btn.attr("data-name", topics[i]);
         btn.attr("onclick", "displayGifs('"+topics[i]+"')");
         btn.appendTo("#buttons");
       }
   };

     function displayGifs(topic) {
       var queryUrl =
         "https://api.giphy.com/v1/gifs/search?q=" +
       topic +
         "&limit=10&api_key=LIFDXcfYFp5Wa4vpikjcsqkhNWcEnHBG";
       var apiKey = "LIFDXcfYFp5Wa4vpikjcsqkhNWcEnHBG";
   
     
       $.ajax({
         url: queryUrl,
         method: "GET"
       }).then(function(response) {
         if (response.data.length > 1) {
           for (var i = 1; i < 11; i++) {
             var result = response.data;
             var img = $("<img>");
             var imgUrl = result[i].images.original.url;
             img.attr("src", imgUrl);
             $("#gifs").prepend(img);
           }
         }
       });
     };
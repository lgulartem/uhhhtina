$(document).ready(function() {
    createBtn();
    })
    var topics = [
        "oh no",
        "ok",
        "really tho",
        "u mad",
        "but why",
        "dancing",
        "dead",
        "hype"
      ];
     // Topic Buttons
     function createBtn() {
       for (var i = 0; i < topics.length; i++) {
         var btn = $("<button>" + topics[i] + "</button>");
         btn.addClass("jsonData");
         btn.attr("data-name", topics[i]);
         btn.attr("onclick", "displayGifs('"+topics[i]+"')");
         btn.appendTo("#buttons");
       }
    }
     // Gifs
     function displayGifs(topics) {
        var topics = $(this).attr("data-name");
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=WyMG1cKCWdWv7v7TGAxZ6zDDKR1fzZLb" + "&q=" + topics + "&limit10";

       $.ajax({
         url: queryUrl,
         method: "GET"
       })
        .then(function(response) {
            if (response.data.length > 1) {
            for (var i = 1; i < 9; i++) {
                var result = response.data;
                var img = $("<img>");
                var imgUrl = result[i].images.original.url;
                img.attr("src", imgUrl);
                $("#gifs").append(img);
            }
            }
        });
     }

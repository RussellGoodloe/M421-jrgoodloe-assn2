var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: "https://jrgoodloe-421-search-api.cognitiveservices.azure.com/bing/v7.0/search?" + $.param(params),
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "7e60c7698b49437fabd62d50872bd48b");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
        alert("error");
    });
}

function luckySearch() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: "https://jrgoodloe-421-search-api.cognitiveservices.azure.com/bing/v7.0/search?" + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "7e60c7698b49437fabd62d50872bd48b");
        },
        type: "GET",
    })
        .done(function (data) {
            console.log("check 1")
            window.open(data.webPages.value[0].url);
        })
        .fail(function () {
            alert("error");
        });
}

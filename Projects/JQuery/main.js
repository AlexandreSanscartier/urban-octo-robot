var url = "http://aws.random.cat/meow"
$("#btn").click(function() {
    $.getJSON({
      url
    }).done(function(data) {
            $("img").attr("src", data.file);
    });
});


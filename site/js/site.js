$("#toggleMailchimp").on("click", function() {
    $("#mailchimp").toggle(1200);
});

$('#affix').affix({
  offset: {
    top: function() {
      return (this.top = $("nav").outerHeight(true));
    },
    bottom: function () {
      return (this.bottom = $('#call-to-action').outerHeight(true) + 100)
    }
    //bottom: 400
  }
})
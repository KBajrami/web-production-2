$(function() {
  $("#agent-search").click(function() {
    let agentName = $("#agent-name").val()

      if (agentName !== '') {
        $.getJSON(`https://valorant-api.com/v1/agents/${uuid}`, function(data) {
          console.log('data: ', data)

        }).fail(function() {
          console.log("that agent doesn't exist")
      })
    }
    //reset the input
    $('#agent-name').val('')
  })
})

$(function() {
  $("#agent-search").click(function() {
    let agentName = $("#agent-name").val()

      if (agentName !== '') {
        $.getJSON(`https://valorant-api.com/v1/agents/${agentName}`, function(data) {
          console.log('data: ', data)
          $("#agent").attr({src: data.data.displayIcon})
           $("#name").text(data.data.displayName)
            $("#background").text(data.data.description)
              $("#description").text(data.data.role.displayName)


        }).fail(function() {
          console.log("that agent doesn't exist")
      })
    }
    //reset the input
    $('#agent-name').val('')
  })
})

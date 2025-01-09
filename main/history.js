$(document).ready(function () {
    function displayTimeline(players) {
        var timeline = $('#timeline')
        timeline.empty() 

        for (var i = 0; i < players.length; i++) {
            var player = players[i]
            var timelineEntry = $('<div>').addClass('timeline-entry')

            var playerName = $('<h3>').text(player.name)
            var careerTimeline = $('<div>').addClass('career-timeline')

            for (var j = 0; j < player.careerHistory.length; j++) {
                var history = player.careerHistory[j]
                var careerItem = $('<div>').addClass('career-item')

                var logo = $('<img>')
                    .attr('src', history.logo)
                    .attr('alt', history.club + ' logo')
                    .addClass('club-logo')

                var clubName = $('<h4>').text(history.club)
                var years = $('<p>').text(history.years)

                careerItem.append(logo, clubName, years)
                careerTimeline.append(careerItem)
            }

            timelineEntry.append(playerName, careerTimeline)
            timeline.append(timelineEntry)
        }
    }

    $('#search-input').on('keyup', function () {
        var searchTerm = $(this).val().toLowerCase()
        var filteredPlayers = playersData.filter(function (player) {
            var matchesName = player.name.toLowerCase().includes(searchTerm)
            var matchesClub = player.careerHistory.some(function (history) {
                return history.club.toLowerCase().includes(searchTerm)
            })
            return matchesName || matchesClub
        })

        displayTimeline(filteredPlayers)
    })

    displayTimeline(playersData)
})

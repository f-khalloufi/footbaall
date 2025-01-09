$(document).ready(function() {
    function displayTimeline() {
        var timeline = $('#timeline')
<<<<<<< HEAD
        
        for (var i = 0; i < playersData.length; i++) {
            var player = playersData[i]
            var timelineEntry = $('<div>').addClass('timeline-entry')
            
            var playerName = $('<h3>').text(player.name)
            var careerTimeline = $('<div>').addClass('career-timeline')
            
            for (var j = 0; j < player.careerHistory.length; j++) {
                var history = player.careerHistory[j]
                var careerItem = $('<div>').addClass('career-item')
                
=======

        for (var i = 0; i < playersData.length; i++) {
            var player = playersData[i]
            var timelineEntry = $('<div>').addClass('timeline-entry')

            var playerName = $('<h3>').text(player.name)
            var careerTimeline = $('<div>').addClass('career-timeline')

            for (var j = 0; j < player.careerHistory.length; j++) {
                var history = player.careerHistory[j]
                var careerItem = $('<div>').addClass('career-item')

>>>>>>> ad22705e9dc71de295f73d7d5936db13ab04d85f
                // Add club logo
                var logo = $('<img>')
                    .attr('src', history.logo)
                    .attr('alt', history.club + ' logo')
                    .addClass('club-logo')
<<<<<<< HEAD
                
                var clubName = $('<h4>').text(history.club)
                var years = $('<p>').text(history.years)
                
                careerItem.append(logo, clubName, years)
                careerTimeline.append(careerItem)
            }
            
=======

                var clubName = $('<h4>').text(history.club)
                var years = $('<p>').text(history.years)

                careerItem.append(logo, clubName, years)
                careerTimeline.append(careerItem)
            }

>>>>>>> ad22705e9dc71de295f73d7d5936db13ab04d85f
            timelineEntry.append(playerName, careerTimeline)
            timeline.append(timelineEntry)
        }
    }

    displayTimeline()
})
    $(document).ready(function() {
        function displayPlayers(players) {
            var container = $('#players-grid')
            container.empty()
            
            for (var i = 0; i < players.length; i++) {
                var player = players[i]
                
                var playerCard = $('<div>').addClass('player-card')
                var playerImage = $('<img>').attr({
                    'src': player.image,
                    'alt': player.name,
                    'class': 'player-image'
                })
                var playerInfo = $('<div>').addClass('player-info')
                var playerName = $('<h3>').text(player.name)
                var playerPosition = $('<p>').text(player.position)
                var playerClub = $('<p>').text(player.currentClub)
                var detailsBtn = $('<button>')
                    .addClass('details-btn')
                    .attr('data-id', player.id)
                    .text('View Details')

                playerInfo.append(playerName, playerPosition, playerClub, detailsBtn)
                playerCard.append(playerImage, playerInfo)
                container.append(playerCard)
            }
        }

        $('#search-input').on('keyup', function() {
            var searchTerm = $(this).val().toLowerCase()
            var filteredPlayers = []
            for (var i = 0; i < playersData.length; i++) {
                if (playersData[i].name.toLowerCase().indexOf(searchTerm) !== -1) {
                    filteredPlayers.push(playersData[i])
                }
            }
            displayPlayers(filteredPlayers)
        })

        $(document).on('click', '.details-btn', function() {
            var playerId = $(this).data('id')
            var player = null
            for (var i = 0; i < playersData.length; i++) {
                if (playersData[i].id === playerId) {
                    player = playersData[i]
                    
                }
            }
            
            var modalContent = $('#player-details')
            modalContent.empty() 
            
            var title = document.createElement('h2')
            title.textContent = player.name
            
            var age = document.createElement('p')
            age.textContent = `Age: ${player.age}`
            
            var nationality = document.createElement('p')
            nationality.textContent = `Nationality: ${player.nationality}`
            
            var careerTitle = document.createElement('h3')
            careerTitle.textContent = 'Career History'
            
            var careerList = document.createElement('ul')
            for (let i = 0; i < player.careerHistory.length; i++) {
                var history = player.careerHistory[i]
                var li = document.createElement('li')
                li.textContent = `${history.club} (${history.years})`
                careerList.appendChild(li)
            }
            
            var trophyTitle = document.createElement('h3')
            trophyTitle.textContent = 'Trophies'
            
            var trophySection = document.createElement('div')
            trophySection.className = 'trophy-section'
            
            for (let i = 0; i < player.trophies.length; i++) {
                var trophy = player.trophies[i]
                var trophyItem = document.createElement('div')
                trophyItem.className = 'trophy-item'
                
                var trophyName = document.createElement('h4')
                trophyName.textContent = trophy.name
                
                var trophyCount = document.createElement('p')
                trophyCount.textContent = `Count: ${trophy.count}`
                
                trophyItem.append(trophyName, trophyCount)
                trophySection.appendChild(trophyItem)
            }
            
            var videoSection = document.createElement('div')
            videoSection.className = 'video-section'
            
            var videoTitle = document.createElement('h3')
            videoTitle.textContent = 'Career Highlights'
            
            var videoContainer = document.createElement('div')
            videoContainer.className = 'video-container'
            
            var video = document.createElement('video')
            video.controls = true
            video.style.width = '100%'
            
            var source = document.createElement('source')
            source.src = player.videoUrl
            source.type = 'video/mp4'
            
            video.appendChild(source)
            videoContainer.appendChild(video)
            videoSection.append(videoTitle, videoContainer)
            
            modalContent.append(
                title,
                age,
                nationality,
                careerTitle,
                careerList,
                trophyTitle,
                trophySection,
                videoSection
            )

            $('#player-modal').show()
        })

        $('.close-btn').click(function() {
            $('#player-modal').hide()
        })

        $(window).click(function(event) {
            if (event.target.id === 'player-modal') {
                $('#player-modal').hide()
            }
        })

        displayPlayers(playersData)
    })
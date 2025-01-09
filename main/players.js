var playersData = [
    {
        id: 1,
        name: "Cristiano Ronaldo 'GOAT'",
        image: "../images/ronaldo.jpg", 
        nationality: "Portugal",
        age: 39,
        position: "Forward - Left Winger",
        currentClub: "Al-Naser",
        careerHistory: [
            { club: "Spoting Lisbona", years: "2002-2003", logo: "../images/sporting lisbona-logo.png" },
            { club: "Manchester United", years: "2003-2009", logo: "../images/manchester united-logo.png" },
            { club: "Real Madrid", years: "2009-2019", logo: "../images/real madrid.jpg" },
            { club: "Juventus", years: "2019-2021", logo: "../images/Juvantus.jpg" },
            { club: "Manchester United", years: "2021-2023", logo: "../images/manchester united.jpg" },
            { club: "Al-Naser", years: "2025-present", logo: "../images/Al-Naser.jpg" }
        ],
        trophies: [
            { name: "Ballon d'Or", count: 5},
            { name: "Champions League", count: 5 },
            { name: "La Liga", count: 2 },
            { name: "Premier league", count: 3 },
            { name: "Serie A", count: 2 },
            { name: "World Cup Club", count: 5 },
            { name: "Euro", count: 1 }
        ],
        videoUrl: "../video/cristiano.mp4" 
    },
    {
        id: 2,
        name: "Lionel Messi",
        image: "../images/messi/photo1.jpg",
        nationality: "Argentina",
        age: 37,
        position: "Forward",
        currentClub: "Inter Miami",
        careerHistory: [
            { club: "Barcelona", years: "2004-2021", logo: "../images/barcelona-logo.png" },
            { club: "PSG", years: "2021-2023", logo: "../images/psg-logo.png" },
            { club: "Inter Miami", years: "2025-present", logo: "../images/messi.jpg" }
        ],
        trophies: [
            { name: "Ballon d'Or", count: 8 },
            { name: "Champions League", count: 4 },
            { name: "La Liga", count: 10 },
            { name: "World Cup", count: 1 }
        ],
        videoUrl: "../video/messi.mp4" 
    },
    {
        id: 3,
        name: "Neymar Jr",
        image: "../images/neymar/neymar.jpg",
        nationality: "Brazil",
        age: 32,
        position: "Forward",
        currentClub: "Al Hilal",
        careerHistory: [
            { club: "Santos", years: "2009-2013" },
            { club: "Barcelona", years: "2013-2017" },
            { club: "PSG", years: "2017-2023" },
            { club: "Al Hilal", years: "2025-present" }
        ],
        trophies: [
            { name: "Champions League", count: 1 },
            { name: "Copa Libertadores", count: 1 },
            { name: "La Liga", count: 2 },
            { name: "Ligue 1", count: 5 },
            { name: "Olympic Gold Medal", count: 1 },
            { name: "Confederations-Cup-Sieger", count: 1 }
        ],
        videoUrl: "../video/neymar-highlights.mp4" 
    },
    {
        id:4 ,
        name: "Modric",
        image: "../images/modric.jpg",
        nationality: "Croitie",
        age: 39,
        position: "Central midfielder",
        currentClub: "Real Madrid",
        careerHistory: [
            { club: "Dinamo Zagreb", years: "2005-2009" },
            { club: "Tottenham", years: "2009-2013" },
            { club: "Real Madrid", years: "2025-present" }
        ],
        trophies: [
            { name: "Ballon d'Or", count: 1 },
            { name: "La Liga", count: 4 },
            { name: "Champions League", count: 6 },
            { name: " FIFA-Klub-Weltmeister", count: 5 }
        ],
        videoUrl: "../video/neymar-highlights.mp4" 
    },
    {
        id: 5,
        name: "Kaka",
        image: "../images/kaka.jpg",
        nationality: "Brazil",
        age: 42,
        position: "Attacking midfielder",
        currentClub: "Retired",
        careerHistory: [
            { club: "Sao Paulo", years: "2003-2004" },
            { club: "Ac Milan", years: "2004-2009" },
            { club: "Real Madrid", years: "2009-2013" },
            { club: "Ac Milan", years: "2013-2015" },
            { club: "Ac Milan", years: "2013-2015" }
        ],
        trophies: [
            { name: "Ballon d'Or", count: 1 },
            { name: "Champions League", count: 1 },
            { name: "Copa Libertadores", count: 1 },
            { name: "La Liga", count: 1 },
            { name: "Serie A", count: 1 },
            { name: "Confederations-Cup-Sieger", count: 2 },
            { name: "World Cup", count: 1 }
        ],
        videoUrl: "../video/neymar-highlights.mp4" 
    },
    {
        id: 6,
        name: "Zyzou",
        image: "../images/zidane.jpg",
        nationality: "France",
        age: 52,
        position: "Attacking midfielder",
        currentClub: "Retired",
        careerHistory: [
            { club: "G. Bordeaux", years: "1992-1996" },
            { club: "Juventus", years: "1996-2002" },
            { club: "Real Madrid", years: "2002-2006" }
        ],
        trophies: [
            { name: "Champions League", count: 1 },
            { name: "Ballon d'Or", count: 1 },
            { name: "La Liga", count: 1 },
            { name: "Serie A", count: 1 },
            { name: "World Cup", count: 1 }
        ],
        videoUrl: "../video/neymar-highlights.mp4" 
    },
    {
        id: 7,
        name: "Ronaldo El Fenomeno",
        image: "../images/el fenomeno.jpg",
        nationality: "Brazil",
        age: 48,
        position: "Attacker",
        currentClub: "Retired",
        careerHistory: [
            { club: "Barcelone", years: "1997-1998" },
            { club: "Inter Milan", years: "1998-2003" },
            { club: "Real Madrid", years: "2003-2007" },
            { club: "Ac Milan", years: "2007-2009" }
        ],
        trophies: [
            { name: "Ballon d'Or", count: 2 },
            { name: "La Liga", count: 2 },
            { name: "Vainqueur Copa América", count: 2 },
            { name: "World Cup", count: 2 },
            { name: "Confederations-Cup-Sieger", count: 1 }
        ],
        videoUrl: "../video/neymar-highlights.mp4" 
    },
    {
        id:8 ,
        name: "Maradona",
        image: "../images/maradona.jpg",
        nationality: "Argentina",
        position: "Attacker",
        currentClub: "Retired",
        careerHistory: [
            { club: "Boca Juniors", years: "1982-1985" },
            { club: "Barcelone", years: "1985-1986" },
            { club: "Napoli", years: "1986-1993" }
        ],
        trophies: [
            { name: "Ballon d'Or", count: 2 },
            { name: "La Liga", count: 2 },
            { name: "Vainqueur Copa América", count: 2 },
            { name: "World Cup", count: 2 },
            { name: "Confederations-Cup-Sieger", count: 1 }
        ],
        videoUrl: "../video/neymar-highlights.mp4" 
    }, 
]

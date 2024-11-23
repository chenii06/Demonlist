const players = [
    { name: "MrNexis", points: 9242 },
    { name: "Adanz9", points: 9125 },
    { name: "Colouts", points: 8235 },
    { name: "revnotruv", points: 8186 },
    { name: "Arouvis", points: 8156 },
    { name: "Gabest", points: 8115 },
    { name: "IvanCrafter026", points: 8056 },
    { name: "ParkoreM", points: 7797 },
    { name: "bongus", points: 7150 },
    { name: "Lutz127", points: 7143 },
    { name: "JungleWolf", points: 6891 },
    { name: "Enzo", points: 6874 },
    { name: "helvetica", points: 6703 },
    { name: "AlejandroProaz0", points: 6387 },
    { name: "PulseN1nja", points: 6224 },
    { name: "Chenii", points: 6131 },
    { name: "Ezequiel", points: 6063 },
    { name: "jsemtoja", points: 5536 },
    { name: "panap", points: 5302 },
    { name: "evetS", points: 5256 },
    { name: "GaMeV3rSeGD", points: 5198 },
    { name: "Temo", points: 5091 },
    { name: "FakeHATETAG", points: 4958 },
    { name: "gecko", points: 4602 },
    { name: "Shroomy!!!", points: 4376 }
];

const playerStatsTable = document.getElementById('player-stats');

// Ordena a los jugadores por puntos de mayor a menor
players.sort((a, b) => b.points - a.points);

// Inserta cada jugador en la tabla
players.forEach((player, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.points}</td>
    `;
    playerStatsTable.appendChild(row);
});

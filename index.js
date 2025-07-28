const itens = ['none', 'green-token.png', 'red-token.png', 'blue-token.png', 'yellow-token.png']
const playerPositions = {}
let currentPlayer = null

function selectPlayer(player){
    const players = document.querySelectorAll('.player')
    players.forEach((p, index) => {
        p.classList.toggle('selected', index  === player )
    })
    currentPlayer = player
}

const rooms = document.querySelectorAll('.room')

rooms.forEach( room => {
    room.addEventListener('click', () => {
        if(!currentPlayer){
            return
        }
        const roomId = room.id

        const existingPlayer = room.querySelector(`.player[data-player="${currentPlayer}"]`)
        if(existingPlayer) return

        if(playerPositions[currentPlayer]){
            const prevRoomId = playerPositions[currentPlayer]
            const prevRoom = document.getElementById(prevRoomId)
            const oldToken = prevRoom.querySelector(`.player[data-player="${currentPlayer}"]`)
            if(oldToken){
                oldToken.remove()
            }
        }

        const img = document.createElement('img')
        img.src = `./images/${itens[currentPlayer]}`
        img.classList.add('player')
        img.dataset.player = currentPlayer
        room.appendChild(img)

        playerPositions[currentPlayer] = roomId
    })
})

document.getElementById('clear-button').addEventListener('click', () => {
    const rooms = document.querySelectorAll('.room')
    rooms.forEach(room => {
        const players = room.querySelectorAll('.player')
        players.forEach(p => {
            p.remove()
        })
    })
    for(let key in playerPositions){
        delete playerPositions[key]
    }
})
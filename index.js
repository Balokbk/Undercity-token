const itens = ['none', 'green-token.png', 'red-token.png', 'redNGreen-token.png']
const roomsState = {}

function toggleLocation(location){

    const room = document.getElementById(location)

    if(!(location in roomsState)){
        roomsState[location] = 0
    }

    const existingContainer = room.querySelector('.img-player-container')
    if(existingContainer){
        existingContainer.remove()
    }
    
    
    if(roomsState[location] == 3) {
        roomsState[location] = 0
        return
    } else {
        roomsState[location]++

        const container = document.createElement('div')
        container.className = 'img-player-container'

        const img = document.createElement('img')
        img.src = `./images/${itens[roomsState[location]]}`
        img.className = 'player-token'
        
        container.appendChild(img)
        room.appendChild(container)
    }
}
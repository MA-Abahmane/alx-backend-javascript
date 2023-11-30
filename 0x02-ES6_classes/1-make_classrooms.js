
export default class ClassRoom {

    constructor(maxStudentsSize){
        this._maxStudentsSize = maxStudentsSize
    }

    initializeRooms() {
        return [ClassRoom(19), ClassRoom(20), ClassRoom(34)]
    }
}

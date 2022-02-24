import Room from "../models/Room.js"

export const addRoom = async (req, res) => {
    let room = new Room(req.body)

    room = await room.save()

    res.send(room)
}

export const getRooms = async (_, res) => {
    const rooms = await Room.find({})

    res.send(rooms)
}

export const getRoom = async (req, res) => {
    const { id } = req.params

    const room = await Room.findById(id)

    res.send(room)
}

export const deleteRoom = async (req, res) => {
    const { id } = req.params

    const room = await Room.findByIdAndDelete(id)

    res.send(room)
}

export const updateRoom = async (req, res) => {
    const { id } = req.params

    let room = await Room.findByIdAndUpdate(id, req.body, { new: true })

    room = await room.save()

    res.send(room)
}
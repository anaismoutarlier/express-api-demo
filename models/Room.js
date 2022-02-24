import mongoose from "mongoose"

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        enum: ["basique", "triple", "double"]
    },
    maxOccupancy: {
        type: Number,
        default: 1,
        validate: value => {
            if (value <= 0) throw new Error("La chambre doit pouvoir accueillir au moins une personne")
        }
    }
})

const Room = mongoose.model("rooms", RoomSchema)

export default Room
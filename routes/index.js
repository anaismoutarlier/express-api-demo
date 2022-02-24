import express from "express"

//CONTROLLERS__________________
import { addRoom, getRooms, getRoom, deleteRoom, updateRoom } from "../controllers/roomControllers.js"

//HELPERS______________________
import { catchErrors } from "../helpers/catchErrors.js"

const router = express.Router()

router.post("/api/rooms", catchErrors(addRoom))

router.get('/api/rooms', catchErrors(getRooms))

router.get('/api/rooms/:id', catchErrors(getRoom))

router.delete('/api/rooms/:id', catchErrors(deleteRoom))

router.patch('/api/rooms/:id', catchErrors(updateRoom))

export default router
import multer from "multer";

const storage = multer.memoryStorage()
const uplode = multer({
    storage:storage
})

export default uplode
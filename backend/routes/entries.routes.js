const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const entriesController = require('../controllers/entries.controllers')


router.post("/", verifyToken, entriesController.create)
router.get("/",  entriesController.getAllEntries )
router.get('/my-entries', verifyToken , entriesController.getMyEntries)
router.delete('/:entryId/' , verifyToken, entriesController.deleteEntry )
router.put("/:entryId", verifyToken , entriesController.updateEntry )



module.exports = router;
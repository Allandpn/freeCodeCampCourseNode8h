const express = require("express")
const controller = require('../controllers/people')
//outra opcao com destructor
const {
    getPeople,
    createPeople,
    createPersonPostmam,
    updatePerson,
    deletePerson,
} = require('../controllers/people')
const router = express.Router()



router.get("/", getPeople)
router.post('/', createPeople)
router.post('/postmam', createPersonPostmam)
/* router.put("/:id", updatePerson)
router.delete('/:id', deletePerson) */
//outra opçao de rota
router.route("/:id").put(updatePerson).delete(deletePerson)


module.exports = router

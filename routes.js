import Router from "express";

const router = Router();

const charactersArray = ["Arisu", "Usagi", "Chishiya", "Ann", "Kuina"]

router.get("/", (req, res) => {
    res.status(200).send({
        message: "all main characters from Alice in the Borderland",
        characters: charactersArray
    })
})

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)

    res.status(200).send({
        characters: charactersArray[id] || "character not found"
    })
})

router.post("/", (req, res) => {
    charactersArray.push(req.body.character)

    res.status(201).send({
        message: "character created",
        characters: charactersArray
    })
})

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    charactersArray.splice(id, 1)
    res.status(200).send({message: "deleted",
    characters: charactersArray
    })
})

export default router;
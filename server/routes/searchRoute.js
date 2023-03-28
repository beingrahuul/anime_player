import { Router } from "express";
import axios from "axios";

const router = Router();

// Home page route.
router.post("/", function (req, res) {
    const query = req.body.q;
    const page = req.body.page;
    if(query != ''){
        axios.get(`https://api.consumet.org/anime/9anime/${query}?page=${page}`)
        .then((response) => {
            res.status(200).json(response.data);
        }).catch((err) => {
            res.status(400).send(err);
        })
    }
});



export default router;
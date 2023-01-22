import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.json({message: 'Login test.'})
})

router.post('/', (req, res) => {

})

export default router;
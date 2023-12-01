const express = require('express');
const { personal } = require("../modals/personal");
const router = express.Router();

router.post("/personalPost", async (req, res) => {
    try {

        let detail = new personal(req.body);
        console.log('hi');
        console.log(detail);
        await detail.save();
        console.log('post succesfull');
        return res.status(200).send(detail);
    }  
    catch (err) {
        console.log(err.message);
        return res.status(500).send('server error');
    }
})

router.get("/getpersonal", async (req, res) => {
    try {
        let getdetails = await personal.find();
        console.log('get succesfull');
        return res.status(200).send(getdetails);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send('server error');
    }
})
router.put("/updateuser", async (req, res) => {
    try {
        let updateDetails = await personal.findByIdAndUpdate(req.query.id, req.body);
        console.log('update succesfull');
        return res.status(200).json('updated');
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send("server error");
    }
})

router.delete("/deleteuser", async (req, res) => {
    try {
        let userdeleted = await personal.findByIdAndDelete(req.query.id);
        console.log('deleted succesfully');
        return res.status(200).json('delete succesfull');

    }
    catch (err) {
        console.log(err).message;
        return res.status(500).send("server error");

    }
})


module.exports = router;
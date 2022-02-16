const router = require('express').Router();
const { createNewNote } = require('../lib/noteFunction');
let results  = require('../db/db.json');
const fs= require("fs");
const { receiveMessageOnPort } = require('worker_threads');
router.get('/notes', (req, res) => {
    results = JSON.parse(fs.readFileSync("./db/db.json","utf-8"));
    // if (req.query) {
    //   results = filterByQuery(req.query, results);
    // }
    res.json(results);
  });

// router.get('/*', (req, res) => {
//     const result = findById(req.params.id, animals);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });

router.post('/notes', (req, res) => {
    const notemodel={
        title:req.body.title,
        text:req.body.text,
        id: Math.floor(Math.random()*10000)
    }
results.push(notemodel)
fs.writeFileSync("./db/db.json",JSON.stringify(results))
res.json(results)

});

module.exports = router;
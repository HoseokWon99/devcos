const router = require("express").Router();
const fs = require("fs");

router.get("/", async (req, res) => {

   try {
      fs.readFile(
          __dirname + "/../../public/html/index.html",
          "utf8",
          (err, data) => {
              if (err) throw err;
              res.status(200).send(data);
          }
      )
   }
   catch (err) {
       res.status(500).send(err.message);
   }

});



module.exports = router;
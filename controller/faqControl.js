import dataBase from "../controller/database.js";
import express from "express";
import cookieParser from "cookie-Parser";

export function getAll(req, res) {
  console.log(req.cookies);
  res.cookie("sky", "nadish", { httpOnly: true });

  let sqlQury = `SELECT faq.faqid ,faq.create_at,faq.faq,user.username AS autherName ,user.avatar AS avatar 
                 FROM 
                    faq 
                 INNER JOIN 
                    user
                 ON 
                   faq.userid = user.userid ORDER BY faq.faqid`;

  dataBase.execute(sqlQury, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.status(200).send({ data });
    // res.send({ data });
  });
}

export function getfaqid(req, res) {
  // let dd = res.send("dadadad    :" + req.params.faq);
  console.log("we in");
  console.log(typeof req.params.faqid);
  const idToGet = parseInt(req.params.faqid);
  console.log(typeof idToGet);

  let sqlQury = `SELECT faq.faqid ,faq.create_at,faq.faq,user.username,user.email AS email ,user.avatar AS avatar 
                 FROM 
                    faq 
                 INNER JOIN 
                    user
                 ON 
                  faq.faqid = user.userid 
                where faq.faqid=?`;

  dataBase.query(sqlQury, [idToGet], (err, data) => {
    if (err) throw err;

    console.log("data is :" + req.params.faqid);
    console.log(data);

    res.status(200).send({ data });
    // res.json({ data });
  });
}

export default { getAll, getfaqid };

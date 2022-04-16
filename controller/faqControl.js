import dataBase from "../controller/database.js";

export const testMe = function xyz(cc) {
  console.log(cc);
};
export  function newRow(req, res) {
   
      let inset_date = 
      `INSERT INTO faq (faq,creatormail,datestamp)
       VALUES ('1222','nad','10/10/2022')`;
      dataBase.query(inset_date, (err, results) => {
       console.log("row create  dfsfsfs");
        console.log(results)
        res.send("done");

   
})
};

function doIN(inset_date){

  dataBase.query(inset_date, (err, results) => { 
    if (err){console.log(err )
    return;
     }
      
    console.log(results) 
    
    })
};
  





export  function row1000(req, res) {
  console.log(1000)
 

for (let index = 0; index < 100; index++) {  
  let inset_date = 
`INSERT INTO faq (faq,creatormail,datestamp)
 VALUES (${index},'nad','10/10/2022')`;
  doIN(inset_date)
}


res.send("done")
};
  


export function getAll(req, res) {
  dataBase.query("SELECT * FROM faq", (req, data) => {
    console.log(data);

    // res.send({ row });
    // res.json({ data })
     res.send({ data });

    // res.send(JSON.stringify({data}))
    
  });
}

 
export default { newRow,  getAll ,row1000};

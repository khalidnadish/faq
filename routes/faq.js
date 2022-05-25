import express from "express";

import { getAll, getfaqid } from "../controller/faqControl.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:faqid", getfaqid);

export default router;

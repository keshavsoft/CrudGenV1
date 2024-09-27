import express from "express";

var router = express.Router();

import { router as QrCodes } from "./QrCodes/routes.js";
import { router as Orders } from "./Orders/routes.js";
import { router as ItemWise } from "./ItemWise/routes.js";
import { router as ToFactory } from "./ToFactory/routes.js";
import { router as FactoryScan } from "./FactoryScan/routes.js";
import { router as FactoryInwardReturn } from "./FactoryInwardReturn/routes.js";
import { router as WashingStart } from "./WashingStart/routes.js";

router.use("/QrCodes", QrCodes);
router.use("/Orders", Orders);
router.use("/ItemWise", ItemWise);
router.use("/ToFactory", ToFactory);
router.use("/FactoryScan", FactoryScan);
router.use("/FactoryInwardReturn", FactoryInwardReturn);
router.use("/WashingStart", WashingStart);

export { router };

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const specialist_controller_1 = __importDefault(require("../controllers/specialist.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const specialistRouter = express_1.default.Router();
const authInstance = new auth_middleware_1.default();
const specialistInstance = new specialist_controller_1.default();
// get all specilist
specialistRouter.get("/", specialistInstance.getAllSpecialists);
// get a specilist
specialistRouter.get("/:sid", specialistInstance.getASpecialist);
// create a specilist
specialistRouter.post("/:bid", authInstance.isAuthenticated, authInstance.isAdmin, specialistInstance.createASpecialist);
// update a specilist
specialistRouter.put("/:sid", authInstance.isAuthenticated, authInstance.isAdmin, specialistInstance.updateASpecialist);
// delete a specilist
specialistRouter.delete("/:sid", authInstance.isAuthenticated, authInstance.isAdmin, specialistInstance.deleteASpecialist);
exports.default = specialistRouter;

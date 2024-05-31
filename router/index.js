const routerAddress = require("./AddressRoute")
const routerProfessional = require("./ProfessionalRoute")
const routerProfessionalService = require("./ProfessionalServiceRoute")
const routerSchedule = require("./ScheduleRoute")
const routerService = require("./ServiceRoute")
const routerUser = require("./UserRoute")

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use([routerAddress, routerProfessional, routerProfessionalService,routerSchedule, routerService, routerUser]);
    //app.use(routerCliente);
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const client = {
    numberReq: 1,
    name: "жора мерседес",
    phoneNumber: 89234825123,
    wishes: false,
    address: "улица курица дом петуха",
    nOa: 88,
    dateIn: new Date(),
    dateOut: new Date(),
};
const clients = [];
clients.push(client);
app.get("/", (request, response) => {
    response.json(clients);
});
app.put("/", (request, response) => {
    const client = request.body;
    if (client.dateIn != request.body.dateIn) {
        client.dateIn = request.body.dateIn;
        console.log("Дата въезда изменена");
        alert("дата въезда изменена");
    }
    if (client.wishes != request.body.wishes) {
        client.wishes = request.body.wishes;
        console.log("пожелания изменены");
        alert("желания изменены");
    }
    if (client.dateOut != request.body.dateOut) {
        client.dateOut = request.body.dateOut;
        console.log("Дата выезда изменена");
        alert("дата выезда изменена");
    }
});
app.listen(port, () => console.log(`запущен на  http://localhost:3000/`));

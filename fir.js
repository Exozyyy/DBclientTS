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
    master: "джорган",
};
const clients = [];
clients.push(client);
app.get("/", (request, response) => {
    response.json(clients);
});
app.post("/newclient", (request, response) => {
    const newClient = {
        numberReq: clients.length + 1,
        name: request.body.name,
        phoneNumber: request.body.phoneNumber,
        wishes: request.body.wishes,
        address: request.body.address,
        nOa: request.body.nOa,
        dateIn: request.body.dateIn,
        dateOut: request.body.dateOut,
        master: request.body.master,
    };
    clients.push(newClient);
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
app.delete("/delete/:param", (req, res) => {
    const numberReq = parseInt(req.params.param);
    const index = clients.findIndex((client) => client.numberReq === numberReq);
    if (index !== -1) {
        clients.splice(index, 1);
        res.json(clients);
    }
    else {
        res.status(404).json({ message: "Клиент не найден" });
    }
});
app.get("/:param", (req, res) => {
    const numberReq = parseInt(req.params.param);
    const client = clients.find((client) => client.numberReq === numberReq);
    if (client) {
        res.json(client);
    }
    else {
        res.status(404).json({ message: "Клиент не найден" });
    }
    alert("клиент удален");
});
app.get("/statistics", (req, res) => { });
app.listen(port, () => console.log(`запущен на  http://localhost:3000/`));

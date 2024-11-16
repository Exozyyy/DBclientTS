import express from "express";
const app = express();
const port = 3000;

interface Client {
  numberReq: number;
  name: string;
  phoneNumber: number;
  wishes: boolean;
  address: string;
  nOa: number;
  dateIn: Date;
  dateOut: Date;
}

const client: Client = {
  numberReq: 1,
  name: "жора мерседес",
  phoneNumber: 89234825123,
  wishes: false,
  address: "улица курица дом петуха",
  nOa: 88,
  dateIn: new Date(),
  dateOut: new Date(),
};
const clients: Client[] = [];
clients.push(client);

app.get("/", (request, response) => {
  response.json(clients);
});

app.put("/", (request, response) => {
  const client: Client = request.body;
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

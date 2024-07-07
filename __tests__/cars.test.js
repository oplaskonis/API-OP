const {
  CarsController,
} = require("C:/Hillel/Git/API-OP/src/controllers/CarsController");

const carsController = new CarsController();

describe("Check Cars API", () => {
  beforeAll(async () => {
    await carsController.login();
  });

  afterAll(async () => {
    const carsResponse = await carsController.getCars();
    const carIds = carsResponse.data.data.map((c) => c.id);
    for (const carId of carIds) {
      const res = await carsController.deleteCarById(carId);
    }
  });

  test("User can get all cars", async () => {
    const carsResponse = await carsController.getCars();
    expect(carsResponse.status).toBe(200);
  });

  test("User can create a new Audi", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(1, 1, 1000);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("User can create a new BMW", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(2, 8, 2000);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("User can create a new Ford", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(3, 13, 3000);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("User can create a new Porsche", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(4, 17, 4000);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("User can create a new Fiat", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(5, 21, 5000);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length + 1);
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });
  test("Negative check for incorrect brand", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(7, 21, 5000);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length);
    expect(newCarResponse.data.status).not.toBe("ok");
    expect(newCarResponse.data.message).toBeDefined();
  });

  test("Negative check for incorrect model", async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];
    const newCarResponse = await carsController.createCar(7, 210, 5000);
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;
    expect(newCarList.length).toBe(carList.length);
    expect(newCarResponse.data.status).not.toBe("ok");
    expect(newCarResponse.data.message).toBeDefined();
  });
});

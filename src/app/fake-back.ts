import {InMemoryDbService} from 'angular-in-memory-web-api';

export class FakeBack implements InMemoryDbService {
  createDb() {
    let customers = [
      {
        id: 1,
        name: 'Nurzat Rahat',
        age: 18,
        address: 'Taraz',
      },
      {
        id: 2,
        name: 'Doszhan Beken',
        age: 18,
        address: "Almaty",
      },
      {
        id: 3,
        name: 'Asylzhan Sarsenbay',
        age: 20,
        address: "Arys"
      },
      {
        id: 4,
        name: 'Arnur Nursagat',
        age: 19,
        address: "Zharkent"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
      {
        id: 5,
        name: 'Arman Black',
        age: 19,
        address: "Almaty"
      },
    ];
    return {customers};
  }
}


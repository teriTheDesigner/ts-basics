interface Contact extends Address {
  id: number;
  name: string;
  birthDate?: Date;
}

interface Address {
  city: string;
  country: string;
  zipCode: string;
}

let primaryContact: Contact = {
  // birthDate: new Date("02-05-2024"),
  id: 23876,
  name: "Jamie",
  city: "Madrid",
  country: "Spain",
  zipCode: "28002",
};

let x: number;
let y: string;
let z: boolean;
let a: Date;
let b: string[];

b = "Hello" as any;

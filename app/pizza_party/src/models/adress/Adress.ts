export type Adress = {
  id?: number;
  name: string;
  surname: string;
  street: string;
  city: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
  [propKey: string]: string | number | undefined;
};

type Address = {
  city: string;
  country: string;
  postalCode: Student;
};

export interface Student {
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  email: string;
  contact: string;
  gender: 'male' | 'female';
  address: Address;
}

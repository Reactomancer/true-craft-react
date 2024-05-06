export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  repeatPassword: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  id: number;
}

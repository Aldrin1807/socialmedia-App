export type TUser = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    imagePath: string;
    image: string | null;
    role: string;
    emailConfirmed: boolean;
  };
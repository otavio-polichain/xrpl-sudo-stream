// TODO
// UPDATE USER MODEL
export type User = {
    uid: string;
    email: string;
    phoneNumber: string;
    emailVerified?: boolean;
    password?: string;
    displayName?: string;
    photoURL?: string;
    disabled?: boolean;
  };
  
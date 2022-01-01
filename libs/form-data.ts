type FormData = {
  email?: string;
  password?: string;
  confirm?: string;
};

export type LogInTypes = Required<Omit<FormData, 'confirm'>>;
export type SignUpTypes = Required<FormData>;

export type NewSecretTypes = {
  organisation: string;
  description?: string;
  email?: string;
  username?: string;
  password: string;
  confirm?: string;
};

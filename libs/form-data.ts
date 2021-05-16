type FormData = {
  email?: string;
  password?: string;
  confirm?: string;
};

export type LogInTypes = Required<Omit<FormData, 'confirm'>>;
export type SignUpTypes = Required<FormData>;

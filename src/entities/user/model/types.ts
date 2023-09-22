export type Session = {
  accessToken: string;
  user: User;
};

export type User = {
  id: string;
  email: string;
  name: string;
  about: string;
  subscriptions: string[];
  followers: string[];
  avatar: string;
};

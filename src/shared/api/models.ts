export type Mesto = {
  name: string;
  link: string;
  owner: string;
  likes: string[];
  comments: Feedback[];
  _id: string;
  createdAt: string;
};
export const MockMesto = {
  _id: "64db9c83673a522074a5a7b7",
  name: "kek@mail.ru",
  link: "https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png",
  owner: "64db97fb62bb3358fc3d0377",
  likes: [],
  comments: [],
  createdAt: "2023-08-15T15:40:51.375Z",
};

export type Feedback = {
  user: string;
  message: string;
};

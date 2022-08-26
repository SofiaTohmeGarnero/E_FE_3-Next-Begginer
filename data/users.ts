import IUser from "../types/IUser";

const users: IUser[] = [
    { id: "111", mail: "user@1.com", password:'qwerty' , role: "user" },
    { id: "112", mail: "user@2.com", password: '1234', role: "user" },
    { id: "113", mail: "user@3.com", password: 'zxcvb', role: "admin" },
];

export { users };
export default interface IUser {
    id: string;
    mail: string;
    password: string;
    role: "user" | "admin";
}
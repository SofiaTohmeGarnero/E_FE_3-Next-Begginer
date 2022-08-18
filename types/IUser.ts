export default interface IUser {
    id: string;
    name: string;
    role: "user" | "admin";
}
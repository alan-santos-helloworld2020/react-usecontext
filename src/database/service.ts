import { IUserDto } from "../models/IUser";

export class DatabaseService{


    public save(user: IUserDto) {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                if (res != null || res != undefined) {
                    alert(`usuário ${res.username} salvo com sucesso :)`)
                }
            })
            .catch(err => alert(err.message));
    }


    public findAll(): Promise<Response>{
        let users = fetch("http://localhost:3000/users",{
            method:"GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res=>res.json());       
        return users;
    }

}
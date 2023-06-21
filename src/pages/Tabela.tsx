import { useEffect, useRef, useState } from 'react'
import { DatabaseService } from '../database/service';
import { IUsers } from '../models/IUsers';


export function Tabela() {
    const service = new DatabaseService();
    const [users, setUsers] = useState([]);
    useEffect(() => {
      service.findAll()
        .then((res:any) => setUsers(res));
    },[])

    return (
        <div className="col-6">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((res: IUsers, index) => (
                            <tr key={res.id}>
                                <td>{res.id}</td>
                                <td>{res.username}</td>
                                <td>{res.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
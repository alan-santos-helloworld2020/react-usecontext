import { useContext, useEffect, useRef, useState } from 'react'
import '../App.scss'
import { DatabaseService } from '../database/service';
import { UseContext } from '../context/UserContext';

export function Login() {
    
    const service = new DatabaseService();
    const btnSalvar = useRef(HTMLButtonElement);
  
    const [user, setUser] = useState({
      username: "",
      password: ""
    });

    const {save} = useContext(UseContext)
  
    let login = () => {
      service.save(user);
      save(user);
    }

    return (
        <div className="col-6">
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="email" onChange={(event) => setUser({ ...user, username: event.target.value })} className="form-control" name="email" id="email" />
                    {user.username == "" ? <span className="text-danger">campo obrigatório</span> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" onChange={(event) => setUser({ ...user, password: event.target.value })} className="form-control" name="password" id="password" />
                    {user.password == "" ? <span className="text-danger">campo obrigatório</span> : null}
                </div>
                <div className="mb-3 d-flex justify-content-end">
                    <button ref={btnSalvar} type="button" disabled={user.username == "" || user.password == ""} onClick={login} className='btn btn-primary'>salvar</button>
                </div>
            </form>
        </div>

    )

}
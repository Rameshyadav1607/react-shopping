import { useState } from "react";
export default function FormComponent(){
    const [users] = useState([
        {UserId: 'john'},
        {UserId: 'john12'},
        {UserId: 'johndavid'},
        {UserId: 'john_nit'}
    ]);
    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setUserValid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    
    function VerifyUserId(e){
        for (var user of users) {
            if (user.UserId === e.target.value) {
                setUserMsg("User ID taken, try another one");
                setUserValid(false);
                break;
            } else {
                setUserMsg("User ID available");
                setUserValid(true);
            }
        }
    }

    function VerifyPassword(e){
        if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
            setPwdMsg('Strong password');
        } else {
            setPwdMsg(e.target.value ? "Poor password" : "Weak password");
        }
    }

    function HidePasswordMsg(){
        setPwdMsg('');
    }

    return (
        <>
            <div className="container-fluid">
                <h2>Register User</h2>
                <dl>
                    <dt>USER ID</dt>
                    <dd><input type="text" onKeyUp={VerifyUserId} /></dd>
                    <dd className={isUserValid ? 'text-success' : 'text-danger'}>{userMsg}</dd>
                    <dd>
                        <input type="password" onBlur={HidePasswordMsg} onKeyUp={VerifyPassword} />
                    </dd>
                    <dd>{pwdMsg}</dd>
                </dl>
            </div>
        </>
    );
}

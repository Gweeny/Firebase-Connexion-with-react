import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react';
import './connexion.css';
import {auth} from './firebase-config'

const Connexion = () => {

    function clickRegister(){
        register();
        ClearFields();
    }
    function ClearFields() {
        document.getElementById("registerMail").value = "";
        document.getElementById("registerPassword").value = "";
        document.getElementById("logingMail").value = "";
        document.getElementById("logingPassword").value = "";
    }
    function clickLoging(){
        loging();
        ClearFields()
    }
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    
    const [logingEmail, setLogingEmail] = useState("");
    const [logingPassword, setLogingPassword] = useState("");
    
    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
        } catch(error) {
            console.log(error.message)
        }
    }

    const loging = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, logingEmail, logingPassword);
            console.log("user logged in"+user)
            console.log(user)
            } catch(error) {
                console.log(error.message)
            }

    }

    const logout = async () => {
        await signOut(auth)
    }

    
    return (
        <div className="connexions">
            <div className='register'>
                <input id='registerMail' type="text" placeholder="Email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                <input id='registerPassword' type="password" placeholder="Mot de passe" onChange={(event) => {setRegisterPassword(event.target.value)}} />
                {/* <input type="password" placeholder="Confirmer le Mot de passe" id='password2'/> */}
                <button onClick={clickRegister}>S'enregistrer</button>
            </div>
            <div className='loging'>
                <input id='logingMail' type="text" placeholder="Email" onChange={(event) => {setLogingEmail(event.target.value)}}/>
                <input id='logingPassword' type="password" placeholder="Mot de passe" onChange={(event) => {setLogingPassword(event.target.value)}} />
            <button onClick={clickLoging}>Connexion</button>
            </div>
            <button onClick={logout}>logout</button>
        </div>
    );
}
export default Connexion;
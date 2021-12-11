import "./style.css";
import React from "react";
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import { MdLogout, MdOutlineFaceRetouchingNatural, MdOutlineHome } from "react-icons/md";
import { NavLink, Outlet, Navigate } from 'react-router-dom'
import { signOutBtn } from '../../Utils';


export default function Profile(props) {

    return (
        props.user ? <div className="profile-page">
            <Sidebar children={
                <>
                    <NavLink end to={`/${props.user.uid}`} className="btn btn-sidebar" ><MdOutlineHome className='btn-icon' /><span>Home</span></NavLink>
                    <NavLink end to={`/${props.user.uid}/CharBuilder`} className="btn btn-sidebar" ><MdOutlineFaceRetouchingNatural className='btn-icon' /><span>Criar Personagem</span></NavLink>
                    <Button className="btn btn-sidebar log-out" onClick={() => signOutBtn()} ><MdLogout className='btn-icon' /><span>Sair</span></Button>
                </>
            } />
            <div className="user-dash">
                <Outlet />
            </div>

        </div> : <Navigate to="/"></Navigate>
    );
}
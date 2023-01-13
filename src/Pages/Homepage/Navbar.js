import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase_init';
const auth = getAuth(app);

const Navbar = () => {
    const [user, setUser] = useState({})
    const signOutButton = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out')
                setUser({});
            }).catch((error) => {
                // An error happened.
            });
    }

    // const login = () => {
    //     signInWithEmailAndPassword(auth, 'test@test.com', 'password');
    // };
    // const logout = () => {
    //     signOut(auth);
    // };

    // if (loading) {
    //     return (
    //         <div>
    //             <p>Initialising User...</p>
    //         </div>
    //     );
    // }
    // if (error) {
    //     return (
    //         <div>
    //             <p>Error: {error}</p>
    //         </div>
    //     );
    // }
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">Wedding Hall</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1 ">
                        <NavLink to='/' className='mr-10'>Homepage</NavLink>
                        <NavLink to='/dashboard' className='mr-10' tabindex="0">
                            Dashboard
                            {/* <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>

                            <ul class="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul> */}
                        </NavLink>

                        {
                            user.gmail ? <li><NavLink onClick={signOutButton} className='mr-10'>Logout</NavLink></li> : <li><NavLink to='/login' className='mr-10'>Login</NavLink></li>
                        }

                    </ul>
                </div>

            </div>

            <div div class="navbar bg-accent" >
                <div class="navbar-start">
                    info@com
                </div>
                <div class="navbar-start ">
                    <a class="normal-case text-xl text-black">
                        If you want to visit this wedding place, Please Contact us.
                    </a>
                </div>

            </div>
        </div >
    );
};

export default Navbar;
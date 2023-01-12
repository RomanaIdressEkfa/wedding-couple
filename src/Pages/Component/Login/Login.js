
// // import { useEffect, useState } from "react";
// // import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { auth } from "../../../../firebase_init";
// // import Loading from "../../Shares/Loading";
// // import "./Login.css";


// // const Login = () => {
// //     const [userInfo, setUserInfo] = useState({
// //         email: "",
// //         password: "",
// //     })
// //     const [errors, setErrors] = useState({
// //         email: "",
// //         password: "",
// //         general: "",
// //     })



// //     const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
// //     const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

// //     // if (loading) {
// //     //     return (
// //     //         <div className='text-center mx-auto'>
// //     //             <Loading></Loading>
// //     //         </div>
// //     //     );
// //     // }
// //     // if (loading2) {
// //     //     return (
// //     //         <div className='text-center mx-auto'>
// //     //             <Loading></Loading>
// //     //         </div>
// //     //     );
// //     // }


// //     const handleEmailChange = (e) => {
// //         const emailRegex = /\S+@\S+\.\S+/;
// //         const validEmail = emailRegex.test(e.target.value);

// //         if (validEmail) {
// //             setUserInfo({ ...userInfo, email: e.target.value })
// //             setErrors({ ...errors, email: "" })
// //         } else {
// //             setErrors({ ...errors, email: "Invalid email" })
// //             setUserInfo({ ...userInfo, email: "" })
// //         }


// //         // setEmail(e.target.value);
// //     }

// //     const handlePasswordChange = (e) => {
// //         const passwordRegex = /.{6,}/;
// //         const validPassword = passwordRegex.test(e.target.value);

// //         if (validPassword) {
// //             setUserInfo({ ...userInfo, password: e.target.value });
// //             setErrors({ ...errors, password: "" });
// //         } else {
// //             setErrors({ ...errors, password: "Minimum 6 characters!" });
// //             setUserInfo({ ...userInfo, password: "" })
// //         }

// //     }

// //     const handleLogin = (e) => {
// //         e.preventDefault();

// //         console.log(userInfo)

// //         signInWithEmail(userInfo.email, userInfo.password);

// //     }

// //     const navigate = useNavigate();
// //     const location = useLocation();
// //     const from = location.state?.from?.pathname || "/shops";

// //     useEffect(() => {
// //         if (user) {
// //             navigate(from);
// //         }
// //     }, [user]);

// //     useEffect(() => {
// //         const error = hookError || googleError;
// //         if (error) {
// //             switch (error?.code) {
// //                 case "auth/invalid-email":
// //                     toast("Invalid email provided, please provide a valid email");
// //                     break;

// //                 case "auth/invalid-password":
// //                     toast("Wrong password. Intruder!!")
// //                     break;
// //                 default:
// //                     toast("something went wrong")
// //             }
// //         }
// //     }, [hookError, googleError])

// //     return (
// //         <div className="login-container">
// //             <div className="login-title">LOGIN</div>
// //             <form className="login-form" onSubmit={handleLogin}>
// //                 <input type="text" placeholder="Your Email" onChange={handleEmailChange} />
// //                 {errors?.email && <p className="error-message">{errors.email}</p>}
// //                 <input type="password" placeholder="password" onChange={handlePasswordChange} />
// //                 {errors?.password && <p className="error-message">{errors.password}</p>}
// //                 <button>Login</button>

// //                 {/* {error && <p className="error-message">{error}</p> } */}
// //                 {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
// //                 <ToastContainer />

// //                 <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
// //             </form>

// //             <button onClick={() => signInWithGoogle()}>Google</button>
// //         </div>
// //     );
// // };

// // export default Login;



// import React from 'react';

// const Login = () => {
//     return (
//         <div>
//             <h1>Login page: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nihil illum, quo expedita nulla beatae, dignissimos est exercitationem provident eius atque animi modi quaerat id. Commodi porro iure fuga distinctio a, nesciunt amet dolore velit impedit doloribus! Voluptatem ullam delectus illo hic eius porro ad quas velit, laboriosam repudiandae quaerat voluptate a nobis quae nesciunt voluptas deleniti. Quod aperiam odio soluta voluptatum. Enim veritatis tempore, voluptatum voluptates dolorum omnis velit, inventore quaerat ea laudantium nihil quam ad! Velit accusamus fugit ex beatae itaque esse quis quia, unde, aspernatur iste a, placeat dignissimos nemo enim temporibus deleniti nam eligendi quidem. Alias!</h1>
//         </div>
//     );
// };

// export default Login;
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignInSide() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://img.freepik.com/free-vector/computer-safety-technology-icon_53876-118346.jpg?w=900&t=st=1673545772~exp=1673546372~hmac=8595ddbf9482cdf9a86fc7677fe1e88f75c9dba298717187e454f8b9ee1b380d)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <NavLink to='/signup' variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </NavLink>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
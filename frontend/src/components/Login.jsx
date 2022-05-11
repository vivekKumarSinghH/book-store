import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";
import { login } from '../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


const initialState = {
   
    email: "",
    password: ""
};
export default function Login() {


    const [formValue, setFormValue] = React.useState(initialState);
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        email,
        password } = formValue;




    React.useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const handleSubmit = () => {

        if (email &&
            password
        ) {
            dispatch(login({ formValue, navigate, toast }));
            setFormValue(initialState)
        }
        else {
            return toast.error("Please fill all details.")
        }
    };
    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

  

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, maxWidth: "100%" },
            }}
            noValidate
            autoComplete="off"
            className="login"
        >
            <div>
                <AccountCircleIcon fontSize="large" className="text-[#949394]" />
                <h2 className="text-xl p-2 text-[#949394]">Log In</h2>
            </div>

            <TextField color="secondary" value={email} name="email" onChange={onInputChange} size="small" label="Email" variant="outlined" />
            <TextField color="secondary" value={password} type="password" name="password" onChange={onInputChange} size="small" label="Password" variant="outlined" />


            {loading&& <div className="text-center" ><CircularProgress  color="secondary" />
            </div>} 
        

            <Button variant="contained"
            
            onClick={handleSubmit} color="secondary" className="bg-[#7b1fa2]" >
            
          Log in
            </Button>

            <hr />

            <Link to="/signup" className="text-[#b076c9] hover:cursor-pointer hover:text-[#7b1fa2] text-lg">
                Didn't have an account? Signin
            </Link>
        </Box>
    );
}

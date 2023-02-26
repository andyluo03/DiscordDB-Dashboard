import { useState }from 'react';
import { useRouter } from 'next/router'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import axios from 'axios';
import Modal from '@mui/joy/Modal';
import Box from '@mui/joy/Box';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import CircularProgress from '@mui/joy/CircularProgress';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [popupOpened, setPopupOpened] = useState(false);
  const [errorPopupOpened, setErrorPopupOpened] = useState(false);
  const [errorData, setErrorData] = useState('');

  const signIn = async () => {
    setPopupOpened(true);
    if (username !== '' && password !== '') {
        try {
          const login = await axios.post("http://3.144.156.33/login/", {
              username: username,
              password: password,
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
          })
          if (login.status != 200) {
            setPopupOpened(false);
            setErrorData("Login Failed. Check your username and password.")
            setErrorPopupOpened(true);
          } else {
            // set JWT token and navigate to db
          }

        } catch (ex) {
          setPopupOpened(false);
          setErrorData("Login Failed. Check your username and password.")
          setErrorPopupOpened(true);        
        }
    }
    else {
      setPopupOpened(false);
      setErrorData("Not a valid username or password!")
      setErrorPopupOpened(true);
    } 
  };

  return (
    <CssVarsProvider>
      <Modal open={popupOpened}>
        <ModalDialog>
        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <CircularProgress/>
          <Typography level="h5" sx={{textAlign: 'center'}}>Logging In...</Typography>
          </Box>
        </ModalDialog>
      </Modal>
      <Modal open={errorPopupOpened} onClose={() => setErrorPopupOpened(false)}>
        <ModalDialog>
        <ModalClose/>
        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <Typography level="h5">{errorData}</Typography>
          </Box>
        </ModalDialog>
      </Modal>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="Your Email"
              value={username}
              onChange={(e) => {setUsername(e.target.value);}}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => {setPassword(e.target.value);}}            
              />
          </FormControl>
          <Button sx={{ mt: 1 /* margin top */ }}   onClick={signIn}>Log in</Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
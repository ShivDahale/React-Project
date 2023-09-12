import React from "react";
import * as NewFile from './NewFile';

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
         <NewFile.Container>
             <NewFile.SignUpContainer signinIn={signIn}>
                 <NewFile.Form>
                     <NewFile.Title>Create Account</NewFile.Title>
                     <NewFile.Input type='text' placeholder='Name' />
                     <NewFile.Input type='email' placeholder='Email' />
                     <NewFile.Input type='password' placeholder='Password' />
                     <NewFile.Button>Sign Up</NewFile.Button>
                 </NewFile.Form>
             </NewFile.SignUpContainer>

             <NewFile.SignInContainer signinIn={signIn}>
                  <NewFile.Form>
                      <NewFile.Title>Sign in</NewFile.Title>
                      <NewFile.Input type='email' placeholder='Email' />
                      <NewFile.Input type='password' placeholder='Password' />
                      <NewFile.Anchor href='#'>Forgot your password?</NewFile.Anchor>
                      <NewFile.Button>Sigin In</NewFile.Button>
                  </NewFile.Form>
             </NewFile.SignInContainer>

             <NewFile.OverlayContainer signinIn={signIn}>
                 <NewFile.Overlay signinIn={signIn}>

                 <NewFile.LeftOverlayPanel signinIn={signIn}>
                     <NewFile.Title>Welcome Back!</NewFile.Title>
                     <NewFile.Paragraph>
                         To keep connected with us please login with your personal info
                     </NewFile.Paragraph>
                     <NewFile.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </NewFile.GhostButton>
                     </NewFile.LeftOverlayPanel>

                     <NewFile.RightOverlayPanel signinIn={signIn}>
                       <NewFile.Title>Hello, Friend!</NewFile.Title>
                       <NewFile.Paragraph>
                           Enter Your personal details and start journey with us
                       </NewFile.Paragraph>
                           <NewFile.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </NewFile.GhostButton> 
                     </NewFile.RightOverlayPanel>
 
                 </NewFile.Overlay>
             </NewFile.OverlayContainer>

         </NewFile.Container>
     )
}

export default App;

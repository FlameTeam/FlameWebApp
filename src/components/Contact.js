import React, { useState }  from "react";

import { Box, Grid, TextField, Button } from "@material-ui/core";

import useStyles from "../styles/components/contactStyle";

export default function Contact() {
  const classes = useStyles();

  const [nameState, setName] = useState("");
  const [emailState, setEmail] = useState("");
  const [phoneState, setPhone] = useState("");
  const [messageState, setMessage] = useState("");

  console.log(nameState);
  console.log(emailState);
  console.log(phoneState);
  console.log(messageState);

  return (
    <Box className={classes.contact}>
    <h3 className={classes.title}>
      Contacto
    </h3>

    
      <form className={classes.form}>
      <Grid
        container
        justify="center"  
        className={classes.formGridContainer}
      >
        
       <Grid item md={12}>
       <TextField
                  id="name"
                  label="Nombre"
                  value={nameState}
                  onChange={e => setName(e.target.value)}
                  className={classes.textField}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focusedLabel
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.underline
                    }
                  }}
                />
         
         </Grid>  
         <Grid item md={6}>
         <TextField
                  id="email"
                  label="Email"
                  value={emailState}
                  onChange={e => setEmail(e.target.value)}
                />
           </Grid>   
           <Grid item md={6}>
           <TextField
                  id="phone"
                  label="Teléfono"
                  value={phoneState}
                  onChange={e => setPhone(e.target.value)}
                />
            
             </Grid>     
            
            <Grid item md={12}>
            <TextField
                  id="message"
                  label="Asunto"
                  value={messageState}
                  onChange={e => setMessage(e.target.value)}
                />
            </Grid>       
                <Button variant="contained">
                    Enviar
                </Button>
                </Grid>        
      </form>
    
  </Box>
  );
}

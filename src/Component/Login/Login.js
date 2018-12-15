import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { OPEN_DIALOG_LOGIN } from '../../Constant/actionTypes';
import { connect } from 'react-redux';
const { Keypair } = require('stellar-base');

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Dialog
                    open={this.props.loginReducer.openLogin}
                    onClose={this.props.handleCloseLogin}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Secrete Key
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            onChange={(event) => this.props.handleInputChangeName(event)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleLogin} color="primary">
                            Login
                        </Button>
                        <Button onClick={this.props.handleCloseLogin} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      loginReducer: state.loginReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  let secrete_key = '';
  return {
      handleCloseLogin: () => {
          dispatch({ type: OPEN_DIALOG_LOGIN, openLogin: false })
      },
      handleInputChangeName: (event) => {
        secrete_key = event.target.value;
      },
      handleLogin: () => {
        try {
          const key = Keypair.fromSecret(secrete_key)
          console.log(key.publicKey());
        } catch (error) {
          alert("Invalid Secrete Key")
        }
        
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
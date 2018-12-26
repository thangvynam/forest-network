import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import axios from 'axios';
import { OPEN_DIALOG_CREATE_ACCOUNT } from '../../Constant/actionTypes';
import { OPEN_DIALOG_SHOW_INFO } from '../../Constant/actionTypes';
import * as transaction from "../../tx"
var Buffer = require('buffer/').Buffer
const {Keypair} = require('stellar-base');
const CryptoJS = require("crypto-js")

class Dialog_CreateAccount extends Component {
    render() {
        return (
            <div className="Login">
                <Dialog
                    open={this.props.createAccountReducer.openDialog}
                    keepMounted
                    onClose={this.props.handleCloseDialog}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Are you sure to create account ?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let us create account for you . This means sending you public key and secret key
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleCloseDialog} color="primary">
                            No
                        </Button>
                        <Button onClick={this.props.generateKey} color="primary">
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.props.createAccountReducer.openDialogShowInfo}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please remember thats public key and secret key
                    </DialogContentText>
                        <div className="row">
                            <TextField
                                id="outlined-read-only-input"
                                label="Public Key"
                                defaultValue={this.props.createAccountReducer.createdPublicKey}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className="row">
                            <TextField
                                id="outlined-read-only-input"
                                label="Secret Key"
                                defaultValue={this.props.createAccountReducer.creadtedSecretKey}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
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
        createAccountReducer: state.createAccountReducer,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleCloseDialog: () => {
            dispatch({ type: OPEN_DIALOG_CREATE_ACCOUNT, openDialog: false })
        },
        generateKey: () => {
            const key = Keypair.random();
            const createdPublicKey = key.publicKey();
            const creadtedSecretKey = key.secret();
            var bytes  = CryptoJS.AES.decrypt(sessionStorage.getItem("secret_key"), 'CNM2018');
            const secret_key = bytes.toString(CryptoJS.enc.Utf8)
            const public_key = Keypair.fromSecret(secret_key).publicKey();     
            axios.post('/create_account',{public_key, createdPublicKey}).then(res => {
                                        let tx = res.data
                                        tx.memo = Buffer.alloc(0)
                                        tx.signature = Buffer.alloc(64, 0)
                                        transaction.sign(tx, secret_key) 
                                        let txHash = '0x' + transaction.encode(tx).toString('hex')
                                        axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})                                                                                           
                                    })
            dispatch({ type: OPEN_DIALOG_SHOW_INFO, openDialogShowInfo: true, openDialog: false,
                createdPublicKey:createdPublicKey,creadtedSecretKey:creadtedSecretKey })
        },
        handleClose: () => {
            dispatch({ type: OPEN_DIALOG_SHOW_INFO, openDialogShowInfo: false })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog_CreateAccount);
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
import * as transaction from "../../tx"
import { OPEN_DIALOG_PAYMENT } from '../../Constant/actionTypes';
const {Keypair} = require('stellar-base');
class Dialog_Payment extends Component {
    render() {
        return (
            <Dialog
                open={this.props.paymentReducer.open}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Payment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Write address to send money 
                        </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Address"
                        fullWidth
                        onChange={(event) => this.props.handleInputChangeAddress(event)}
                    />
                    <TextField
                        margin="dense"
                        id="amount"
                        label="Amount"
                        fullWidth
                        onChange={(event) => this.props.handleInputChangeAmount(event)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.send} color="primary">
                        Send
                        </Button>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                        </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    let address = '';
    let amount = '';
    return {
        handleClose: () => {
            dispatch({type:OPEN_DIALOG_PAYMENT,open:false})
        },
        handleInputChangeAddress: (event) => {
            address = event.target.value;
        },
        handleInputChangeAmount: (event) => {
            amount = event.target.value;
        },
        send : () =>{
            const secret_key = sessionStorage.getItem("secret_key")
            const public_key = Keypair.fromSecret(secret_key).publicKey(); 
            axios.post('/payment',{public_key, address, amount}).then(res => {
                let tx = res.data
                tx.memo = Buffer.alloc(0)
                tx.signature = Buffer.alloc(64, 0)
                transaction.sign(tx, secret_key) 
                let txHash = '0x' + transaction.encode(tx).toString('hex')
                axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
            })
            dispatch({ type: OPEN_DIALOG_PAYMENT, open: false })
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        paymentReducer: state.paymentReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog_Payment);
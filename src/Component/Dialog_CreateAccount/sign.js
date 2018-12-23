import * as transaction from "../../tx";

export function signTx(tx, secret_key) {
    console.log(tx);
    
    transaction.sign(tx, secret_key)
}
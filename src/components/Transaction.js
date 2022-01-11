import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <li className={sign==='+'?'plus':'minus'}>
            {transaction.text} <span>{sign} ${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={(e)=>(deleteTransaction(transaction.id))}>x</button>
        </li>
    );
}
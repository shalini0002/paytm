import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

  return (
    <div className="flex justify-center h-screen bg-slate-100">
      <div className="flex flex-col h-full justify-center">
        <div className="border bg-white rounded-lg shadow-lg text-card-foreground p-4 space-y-8 max-w-md">
          <div className="flex flex-col space-x-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">Send money</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">H</span>
              </div>
              <h3 className="text-2xl font-semibold">kjfnkjt {name}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                  type="number"
                  className="w-full h-10 flex rounded border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter Amount"
                ></input>
              </div>
              <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/account/transfer", {
                  to: id,
                  amount
                }, {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                  }
                })
              }} class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;

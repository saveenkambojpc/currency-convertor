import { useState } from "react";
import "./App.css";
import { InputBox } from "./components/index.js";
import useAvailableCurrencies from "./hooks/useAvailableCurrencies.js";
import axiosInstance from "./config/axios.js";

function App() {
  const [userInput, setUserInput] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("")

  const [from, setFrom] = useState("INR")
  const [to, setTo] = useState("USD")

  const availableCurrencies = useAvailableCurrencies();

  const convert = async (e) => {
    e.preventDefault()

    if (from !== to) {

      const { data: conversionRate } = await axiosInstance.get('/exchange', {
        params:
        {
          from,
          to,
        }
      }
      )
      setConvertedAmount(
        (Number(userInput) * conversionRate).toFixed(2)
      )
    }
    else {
      setConvertedAmount(userInput)
    }
  }

  const swap = () => {
    setFrom(to)
    setTo(from)

    setConvertedAmount(userInput)
    setUserInput(convertedAmount)
  }

  return (
    <div className="bg-red-200 min-h-screen flex justify-center  items-center ">
      <form onSubmit={convert}>
        <InputBox
          userInput={userInput}
          onUserInputChange={(val) => setUserInput(val)}
          label="From Amount"
          availableCurrencies={availableCurrencies}
          onCurrencyChange={(currency) => {
            setFrom(currency);
          }}
          currency={from}

        />
        <InputBox
          userInput={convertedAmount}
          onUserInputChange={(val) => setConvertedAmount(val)}
          label="To Amount"
          availableCurrencies={availableCurrencies}
          currency={to}

          onCurrencyChange={(currency) => {
            setTo(currency);
          }}
          isInputDisabled
        />
        <div className="mt-3 gap-3 flex">
          <button onClick={swap} className="w-full btn border px-10 py-2 rounded bg-yellow-700 text-white">
            Swap { }
          </button>

          <button type="submit" className="w-full btn border px-10 py-2 rounded bg-blue-500 text-white">
            Convert { }
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

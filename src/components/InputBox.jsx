import { useId } from "react"

export default function
    InputBox({
        label = "",
        onCurrencyChange,
        availableCurrencies = [],

        userInput,
        onUserInputChange,
        isInputDisabled = false,
        currency,

    }) {

    const id = useId()

    return (<div className=" p-3 grid bg-white grid-cols-2 min-w-80 min-h-28 rounded-lg border">
        <div className="flex flex-col">
            <label htmlFor={id} className="text-slate-500">{label}</label>
            <input
                disabled={isInputDisabled}
                id={id}
                value={userInput}
                onChange={(e) => onUserInputChange && onUserInputChange(e.target.value)}
                className="outline-0  w-20 text-2xl"
            />
        </div>

        <div className="flex flex-col">

            <label htmlFor={id} className="text-slate-500">Currency Type</label>

            <select value={currency} onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}>
                {availableCurrencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
            </select>
        </div>
    </div>);


}
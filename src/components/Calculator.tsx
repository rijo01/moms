"use client";

import { useState } from "react";

const VAT_RATES = [25, 12, 6] as const;

type Mode = "add" | "remove";

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState<(typeof VAT_RATES)[number]>(25);
  const [mode, setMode] = useState<Mode>("add");

  const num = parseFloat(amount.replace(",", ".")) || 0;

  const vatAmount =
    mode === "add" ? num * (rate / 100) : num - num / (1 + rate / 100);

  const totalInclVat = mode === "add" ? num + num * (rate / 100) : num;
  const totalExclVat = mode === "add" ? num : num / (1 + rate / 100);

  const fmt = (n: number) =>
    n.toLocaleString("sv-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
      <div className="flex gap-2">
        <button
          onClick={() => setMode("add")}
          className={`flex-1 py-2 rounded-lg font-medium text-sm transition ${
            mode === "add"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Lägg till moms
        </button>
        <button
          onClick={() => setMode("remove")}
          className={`flex-1 py-2 rounded-lg font-medium text-sm transition ${
            mode === "remove"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Ta bort moms
        </button>
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
          {mode === "add" ? "Belopp exklusive moms (kr)" : "Belopp inklusive moms (kr)"}
        </label>
        <input
          id="amount"
          type="text"
          inputMode="decimal"
          placeholder="0,00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-gray-700 mb-2">Momssats</legend>
        <div className="flex gap-2">
          {VAT_RATES.map((r) => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={`flex-1 py-2 rounded-lg font-medium text-sm transition ${
                rate === r
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {r}&nbsp;%
            </button>
          ))}
        </div>
      </fieldset>

      {num > 0 && (
        <div className="bg-blue-50 rounded-xl p-5 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Belopp exkl. moms</span>
            <span className="font-semibold">{fmt(totalExclVat)} kr</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Moms ({rate}&nbsp;%)</span>
            <span className="font-semibold">{fmt(vatAmount)} kr</span>
          </div>
          <hr className="border-blue-200" />
          <div className="flex justify-between text-lg">
            <span className="font-semibold">Belopp inkl. moms</span>
            <span className="font-bold text-blue-700">{fmt(totalInclVat)} kr</span>
          </div>
        </div>
      )}
    </section>
  );
}

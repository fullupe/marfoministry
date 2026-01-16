
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Smartphone } from "lucide-react";
import { useState } from "react";

interface PropTterminal {
  displayAmount: string;
}

export function PayMOMO({ displayAmount }: PropTterminal) {
  const [momoRef, setMomoRef] = useState("");
  const [loading, setLoading] = useState(false);

  const submitPay = async () => {
    setLoading(true);
    // TODO: implement payment post logic
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="give" size="xl" className="w-full">
          <Heart className="w-5 h-5 mr-2" /> Give GHS{displayAmount}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold">
            God richly bless you!
          </AlertDialogTitle>
        </AlertDialogHeader>

          {/* <AlertDialogDescription > */}
            <div className="space-y-6">
            {/* AMOUNT CARD */}
            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <small className="text-3xl font-bold text-blue-600 mb-1">
                GHS {displayAmount}
              </small>
              <p className="text-sm text-gray-600">Total Amount to Pay</p>
            </div>

            {/* INSTRUCTIONS */}
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Smartphone className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-3">
                  <small className="font-semibold text-gray-900 text-lg">
                    MTN Mobile Money Instructions
                  </small>

                  {[
                    { step: 1, text: "Dial *170#" },
                    { step: 2, text: "Select Option 1 (Transfer Money)" },
                    { step: 3, text: "Select Option 1 (MoMo User)" },
                  ].map(({ step, text }) => (
                    <div key={step} className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                        {step}
                      </span>
                      <p className="text-sm text-gray-700">{text}</p>
                    </div>
                  ))}

                  {/* Recipient */}
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                      4
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        Enter Number:{" "}
                        <span className="font-mono text-red-600 bg-white px-2 py-1 rounded border">
                          0554625651
                        </span>
                      </p>
                      <p className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded mt-1">
                        Confirm name: <strong>Marfo-Ministry</strong>
                      </p>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                      5
                    </span>
                    <p className="text-sm text-gray-700">
                      Enter amount{" "}
                      <span className="font-bold text-green-600">
                        GH₵ {displayAmount}
                      </span>
                    </p>
                  </div>

                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mt-4">
                    <p className="text-lg font-bold text-center text-yellow-800 underline">
                      PROCEED TO PAY
                    </p>
                    <p className="text-sm text-yellow-700 text-center mt-1">
                      After paying, enter your MoMo reference below:
                    </p>
                  </div>
                </div>

              </div>
            </div>

                {/* INPUT FIELD */}
                <div className="space-y-2">
                <Label>Mobile Money Reference</Label>
                <Input
                    value={momoRef}
                    onChange={(e) => setMomoRef(e.target.value)}
                    placeholder="Enter MoMo reference"
                />
                <p className="text-xs text-gray-500">
                    You’ll receive this code after completing payment.
                </p>
                </div>

               </div>
          {/* </AlertDialogDescription> */}

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={submitPay}
            disabled={!momoRef.trim() || loading}
          >
            {loading ? "Processing..." : "Confirm Payment"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
}


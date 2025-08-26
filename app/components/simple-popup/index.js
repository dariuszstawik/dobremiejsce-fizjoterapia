"use client";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Button from "../Button";
import Link from "next/link";

export default function SimplePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sprawdź, czy w tej sesji już pokazywaliśmy popup
    const seen =
      typeof window !== "undefined" && sessionStorage.getItem("homePopupSeen");
    if (!seen) {
      setTimeout(() => setOpen(true), 500);
      sessionStorage.setItem("homePopupSeen", "1");
    }
  }, []);

  return (
    <Popup
      open={open}
      onClose={() => setOpen(false)}
      modal
      nested
      closeOnDocumentClick
      lockScroll
      contentStyle={{
        maxWidth: "min(90vw, 560px)",
        width: "auto",
        overflowX: "hidden",
      }}
      overlayStyle={{
        overflowX: "hidden",
        // boxShadow: "0 0 0 100vmax rgba(0, 0, 0, 0.5)",
        // borderRadius: "50%",
      }}
    >
      <div className="p-6 bg-white rounded max-w-md mx-auto text-center">
        <h2 className="text-lg font-bold">
          {/* 👋  */}
          Nowość w Dobrym Miejscu!
        </h2>
        <div className="mt-2 mb-6">
          Od września terapia ortopedyczna dla dzieci i młodzieży! Prowadzi ją
          nasz nowy fizjoterapeuta, Sebastian Niemczyk.{" "}
          <Link href="/terapia-ortopedyczna" className="text-orange">
            Zobacz więcej
          </Link>
        </div>
        <Button
          title="Zamknij"
          onClick={() => setOpen(false)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        ></Button>
      </div>
    </Popup>
  );
}

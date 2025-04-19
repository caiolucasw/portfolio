import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      size="lg"
      className="min-w-40 bg-accent hover:bg-accent hover:opacity-70"
      type="submit"
      disabled={pending}
    >
      {pending ? "Enviando..." : "Enviar  "}
    </Button>
  );
};

export default SubmitButton;

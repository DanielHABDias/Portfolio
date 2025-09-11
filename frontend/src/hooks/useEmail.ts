import { useState } from 'react';
import useUser from './useUser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface UseEmailResult {
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  sendEmail: (data: FormData) => Promise<void>;
  resetFeedback: () => void; 
}

export const useEmail = (): UseEmailResult => {
  const baseUri = useUser().backend;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const sendEmail = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    console.log("Enviando e-mail:", formData);

    try {
      const response = await fetch(baseUri + "send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Erro do servidor: ${response.status}`);
      }

      const data = await response.json();
      console.log("Resposta do servidor:", data);
      setSuccessMessage("Mensagem enviada com sucesso! " + (data.message || ""));

    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("Erro ao enviar email:", err.message);
            setError(err.message || "Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
        } else {
            console.error("Ocorreu um erro desconhecido:", err);
        }
    } finally {
      setIsLoading(false);
    }
  };

  const resetFeedback = () => {
    setError(null);
    setSuccessMessage(null);
  };

  return { isLoading, error, successMessage, sendEmail, resetFeedback };
};
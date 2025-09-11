import { use, useState } from 'react';
import useUser from './useUser';

interface UseAPIResult {
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  onAPI: () => Promise<void>;
  resetFeedback: () => void; 
}

export const useAPI = (): UseAPIResult => {
  const baseUri = useUser().backend;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onAPI = async () => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    console.log("Ligando API no Render...");

    try {
      const response = await fetch(baseUri, {
        method: "GET"
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Erro do servidor: ${response.status}`);
      }

      const data = await response.json();
      if(data){
        setSuccessMessage("API ligada com sucesso!");
        console.log("BackEnd ligado com sucesso!");
      }
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("Erro ao ligar a API:", err.message);
            setError(err.message || "Ocorreu um erro ao ligar o BackEnd. Tente novamente.");
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

  return { isLoading, error, successMessage, onAPI, resetFeedback };
};
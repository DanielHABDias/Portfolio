import { useState } from 'react';
import useUser from './useUser';

interface UseAPIResult {
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  onRAG: () => Promise<void>;
  resetFeedback: () => void; 
}

export const useRAG = (): UseAPIResult => {
  const baseUri = useUser().backend;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onRAG = async () => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    console.log("Realizando RAG no BackEnd...");

    try {
      const response = await fetch(baseUri + "rag", {
        method: "POST"
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Erro do servidor: ${response.status}`);
      }

      const data = await response.json();
      if(data){
        setSuccessMessage("RAG realizado com sucesso!");
        console.log("RAG realizado com sucesso!");
      }
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("Erro ao realizar operação de RAG no BackEnd:", err.message);
            setError(err.message || "Ocorreu um erro ao realizar a operação de RAG no BackEnd. Tente novamente.");
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

  return { isLoading, error, successMessage, onRAG, resetFeedback };
};
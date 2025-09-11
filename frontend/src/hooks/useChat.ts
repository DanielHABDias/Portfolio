import { useState, useCallback, useRef } from 'react';

export interface ChatMessage {
  id: string; 
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}


interface UseChatResult {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (messageText: string) => Promise<void>;
  clearChat: () => void;
  chatContainerRef: React.RefObject<HTMLDivElement | null>;
}

export const useChat = (): UseChatResult => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null); 

  
  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  
  const sendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim()) return; 

    setIsLoading(true);
    setError(null);

    
    const userMessage: ChatMessage = {
      id: Date.now().toString() + '-user',
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    
    scrollToBottom();

    try {
      
      const response = await fetch("http://127.0.0.1:8000/chat", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: messageText }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `Erro do servidor: ${response.status}`);
      }

      const data = await response.json();
      console.log("Resposta da API de chat:", data);

      
      const aiMessage: ChatMessage = {
        id: Date.now().toString() + '-ai',
        text: data.response || "Não consegui gerar uma resposta.", 
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Erro ao enviar mensagem para a IA:", err);
        setError(err.message || "Ocorreu um erro ao conversar com a IA. Tente novamente.");
        
        setMessages((prevMessages) => [
            ...prevMessages,
            {
            id: Date.now().toString() + '-error',
            text: err.message || "Não foi possível conectar com a IA.",
            sender: 'ai', 
            timestamp: new Date(),
            },
        ]);
      }else{
        console.error("Ocorreu um erro desconhecido:", err);
      }
    } finally {
      setIsLoading(false);
      scrollToBottom(); 
    }
  }, [scrollToBottom]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setError(null);
    setIsLoading(false);
  }, []);

  return { messages, isLoading, error, sendMessage, clearChat, chatContainerRef };
};
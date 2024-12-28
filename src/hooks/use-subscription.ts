import { useState } from "react";
import axios from "axios";
export const useSubscription = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const onSubscribe = async () => {
    try {
      setIsProcessing(true);
      const response = await axios.get("/api/payment");
      if (response.status === 200) {
        return (window.location.href = `${response.data.session_url}`);
      }
      setIsProcessing(false);
    } catch (error) {
      setIsProcessing(false);
    }
  };
  return { isProcessing, onSubscribe };
};

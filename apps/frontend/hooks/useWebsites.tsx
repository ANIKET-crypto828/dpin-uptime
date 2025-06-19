import { API_BACKEND_URL } from "@/config";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";

export function useWebsites() {
  const { getAuth } = useAuth();

  useEffect(() => {
    const auth = getAuth();
    const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
      headers: {
        Authorization: `Bearer ${auth.sessionClaims?.sub}`,
      },
    });
  }, []);
}
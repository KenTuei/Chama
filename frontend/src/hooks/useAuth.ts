import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStoredUser } from "@/utils/auth";

interface UseAuthOptions {
  adminOnly?: boolean; // if true, only admin can access
}

export default function useAuth({ adminOnly = false }: UseAuthOptions = {}) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const user = getStoredUser();

    if (!user || !user.access) {
      router.push("/login"); // not logged in
      return;
    }

    if (adminOnly && user.email !== "tuei.admin@gmail.com") {
      router.push("/login"); // not admin → kick out
      return;
    }

    if (!adminOnly && user.email === "tuei.admin@gmail.com") {
      router.push("/admin-dashboard"); // admin → member page should redirect
      return;
    }

    setIsAuthorized(true); // authorized → show content
  }, [router, adminOnly]);

  return { isAuthorized };
}

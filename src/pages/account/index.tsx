import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AccountIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push("/account/my-orders");
    // eslint-disable-next-line
  }, []);

  return null;
}

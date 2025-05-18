import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function useSignUp(email, password) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  const auth = getAuth();

  const createUser = async (email, password) => {
    setIsLoading(true);
    setSignUpError(false);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!response.user) {
        throw new Error("something went wrong...");
      } else {
        setUser(response.user);
        return response;
      }
    } catch (e) {
      console.error("Error signing up:", e);
      setSignUpError(true);
    } finally {
      setIsLoading(false);
    }
  };

  createUser(email, password);

  return { user, isLoading, signUpError };
}

export default useSignUp;

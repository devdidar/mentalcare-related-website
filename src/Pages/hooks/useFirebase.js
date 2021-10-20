import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Home/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const handleCreateUserInUsingEmail = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {});
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }

      setIsLoading(false);
    });
  }, []);
  const handleSignInUsingEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };
  const handleSignInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };
  const handleLogOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    handleCreateUserInUsingEmail,
    handleSignInUsingEmail,
    handleSignInUsingGoogle,
    handleLogOut,
    user,
    isLoading,
  };
};

export default useFirebase;

import { getDoc, updateDoc, doc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

const profilePics = [
  "/profile.png",
  "/profile1.png",
  "/profile2.png",
  "/profile3.png",
];

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();

        // Check if profilePic exists; if not, assign one
        if (!userData.profilePic) {
          const randomPic =
            profilePics[Math.floor(Math.random() * profilePics.length)];

          await updateDoc(docRef, {
            profilePic: randomPic,
          });

          userData.profilePic = randomPic; // update local copy
        }

        set({ currentUser: userData, isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.log(err);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));

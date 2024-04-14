import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBcPbMERQ5nXs2N8wWB6K_-2oK8E43paek",
	authDomain: "ztm-clothing-db-1d803.firebaseapp.com",
	projectId: "ztm-clothing-db-1d803",
	storageBucket: "ztm-clothing-db-1d803.appspot.com",
	messagingSenderId: "288620041980",
	appId: "1:288620041980:web:07d7b449dee3994982e979",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createDocFromAuth = async (userAuth, info = {}) => {
	const userDocRef = doc(db, "user", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	// if user does not exists, register
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...info,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}

	return userDocRef;
};

export const createUserFromEmail = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

import { initializeApp, App, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Parse the FIREBASE_SERVICE_KEY environment variable as a JSON object
const serviceKey = JSON.parse(process.env.FIREBASE_SERVICE_KEY || "{}");

let app: App;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey),
    });
} else {
    app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };

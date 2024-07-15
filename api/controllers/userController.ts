import { db } from '../config/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { Request, Response } from 'express';


const colRef = collection(db, "users");

async function getUsers(req: Request, res: Response): Promise<void> {
  const userDocs = await getDocs(colRef);
  const users = userDocs.docs.map(doc => ({ ...doc.data(), id: doc.id }));

  res.json(users).status(200);

  // Print out the users for testing purposes
  console.log(users);
}

async function addUser(req: Request, res: Response): Promise<void> {
  // Get all users
  const userDocs = await getDocs(colRef);
  const users = userDocs.docs.map(doc => doc.data());
  const studentID = req.body.studentID;

  // Check if studentID is already in use
  for (let i = 0; i < users.length; i++) {
    if (users[i].studentID === studentID) {
      // Student ID is not unique, send error message and return
      res.status(400).send("Student ID must be unique");

      // Print out error message for testing purposes
      console.log("Student ID must be unique");
      return;
    }
  }

  // New studentID is unique, add user to database
  const newUser = await addDoc(colRef, req.body);

  res.json(newUser.id);

  // Print out the new user id for testing purposes
  console.log(newUser.id)
}

async function deleteUser(req: Request, res: Response): Promise<void> {
  const userRef = doc(db, "users", req.body.id);
  const docSnapshot = (await getDoc(userRef));

  if (!docSnapshot.exists()) {
    console.log("Document does not exist")
    res.status(404).send("Document not found")
    return;
  }

  const user = { id: docSnapshot.id, ...docSnapshot.data() }

  await deleteDoc(userRef);

  res.json(user).status(200);

  // Print out message for testing purposes
  console.log("User deleted");
}

async function getUser(req: Request, res: Response): Promise<void> {
  const userRef = doc(db, "users", req.body.id);
  const user = (await getDoc(userRef)).data();

  res.json(user);

  // Print out message for testing purposes
  console.log(user);
}

async function updateUser(req: Request, res: Response): Promise<void> {
  const userID = req.body.id;
  const userRef = doc(db, "users", userID)

  const docSnapshot = await getDoc(userRef);
  if (!docSnapshot.exists()) {
    res.status(404).send("User does not exist")
    return;
  }

  await updateDoc(userRef, req.body);
  const updatedUser = docSnapshot.data()
  res.status(200).json(updatedUser)
}

export { getUsers, addUser, deleteUser, getUser, updateUser };
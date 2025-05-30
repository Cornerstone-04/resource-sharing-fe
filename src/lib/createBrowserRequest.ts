// import type { ResourceType, UserData } from "@/types"
// import{ collection, addDoc, serverTimestamp } from "firebase/firestore"
// import { db } from "./firebase"

// export const createBorrowRequest= async (resource: ResourceType, requester: UserData)=>{
//     try{
// const requestData ={
    
// }
//         const requestRef= await addDoc(collection(db, 'borrowRequests'), {
//             resourceId: resource.id,
//       resourceTitle: resource.title,
//       requesterId: requester.uid,
//       requesterName: ${requester.firstName} ${requester.lastName},
//       requesterEmail: requester.studentEmail || requester.email,
//       ownerId: resource.owner,
//       ownerName: "Unknown", // Replace if available
//       message: "I'd like to borrow this book for 7 days.",
//       proposedDuration: 7,
//       status: "pending",
//       requestedAt: serverTimestamp(),
//       createdAt: serverTimestamp(),
//       updatedAt: serverTimestamp()

//         })
//     }
// }
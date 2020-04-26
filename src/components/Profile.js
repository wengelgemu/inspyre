import React, { useState } from 'react';
// Tigerlilly
export default function Profile() {
  const [savedPhotos, setSavedPhotos] = useState([]);
  // Use effect for when you load this component, fetch the photos
  // from Firestore, and put in the savedPhotos state
  return <div>Profile</div>;
}
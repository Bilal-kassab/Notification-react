// src/App.js

import React, { useEffect } from 'react';
import { messaging } from './firebase'; // Adjust path as per your project structure

function App() {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          // Now you can proceed to get the FCM token or send notifications
          getToken();
        } else {
          console.log('Notification permission denied.');
          // Handle the case where the user denied permission
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    };

    const getToken = async () => {
      try {
        const token = await messaging.getToken({ vapidKey: 'BEeQqhGTa4Fb-1lPMfQNQugDlewd8kCJ7UPeEY2ykSIBvIr1gZMIezt87Hph5EIYzmll94ZEBzCDNlouQ1psjRw' }); // Add your VAPID key here
        console.log("FCM Token:", token);
        // Send the token to your backend server here
      } catch (error) {
        console.error("Error getting token:", error);
      }
    };

    requestPermission();
  }, []);

  return (
    <div className="App">
      <h1>FCM Token Retrieval</h1>
      {/* Add any other components you need here */}
    </div>
  );
}

export default App;

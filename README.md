# User Information App

This is a simple *React Native application* that fetches user data from a public API and displays it in a user-friendly interface. The app allows navigation between 80 users using *Next* and *Previous* buttons.

## Features:
- Fetches 80 users from the *Random Data API*.
- Displays user details:
  - *ID*
  - *UID*
  - *Password*
  - *First Name*
  - *Last Name*
  - *Username*
  - *Email*
  - *Avatar (Profile Image)*
- Navigation buttons to switch between users.
- Handles API calls efficiently.

## Technologies Used:
- *React Native*
- *React Navigation*
- *Axios* (for API calls)
- *React Native Paper* (for UI enhancements, optional)

## Installation:
1. *Clone the Repository:*
   bash
   git clone <repository_url>
   cd UserInfoApp
   
2. *Install Dependencies:*
   bash
   npm install
   
3. *Run the App:*
   - *Android:*
     bash
     npx react-native run-android
     
   - *iOS (Mac users):*
     bash
     npx react-native run-ios
     
   - *Using Expo (if applicable):*
     bash
     npx expo start
     

## API Usage:
- The app fetches data from *Random Data API*:
  
  https://random-data-api.com/api/users/random_user?size=80
  
- The size parameter specifies the number of users to fetch.

## Project Structure:

UserInfoApp/
│── screens/
│   ├── UserScreen.js  # Main screen displaying user info
│── App.js             # Navigation setup
│── package.json       # Project dependencies
│── README.md          # Project documentation


## Enhancements:
- Added *loading indicators* while fetching data.
- Implemented *error handling* for failed API requests.
- Designed UI with *React Native Paper* for better aesthetics.

## Submission:
- Submit the *GitHub repository link* with this project.

## Author:
Suggu Venkata Kalyan

---

This markdown provides a clean and structured description of your React Native project. 🚀 Let me know if you need any modifications! 😊

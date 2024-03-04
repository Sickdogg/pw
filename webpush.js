const webpush = require("web-push");

// let x =  webpush.generateVAPIDKeys();
// console.log(x);

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BJPF55xXgi7kpNPjtwwRDLJIMCM6dc4haVL-FYYwui4obFPf5f7_Z8Zr1Zsu1vxAVnIfdKLeVIaoDce5cFQjCAM",
  privateKey: "dpTgQg2pD_kFaKI8kuaz1yX8nx5hj7P0Lo3-nH6mGQE",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dBSLv023_TM:APA91bHmMaFstmw_0bya7clpWGRwK5C1tTgQGGY6sdqla3THIi7iLgrRCtNxj6qoo2u2eFtBH5IVmKkNVXxFcMm6fvunuy-o83o9-yNXoXQ9GqliJItPXRJKL1O77hDH1e5lgh2Ffuag",
  expirationTime: null,
  keys: {
    p256dh:
      "BBUgtWu0aAIjvRAi0ohCl6JFpKwjqOQC7P4Hnua9B0wsXGefh5GdPnV3HwzQhx-70IMQ2kLBb8e6fvXk3woQDpc",
    auth: "q_rv-AovxwEzmAzUjFA5pg",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");

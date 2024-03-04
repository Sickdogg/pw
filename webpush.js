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
    "https://fcm.googleapis.com/fcm/send/fzh4M0bPE2s:APA91bFfk2MSj7WVCxVqFyfPZ24xu59YY_PgAk6loB4UPeVRWvNlvHwCGPtajCRTcREW3ifL0yNeUgqzPSmpM2qg7iVd_iUM_8klJRhOJ0IYLNbSeKZAemwBxfT9IyYzekVlX9AT3EP-",
  expirationTime: null,
  keys: {
    p256dh:
      "BNMJu0EUpGa0HqJUOhqIZTVLUM7ODKqWcmdC0dJGGKPAJCjibepvqT-s2_AXZ-VxHZvBPuLqAkU6KQ5VZfS63RA",
    auth: "lXXrG-Wg1jtAjbhxYiPFOA",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");

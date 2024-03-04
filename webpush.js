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
    "https://fcm.googleapis.com/fcm/send/c1ew00qGeYk:APA91bEyl05ElPTcbfif9ApiksdERhhE6ViahdIq-ex26dKG8lQWIn4E7Z3ibeW4Y1QW1FWmcKNECxvXl-K3rb050uoQDNNayGKWgCGnwMywhnpY1dexKsOC-W_jY-2YS4s4kEGV22M0",
  expirationTime: null,
  keys: {
    p256dh:
      "BNJCno6ODTrlqPVkaVhwft1tLpeEUeZBzOqrtvvmQAEC7mGLUVKrDkYyCBy5tauGXVSSjKupulZH_vmu6w8-PGg",
    auth: "BPElDxL6F0dIs53q4zTFUw",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");

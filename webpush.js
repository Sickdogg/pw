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
    "https://fcm.googleapis.com/fcm/send/cLfc6pfrmY0:APA91bG03mj1SQpTLWkdgJpNyFwwDA-EOtdnYYVbMYUeD4akWfGitRhGmjh-f8I9LEBdOHqCpEiTWXCLDqdgnZ2oPBPHYooKnEzMOZwrcEjoXIiZLydRxTfX840SGk3OSfGsU5na4Brf",
  expirationTime: null,
  keys: {
    p256dh:
      "BKCGwm-Y_srne2LT5w0x5yRG7HeLP9yPLXWr-hWMETwA6if7-7W4-04BDDZRG8H0P79kBcZSZNd9TkGlzslvHoE",
    auth: "sjXJByUz821p6vNgZa-vIQ",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");

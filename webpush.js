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
    "https://wns2-ln2p.notify.windows.com/w/?token=BQYAAADkfTz9gDwoeJ4%2f0ZA2WbgUfdxfURhQnnGRYiCoaM9tVoi5xVAo4hsAXq55jlxBeK4JEwzdKqdxVIS7tZYBp5dLqapJRL41P5jDrFQtAOaf%2fbXWFRz5hQPcYP2b9QRN4U3etCBsZcHODb53tDcNbhuEIkmTA6k6Oj2W46D3BQ%2bx4wtv3EW6HFk8WuK8Sg%2btaXVEeXCAioUAIUTmbaz4rCsVP7VPG%2bhovKjgea2IVA7j15U7XlMcJtwTo26YS%2bX65WQf%2bLQlgpXws4O8E1cccQCLr3fzUXrJBc1qTbTS9Avd9BALgFcX29bDCp7MqiGpbsIZN%2fKHjelC6b39Ug78uB1W",
  expirationTime: null,
  keys: {
    p256dh:
      "BFDtBwFczbV27GJtZLiHlifPv5MRwjwHkBiY75WRjXnQeiU_uRb7t11Fq0Vmn00QXIW9KT5uKQ5g2D6I1kCTx6g",
    auth: "uVjWowi00JahOR4PXIP-7g",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");

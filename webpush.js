const webpush = require('web-push');

// let x =  webpush.generateVAPIDKeys();
// console.log(x);

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BJPF55xXgi7kpNPjtwwRDLJIMCM6dc4haVL-FYYwui4obFPf5f7_Z8Zr1Zsu1vxAVnIfdKLeVIaoDce5cFQjCAM',
  privateKey: 'dpTgQg2pD_kFaKI8kuaz1yX8nx5hj7P0Lo3-nH6mGQE'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');

self.addEventListener("push", (e) => {
  let options = {
    body: "This not was generated from a push !",
    icon: "images/example.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primarykey: "2",
    },
    actions: [
      { action: "example", title: "Explore", icon: "images/checkmark.png" },
      { action: "close", title: "Close", icon: "images/xmark.png" },
    ],
  };
  e.waitUntil(self.registration.showNotification("Hello world!", options));
});

// setInterval(()=>{
//   let options = {
//     body: "This not was generated from a push !",
//     icon: "images/example.png",
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primarykey: "2",
//     },
//     actions: [
//       { action: "example", title: "Explore", icon: "images/checkmark.png" },
//       { action: "close", title: "Close", icon: "images/xmark.png" },
//     ],
//   };
//   e.waitUntil(self.registration.showNotification("Hello!", options));
// },5000)

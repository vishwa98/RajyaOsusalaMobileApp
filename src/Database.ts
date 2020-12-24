export interface Photo {
  filepath: string;
  webviewPath?: string;
}
export interface MessageInt {
  time: string;
  msgs: string;
}
export interface Prescription {
  id: number;
  orderType: string;
  time: string;
  cost: string;
  quoted: boolean;
  deliveryStatus: boolean;
  photo: { filepath: string; webviewPath?: string };
  path: string;
}
export let prescriptions = [
  {
    id: 12546,
    orderType: "Delivery",
    time: "Per Week",
    cost: "Rs 5210.00",
    quoted: true,
    deliveryStatus: true,
    photo: {} as Photo,
    path: "pres2.jpeg",
  },
  {
    id: 45621,
    orderType: "Delivery",
    time: "Per Month",
    cost: "Rs 6210.00",
    quoted: true,
    deliveryStatus: true,
    photo: {} as Photo,
    path: "pres2.jpeg",
  },
  {
    id: 78985,
    orderType: "Pick Up",
    time: "Per Week",
    cost: "Rs 2100.00",
    quoted: true,
    deliveryStatus: false,
    photo: {} as Photo,
    path: "pres1.jpeg",
  },
  {
    id: 63542,
    orderType: "Delivery",
    time: "Per Week",
    cost: "",
    quoted: false,
    deliveryStatus: false,
    photo: {} as Photo,
    path: "pres2.jpeg",
  },
  {
    id: 12786,
    orderType: "Pick Up",
    time: "Per Week",
    cost: "",
    quoted: false,
    deliveryStatus: false,
    photo: {} as Photo,
    path: "pres2.jpeg",
  },
];
//add new message interface
export let Messages = [
  {
    time: "Apr 13",
    msgs: "Hi Team",
  },
  {
    time: "Apr 13",
    msgs: "Hi Team",
  },
  {
    time: "Apr 13",
    msgs: "Hi Team",
  },
  {
    time: "Apr 13",
    msgs: "Hi Team",
  },
  {
    time: "Apr 13",
    msgs: "Hi Team",
  },
];

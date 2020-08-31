declare type Billing = {
  id: Number,
  description: String,
  type: String,
  value: Number,
  refundable: Boolean,
  date: String,
  branch: String,
  image: String,
};

declare type Month = {
  id: Number,
  name: String,
  billings: Billing[],
};

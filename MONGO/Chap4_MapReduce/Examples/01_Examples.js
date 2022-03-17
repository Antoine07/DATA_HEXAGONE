db.createCollection("orders");

db.orders.insertMany([
  { cust_id: "A123", amount: 500, status: "A", range: 11 },
  { cust_id: "A123", amount: 250, status: "A", range: 19 },
  { cust_id: "A123", amount: 200, status: "A", range: 1 },
  { cust_id: "A123", amount: 300, status: "B", range: 10 },
  { cust_id: "B123", amount: 500, status: "A", range: 17 },
  { cust_id: "B123", amount: 250, status: "A", range: 15 },
  { cust_id: "B125", amount: 200, status: "A", range: 19 },
  { cust_id: "B126", amount: 300, status: "B", range: 20 },
]);

db.orders.mapReduce(
  function () {
    emit(this.cust_id, this.amount);
  }, // map

  function (k, v) {
    return Array.sum(v);
  }, // reduce
  {
    query: { status: "A" },
    out: "map_reduce_total",
  }
);

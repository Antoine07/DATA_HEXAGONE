/**
 * 01 Exercice
 *
 * 1. Appliquez une augmenation de 10% pour chaque somme de groupe agrégé en fonction du cust_id, sur les ranges dont le status est A, en utilisant MapReduce
 */

db.orders.drop();

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
    emit(this.cust_id, this.range);
  },
  function (k, v) {
    v = v.map((x) => Math.floor(x * 1.1 * 10) / 10);

    return Array.sum(v);
  },
  {
    query: { status: "A" },
    out: "augmentation_range_custid",
  }
);

db.orders.mapReduce(
    function () {
      emit(this.cust_id, Math.floor(this.range * 1.1 * 10) / 10 );
    },
    function (k, v) {
      return v;
    },
    {
      query: { status: "A" },
      out: "augmentation_range_custid_03",
    }
  );
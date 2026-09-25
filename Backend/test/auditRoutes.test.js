import test from "node:test";
import assert from "node:assert/strict";

process.env.DATABASE_URL =
  "postgresql://staysync:secret@db.example.test:5432/staysync";
process.env.JWT_SECRET = "test-secret-with-at-least-32-characters";

const { default: auditRoutes } = await import("../src/Routes/auditRoutes.js");

test("audit API exposes one read-only collection route", () => {
  const routes = auditRoutes.stack
    .filter((layer) => layer.route)
    .map((layer) => ({
      path: layer.route.path,
      methods: Object.keys(layer.route.methods).sort(),
    }));

  assert.deepEqual(routes, [{ path: "/", methods: ["get"] }]);
});

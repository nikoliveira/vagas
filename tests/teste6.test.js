const { setPermission, checkPermission } = require("../teste6");

describe("teste6.js", () => {
  test("Deve permitir ação quando autorizado", () => {
    setPermission(1, { canDelete: true });

    const middleware = checkPermission("canDelete");
    const req = { query: { id: 1 } };
    const res = {};
    const next = jest.fn();

    middleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test("Deve bloquear ação quando não autorizado", () => {
    setPermission(2, { canDelete: false });

    const middleware = checkPermission("canDelete");
    const req = { query: { id: 2 } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    middleware(req, res, () => {});
    expect(res.status).toHaveBeenCalledWith(403);
  });
});

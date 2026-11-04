import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { organizationAreas, organizationCommittee } from "./organization";

describe("organization hierarchy", () => {
  test("Ethics Committee reports directly to the executive, outside the operational branches", () => {
    assert.equal(organizationCommittee.parentId, "executive");
    assert.equal(organizationAreas.some((area) => area.name === organizationCommittee.name), false);
  });

  test("FIEPE and IEL lawyer is the fifth direct executive branch with its own intern", () => {
    assert.equal(organizationAreas.length, 5);
    const branch = organizationAreas.find((area) => area.id === "fiepe-iel");
    assert.equal(branch?.parentId, "executive");
    assert.equal(branch?.name, "ADVOGADO FIEPE E IEL");
    assert.deepEqual(branch?.roles, [{ title: "ESTAGIÁRIO" }]);
    assert.deepEqual(organizationAreas.map((area) => area.parentId), Array(5).fill("executive"));
  });
});
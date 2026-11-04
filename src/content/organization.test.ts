import { describe, expect, test } from "bun:test";
import { organizationAreas, organizationCommittee } from "./organization";

describe("organization hierarchy", () => {
  test("Ethics Committee reports directly to the executive, outside the operational branches", () => {
    expect(organizationCommittee.parentId).toBe("executive");
    expect(organizationAreas.some((area) => area.name === organizationCommittee.name)).toBe(false);
  });

  test("FIEPE and IEL lawyer is the fifth direct executive branch with its own intern", () => {
    expect(organizationAreas).toHaveLength(5);
    const branch = organizationAreas.find((area) => area.id === "fiepe-iel");
    expect(branch?.parentId).toBe("executive");
    expect(branch?.name).toBe("ADVOGADO FIEPE E IEL");
    expect(branch?.roles).toEqual([{ title: "ESTAGIÁRIO" }]);
    expect(organizationAreas.map((area) => area.parentId)).toEqual(Array(5).fill("executive"));
  });
});
import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { getModule } from "./modules";
import { legalIntegration, legalPracticeId, legalPracticeModules } from "./juridicoAdvogados";

describe("legal-practice journey availability", () => {
  it("has eight modules with only module 01 available", () => {
    assert.equal(legalPracticeModules.length, 8);
    assert.deepEqual(legalPracticeModules.map(m => m.number), [1,2,3,4,5,6,7,8]);
    assert.deepEqual(legalPracticeModules.filter(m => m.status === "available").map(m => m.number), [1]);
    assert.deepEqual(legalPracticeModules.filter(m => m.status === "soon").map(m => m.number), [2,3,4,5,6,7,8]);
  });
  it("registers only published content in the existing navigation and progress", () => {
    const module = getModule(legalPracticeId);
    assert.equal(module?.status, "available");
    assert.deepEqual(module?.sections.map(s => s.id), ["sua-atuacao"]);
  });
  it("models NOJC as operational support without hierarchical or technical approval authority", () => {
    const nojc = legalIntegration.support.find(s => s.id === "nojc");
    assert.equal(nojc?.relationship, "operational-support");
    assert.equal(nojc?.hierarchicalAuthority, false);
    assert.equal(nojc?.technicalApproval, false);
  });
});
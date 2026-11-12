import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { getModule } from "./modules";
import { legalIntegration, legalPracticeId, legalPracticeModules } from "./juridicoAdvogados";
import { legalZeevMonitoring } from "./juridicoFerramentas";

describe("legal-practice journey availability", () => {
  it("has eight modules with only modules 01 and 02 available", () => {
    assert.equal(legalPracticeModules.length, 8);
    assert.deepEqual(legalPracticeModules.map(m => m.number), [1,2,3,4,5,6,7,8]);
    assert.deepEqual(legalPracticeModules.filter(m => m.status === "available").map(m => m.number), [1,2]);
    assert.deepEqual(legalPracticeModules.filter(m => m.status === "soon").map(m => m.number), [3,4,5,6,7,8]);
  });
  it("registers only published content in the existing navigation and progress", () => {
    const module = getModule(legalPracticeId);
    assert.equal(module?.status, "available");
    assert.deepEqual(module?.sections.map(s => s.id), ["sua-atuacao", "ferramentas"]);
  });
  it("does not make unconfirmed Zeev monitoring hours mandatory", () => {
    assert.equal(legalZeevMonitoring.confirmed, false);
    assert.deepEqual(legalZeevMonitoring.mandatoryHours, []);
  });
  it("does not publish an unvalidated duration for the eight planned modules", () => {
    assert.equal(getModule(legalPracticeId)?.duration, "");
  });
  it("models NOJC as operational support without hierarchical or technical approval authority", () => {
    const nojc = legalIntegration.support.find(s => s.id === "nojc");
    assert.equal(nojc?.relationship, "operational-support");
    assert.equal(nojc?.hierarchicalAuthority, false);
    assert.equal(nojc?.technicalApproval, false);
  });
});
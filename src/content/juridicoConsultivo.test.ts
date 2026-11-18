import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { consultiveReturnRules } from "./juridicoConsultivo";

describe("unconfirmed consultive return rules", () => {
  it("does not require same-day handling without confirmation", () => {
    assert.equal(consultiveReturnRules.confirmed, false);
    assert.equal(consultiveReturnRules.sameDayRequired, false);
  });
  it("does not mandate email for replanning without confirmation", () => {
    assert.equal(consultiveReturnRules.mandatoryReplanningChannel, null);
  });
  it("does not mandate Teams for A.N.O. alerts without confirmation", () => {
    assert.equal(consultiveReturnRules.mandatoryAnoAlertChannel, null);
  });
});
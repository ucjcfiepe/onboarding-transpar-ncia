import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { agendaDateColumns, agendaDateExamples } from "./juridicoPrazos";

describe("literal operational agenda examples", () => {
  it("repeats entry in every correction/return cell when there was no correction", () => {
    assert.equal(agendaDateExamples.withoutCorrection.entry, "24/07/2025");
    assert.deepEqual(agendaDateExamples.withoutCorrection.dates.slice(0, 4), ["24/07/2025", "24/07/2025", "24/07/2025", "24/07/2025"]);
  });
  it("records the real conclusion separately from entry", () => {
    assert.equal(agendaDateColumns[4], "Saída definitiva");
    assert.equal(agendaDateExamples.withoutCorrection.dates[4], "29/07/2025");
  });
  it("maps the two corrections and returns to their exact chronological columns", () => {
    assert.deepEqual(Object.fromEntries(agendaDateColumns.map((column, index) => [column, agendaDateExamples.withCorrection.dates[index]])), {
      "1ª saída para correção": "03/08/2026", "1º retorno": "05/08/2026", "2ª saída para correção": "07/08/2026", "2º retorno": "10/08/2026", "Saída definitiva": "12/08/2026",
    });
  });
});
import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { getResourceHref, resourceGroups } from "./resources";

describe("resource access", () => {
  it("keeps all eight resources unavailable until definitive addresses are supplied", () => {
    const resources = resourceGroups.flatMap((group) => group.resources);
    assert.equal(resources.length, 8);
    assert.equal(resources.every((resource) => getResourceHref(resource) === undefined), true);
  });
  it("uses the SharePoint folder directly without an intermediate page", () => {
    const resource = resourceGroups.flatMap((group) => group.resources).find((item) => item.id === "fluxos");
    if (!resource) throw new Error("Missing resource");
    const url = "https://tenant.sharepoint.com/sites/juridico/Shared%20Documents/Fluxos";
    assert.equal(getResourceHref({ ...resource, url }), url);
  });
  it("rejects unsafe or invalid addresses", () => {
    const resource = resourceGroups[0]?.resources[0];
    if (!resource) throw new Error("Missing resource");
    for (const url of ["javascript:alert(1)", "invalid", "http://example.com"]) {
      assert.equal(getResourceHref({ ...resource, url }), undefined);
    }
  });
});
import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { getResourceHref, resourceGroups, type Resource } from "./resources";

const byId = (id: string): Resource => {
  const resource = resourceGroups.flatMap((group) => group.resources).find((item) => item.id === id);
  if (!resource) throw new Error(`Missing resource: ${id}`);
  return resource;
};

describe("resource access", () => {
  it("links all eight resources to the addresses supplied by the team", () => {
    const resources = resourceGroups.flatMap((group) => group.resources);
    assert.equal(resources.length, 8);
    assert.equal(resources.every((resource) => getResourceHref(resource) !== undefined), true);
  });

  it("opens each resource at its exact address", () => {
    const expected: Record<string, string> = {
      zeev: "https://bpms4.sistemafiepe.org.br/my/tasks?",
      robpubli: "https://robpubli.ucjc.workers.dev/",
      "sharepoint-juridico":
        "https://pesenaibr.sharepoint.com/sites/UCJUR/Documentos%20Partilhados/Forms/AllItems.aspx?viewid=7aa7edb6%2D4945%2D4408%2D94e0%2Dd61eb54154e0&newTargetListUrl=%2Fsites%2FUCJUR%2FDocumentos%20Partilhados&viewpath=%2Fsites%2FUCJUR%2FDocumentos%20Partilhados%2FForms%2FAllItems%2Easpx",
      "sharepoint-compliance": "https://pesenaibr.sharepoint.com/sites/uc.compliance/SitePages/Home.aspx",
      normativos:
        "https://pesenaibr.sharepoint.com/sites/RepositriodeDocumentosInternos/Documentos%20Compartilhados/Forms/AllItems.aspx?id=%2Fsites%2FRepositriodeDocumentosInternos%2FDocumentos%20Compartilhados%2FReposit%C3%B3rio%20de%20Documentos%20Internos%2F%C3%81reas%20Compartilhadas%2F%C3%81reas%20Compartilhadas%20%28FIEPE%2C%20IEL%2C%20SENAI%20E%20SESI%29%2FJur%C3%ADdico%20e%20Compliance%2FJur%C3%ADdico%2F01%2E%20NORMATIVOS%20INTERNOS&p=true&ga=1",
      orientacoes: "https://pesenaibr.sharepoint.com/:b:/s/UCJUR/IQBWhQnYly_UQ4rqcbb9hs7vARZ0iW-TwARGwEvorL1J5D4?e=cIsaw5",
      faq: "https://faqjuridico.lovable.app/auth",
      fluxos: "https://pesenaibr.sharepoint.com/:f:/s/UCJUR/IgBMRm15jf3JQ6Mp94piMkpwAdATvw25dsgLoTelHJxMa5s?e=9mGleW",
    };
    for (const [id, url] of Object.entries(expected)) {
      assert.equal(getResourceHref(byId(id)), url);
    }
  });

  it("uses the SharePoint folder directly without an intermediate page", () => {
    const resource = byId("fluxos");
    const url = "https://tenant.sharepoint.com/sites/juridico/Shared%20Documents/Fluxos";
    assert.equal(getResourceHref({ ...resource, url }), url);
  });

  it("rejects unsafe or invalid addresses", () => {
    const resource = byId("zeev");
    for (const url of ["javascript:alert(1)", "invalid", "http://example.com"]) {
      assert.equal(getResourceHref({ ...resource, url }), undefined);
    }
  });
});

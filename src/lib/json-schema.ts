import contentTypeParser from "content-type";
import * as YAML from "yaml";

import { setMetaSchemaOutputFormat } from "@hyperjump/json-schema";
import { addMediaTypePlugin } from "@hyperjump/browser";
import { buildSchemaDocument, BASIC } from "@hyperjump/json-schema/experimental";
import "@hyperjump/json-schema/draft-2020-12";
import "@hyperjump/json-schema/draft-2019-09";
import "@hyperjump/json-schema/draft-07";
import "@hyperjump/json-schema/draft-06";
import "@hyperjump/json-schema/draft-04";
import "@hyperjump/json-schema/openapi-3-1";
import "@hyperjump/json-schema/openapi-3-0";

import type { SchemaObject } from "@hyperjump/json-schema";

setMetaSchemaOutputFormat(BASIC);

addMediaTypePlugin("application/schema+yaml", {
  parse: async (response) => {
    const contentType = contentTypeParser.parse(response.headers.get("content-type") ?? "");
    const contextDialectId = contentType.parameters.schema ?? contentType.parameters.profile;

    const schema = YAML.parse(await response.text()) as SchemaObject;
    return buildSchemaDocument(schema, response.url, contextDialectId);
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  fileMatcher: async (path) => path.endsWith(".schema.yaml")
});

type OpenApi = {
  openapi: string;
  jsonSchemaDialect: string;
};

addMediaTypePlugin("application/openapi+yaml", {
  parse: async (response) => {
    const doc = await response.json() as OpenApi;

    let defaultDialect;
    const contentType = contentTypeParser.parse(response.headers.get("content-type") ?? "");
    const version = doc.openapi ?? contentType.parameters.version;

    if (!version) {
      throw Error("Invalid OpenAPI document. Add the 'openapi' field and try again.");
    } else if (/^3\.1\.\d+(-.+)?$/.test(version)) {
      defaultDialect = "https://spec.openapis.org/oas/3.0/schema";
    } else if (/^3\.0\.\d+(-.+)?$/.test(version)) {
      if (!("jsonSchemaDialect" in doc) || doc.jsonSchemaDialect === "https://spec.openapis.org/oas/3.1/dialect/base") {
        defaultDialect = "https://spec.openapis.org/oas/3.1/schema-base";
      } else if (doc.jsonSchemaDialect === "https://json-schema.org/draft/2020-12/schema") {
        defaultDialect = `https://spec.openapis.org/oas/3.1/schema-draft-2020-12`;
      } else if (doc.jsonSchemaDialect === "https://json-schema.org/draft/2019-09/schema") {
        defaultDialect = `https://spec.openapis.org/oas/3.1/schema-draft-2019-09`;
      } else if (doc.jsonSchemaDialect === "http://json-schema.org/draft-07/schema#") {
        defaultDialect = `https://spec.openapis.org/oas/3.1/schema-draft-07`;
      } else if (doc.jsonSchemaDialect === "http://json-schema.org/draft-06/schema#") {
        defaultDialect = `https://spec.openapis.org/oas/3.1/schema-draft-06`;
      } else if (doc.jsonSchemaDialect === "http://json-schema.org/draft-04/schema#") {
        defaultDialect = `https://spec.openapis.org/oas/3.1/schema-draft-04`;
      } else {
        defaultDialect = `https://spec.openapis.org/oas/3.1/schema?${encodeURIComponent(doc.jsonSchemaDialect)}`;
      }
    } else {
      throw Error(`Encountered unsupported OpenAPI version '${version}' in ${response.url}`);
    }

    return buildSchemaDocument(doc, response.url, defaultDialect);
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  fileMatcher: async (path) => /(\/|\.)openapi\.yaml$/.test(path)
});

export * from "@hyperjump/json-schema";

import { Core, Schema } from "@hyperjump/json-schema-core";
import keywords from "@hyperjump/json-schema/lib/keywords";
import metaSchema from "./meta/draft/2020-XX/schema";
import coreMetaSchema from "./meta/draft/2020-XX/meta/core";
import applicatorMetaSchema from "./meta/draft/2020-XX/meta/applicator";
import validationMetaSchema from "./meta/draft/2020-XX/meta/validation";
import metaDataMetaSchema from "./meta/draft/2020-XX/meta/meta-data";
import formatMetaSchema from "./meta/draft/2020-XX/meta/format";
import contentMetaSchema from "./meta/draft/2020-XX/meta/content";


const schemaVersion = "https://json-schema.org/draft/2020-XX/schema";

Schema.setConfig(schemaVersion, "keywordReference", true);
Schema.setConfig(schemaVersion, "keywordRecursiveReference", true);
Schema.setConfig(schemaVersion, "idToken", "$id");
Schema.setConfig(schemaVersion, "anchorToken", "$anchor");
Schema.setConfig(schemaVersion, "recursiveAnchorType", "string");
Schema.setConfig(schemaVersion, "vocabulary", true);
Schema.setConfig(schemaVersion, "mandatoryVocabularies", ["https://json-schema.org/draft/2020-XX/vocab/core"]);

Schema.add(JSON.parse(metaSchema));

Schema.add(JSON.parse(coreMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/core", {
  "validate": keywords.validate,
  "$comment": keywords.metaData,
  "$defs": keywords.definitions,
  "$recursiveRef": keywords.$recursiveRef,
  "$ref": keywords.$ref
});

Schema.add(JSON.parse(applicatorMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/applicator", {
  "additionalItems": keywords.additionalItems6,
  "additionalProperties": keywords.additionalProperties6,
  "allOf": keywords.allOf,
  "anyOf": keywords.anyOf,
  "contains": keywords.containsMinContainsMaxContains,
  "dependentSchemas": keywords.dependentSchemas,
  "if": keywords.ifThenElse,
  "items": keywords.items,
  "not": keywords.not,
  "oneOf": keywords.oneOf,
  "patternProperties": keywords.patternProperties,
  "properties": keywords.properties,
  "propertyNames": keywords.propertyNames,
  "unevaluatedItems": keywords.unevaluatedItems,
  "unevaluatedProperties": keywords.unevaluatedProperties
});

Schema.add(JSON.parse(validationMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/validation", {
  "const": keywords.const,
  "dependentRequired": keywords.dependentRequired,
  "enum": keywords.enum,
  "exclusiveMaximum": keywords.exclusiveMaximum,
  "exclusiveMinimum": keywords.exclusiveMinimum,
  "maxItems": keywords.maxItems,
  "maxLength": keywords.maxLength6,
  "maxProperties": keywords.maxProperties,
  "maximum": keywords.maximum,
  "minItems": keywords.minItems,
  "minLength": keywords.minLength6,
  "minProperties": keywords.minProperties,
  "minimum": keywords.minimum,
  "multipleOf": keywords.multipleOf,
  "pattern": keywords.pattern,
  "required": keywords.required,
  "type": keywords.type,
  "uniqueItems": keywords.uniqueItems
});

Schema.add(JSON.parse(metaDataMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/meta-data", {
  "default": keywords.metaData,
  "deprecated": keywords.metaData,
  "description": keywords.metaData,
  "examples": keywords.metaData,
  "readOnly": keywords.metaData,
  "title": keywords.metaData,
  "writeOnly": keywords.metaData
});

Schema.add(JSON.parse(formatMetaSchema));

Schema.add(JSON.parse(contentMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/content", {
  "contentEncoding": keywords.metaData,
  "contentMediaType": keywords.metaData,
  "contentSchema": keywords.metaData
});

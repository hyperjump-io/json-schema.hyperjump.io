export default `{
    "$id": "https://json-schema.org/draft/2020-XX/meta/applicator",
    "$schema": "https://json-schema.org/draft/2020-XX/schema",
    "$vocabulary": {
      "https://json-schema.org/draft/2020-XX/vocab/applicator": true
    },
    "$dynamicAnchor": "",

    "title": "Applicator vocabulary meta-schema",
    "properties": {
        "additionalItems": { "$dynamicRef": "#" },
        "unevaluatedItems": { "$dynamicRef": "#" },
        "items": {
            "anyOf": [
                { "$dynamicRef": "#" },
                { "$ref": "#/$defs/schemaArray" }
            ]
        },
        "contains": { "$dynamicRef": "#" },
        "additionalProperties": { "$dynamicRef": "#" },
        "unevaluatedProperties": { "$dynamicRef": "#" },
        "properties": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#" },
            "propertyNames": { "format": "regex" },
            "default": {}
        },
        "dependentSchemas": {
            "type": "object",
            "additionalProperties": {
                "$dynamicRef": "#"
            }
        },
        "propertyNames": { "$dynamicRef": "#" },
        "if": { "$dynamicRef": "#" },
        "then": { "$dynamicRef": "#" },
        "else": { "$dynamicRef": "#" },
        "allOf": { "$ref": "#/$defs/schemaArray" },
        "anyOf": { "$ref": "#/$defs/schemaArray" },
        "oneOf": { "$ref": "#/$defs/schemaArray" },
        "not": { "$dynamicRef": "#" }
    },
    "$defs": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$dynamicRef": "#" }
        }
    }
}`;

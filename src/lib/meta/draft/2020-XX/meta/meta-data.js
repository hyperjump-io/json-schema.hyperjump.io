export default `{
    "$id": "https://json-schema.org/draft/2020-XX/meta/meta-data",
    "$schema": "https://json-schema.org/draft/2020-XX/schema",
    "$vocabulary": {
      "https://json-schema.org/draft/2020-XX/vocab/meta-data": true
    },
    "$dynamicAnchor": "",

    "title": "Meta-data vocabulary meta-schema",

    "type": ["object", "boolean"],
    "properties": {
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "default": true,
        "deprecated": {
            "type": "boolean",
            "default": false
        },
        "readOnly": {
            "type": "boolean",
            "default": false
        },
        "writeOnly": {
            "type": "boolean",
            "default": false
        },
        "examples": {
            "type": "array",
            "items": true
        }
    }
}`;

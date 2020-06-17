export default `{
    "$id": "https://json-schema.org/draft/2020-XX/meta/content",
    "$schema": "https://json-schema.org/draft/2020-XX/schema",
    "$vocabulary": {
      "https://json-schema.org/draft/2020-XX/vocab/content": true
    },
    "$dynamicAnchor": "",

    "title": "Content vocabulary meta-schema",

    "type": ["object", "boolean"],
    "properties": {
        "contentMediaType": { "type": "string" },
        "contentEncoding": { "type": "string" },
        "contentSchema": { "$dynamicRef": "#" }
    }
}`;

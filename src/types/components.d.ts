import type { Schema, Struct } from "@strapi/strapi";

export interface ArrayDocs extends Struct.ComponentSchema {
  collectionName: "components_array_docs";
  info: {
    displayName: "docs";
    icon: "book";
  };
  attributes: {
    content: Schema.Attribute.Blocks["type"];
    title: Schema.Attribute.String["type"];
  };
}

export interface ArrayFeatures extends Struct.ComponentSchema {
  collectionName: "components_array_features";
  info: {
    displayName: "features";
    icon: "dashboard";
  };
  attributes: {
    description: Schema.Attribute.Text["type"];
    name: Schema.Attribute.String["type"];
  };
}

export interface ArrayTags extends Struct.ComponentSchema {
  collectionName: "components_array_tags";
  info: {
    displayName: "tags";
    icon: "archive";
  };
  attributes: {
    name: Schema.Attribute.String["type"];
  };
}

export interface ArrayApiEndpoints extends Struct.ComponentSchema {
  collectionName: "components_array_api_endpoints";
  info: {
    displayName: "API Endpoints";
    icon: "database";
  };
  attributes: {
    method: Schema.Attribute.String["type"];
    params: Schema.Attribute.RichText["type"];
    response: Schema.Attribute.RichText["type"];
    title: Schema.Attribute.String["type"];
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "array.docs": ArrayDocs;
      "array.features": ArrayFeatures;
      "array.tags": ArrayTags;
    }
  }
}

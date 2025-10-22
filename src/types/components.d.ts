/*
 * The app doesn't have any components yet.
 */
import type { Schema, Struct } from "@strapi/strapi";

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

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "array.tags": ArrayTags;
    }
  }
}

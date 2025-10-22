import { ApiServiceService } from "./contentTypes";

declare module "@strapi/types" {
  export interface Shared {
    collections: {
      "api::service.service": ApiServiceService;
    };
  }
}

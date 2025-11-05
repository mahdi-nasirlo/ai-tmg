import { ApiServiceService } from "@/constance/types/contentTypes";
import { GenericService } from "@ibrahimbayer/strapi-http-toolkit";

export class ServiceService {
  static api = new GenericService<ApiServiceService["attributes"]>(
    process.env.NEXT_PUBLIC_API_URL + "/services"
  );

  static Endpoint = {
    GetAll: "/services",
    Get: "/service",
  };

  static async GetAll() {
    return await ServiceService.api.findMany({
      populate: {
        tags: true,
      },
    });
  }

  static async Get(documentId: string) {
    return ServiceService.api.findOne(documentId, {
      populate: {
        tags: true,
        docs: true,
        examples: true,
        features: true,
        api_endpoints: true,
        document: true,
      },
    });
  }
}

import { ApiServiceService } from "@/constance/types/contentTypes";
import { GenericService } from "@ibrahimbayer/strapi-http-toolkit";

export class ServiceService {
  static api = new GenericService<ApiServiceService["attributes"]>(
    process.env.NEXT_PUBLIC_API_URL + "/services"
  );

  static Endpoint = {
    GetAll: "/services",
  };

  static async GetAll() {
    return await ServiceService.api.findMany();
  }
}

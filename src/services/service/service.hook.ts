import { useQuery } from "@tanstack/react-query";
import { ServiceService } from "./service.service";

const useGetAllServices = () =>
  useQuery({
    queryKey: [ServiceService.Endpoint.GetAll],
    queryFn: ServiceService.GetAll,
    select: (d) => d.data,
  });

export { useGetAllServices };

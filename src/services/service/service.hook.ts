import { useQuery } from "@tanstack/react-query";
import { ServiceService } from "./service.service";

const useGetAllServices = () =>
  useQuery({
    queryKey: [ServiceService.Endpoint.GetAll],
    queryFn: ServiceService.GetAll,
    select: (d) => d.data,
  });

const useGetService = (key: string) =>
  useQuery({
    queryKey: [ServiceService.Endpoint.Get],
    queryFn: () => ServiceService.Get(key),
    select: (d) => d.data,
  });

export { useGetAllServices, useGetService };

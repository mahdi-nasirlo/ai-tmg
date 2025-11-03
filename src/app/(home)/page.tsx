import { queryClient } from "@/constance/lib/queryClient";
import { ServiceService } from "@/constance/services/service/service.service";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Client from "./components/client";

export default async function Home() {
  await queryClient.prefetchQuery({
    queryKey: [ServiceService.Endpoint.GetAll],
    queryFn: ServiceService.GetAll,
    staleTime: 0,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Client />
    </HydrationBoundary>
  );
}

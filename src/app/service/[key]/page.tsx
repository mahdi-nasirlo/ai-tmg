import { ServiceService } from "@/constance/services/service/service.service";
import Client from "./components/client";
import { queryClient } from "@/constance/lib/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page({ params }: { params: { key: string } }) {
  const key = (await params).key;

  const service = await ServiceService.Get(key).catch((e) => console.log(e));

  console.log(service);

  await queryClient.prefetchQuery({
    queryKey: [ServiceService.Endpoint.Get],
    queryFn: () => service,
    staleTime: 0,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Client />
    </HydrationBoundary>
  );
}

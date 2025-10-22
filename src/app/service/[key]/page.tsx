import { ServiceService } from "@/constance/services/service/service.service";
import Client from "./components/client";

export default async function Page({ params }: { params: { key: string } }) {
  const service = await ServiceService.Get(params.key);

  console.log(service);

  return <Client data={service.data} />;
}

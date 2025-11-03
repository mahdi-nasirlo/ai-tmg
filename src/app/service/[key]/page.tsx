import { ServiceService } from "@/constance/services/service/service.service";
import Client from "./components/client";

export default async function Page({ params }: { params: { key: string } }) {
  const key = await params.key;

  const service = await ServiceService.Get(key);

  console.log(service);

  return <Client data={service.data} />;
}

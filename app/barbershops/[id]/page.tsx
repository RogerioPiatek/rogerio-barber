import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  //when in server component, needs to use this instead of useSession()
  const session = await getServerSession(authOptions);

  //Ensure we redirect in case of no Id provided
  if (!params.id) {
    //TODO: redirect to home page
    return null;
  }

  // Ensure we query based on the Id received on the URL
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  //TODO: redirect to home page
  if (!barbershop) return null;

  // Component for Info because it needs interactivity
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      {/* Render ServiceItem component based on the number of services (map), passing service as prop */}
      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            isAuthenticated={!!session?.user}
          />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;

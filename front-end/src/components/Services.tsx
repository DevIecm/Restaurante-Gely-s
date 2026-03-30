import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import icon from "@/assets/icono-head.png";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Correo Electrónico",
    description:
      "Escríbenos para pedidos especiales, cotizaciones o cualquier duda: contacto@tupanaderia.com",
    icon: <MailIcon />,
  },
  {
    title: "Teléfono / WhatsApp",
    description:
      "Haz tu pedido rápido o consulta disponibilidad al +52 55 1234 5678. ¡Te atendemos con gusto!",
    icon: <PhoneIcon />,
  },
  {
    title: "Dirección",
    description:
      "Visítanos en Av. Principal #123, Col. Centro. Abierto todos los días de 7:00 am a 9:00 pm.",
    icon: <MapPinIcon />,
  },
];

export const Services = () => {
  return (
    <section id="contacto" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Contactanos
            </span>
          </h2>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={icon}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};

import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function FooterContact() {
  return (
    <div>

      <h3 className="mb-5 text-xl font-bold">
        Contact
      </h3>

      <div className="space-y-5">

        <div className="flex gap-3">

          <MapPin className="text-red-500" />

          <span className="text-gray-400">
            Sargodha, Pakistan
          </span>

        </div>

        <div className="flex gap-3">

          <Mail className="text-emerald-400" />

          <span className="text-gray-400">
            ayaz.dev@gmail.com
          </span>

        </div>

        <div className="flex gap-3">

          <Phone className="text-red-500" />

          <span className="text-gray-400">
            +92 300 1234567
          </span>

        </div>

      </div>

    </div>
  );
}
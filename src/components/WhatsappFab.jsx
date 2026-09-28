import { waLink } from "../data/dealer.js";
import { IconWhatsapp } from "./Icons.jsx";

export default function WhatsappFab() {
  return (
    <a className="fab" href={waLink("Hola, quiero información sobre las motos AKT en Palmira.")} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp">
      <IconWhatsapp width="28" height="28" />
    </a>
  );
}

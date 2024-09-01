// components/WhatsAppIcon.js

import { FaWhatsapp } from "react-icons/fa"; // You can use any icon library of your choice

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsappButton;

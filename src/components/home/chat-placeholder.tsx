import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const ChatPlaceHolder = () => {
  return (
    <div className="w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10">
      <div className="border-conversation-border border-2 sm:w-full w-full md:flex flex-col h-[100vh] border-b-4 hidden border-b-icon-green items-center justify-center  bg-panel-header-background">
        <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />
        <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-300 text-center ">
          <h3 className="poppins-medium">Hi, Welcome to WhatsApp.</h3>
        </div>
      </div>
      <p className="w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1">
        <Lock size={10} /> Your personal messages are end-to-end encrypted
      </p>
    </div>
  );
};
export default ChatPlaceHolder;

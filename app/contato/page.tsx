"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from "react-dom";
import { sendEmail } from "../actions/sendEmail";

import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import { PiCheckCircleDuotone } from "react-icons/pi";
import SubmitButton from "@/components/client/SubmitButton";

const initialState = { success: false, error: "" };

const messageStr =
  "Olá, Caio. Gostaria de saber mais sobre o seu trabalho. Podemos conversar?";
const messageStrEncoded = encodeURIComponent(messageStr);
console.log(messageStr, messageStrEncoded);
const whatsappLink = `https://wa.me/5511956597684?text=${messageStrEncoded}`;

const info = [
  {
    icon: <SiLinkedin />,
    title: "LinkedIn",
    text: "linkedin.com/in/caiolsds",
    link: "https://linkedin.com/in/caiolsds",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "caiolsds@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    text: "+55 (11) 95659-7684",
    link: whatsappLink,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Localização",
    text: "São Paulo, SP",
  },
];

const Contact = () => {
  // @ts-expect-error
  const [state, formAction] = useFormState<any>(sendEmail, initialState);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto p-4 xl:p-0">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[55%] order-2 xl:order-none">
            {state.success ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.2, ease: "easeInOut", duration: 1 },
                }}
                className="p-4 bg-green-500/20 rounded-2xl"
              >
                <div className="text-green-600 text-2xl inline-flex gap-2 items-end justify-center w-full">
                  <p>Mensagem enviada com sucesso.</p>
                  <div className="mb-0.5">
                    <PiCheckCircleDuotone />{" "}
                  </div>
                </div>
              </motion.div>
            ) : (
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                action={formAction}
              >
                <h3 className="text-4xl text-accent">
                  Vamos trabalhar juntos?
                </h3>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="Primeiro Nome"
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Último Nome"
                  />
                </div>
                <Input type="text" name="email" placeholder="Email" />
                <Textarea
                  name="message"
                  placeholder="Sobre o que deseja conversar?"
                  rows={5}
                ></Textarea>

                <div className="flex justify-end">
                  <SubmitButton />
                </div>
                {state.success && (
                  <p className="text-green-500">
                    Mensagem enviada com sucesso!
                  </p>
                )}
                {state.error && <p className="text-red-500">{state.error}</p>}
              </form>
            )}
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]  text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    {item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline text-xl"
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <h3 className="text-xl">{item.text}</h3>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

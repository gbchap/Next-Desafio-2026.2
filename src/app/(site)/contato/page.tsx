import { FaInstagram, FaFacebook, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FormularioContato from "@/components/FormContato";

export default function ContatoPag() {

    const linkStyle = "text-pinkish hover:text-pink-300 transition-colors";
    return (
        <div>
            <section className="bg-[url('/fundoverdeesc.png')] bg-cover bg-center bg-no-repeat bg-fixed pb-24">
                <div className="flex flex-row items-center justify-center py-16 md:py-24">
                    <p className="text-pinkish font-abhaya text-3xl md:text-5xl">Contate-nos</p>
                </div>
                <section className="bg-base rounded-xl mx-4 md:mx-40 mb-12 md:p-2">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                        <section className="bg-forestgreen rounded-xl w-full md:w-[85%] p-6 md:p-12 flex flex-col gap-6">
                            <div>
                                <p className="text-base font-nunito text-2xl md:text-3xl">Informações de Contato</p>
                                <p className="text-base font-nunito mt-4 md:mt-6 mb-6 md:mb-12">
                                    Entre em contato por esses meios ou mande uma mensagem!
                                </p>
                            </div>

                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-4">
                                    <FaPhoneAlt className={linkStyle} size={16}/>
                                    <p className="text-base font-nunito text-sm">+55 4002-8922</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FaEnvelope className={linkStyle} size={16}/>
                                    <p className="text-base font-nunito text-sm">chapterclub@gmail.com</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FaMapMarkerAlt className={`${linkStyle} mt-1 shrink-0`} size={16}/>
                                    <p className="text-base font-nunito text-sm">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                                </li>
                            </ul>

                            <div className="w-full h-64 md:h-64 rounded-xl overflow-hidden mt-4 md:mt-8">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54810.00660142576!2d-43.373137486068195!3d-21.762248147466092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b0d73aabbbb%3A0xb6ffa6ed3a5e43ac!2sIndepend%C3%AAncia%20Shopping!5e1!3m2!1spt-BR!2sbr!4v1786220779002!5m2!1spt-BR!2sbr" 
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                            <ul className="flex justify-center gap-8 md:gap-10 mt-6 mb-2">
                                <li>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className={linkStyle} size={28} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className={linkStyle} size={28} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://Tiktok.com" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className={linkStyle} size={28} />
                                    </a>
                                </li>
                            </ul>
                        </section>
                    
                        <div className="flex w-full justify-center items-center">
                            <FormularioContato />
                        </div>
                        
                    </div>
                </section>
            </section>
        </div>
    );
}
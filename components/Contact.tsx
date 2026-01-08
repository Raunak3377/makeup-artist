
import React, { useState } from 'react';
import { ArtistConfig } from '../types';

interface ContactProps {
  config: ArtistConfig;
}

export const Contact: React.FC<ContactProps> = ({ config }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const isModern = config.personality === 'modern';

  const handleWhatsAppSend = () => {
    const { name, email, message } = formData;
    const waMessage = encodeURIComponent(
      `*New Inquiry from Portfolio*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n\n` +
      `*Details:* ${message}`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${waMessage}`, '_blank');
  };

  return (
    <section id="contact" className={`py-24 px-8 ${isModern ? 'bg-black text-white' : 'bg-[#FDFBF7] text-[#2D2424]'}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h2 className={`${config.theme.fontHeading} text-4xl md:text-6xl mb-8 uppercase tracking-tighter`}>
            Ready for your <br /> <span className="italic opacity-40">Transformation?</span>
          </h2>
          <p className={`${config.theme.fontBody} text-xl mb-12 opacity-80 leading-relaxed`}>
            Secure your date in {config.city}. We are currently accepting bookings for the 2024/25 wedding season.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-5">
               <div className={`p-4 rounded-full ${isModern ? 'bg-fuchsia-600' : 'bg-amber-100 text-amber-900'}`}>
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               </div>
               <div>
                 <p className="text-[10px] uppercase tracking-widest opacity-40">Email</p>
                 <span className="font-sans text-lg">studio@{config.slug.split('-')[0]}.com</span>
               </div>
            </div>
            <div className="flex items-center space-x-5">
               <div className={`p-4 rounded-full ${isModern ? 'bg-cyan-600' : 'bg-amber-100 text-amber-900'}`}>
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               </div>
               <div>
                 <p className="text-[10px] uppercase tracking-widest opacity-40">Base</p>
                 <span className="font-sans text-lg">{config.city}, India</span>
               </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="space-y-6">
            <input 
              type="text" 
              placeholder="FULL NAME" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full p-5 bg-transparent border-b ${isModern ? 'border-zinc-700' : 'border-amber-200'} focus:border-current outline-none uppercase text-[10px] tracking-[0.3em] transition-colors`}
            />
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full p-5 bg-transparent border-b ${isModern ? 'border-zinc-700' : 'border-amber-200'} focus:border-current outline-none uppercase text-[10px] tracking-[0.3em] transition-colors`}
            />
            <textarea 
              rows={4}
              placeholder="YOUR EVENT DETAILS & DATE" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className={`w-full p-5 bg-transparent border-b ${isModern ? 'border-zinc-700' : 'border-amber-200'} focus:border-current outline-none uppercase text-[10px] tracking-[0.3em] transition-colors`}
            ></textarea>
            <button 
              onClick={handleWhatsAppSend}
              className={`w-full py-6 mt-8 ${isModern ? 'bg-white text-black' : 'bg-amber-900 text-white'} text-[10px] uppercase tracking-[0.5em] font-black hover:opacity-80 transition-all flex items-center justify-center space-x-3`}
            >
              <span>Submit Inquiry</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.988 4.48-9.988 9.988 0 1.76.46 3.412 1.264 4.848l-1.288 4.704 4.816-1.264c1.396.76 2.984 1.2 4.672 1.2 5.508 0 9.988-4.48 9.988-9.988s-4.48-9.988-9.988-9.988zm5.556 14.288c-.228.644-1.144 1.188-1.572 1.26-.428.072-1.124.124-2.888-.572-1.76-.696-2.868-2.484-2.956-2.604-.084-.12-1.508-2.008-1.508-3.832 0-1.82.956-2.716 1.3-3.072.34-.356.744-.444.992-.444.248 0 .496.012.716.024.228.012.532-.084.832.632.3.716 1.024 2.508 1.112 2.684.088.176.148.384.028.624-.116.24-.176.384-.356.592-.176.208-.372.464-.532.624-.176.18-.364.376-.156.728.208.356.924 1.524 1.984 2.472 1.368 1.22 2.52 1.6 2.872 1.776.356.176.56.148.772-.096.208-.24.904-1.048 1.144-1.412.24-.356.48-.3.804-.176.328.12 2.08 1.016 2.436 1.196.356.18.596.268.684.424.088.156.088.9-.14 1.544z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

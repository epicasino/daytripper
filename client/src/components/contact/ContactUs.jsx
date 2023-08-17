import ContactCard from './ContactCard';

export default function ContactUs() {
  const contactInfo = [
    {
      name: 'ALISON COLAO',
      gitHub: 'https://github.com/acolao',
      linkedIn: 'https://linkedin.com/in/alisoncolao',
    },
    {
      name: 'CHELSEA PRATTE',
      gitHub: 'https://github.com/callmechelsea',
      linkedIn: 'https://linkedin.com/in/callmechelsea',
    },
    {
      name: 'JOSE PEREZ',
      gitHub: 'https://github.com/joseperez013',
      linkedIn: 'https://www.linkedin.com/in/jose-perez-472444286/',
    },
    {
      name: 'RAY BADUA',
      gitHub: 'https://github.com/epicasino',
      linkedIn: 'https://www.linkedin.com/in/ray-badua/',
    },
  ];

  return (
    <main className="bg-gradient-to-r from-terracotta via-sage to-dirt h-screen font-kawaii text-white">
      <header className="text-center text-4xl p-1">
        Like what you see? Feel free to contact us.
      </header>
      <section className="grid justify-items- grid-cols-2 grid-rows-2">
        {contactInfo.map((contact) => (
          <ContactCard key={contact.name} props={contact} />
        ))}
      </section>
    </main>
  );
}

import { motion } from "framer-motion";
import sgcImage from "../../sponsors/sgc.jpg"; // Adjust path based on location

const sponsors = [
  {
    id: 1,
    name: "The Cheezy Box Cafe",
    image:
      "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739935626/chezybox_bu9imx.jpg",
  },
  { id: 2, name: "Shree Ganesh Construction ", image:sgcImage},
  { id: 3, name: "Company C", image: "/placeholder.svg" },
  { id: 4, name: "Company D", image: "/placeholder.svg" },
  { id: 5, name: "Company E", image: "/placeholder.svg" },
];

export default function SponsorsSection() {
  const handleSponsorClick = () => {
    const email = "gdgcpccoe@gmail.com";
    const subject = "Interest in Becoming a Sponsor for Alphabyte Hackathon";
    const body = `Dear GDG PCCOE Team,

I would like to express my interest in becoming a sponsor for the Alphabyte Hackathon.

Please find my details below:
- Name: 
- Company: 
- Sponsorship Tier Interest: 
- Message: 

I look forward to hearing from you.

Best Regards,
[Your Name]`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-[60%] bg-black text-white py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Sponsors
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
      </motion.h1>

      <div className="relative overflow-hidden py-10 mb-20">
        <div className="marquee">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex space-x-8 mx-8">
              {sponsors.map((sponsor) => (
                <div
                  key={`${sponsor.id}-${index}`}
                  className="inline-flex mx-4 w-[300px] h-[200px] bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-4">
                    <img
                      src={sponsor.image}
                      alt={`${sponsor.name} logo`}
                      className="mb-4 object-contain w-[200px] h-[100px]"
                    />
                    <span className="text-xl font-bold text-neutral-400">
                      {sponsor.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-4 font-mono">
          Interested in Sponsoring?
        </h3>
        <p className="text-neutral-400 mb-8">
          Join us in fostering innovation and supporting the next generation of
          tech leaders
        </p>
        <button
          onClick={handleSponsorClick}
          className="bg-blue-400 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Become a Sponsor
        </button>
      </div>

      <style jsx>{`
        @keyframes marquee-fast {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee {
          display: flex;
          animation: marquee-fast 20s linear infinite;
          width: max-content;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

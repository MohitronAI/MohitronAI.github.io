export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  displayTitle: string;
  title: string;
  subtitle?: string;
  publicationHeading?: string;
  publication: string;
  author: string;
  authorDetail: string;
  seoDescription: string;
  image?: {
    src: string;
    alt: string;
    afterParagraph: number;
  };
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "mind-reading-robots",
    displayTitle: "Mind-Reading Robots",
    title: "Mind-Reading Robots: Bridging Brain and Machine with BCI and AI",
    publication: "COMMUNICA · 2024–25 · College Magazine",
    author: "Mohit Vikas Nagarkar",
    authorDetail: "",
    seoDescription:
      "An article about Brain-Computer Interfaces, artificial intelligence, and mind-reading robots that translate neural activity into purposeful action.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Controlling machines with nothing but your thoughts—once a concept rooted in science fiction—is now a remarkable reality, thanks to advances in Brain-Computer Interface (BCI) technology. BCIs establish a direct line of communication between the human brain and external devices, enabling users to control robots, prosthetics, and digital systems without any physical movement. This extraordinary breakthrough has emerged from the convergence of neuroscience, artificial intelligence (AI), and robotics. At the forefront of this evolution are \"mind-reading robots\"—intelligent systems that decode brain activity and translate it into purposeful action.",
        ],
      },
      {
        heading: "What is a BCI?",
        paragraphs: [
          "A Brain-Computer Interface (BCI) is a system that interprets neural signals from the brain and converts them into commands that can control external devices. Unlike traditional communication pathways, BCIs bypass the body’s muscular system entirely, creating new opportunities for individuals with mobility impairments or neurological conditions. BCIs come in various forms depending on how the brain signals are collected: invasive systems use electrodes implanted directly into the brain for high precision; semi-invasive approaches involve placing electrodes on the brain’s surface; and non-invasive methods, such as EEG (electroencephalography), use scalp electrodes to detect electrical activity with minimal risk and discomfort. Each type offers different trade-offs between safety, signal clarity, and resolution.",
        ],
      },
      {
        heading: "Neurons: The Building Blocks of Thought",
        paragraphs: [
          "To understand how BCIs work, it’s essential to understand the role of neurons—the specialized cells responsible for transmitting information in the brain. Each neuron communicates through a combination of electrical impulses and chemical signals. When a neuron is activated, it generates an action potential, an electrical signal that travels down its axon. At the junction between neurons, called the synapse, neurotransmitters carry the message across to the next neuron, either exciting or inhibiting its activity. These interconnected networks of neurons produce complex patterns of activity that reflect our thoughts, emotions, intentions, and sensory experiences. BCIs aim to detect and interpret these patterns in real time.",
        ],
      },
      {
        heading: "From Brainwaves to Robotic Action",
        paragraphs: [
          "When large groups of neurons fire together, they generate electrical fields that can be measured using various technologies. EEG, one of the most widely used non-invasive methods, places electrodes on the scalp to detect these electrical patterns. Other methods include electrocorticography (ECoG), which places sensors directly on the brain’s surface, and intracortical implants that penetrate brain tissue for even higher-resolution signals. Regardless of the method, the process begins with capturing raw neural data. These signals are then amplified, digitized, and passed through complex algorithms that search for meaningful patterns corresponding to specific thoughts or intentions—like imagining hand movement or focusing attention on a visual target.",
        ],
      },
      {
        heading: "AI: The Mind’s Translator",
        paragraphs: [
          "The true magic of mind-reading robots lies in artificial intelligence. The brain’s electrical signals are highly complex, noisy, and unique to each individual. Traditional software cannot keep up with this variability. This is where machine learning, especially deep learning, plays a vital role. AI systems are trained on labeled neural data, learning to associate particular brain patterns with specific commands or actions. For instance, a neural pattern linked to imagining a left-hand movement might be mapped to a “move left” command in a robotic arm. Over time, the AI refines its accuracy through feedback and additional data, allowing for real-time, personalized control. In essence, AI acts as the brain’s translator, bridging biology and digital logic.",
        ],
      },
      {
        heading: "Brainwaves and Mental States",
        paragraphs: [
          "The electrical activity detected by EEG appears as rhythmic waves, commonly known as brainwaves. These are categorized by their frequency and are linked to different mental states. Delta waves (0.5–4 Hz) dominate during deep, dreamless sleep, while theta waves (4–8 Hz) are present in light sleep or deep meditation. Alpha waves (8–13 Hz) appear during calm, relaxed states and are often used in motor-related BCI applications. Beta waves (12–30 Hz) indicate focused mental activity and alertness, while gamma waves (30–100 Hz) are associated with higher-level cognitive processes such as learning and memory. BCIs often rely on detecting changes in alpha and beta waves to interpret motor intentions and attention shifts.",
        ],
      },
      {
        heading: "The Future of BCI and Mind-Controlled Technology",
        paragraphs: [
          "Powered by AI, BCIs hold the potential to revolutionize healthcare by enabling paralyzed individuals to control wheelchairs, robotic limbs, and communication devices purely through neural signals. For patients with Locked-in Syndrome, BCIs provide essential communication pathways. Advances in prosthetics are making limbs more responsive and lifelike, while thought-controlled exoskeletons offer hope for restoring mobility in spinal injury patients. Beyond clinical applications, BCIs are set to redefine human-computer interaction, facilitating intuitive control of virtual environments, robotics, and complex machinery.",
          "This rapid development also enhances real-time brain monitoring, deepening neuroscience insights. However, the expansion of BCIs raises critical ethical issues—such as safeguarding mental privacy, ensuring data security, and preserving cognitive autonomy—that demand robust frameworks to govern their safe and ethical use.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "The convergence of Brain-Computer Interfaces and artificial intelligence is ushering in a new era where the brain becomes the ultimate user interface. Mind-reading robots are no longer a futuristic fantasy but a real and growing part of modern science and technology. These systems are transforming lives, breaking communication barriers, restoring mobility, and redefining what it means to interact with machines. While challenges remain, the journey from thought to action is becoming faster, more accurate, and more accessible—bringing us closer to a world where thinking alone is enough to make things happen.",
        ],
      },
    ],
  },
  {
    slug: "falling-into-the-cloud",
    displayTitle: "Falling Into the Cloud",
    title: "FALLING INTO THE CLOUD",
    subtitle: "A Journey Through the Invisible Universe We Are Building from Data",
    publicationHeading: "TECHNOLOGY & THE FUTURE",
    publication: "COMMUNICA · 2025–26 · College Magazine",
    author: "Mohit V. Nagarkar",
    authorDetail: "",
    seoDescription:
      "An article exploring the cloud as a physical, evolving network where data from people and machines is stored, connected, interpreted, and used.",
    image: {
      src: "/writing/falling-into-the-cloud.png",
      alt: "Illustration of a person floating through a connected blue data landscape with satellites and servers.",
      afterParagraph: 1,
    },
    sections: [
      {
        paragraphs: [
          "We speak of the cloud as if it were a distant, weightless place where photographs, messages and applications simply disappear. In truth, it is a distributed physical system of servers, storage and networks, spread across the world and made available through software. Yet its larger significance is not architectural. The cloud is becoming an invisible layer of reality: a continuously expanding record of what people and machines see, measure, create and do.",
          "Consider a camera connected to a computer-vision system. A person sees a street, a face or a traffic signal; the system turns the scene into pixels, numerical features and probabilities. It compares those representations with patterns learned from vast datasets, then estimates what it is looking at and what may happen next. Its apparent intelligence does not arise from an algorithm alone. It comes from the meeting of computation with accumulated examples — data made useful for learning and prediction. At the frontier, vision-language research has explored pre-training at scales of up to 100 billion examples, while the field increasingly recognises that diversity, relevance and quality matter as much as sheer volume.",
          "This is why data is no longer only digital memory. A photograph can become training material; a sensor reading can become evidence; a sequence of actions can become a forecast. Individually, such fragments are almost trivial. Connected across time, place and system, they reveal patterns that no single observation could contain. A recommendation engine links a present choice to millions of earlier choices. A vision model relates an unfamiliar image to learned representations. A predictive system searches historical records for combinations that may signal a future event.",
          "Imagine, then, falling into the cloud. From above it might seem calm and empty. Inside, there would be no emptiness: only an immense darkness filled with moving particles — images, sound, coordinates, transactions, measurements, documents and machine-generated records. Each particle would hold a small fact about the physical world. More remarkable still would be their relationships. Data would be copied, transformed, analysed and combined; a measurement would enter a model, a model would influence a decision, and that decision would create a new event and another piece of data. The cloud would not resemble a filing cabinet. It would resemble a living network of connections.",
          "That network grows without pause. Smartphones, streaming platforms, factories, satellites, vehicles and scientific instruments continuously produce signals. Cloud infrastructure makes it possible to distribute the storage and computation needed to handle them, while intelligent systems extract meaning from the flow. The challenge is therefore not simply to keep building larger warehouses of information; it is to organise, protect, interpret and use information responsibly at a scale no human mind can directly see.",
          "We are participants in this process, not spectators. Humans generate data; machines process it; the resulting information shapes human decisions; those decisions create new data. In that loop, the cloud becomes more than a place where files are kept. It is an evolving environment in which information gains context, relationships and computational meaning. If we could fall into it, we might finally see what has remained invisible from the ground: not a collection of files, but a universe assembled from our smallest digital traces.",
          "The cloud is the world we are building from data.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

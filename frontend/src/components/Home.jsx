import React from "react";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="home">
      <nav>
        <button onClick={() => navigate("/signup")} id="homesignup">
          Signup
        </button>
        <h1>Blogs Application</h1>
        <button id="homelogin" onClick={() => navigate("/login")}>
          Login
        </button>
      </nav>
      <div className="b-card">
        <div id="img">
          <img
            src="https://source.unsplash.com/1600x900/?nature,water"
            alt=""
          />
        </div>
        <div className="content">
          <h2>Water Resource and Natural Sources</h2>
          <p>
            Water and nature share a profound and intricate relationship, woven
            together in a symbiotic dance that sustains life on Earth. From the
            majestic mountains to the sprawling oceans, water flows through
            every corner of the natural world, shaping landscapes and nurturing
            ecosystems. Rainfall replenishes the earth, revitalizing flora and
            fauna, while wetlands act as nature's filters, purifying water and
            providing vital habitat. Oceans, covering the majority of the
            planet's surface, regulate climate and support a myriad of life
            forms, including vibrant coral reefs that teem with biodiversity.
            Glaciers, deserts, rivers, and forests each play their part,
            showcasing the diverse manifestations of water's influence on
            nature. Yet, this delicate balance is threatened by human activities
            such as pollution and climate change, underscoring the importance of
            conservation and stewardship. By protecting water and nature, we
            safeguard the very essence of life itself, ensuring a harmonious
            future for generations to come.
          </p>
        </div>
      </div>
      <div className="b-card">
        <div id="img">
          <img
            src="https://images.unsplash.com/photo-1612821394773-23f0a7d33ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcmVzdHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className="content">
          <h2>Forests And Rare Trees</h2>
          <p>
            Forests are vital ecosystems that support a rich diversity of flora
            and fauna, playing a crucial role in maintaining the balance of our
            planet's environment. Within these vast woodlands, one can find an
            array of rare and unique trees that contribute significantly to the
            ecological tapestry. These rare trees often possess distinctive
            characteristics, such as unusual shapes, vibrant foliage, or
            specialized adaptations to their environments. For example, the
            Wollemi pine, discovered in Australia in 1994, is often referred to
            as a "living fossil" due to its ancient lineage dating back millions
            of years. Another notable species is the Giant Sequoia, native to
            California, known for its immense size and longevity, making it one
            of the largest and oldest living organisms on Earth. Additionally,
            the Dragon's Blood Tree found in Socotra, Yemen, is recognized for
            its umbrella-like canopy and crimson sap, which holds cultural
            significance and medicinal properties. These rare trees serve as not
            only botanical wonders but also as important habitats for various
            species, contributing to the overall health and biodiversity of
            forest ecosystems.
          </p>
        </div>
      </div>
      <div className="b-card">
        <div className="content">
          <h2>Cyber Crimes And Security</h2>
          <p>
            Cybercrimes pose a significant threat in today's digital age,
            encompassing a wide range of illicit activities conducted through
            electronic means. These crimes can target individuals, businesses,
            governments, and critical infrastructure, leading to financial
            losses, data breaches, privacy violations, and even national
            security risks. Common forms of cybercrimes include hacking, malware
            attacks, phishing scams, identity theft, ransomware, and
            denial-of-service (DoS) attacks. Effective cybersecurity measures
            are essential to mitigate the risks posed by cybercrimes. This
            involves implementing robust security protocols, utilizing
            encryption techniques, regularly updating software and systems, and
            educating users about safe online practices. Additionally,
            organizations must invest in cybersecurity training for employees,
            establish incident response plans, and conduct regular security
            audits to identify vulnerabilities and address them promptly.
            Collaboration between governments, law enforcement agencies,
            cybersecurity professionals, and the private sector is crucial in
            combating cybercrimes. International cooperation is particularly
            important due to the transnational nature of many cyber threats.
          </p>
        </div>

        <div id="img">
          <img
            src="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3liZXIlMjBjcmltZXN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>

      <div id="w-card">
        <h1>Web Development And AI</h1>
        <div id="img1">
          <img
            src="https://media.istockphoto.com/id/1146417905/photo/young-femal-e-engineer-concept-gui.webp?b=1&s=170667a&w=0&k=20&c=ay7Zn1qA_g8jkhBw5XMkZTzqqTbWhC_pGJ7OuZx3U34="
            alt=""
          />
        </div>

        <div className="content1">
          <p>
            Web development and artificial intelligence (AI) have increasingly
            converged, offering a transformative synergy that reshapes the
            landscape of digital experiences. AI technologies, including machine
            learning and natural language processing, are revolutionizing web
            development by enabling automation, personalization, and enhanced
            user interactions. This integration introduces a plethora of
            possibilities, ranging from intelligent chatbots providing instant
            customer support to recommendation systems delivering tailored
            content based on user preferences and behaviors. AI-driven web
            applications can optimize various aspects of the user experience,
            such as search functionality, content curation, and even website
            performance. Through machine learning algorithms, websites can
            analyze vast amounts of data to understand user patterns, predict
            trends, and continuously refine their offerings. Moreover, AI plays
            a crucial role in cybersecurity by detecting and mitigating
            potential threats, safeguarding sensitive data, and ensuring the
            integrity of web applications. In the realm of web design, AI tools
            empower developers to automate repetitive tasks, streamline
            workflows, and generate responsive layouts that adapt to different
            screen sizes and devices. Natural language processing capabilities
            enable websites to understand and respond to user queries more
            intelligently, enhancing the overall usability and accessibility of
            web interfaces. As AI technology advances, its integration with web
            development continues to evolve, opening up new avenues for
            innovation and creativity. Developers are exploring AI-driven
            solutions for content generation, image recognition, and sentiment
            analysis, among other applications. Furthermore, AI-powered
            analytics provide valuable insights into user behavior, enabling
            businesses to make data-driven decisions and optimize their online
            presence for maximum impact. However, the integration of AI into web
            development also presents challenges, such as data privacy concerns,
            algorithmic bias, and ethical implications. Developers must address
            these issues responsibly, Web development and artificial
            intelligence (AI) are increasingly intersecting, offering exciting
            possibilities for enhancing web applications and user experiences.
            AI technologies such as machine learning and natural language
            processing can be integrated into web development to automate tasks,
            personalize content, improve search functionality, and enhance user
            interactions. For instance, AI-powered chatbots can provide instant
            customer support on websites, while recommendation systems can
            analyze user behavior to suggest relevant products or content.
            Additionally, AI algorithms can optimize website performance,
            predict user preferences, and detect anomalies for security
            purposes. As AI continues to advance, web developers are
            incorporating these technologies into their toolkits to create more
            intelligent, efficient, and adaptive web solutions that meet the
            evolving needs of users and businesses alike.
          </p>
        </div>
      </div>

      <div id="scroller">
        <h1>Blogs Application</h1>
        <h1>Blogs Application</h1>
        <h1>Blogs Application</h1>
        <h1>Blogs Application</h1>
        <h1>Blogs Application</h1>
        <h1>Blogs Application</h1>
        <h1>Blogs Application</h1>
        <h1>Blogs Application</h1>
        <h1>Blogs Application</h1>
        <h1>Blogs Application</h1>
      </div>
    </div>
  );
};

export default Home;

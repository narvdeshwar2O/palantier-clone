const whatOtherSayAbout = [
  {
    company: "WENDY'S QUALITY SUPPLY CHAIN CO-OP",
    quote:
      "Now, we've not only fixed our inventory problem, we've now taken a problem that would go on for weeks and days and fixed it in five minutes, making our people incredibly efficient.",
    author_name: "Pete Suerken",
    author_title: "President & CEO, Wendy's Quality Supply Chain Co-op",
  },
  {
    company: "WALGREENS",
    quote:
      "We started with the goal of piloting 10 stores within about six months. However, leveraging Foundry and AIP, we began to see real promise quickly in composing AI-powered, end-to-end workflows that allowed us to get to about 4000 stores within eight months.",
    author_name: "Jeff Hoffman",
    author_title: "Walgreens, VP, Product Pharmacy",
  },
  {
    company: "AT&T",
    quote:
      "[S.C.O.U.T] began as a joint effort between AT&T and Palantir, and now has over 100 AT&T dedicated engineers and a dedicated support team…for this application. It's just one of the 660 applications we have on Foundry today.",
    author_name: "Dan Wagner",
    author_title: "Dir. of Technology, AT&T",
  },
  {
    company: "PAREXEL",
    quote:
      "We estimate that this solution reduces our time to submission materials by over 50% from the current 10 to 12 week average to around 3 to 4 weeks. We can create this process, manage the process, standardize it...and cut [in] half the time that is required to get there.",
    author_name: "Dan Ballard",
    author_title: "SVP Digital Innovation, Parexel",
  },
  {
    company: "HEINEKEN",
    quote:
      "We had a great chassis of the car. But our engine was underpowered. So we went to Palantir because we want to have the best engine out there...In three months, [the teams] built what took us three years before.",
    author_name: "Laurens van de Rotte",
    author_title: "Chief Operating Officer, Heineken USA",
  },
  {
    company: "WALGREENS",
    quote:
      "We needed to start scaling and building out autonomous orchestration. If we were to rely on humans solely...that would amount to about 384 billion decisions every day. It would be flat out impossible.",
    author_name: "Jeff Hoffman",
    author_title: "Walgreens, VP, Product Pharmacy",
  },
  {
    company: "L3HARRIS",
    quote:
      "I did not want a dashboard to tell me I was in trouble. I know when I'm in trouble. I wanted someone to give me some predictives, and some ways to...get me not only technologically advanced, but decisionally be more agile and and able to maximize cost [savings] and efficiencies.",
    author_name: "Jay Abendroth",
    author_title: "President, Integrated Vision Solutions Sector, L3Harris",
  },
  {
    company: "SOMPO JAPAN",
    quote:
      "So, what was the impact? Over the last three years, we have seen a $60 million improvement in profit. And we expect an additional $100M over the next three years.",
    author_name: "Akiko Murakami",
    author_title: "Sompo, Chief Technology Officer",
  },
  {
    company: "GENERAL MILLS",
    quote:
      "We’re saving on average about $40,000 a day, which is about $14M annually – and it’s really only deployed to part of our network.",
    author_name: "Dave Jackett",
    author_title:
      "General Mills, Sr. Director Supply Chain Digital Transformation",
  },
  {
    company: "AARP",
    quote:
      "Foundry and AIP have been terrific for us. We launched the first prototype within 45 days. And that was just amazing from my perspective.",
    author_name: "Sami Hassanyeh",
    author_title: "AARP, SVP Digital Strategy & Membership",
  },
  {
    company: "LOWE'S",
    quote:
      "In less than four months, we created something from POC all the way to production. Palantir has made us faster and smarter.",
    author_name: "Elaina Wheeldon",
    author_title: "Lowe's, VP Data Products, Applied AI, & Analytics",
  },
  {
    company: "CAZ INVESTMENTS",
    quote:
      "With AIP, we can now process over 100 times more leads with the same amount of resources. This has reduced our lead processing time by over 90%.\n\nThis would not have been possible without AIP.",
    author_name: "James Stuard",
    author_title: "CAZ Investments, VP of Finance",
  },
  {
    company: "PANASONIC ENERGY NORTH AMERICA",
    quote:
      "Ask Atom [powered by Palantir AIP] serves as a vital training tool for our new, and even veteran technicians – cutting that 3-6 month learning curve down to just a few weeks.",
    author_name: "Tara Meisinger",
    author_title: "Panasonic Energy North America, Sr. Maintenance Manager",
  },
  {
    company: "UNITED AIRLINES",
    quote:
      "We deployed Chime late last year…we’ve already saved almost 300 delays, 20 cancellations...this represents millions of dollars of cost avoidance.",
    author_name: "Luis Mesen",
    author_title: "United Airlines, Dir. Of Tech Ops Data Analytics",
  },
  {
    company: "FUJITSU",
    quote:
      "We've combined Foundry's data integration capabilities and Fujitsu's machine learning AI to transform our operations … creating alert systems, demand forecasting, inventory control systems, and so on. This transformation resulted in an impressive annual cost reduction of $9M within just 3 months.",
    author_name: "Kazuki Hiraiso",
    author_title: "Fujitsu, Data Scientist",
  },
  {
    company: "ESI",
    quote:
      "I attended a bootcamp not too long ago...and in 90 minutes, [the team] built an AIP module that was able to read a very poorly made scan...and issue a remarkably good judgment. This has blown our minds.",
    author_name: "Timothy Gotsick",
    author_title: "ESI, Vice President Technology and Innovation",
  },
  {
    company: "PAREXEL",
    quote:
      "On the technology side, we were looking for a partner and an approach to our data strategy, if you will excuse the term, that actually produced s***.",
    author_name: "Jonathan Shough",
    author_title: "Parexel, Chief Information Officer",
  },
  {
    company: "LENNAR",
    quote:
      "It was totally quiet for 14 minutes. People were just in awe. All total hell broke loose, because people completely couldn’t believe what they had seen.",
    author_name: "Scott Spradley",
    author_title: "Lennar, Chief Technology Officer",
  },
  {
    company: "ARCHER AVIATION",
    quote:
      "We’ve been able to build an ontology...and really get this all to come together in a faster time scale than ever been seen for an aircraft certification program of this magnitude.",
    author_name: "Adam Wormoth",
    author_title: "Archer Aviation, Head of Product",
  },
  {
    company: "CUMMINS",
    quote:
      "You’ve got to have the right technology to be able to access [your data] fast...efficiently. That’s the difference with Foundry and building ontologies.",
    author_name: "Jim Jacob",
    author_title:
      "Cummins, VP Executive Director, Digitalization, Advanced Analytics and Artificial Intelligence",
  },
  {
    company: "JACOBS",
    quote:
      "Palantir's frontline mixed reality capabilities...will complement our technology goals of worker enablement and job site safety. No matter what industrial site our teams are at...workers gain access to data and insights in the field where it's most relevant and critical.",
    author_name: "Shannon Miller",
    author_title: "Jacobs, SVP Digital Strategy",
  },
  {
    company: "TAMPA GENERAL HOSPITAL",
    quote:
      "Palantir is going to be front and center for everything that we do…[the platform] is a strategic differentiator for us.",
    author_name: "John Couris",
    author_title: "Tampa General Hospital, CEO",
  },
  {
    company: "NORTHWIND TECHNICAL SERVICES",
    quote:
      "We chose Palantir because their products are absolutely best in the class. We partnered with Palantir because their core values match with Northwind core values. And last, we win with Palantir because this relationship will make us a better competitor.",
    author_name: "Michael Bosworth",
    author_title: "NorthWind Technical Services, Founder & CEO",
  },
  {
    company: "EATON",
    quote:
      "We like to say that we make what matters work. Palantir is helping us focus on what matters.",
    author_name: "Brian Fifarek",
    author_title: "Eaton, Vice President Supply Chain Digitalization",
  },
  {
    company: "HCA HEALTHCARE",
    quote:
      "We have a better-balanced schedule. We have a better complement of competencies every single day. A unique feature of this scheduling system also allows us to balance it out in the future.",
    author_name: "Dr. Michael Schlosser",
    author_title: "HCA Healthcare, SVP Care Transformation and Innovation",
  },
  {
    company: "CINTRA FERROVIAL",
    quote:
      "It is important that in real-time we can send out help right away. So that we can not only make our operations more efficient, but it can save lives.",
    author_name: "Jen Duthie",
    author_title: "Cintra Ferrovial, Head of Innovation",
  },
  {
    company: "CPKC",
    quote:
      "We are building for the future, on a platform that we think is scalable for the future.",
    author_name: "Shailesh Yerram",
    author_title: "CPKC, AVP, Business Intelligence & CISO",
  },
];

export default whatOtherSayAbout;

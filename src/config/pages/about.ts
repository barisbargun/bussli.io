import assets from "../assets";

const teamImages = assets.images.teamAvatars;


/**
 * 
 * PAGE TITLES
 * 
 */
const main = {
  title: "Our story",
  desc: "Get started with Bussli.io - Web development app today and experience the power of our tools!",
  img: {
    src: assets.images.other.team,
    alt: "team-img"
  },
  bottom: {
    title: "We are here to help customers achieve success.",
    descList: [
      "We share trends and strategies to boost your rental income and keep you in high demand.",
      "Get started with Bussli.io - Web development app today and experience the power of our tools! Get started with Bussli.io - Web development app today and experience the power of our tools!"
    ]
  }

}

const coders = {
  title: "High skilled coders from worldwide.",
  desc: "We share trends and strategies to boost your rental income and keep you in high demand.",
  images: assets.images.skilledPeople
}

const team = {
  title: "",
  desc: "",
  members: [
    { img: teamImages[0], name: "Joe Bridges", role: "Founder" },
    { img: teamImages[1], name: "Guy Hawkins", role: "Chief Technology Officer" },
    { img: teamImages[2], name: "Robert Fox", role: "Creative Director" },
    { img: teamImages[3], name: "Jacob Jones", role: "Digital Marketer" },
    { img: teamImages[4], name: "Albert Flores", role: "UX Designer" },
    { img: teamImages[5], name: "Kristin Watson", role: "Lead Programmer" },
    { img: teamImages[6], name: "Joe Bridges", role: "Programmer" },
  ],
  link: {
    title: "Join us",
    to: ""
  }
}



export default { main, coders, team };
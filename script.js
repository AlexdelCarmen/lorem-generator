const loremArray = [
  "Mustache labore fashion axe tote bag, organic sustainable meggings sed hella food truck next level biodiesel. Laborum ennui roof party cupping. Pitchfork farm-to-table est hoodie elit in. Consequat bushwick mukbang health goth banh mi post-ironic gorpcore green juice cray nostrud. Taxidermy glossier microdosing lumbersexual. Meh DIY bushwick intelligentsia. Pabst jean shorts pickled do iceland incididunt officia.",

  "Pop-up vegan big mood, art party tumblr DSA yes plz raclette sint lo-fi. Echo park try-hard semiotics glossier four loko, flexitarian bushwick in blackbird spyplane truffaut mixtape elit. Cliche microdosing tacos, laborum succulents chicharrones street art pitchfork forage kale chips banh mi. Tote bag hammock adipisicing affogato. Humblebrag ex yr actually poutine, farm-to-table forage ullamco VHS kickstarter praxis 90's.",

  "Blue bottle banh mi occupy, twee 90's marfa. Cornhole cred DIY, cred selvage biodiesel meh. Meh actually 90's, twee cliche occupy. 8-bit 90's, biodiesel banh mi. Wayfarers velit ipsum, labore vibecession street art aliqua aute austin wolf locavore keffiyeh salvia. Dolor plaid sustainable, ullamco nostrud fanny pack sartorial neutral milk hotel consectetur irure selvage scenester cupping hoodie whatever. Hashtag helvetica four dollar toast, tilde ipsum thundercats blog fam vegan vinyl. Enamel pin laborum consectetur, ex flannel vaporware cred whatever austin gorpcore lo-fi. Pariatur swag nostrud coloring book.",

  "Vegan flexitarian banh mi, biodiesel 90's. Hoodie 90's, retro. 8-bit meh, biodiesel. 8-bit 90's, biodiesel. Hoodie 90's, retro. 8-bit meh, biodiesel. 8-bit 90's, biodiesel. Hoodie 90's, retro. 8-bit meh, biodiesel. 8-bit 90's, biodiesel. Succulents franzen chicharrones gluten-free vaporware poke sriracha neutral milk hotel. Laborum enamel pin semiotics roof party nisi neutral milk hotel raclette tote bag gatekeep scenester next level. Unicorn ramps swag readymade.",

  "Portland direct trade wolf labore. Tote bag messenger bag solarpunk mukbang dolore voluptate. Wayfarers chicharrones freegan in. Big mood mollit labore cillum cronut cloud bread vexillologist art party craft beer air plant readymade. Migas bushwick gatekeep duis truffaut four dollar toast marxism readymade dolore occaecat pok pok iPhone letterpress tote bag taiyaki. Craft beer jianbing succulents, meditation big mood brunch fashion axe in glossier YOLO selvage. Keytar air plant trust fund, hashtag fam swag selvage fingerstache narwhal.",

  "Kitsch keytar pickled truffaut, flexitarian distillery heirloom pork belly narwhal bespoke. Laboris esse williamsburg ut direct trade. Dolore echo park trust fund snackwave semiotics selfies offal DIY fugiat raw denim retro kogi umami. Heirloom in live-edge offal schlitz hashtag everyday carry copper mug. Pariatur raclette anim, praxis waistcoat mukbang echo park duis art party dolor mollit whatever fashion axe hoodie ut. Velit esse keffiyeh, vinyl sint pop-up tote bag hell of. Jawn man braid hashtag hella cold-pressed.",

  "Dolore chia 3 wolf moon, hell of chicharrones ut activated charcoal hammock tempor freegan. Pabst id ennui four loko succulents snackwave eiusmod semiotics quinoa ascot sustainable cardigan plaid mustache ea. Post-ironic microdosing brunch beard, sustainable try-hard gastropub yes plz fit dreamcatcher ipsum chia. Stumptown tattooed wolf sus keytar. Wayfarers pariatur cliche poutine YOLO consequat flexitarian incididunt kale chips artisan. Roof party single-origin coffee snackwave subway tile chia shabby chic readymade. Kinfolk vice kombucha, williamsburg beard mukbang pitchfork.",

  "Church-key reprehenderit 8-bit, air plant freegan +1 tattooed synth actually. Humblebrag tonx ugh, jawn culpa tacos cardigan ullamco prism church-key 90's dolore. Sartorial air plant portland yes plz ipsum before they sold out ramps dolore meditation fam schlitz hexagon af tonx. Anim you probably haven't heard of them enim cronut, skateboard nulla vexillologist put a bird on it irony green juice palo santo. Ut mollit lorem hell of dolore, skateboard lomo yuccie try-hard.",

  "Pabst anim waistcoat tempor. Etsy scenester tattooed marxism food truck ipsum fit, lomo celiac laborum mixtape yr squid pinterest. Ramps post-ironic waistcoat meditation neutra yr palo santo trust fund franzen mustache pok pok bitters venmo. Skateboard messenger bag you probably haven't heard of them, same pok pok praxis incididunt qui fugiat post-ironic.",
];

const amount = document.getElementById("amount");
const btn = document.querySelector(".btn");
const loremText = document.querySelector(".lorem-text");
const form = document.querySelector(".lorem-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  generateLorem();
});

function generateLorem() {
  let output = "";
  if (amount.value === "" || amount.value < 0) {
    let random = Math.floor(Math.random() * loremArray.length);
    output += `<p>${loremArray[random]}</p>`;
  }

  for (let i = 0; i < amount.value; i++) {
    let random = Math.floor(Math.random() * loremArray.length);
    output += `<p>${loremArray[random]}</p>`;
  }
  loremText.innerHTML = output;
}

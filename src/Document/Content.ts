export const Content = {
  overview: {
    title: 'Customer Journey Modelling Language (CJML)',
    paragraph: [
      'CJML is a formal language for the specification and visualization of customer journeys and service processes. It is centered around humans and human activities, regardless of their role being a customer, user, citizen, consumer, patient, or employee…',
      'Customer journeys are modeled as sequences or constellations of touchpoints for a customer to achieve a specific goal or outcome.',
    ],
  },
  basics: {
    title: 'Swimlane diagram - basic elements',
    image: '/src/image-doc/swimlane.png',
    actor: {
      title: 'Actor',
      paragraph: [
        'Actors are people who played an important role in your customer journey. All the actors involved in the journey have a separate swimlane. An actor could be a customer, user, citizen, consumer, patient, employee, attacker, system.',
      ],
      image: '',
    },
    touchpoint: {
      title: 'Touchpoints',
      action: {
        title: 'Action',
        paragraph: [
          'Actions are non-communicative events or activities conducted by an actor as part of a customer journey.',
          'For example, in a scenario that a customer wants to buy a pizza in the store, then "reading menu and choosing pizza" is the customers action.',
        ],
        image: '/src/image-doc/action.png',
      },
      communication: {
        title: 'Communication Point',
        paragraph: [
          'Communication points are instances of communication or interaction between, for example, a user and a service provider.',
          'Communication points form "the backbone" of a customer journey, and they are associated with: sender, receiver, and communication channel.',
          'For example, a customer `paying for the pizza` is an interaction with the cashier in the pizza store, the cashier `receiving customers payment`. They might not have any conversation but this `payment activity` needs two actors to be done in the in-store pizza purchasing scenario.',
          'A communication point has a sender and a receiver that must be positioned in the corresponding swimlanes of the actors.',
        ],
        image: '/src/image-doc/communication.png',
      },
    },
  },
  risk: {
    title: 'Risk management in CJML',
    threat: {
      title: 'Threat',
      paragraph: ['Everything/activities/events that might lead to an unwanted incident.'],
    },
    incident: {
      title: 'Unwanted incident',
      paragraph: ['Activities/events that harm your assets.'],
    },
    asset: {
      title: 'Asset',
      paragraph: [
        'To determine the Threat and Unwanted incident in customer journey, you have to clarify the asset that you want to protect in your scenario.',
        'An asset is something has value and requires protection.',
      ],
    },
  },
  usage: {
    title: 'Usage of the Tool',
    overview: {
      title: 'Overview',
      paragraph: [
        'CJML diagram generator is a tool for users to make CJML swimlane diagrams by only filling in a simple form.',
      ],
      image: '/public/image-doc/tool-overview.png',
    },
    form: {
      title: 'Form description',
      paragraph: [],
    },
  },
}

export const Examples = {
  pizza: {
    name: 'Pizza ordering scenario',
    background: 'You want to eat pizza.',
    content:
      'You chose a restaurant, made an order and paid for it in the food app. After the restaurant received and confirmed your order by the app, you received a receipt and a confirmation SMS from the restaurant. The restaurant started making your pizza after they received your order. when the pizza was ready, they informed and waited for the delivery person to pick up the pizza. The delivery person picked up the pizza and then delivered it to you.',
    solution: '/src/image-doc/example1.png',
  },
  cinema: {
    name: 'Movie watching scenario',
    background:
      'Background: Sara wanted to watch the new movie, and she needed to use the wheelchair because she broke her legs last week. ',
    content:
      'She opened the cinema website and checked the timetable of the movie. Sara decided to watch the movie scheduled at 8pm. Sara called the cinema and asked them if the cinema is wheelchair accessible. After she got the positive answer, Sara booked and paid for the ticket on the website. After the payment, Sara received an email with the receipt and ticket from website. Sara went to the cinema. In the cinema, the staff checked her ticket and Sara watched the movie.',
    solution: '/src/image-doc/example 2.png',
  },
  phishing: {
    name: 'Threat scenario - phishing attack',
    background:
      'Attacker wants money, and he hacked the pizza restaurant website database by injecting malcode in restaurant’s website and got customers’ information.',
    content:
      'Attacker set up a phishing website which looks like the real pizza restaurant website and sent customers of the pizza restaurant phishing emails with the link to the phishing website that shows they get a promotion from the restaurant. Customer Bob received, clicked the link in the email and login the fake website to get the promotion. Bob placed his order and paid for it in the fake website. Bob waited for his pizza for a long time, so he called the restaurant. However, the restaurant told him they didn’t have any promotions and he was scammed.',
    solution: '/src/image-doc/Threat scenario.png',
  },
}

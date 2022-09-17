import React from 'react'

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
    image: '',
    actor: {
      title: 'Actor',
      paragraph: [
        'Actors are people who played an important role in your customer journey. All the actors involved in the journey have a separate swimlane. An actor could be a customer, user, citizen, consumer, patient, employee, attacker, system',
      ],
      image: '',
    },
    touchpoint: {
      title: 'Touchpoints',
      action: {
        title: 'Action',
        paragraph: [
          'Actions are non-communicative events or activities conducted by an actor as part of a customer journey',
          'For example, in a scenario that a customer wants to buy a pizza in the store, then "reading menu and choosing pizza" is the customers action.',
        ],
        image: '',
      },
      communication: {
        title: 'Communication Point',
        paragraph: [
          'Communication points are instances of communication or interaction between, for example, a user and a service provider',
          'Communication points form "the backbone" of a customer journey, and they are associated with: sender, receiver, and communication channel.',
          'For example, a customer `paying for the pizza` is an interaction with the cashier in the pizza store, the cashier `receiving customers payment`. They might not have any conversation but this `payment activity` needs two actors to be done in the in-store pizza purchasing scenario.',
          'A communication point has a sender and a receiver that must be positioned in the corresponding swimlanes of the actors.',
        ],
        image: '',
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
        'An asset is something has value and requires protection',
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
    },
    form: {
      title: 'Form description',
    },
  },
}

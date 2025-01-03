import { Rule } from "sanity";

export default {
    name: 'contactForm',
    type: 'document',
    title: 'Contact Form',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule:Rule) => Rule.required().min(2).max(50).warning('Name must be between 2 and 50 characters'),
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        validation: (Rule:Rule) =>
          Rule.required()
            .email()
            .error('Please enter a valid email address'),
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message',
        validation: (Rule:Rule) => Rule.optional().min(10).max(500).warning('Message must be between 10 and 500 characters'),
      },
    ],
  };
  
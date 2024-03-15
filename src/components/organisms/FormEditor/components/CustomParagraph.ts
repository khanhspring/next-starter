import Paragraph from '@tiptap/extension-paragraph';

const CustomParagraph = Paragraph.extend({
  draggable: false,
  addAttributes() {
    return {
      color: {
        default: null,
        // Customize the HTML parsing (for example, to load the initial content)
        parseHTML: (element) => element.getAttribute('data-color'),
        // … and customize the HTML rendering.
        renderHTML: (attributes) => {
          return {
            'data-color': attributes.color,
            style: `color: ${attributes.color}`,
          };
        },
      },
    };
  },
});

export default CustomParagraph;

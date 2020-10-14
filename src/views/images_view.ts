import Image from "../models/Image";

const baseUrl = 'https://3333-b0937a17-5a17-42e4-a2a4-409d82f9638f.ws-us02.gitpod.io';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${baseUrl}/uploads/${image.path}`
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};

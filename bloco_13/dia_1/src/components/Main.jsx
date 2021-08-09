import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataImages: [],
      lodingImage: true,
    };

    this.fetcDog = this.fetcDog.bind(this);
  }

  componentDidMount() {
    this.fetcDog();
  }

  async fetcDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    this.setState({ lodingImage: true }, async () => {
      const response = await fetch(url);
      const requestObject = await response.json();
      this.setState({
        dataImages: requestObject.message,
        lodingImage: false,
      });
    });
  }

  render() {
    const { dataImages, lodingImage } = this.state;
    const textLoding = 'LOADING...';
    return (
      <main>
        <div className="boxImage">
          {lodingImage
            ? textLoding
            : <img src={ dataImages } alt="dog" />}
        </div>
        <button
          className="getNewAnimal"
          type="button"
          onClick={ this.fetcDog }
        >
          buscar
        </button>
      </main>
    );
  }
}

export default Main;

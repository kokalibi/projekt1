import Carousel from 'react-bootstrap/Carousel';

function ExampleCarouselImage({ text, src }) {
  const imageSrc =
    src || `https://via.placeholder.com/800x400.png?text=${encodeURIComponent(
      text
    )}`;
  return <img src={imageSrc} className="d-block w-100" alt={text} />;
}

function Slies() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', maxHeight: '400px' }}>
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" src="/easter egg.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" src="/easter egg.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" src="/easter egg.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slies;

import React from "react";
import {Row,Col,Container} from "react-bootstrap";
import Slider from 'react-slick'
import styles from './css/new.module.css'


const News=()=>{

const settings = {
      dots:false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

	return(
		<Container fluid>
		<Row className={styles.news}>
		<Col xs={12} md={12} lg={12} className={styles.newheader}>

           <h3>OUR GALLERY</h3>

		</Col>
		<Col xs={12} md={12} lg={12} className={styles.newcontents}>
          <Slider {...settings} className={styles.slidercomponent}>
          <div className={styles.slidediv}>
           <img src={require('./assets/1.jpg')} alt="Gallery" style={{width:"100%",height:"200px"}}/>
          </div>
          <div className={styles.slidediv}>
            <img src={require('./assets/b.jpg')} alt="Gallery"  style={{width:"100%",height:"200px"}}/>
          </div>
          <div className={styles.slidediv}>

         <img src={require('./assets/c.jpg')} alt="Gallery" style={{width:"100%",height:"200px"}}/>

          </div>
          <div className={styles.slidediv}>

         <img src={require('./assets/draw.jpg')} alt="Gallery"  style={{width:"100%",height:"200px"}}/>

          </div>
          <div className={styles.slidediv}>
         <img src={require('./assets/images.jpg')} alt="Gallery"  style={{width:"100%",height:"200px"}}/>
          </div>
          <div className={styles.slidediv}>

           <img src={require('./assets/inclass.jpg')} alt="Gallery"  style={{width:"100%",height:"200px"}}/>

           </div>
          <div className={styles.slidediv}>
            <img src={require('./assets/b.jpg')} alt="Gallery" style={{width:"100%",height:"200px"}}/>
          </div>
         <div className={styles.slidediv}>
         <img src={require('./assets/c.jpg')} alt="gallery" style={{width:"100%",height:"200px"}}/>
          </div>

        </Slider>

		</Col>

		<Col  xs={12} md={12} lg={12} className={styles.buttonholder}>

		<button>More on Gallery</button>

		</Col>
		</Row>
		</Container>

		);
}

export default News
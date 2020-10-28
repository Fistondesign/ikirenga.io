import React from "react";
import {Row,Col,Container} from "react-bootstrap";
import styles from './css/header.module.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {Slides} from './'

const Header=()=>{

	return(

		<Container fluid>
		<Row className={styles.header}>

	<Slider autoplay={3000}>

	{Slides.map((item, index) => (
		<Col xs={12} md={12} lg={12}
			key={index}
			style={{ background:`url('${item.image}')`,backgroundSize:"contain",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}}
		>
			<div className={styles.center}>
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<button>{item.button}</button>
			</div>
		</Col>
	))}
</Slider>
		</Row>

		<Row className={styles.secondheader}>

		<Col xs={12} md={12} lg={12} className={styles.secondheadercontent}>

              <section>we</section>
              <section>p</section>
              <section>r</section>
              <section>o</section>
              <section>m</section>
              <section>o</section>
              <section>t</section>
              <section>e</section>

		</Col>

		</Row>


		<Row className={styles.third}>
<br/>
	<Col xs={12} md={12} lg={12} className={styles.infoholder}>

<section className={styles.infosection}>
<h1>we live,</h1>
<h1>dream</h1><br/>
<h1>and</h1><br/>
<h1>work to empower arts and culture.</h1>
</section>




		</Col>

		</Row>

		</Container>
		);

}

export default Header
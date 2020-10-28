import React from "react";
import {Row,Col,Container} from "react-bootstrap";
import styles from './css/footer.module.css'
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
import {Link} from 'react-router-dom'


const Footer=()=>{



	return(
    <React.Fragment>
    <Container fluid className={styles.aboutus}>
    <Row className={styles.row}>
    <Col xs={12} md={12} lg={6}  className={styles.mission}>
    <div className={styles.contentholder}>
<section className={styles.header}>
  <h6>MISSION</h6>
</section>

<section className={styles.content}>
<h6>MISSION</h6>
</section>

      </div>
    </Col>

        {/* ===== start of this columns help for arrangement======= */}

        <Col xs={12} md={12} lg={6} className={styles.sideonmission}>

</Col>

{/* =====end of this columns help for arrangement======= */}

    </Row>

    <Row className={styles.row}>
    {/* ===== start of this columns help for arrangement======= */}

    <Col xs={12} md={12} lg={6} className={styles.sideonvision}>

    </Col>

    {/* =====end of this columns help for arrangement======= */}


    <Col xs={12} md={12} lg={6} className={styles.vision}>
    <div className={styles.contentholder}>
<section className={styles.header}>
  <h6>VISION</h6>
</section>

<section className={styles.content}>
<h6>MISSION</h6>
</section>

      </div>
    </Col>
    </Row>

    <Row className={styles.row}>
    <Col xs={12} md={11} lg={6} className={styles.values}>

    <div className={styles.contentholder}>
<section className={styles.header}>
  <h6>VALUES</h6>
</section>

<section className={styles.contentvalues}>
<h6>MISSION</h6>
<h6>MISSION</h6>
<h6>MISSION</h6>
<h6>MISSION</h6>
</section>

      </div>

    </Col>

        {/* ===== start of this columns help for arrangement======= */}

        <Col xs={12} md={12} lg={6} className={styles.sideonvalues}>

</Col>

{/* =====end of this columns help for arrangement======= */}

    </Row>
    <Row style={{marginTop:"8rem"}}>
    <Col xs={12} md={12} lg={12} className={styles.sectiontitle}>
      <p>PARTENERS</p>
    </Col>
    </Row>

    </Container>



		<Container fluid className={styles.footer}>
    <Row>
    <Col xs={12} md={12} lg={12} className={styles.sectiontitle}>
        <p></p>
      </Col>
    </Row>

		<Row className={styles.footerRowI}>
        <Col xs={12} md={12} lg={12} className={styles.footerDivI}>
      <section className="partenerrow">
        <div>
          <img src={require('./assets/partener.jpg')} alt="partenerlogo"/>
        </div>
        <div>
          <img src={require('./assets/partener.png')} alt="partenerlogo"/>
        </div>
        <div>
          <img src={require('./assets/partener.jpg')} alt="partenerlogo"/>
        </div>
        <div>
          <img src={require('./assets/partener.png')} alt="partenerlogo"/>
        </div>
      </section>

      <section className="partenerrow">
      <div>
          <img src={require('./assets/partener.jpg')} alt="partenerlogo"/>
        </div>
        <div>
          <img src={require('./assets/partener.png')} alt="partenerlogo"/>
        </div>
        <div>
          <img src={require('./assets/partener.jpg')} alt="partenerlogo"/>
        </div>
        <div>
          <img src={require('./assets/partener.png')} alt="partenerlogo"/>
        </div>
      </section>

         </Col>

		</Row>

    <Row className={styles.footerRowII}>

    <Col xs={12} md={12} lg={12} className={styles.footerDivIII}>
     <section className={styles.triangle}>
     <img src={require('./assets/triangle.png')} alt="partenerlogo"/>
     <img src={require('./assets/triangle.png')} alt="partenerlogo"/>
     <img src={require('./assets/triangle.png')} alt="partenerlogo"/>
     <img src={require('./assets/triangle.png')} alt="partenerlogo"/>
     </section>

     <section className={styles.socialicon}>

      <Link to="/" className={styles.sociallink}><FaFacebook size={25}/></Link>
      <Link to="/" className={styles.sociallink}><FaInstagram size={25}/></Link>
      <Link to="/" className={styles.sociallink}><FaTwitter size={25}/></Link>

      
     </section>

    </Col>
    </Row>
    
    <Row className={styles.footerRowIV}>
    <Col xs={12} md={12} lg={12} className={styles.footerDivIV}>
    <p>Copyright &copy; Reserved IKIRENGA ACP | Designed By Fistondesign</p>
    </Col>
    </Row>
		</Container>
    </React.Fragment>

		);
}

export default Footer
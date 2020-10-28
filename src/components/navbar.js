import React from "react";
import {Row,Col,Container} from "react-bootstrap";
import styles  from './css/navbar.module.css'
import {Link} from 'react-router-dom'
import {AiTwotoneHome} from'react-icons/ai'
import {FiMenu} from 'react-icons/fi'

const Navbar=()=>
{
	return(

         <Container fluid>
         <Row className={styles.navbar}>
         <Col xs={12} md={12} lg={12} className={styles.column}>
         <section className={styles.logoholder}>
           IKIRENGA_ACP
         </section>

         <section>
         </section>

         <section className={styles.menuholder}>

          <ul className={styles.menu}>

         <li><Link className={styles.link}><span><AiTwotoneHome size={20}/><span>HOME</span></span></Link></li>
         <li><Link className={styles.link}>OUR PROGRAM</Link>

         <div className={styles.dropdowncontent}>
          <ul>

         <li><Link className={styles.link}>Afro Tv</Link></li>
         <li><Link className={styles.link}>Culture Tourism Promotion</Link></li>
         <li><Link className={styles.link}>Entertainment Promotion</Link></li>
         <li><Link className={styles.link}>Arts Promotion</Link></li>
         <li><Link className={styles.link}>Film Making Promotion</Link></li>
         <li><Link className={styles.link}>Training Center</Link></li>

          </ul>
          </div>

         </li>
         <li><Link className={styles.link}>MEDIA</Link>

          <div className={styles.dropdowncontent}>
          <ul>

         <li><Link className={styles.link}>News</Link></li>
         <li><Link className={styles.link}>Photos</Link></li>
         <li><Link className={styles.link}>Videos</Link></li>

          </ul>
          </div>



         </li>
         <li><Link className={styles.link}>PARTNERS</Link></li>
         <li><Link className={styles.link}>CONTACT</Link></li>
         <li><Link className={styles.link}><button>DONATE</button></Link></li>

          </ul>

         </section>
         <section>
         <FiMenu size={30} className={styles.navbutton}/>
         </section>

         </Col>
         </Row>

         </Container>
		
	);

}


export default Navbar